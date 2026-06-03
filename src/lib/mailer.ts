/**
 * lib/mailer.ts
 * Nodemailer transporter configured with Gmail App Password.
 *
 * Setup:
 *  1. Enable 2-Step Verification on your Google account.
 *  2. Visit https://myaccount.google.com/apppasswords
 *  3. Create an App Password for "Mail" → copy the 16-char code.
 *  4. Set GMAIL_USER=your@gmail.com and GMAIL_PASS=<16-char-app-password>
 */

import nodemailer from "nodemailer";

export function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_PASS environment variables. " +
        "See .env.local for setup instructions."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
}

/**
 * Sends a formatted contact inquiry email to GMAIL_USER.
 */
export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const transporter = createTransporter();
  const recipient = process.env.GMAIL_USER as string;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8f6f2; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .header { background: #1a4731; padding: 32px 40px; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 700; }
        .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; }
        .body { padding: 32px 40px; }
        .field { margin-bottom: 24px; }
        .field-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #8c6b4a; margin-bottom: 4px; }
        .field-value { font-size: 15px; color: #1a1a1a; line-height: 1.6; background: #f8f6f2; border-radius: 8px; padding: 12px 16px; }
        .message-value { white-space: pre-wrap; }
        .footer { background: #f8f6f2; padding: 20px 40px; border-top: 1px solid #e8e4db; }
        .footer p { margin: 0; font-size: 12px; color: #999; }
        .timestamp { font-size: 11px; color: #aaa; margin-top: 8px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>📩 New Contact Inquiry</h1>
          <p>Laxmi Essential Oils — Website Contact Form</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${escapeHtml(payload.name)}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${escapeHtml(payload.email)}" style="color:#1a4731">${escapeHtml(payload.email)}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${payload.company ? escapeHtml(payload.company) : '<em style="color:#aaa">Not provided</em>'}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value message-value">${escapeHtml(payload.message)}</div>
          </div>
          <p class="timestamp">Submitted: ${payload.submittedAt}</p>
        </div>
        <div class="footer">
          <p>This email was sent automatically from the Laxmi Essential Oils website contact form.</p>
          <p style="margin-top:6px">Reply directly to <strong>${escapeHtml(payload.email)}</strong> to respond to this inquiry.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Laxmi Essential Oils Website" <${recipient}>`,
    to: recipient,
    replyTo: payload.email,
    subject: `New Inquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
    html,
    text: [
      `New Contact Inquiry — Laxmi Essential Oils`,
      ``,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Message:\n${payload.message}`,
      ``,
      `Submitted: ${payload.submittedAt}`,
    ].join("\n"),
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
