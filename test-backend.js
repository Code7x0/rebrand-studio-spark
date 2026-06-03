import fs from 'fs';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) process.env[match[1]] = match[2].replace(/^"|"$/g, '');
});

async function run() {
  console.log("Testing Email...");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });
    await transporter.verify();
    console.log("Email verify OK");
  } catch (e) {
    console.log("Email Error: " + e.message);
  }

  console.log("Testing Sheets...");
  try {
    const auth = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
    auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:E1"
    });
    console.log("Sheets OK");
  } catch (e) {
    console.log("Sheets Error: " + e.message);
  }
}
run();
