/**
 * lib/contact-server-fn.ts
 * TanStack Start server function — email + Google Sheets.
 */

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CONTACT_EMAIL = "info@laxmiessential.in";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  email: z.string().email("Please enter a valid email address.").max(254),
  company: z.string().max(150).optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters.").max(5000),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export interface SubmitResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
  meta?: { emailSent: boolean; sheetRecorded: boolean };
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const result = ContactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0]?.toString() ?? "unknown";
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      throw Object.assign(new Error("VALIDATION_ERROR"), { fieldErrors });
    }
    return result.data;
  })
  .handler(async ({ data }: { data: ContactInput }) => {
    const { name, email, company, message } = data;

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }) + " IST";

    // Run both in parallel
    const [emailResult, sheetResult] = await Promise.allSettled([
      sendEmail({ name, email, company: company ?? "", message, submittedAt }),
      writeToSheet({ name, email, company: company ?? "", message, submittedAt }),
    ]);

    const emailOk = emailResult.status === "fulfilled";
    const sheetOk = sheetResult.status === "fulfilled";

    // Detailed server-side logging for debugging
    if (!emailOk) {
      const reason = emailResult.status === "rejected" ? emailResult.reason : "unknown";
      console.error("[contact:email] FAILED →", reason instanceof Error ? reason.message : reason);
    }
    if (!sheetOk) {
      const reason = sheetResult.status === "rejected" ? sheetResult.reason : "unknown";
      console.error("[contact:sheets] FAILED →", reason instanceof Error ? reason.message : reason);
    }

    if (emailOk || sheetOk) {
      console.log(`[contact] OK — emailSent=${emailOk} sheetRecorded=${sheetOk}`);
    }

    // Build a user-facing message based on what actually failed
    if (!emailOk && !sheetOk) {
      const emailErr = emailResult.status === "rejected"
        ? (emailResult.reason as Error)?.message ?? "unknown error"
        : "";
      return {
        success: false,
        message: `Submission failed. ${emailErr.includes("GMAIL") || emailErr.includes("Invalid login") || emailErr.includes("auth") ? "Email credentials are invalid — check GMAIL_USER and GMAIL_PASS in .env.local." : "Could not send email or record to Sheets. Check server logs for details."}`,
        meta: { emailSent: false, sheetRecorded: false },
      } as SubmitResult;
    }

    return {
      success: true,
      message: "Thank you! Your message has been received. We'll be in touch within 1–2 business days.",
      meta: { emailSent: emailOk, sheetRecorded: sheetOk },
    } as SubmitResult;
  });

// ─── Email ───────────────────────────────────────────────────────────────────
async function sendEmail(p: {
  name: string; email: string; company: string; message: string; submittedAt: string;
}) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) throw new Error("GMAIL_USER or GMAIL_PASS missing from .env.local");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  // Verify connection before sending
  await transporter.verify();

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const html = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>
<style>
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f8f6f2;margin:0;padding:0}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
  .hdr{background:#1a4731;padding:28px 36px}
  .hdr h1{color:#fff;margin:0;font-size:20px;font-weight:700}
  .hdr p{color:rgba(255,255,255,.7);margin:4px 0 0;font-size:12px}
  .body{padding:28px 36px}
  .fl{margin-bottom:20px}
  .lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8c6b4a;margin-bottom:4px}
  .val{font-size:14px;color:#1a1a1a;line-height:1.6;background:#f8f6f2;border-radius:6px;padding:10px 14px;white-space:pre-wrap}
  .ftr{background:#f8f6f2;padding:16px 36px;border-top:1px solid #e8e4db;font-size:11px;color:#999}
</style></head>
<body><div class="wrap">
  <div class="hdr"><h1>📩 New Contact Inquiry</h1><p>Laxmi Essential Oils — Website Contact Form</p></div>
  <div class="body">
    <div class="fl"><div class="lbl">Name</div><div class="val">${esc(p.name)}</div></div>
    <div class="fl"><div class="lbl">Email</div><div class="val"><a href="mailto:${esc(p.email)}" style="color:#1a4731">${esc(p.email)}</a></div></div>
    <div class="fl"><div class="lbl">Company</div><div class="val">${p.company ? esc(p.company) : '<em style="color:#aaa">Not provided</em>'}</div></div>
    <div class="fl"><div class="lbl">Message</div><div class="val">${esc(p.message)}</div></div>
    <p style="font-size:11px;color:#aaa;margin-top:16px">Submitted: ${p.submittedAt}</p>
  </div>
  <div class="ftr"><p>Auto-sent from the Laxmi Essential Oils website. Reply directly to <strong>${esc(p.email)}</strong></p></div>
</div></body></html>`;

  await transporter.sendMail({
    from: `"Laxmi Essential Oils" <${user}>`,
    to: user,
    replyTo: p.email,
    subject: `New Inquiry from ${p.name}${p.company ? ` (${p.company})` : ""}`,
    html,
    text: `Name: ${p.name}\nEmail: ${p.email}\nCompany: ${p.company || "N/A"}\nMessage:\n${p.message}\n\nSubmitted: ${p.submittedAt}`,
  });
}

// ─── Sheets ──────────────────────────────────────────────────────────────────
async function writeToSheet(row: {
  name: string; email: string; company: string; message: string; submittedAt: string;
}) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientId || !clientSecret || !refreshToken || !sheetId) {
    throw new Error("Missing Google Sheets env vars (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REFRESH_TOKEN / GOOGLE_SHEET_ID)");
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });
  const sheets = google.sheets({ version: "v4", auth });

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1!A1:E1",
  });
  const hasHeaders = !!(existing.data.values?.[0]?.length);

  if (!hasHeaders) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [["Timestamp", "Name", "Email", "Company", "Message"]] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [[row.submittedAt, row.name, row.email, row.company, row.message]] },
  });
}

export { CONTACT_EMAIL };
