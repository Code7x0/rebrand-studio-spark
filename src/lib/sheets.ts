/**
 * lib/sheets.ts
 * Google Sheets API integration using OAuth 2.0 (refresh token flow).
 *
 * Setup:
 *  1. Go to https://console.cloud.google.com/ → Create a project.
 *  2. Enable "Google Sheets API" under APIs & Services → Library.
 *  3. Go to APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID.
 *     - Application type: Web application
 *     - Authorized redirect URIs: https://developers.google.com/oauthplayground
 *  4. Copy CLIENT_ID and CLIENT_SECRET to .env.local.
 *  5. Go to https://developers.google.com/oauthplayground
 *     - Click ⚙ (settings top-right) → check "Use your own OAuth credentials" → paste CLIENT_ID + CLIENT_SECRET.
 *     - Step 1: Select "Google Sheets API v4" → https://www.googleapis.com/auth/spreadsheets
 *     - Step 2: Click "Authorize APIs" → sign in with your Google account.
 *     - Step 3: Click "Exchange authorization code for tokens".
 *     - Copy the Refresh Token → paste in GOOGLE_REFRESH_TOKEN.
 *  6. Create a Google Sheet and share it (Editor) with your OAuth Google account.
 *     The Sheet ID is in the URL: https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
 *     Paste it in GOOGLE_SHEET_ID.
 *
 * Column layout (auto-created on first row):
 *   A: Timestamp | B: Name | C: Email | D: Company | E: Message
 */

import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// ─── Column header row (written once automatically) ───────────────────────────
const HEADERS = ["Timestamp", "Name", "Email", "Company", "Message"];
const SHEET_RANGE = "Sheet1";
// ─────────────────────────────────────────────────────────────────────────────

function getOAuth2Client() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing Google OAuth credentials. Ensure GOOGLE_CLIENT_ID, " +
        "GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN are set in .env.local."
    );
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });
  return auth;
}

export interface SheetRow {
  timestamp: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Appends a single contact submission row to the Google Sheet.
 * Automatically writes the header row if the sheet is empty.
 */
export async function appendToSheet(row: SheetRow): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is not set in .env.local.");
  }

  const auth = getOAuth2Client();
  const sheets = google.sheets({ version: "v4", auth });

  // Check if the header row already exists
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${SHEET_RANGE}!A1:E1`,
  });

  const existingValues = existing.data.values;
  const hasHeaders =
    existingValues && existingValues.length > 0 && existingValues[0].length > 0;

  if (!hasHeaders) {
    // Write the header row first
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${SHEET_RANGE}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    });
  }

  // Append the data row
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${SHEET_RANGE}!A:E`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          row.timestamp,
          row.name,
          row.email,
          row.company || "",
          row.message,
        ],
      ],
    },
  });
}
