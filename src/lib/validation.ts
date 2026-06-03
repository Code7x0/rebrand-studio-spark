/**
 * lib/validation.ts
 * Shared validation helpers for the contact form.
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  data?: ContactFormData;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(raw: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  // ── Name ──────────────────────────────────────────────────────────────────
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  } else if (name.length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters." });
  } else if (name.length > 100) {
    errors.push({ field: "name", message: "Name must be under 100 characters." });
  }

  // ── Email ─────────────────────────────────────────────────────────────────
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  if (!email) {
    errors.push({ field: "email", message: "Email address is required." });
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  } else if (email.length > 254) {
    errors.push({ field: "email", message: "Email address is too long." });
  }

  // ── Company (optional) ────────────────────────────────────────────────────
  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  if (company.length > 150) {
    errors.push({ field: "company", message: "Company name must be under 150 characters." });
  }

  // ── Message ───────────────────────────────────────────────────────────────
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  if (!message) {
    errors.push({ field: "message", message: "Message is required." });
  } else if (message.length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters." });
  } else if (message.length > 5000) {
    errors.push({ field: "message", message: "Message must be under 5000 characters." });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: { name, email, company, message },
  };
}
