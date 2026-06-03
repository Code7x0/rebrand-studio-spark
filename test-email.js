import fs from 'fs';
import nodemailer from 'nodemailer';

const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) process.env[match[1]] = match[2].replace(/^"|"$/g, '').trim();
});

async function run() {
  console.log("Testing Email with user: " + process.env.GMAIL_USER);
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
}
run();
