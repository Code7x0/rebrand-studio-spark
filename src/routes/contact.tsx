import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { LocationMap } from "@/components/site/LocationMap";
import { MapPin, Phone, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { submitContactForm, type SubmitResult } from "@/lib/contact-server-fn";

import heroBg from "@/assets/contact us.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Laxmi Essential Oils" },
      {
        name: "description",
        content: "Get in touch with Laxmi Essential Oils. We look forward to hearing from you.",
      },
      { property: "og:title", content: "Contact Us — Laxmi Essential Oils" },
    ],
  }),
  component: Contact,
});

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = { name: "", email: "", company: "", message: "" };

// ─── Helpers ─────────────────────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-red-600">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-md bg-black/5 px-4 py-4 text-[15px] text-foreground",
    "placeholder:text-foreground/50 outline-none transition-all",
    hasError
      ? "ring-2 ring-red-400/60 bg-red-50/30"
      : "focus:ring-2 focus:ring-primary/20",
  ].join(" ");
}

// ─── Main Component ──────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isLoading = status === "loading";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear individual field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    // Client-side pre-validation
    if (!form.name.trim() || form.name.trim().length < 2) {
      setFieldErrors((p) => ({ ...p, name: "Name must be at least 2 characters." }));
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRe.test(form.email)) {
      setFieldErrors((p) => ({ ...p, email: "Please enter a valid email address." }));
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setFieldErrors((p) => ({ ...p, message: "Message must be at least 10 characters." }));
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    setServerMessage("");

    try {
      const result: SubmitResult = await submitContactForm({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        },
      });

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
        setServerMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      // Check for structured validation errors from the server fn validator
      const anyErr = err as { fieldErrors?: Record<string, string>; message?: string };
      if (anyErr?.fieldErrors) {
        setFieldErrors(anyErr.fieldErrors);
        setStatus("idle");
      } else {
        setStatus("error");
        setServerMessage(
          anyErr?.message || "Something went wrong. Please try again or email info@laxmiessential.in."
        );
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden bg-background"
        style={{ height: "40vh", minHeight: "350px", maxHeight: "450px" }}
      >
        <img
          src={heroBg}
          alt="Hands holding tree roots"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-10">
          <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[4.5rem]">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-[16px] lg:text-[18px] leading-relaxed text-white/95 font-medium">
            Lets connect and start a conversation. We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">
            Get in Touch with Laxmi Essential Oils
          </h2>
          <p className="mt-6 text-[15px] lg:text-[17px] font-bold leading-relaxed text-foreground/80">
            Fill out the form below or reach out directly through our contact details to learn more
            about products and services.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-5xl grid gap-10 lg:grid-cols-[1.2fr_1fr] items-stretch">

          {/* ── Left: Contact Form ── */}
          <div className="rounded-xl bg-white/70 p-10 shadow-sm h-full border border-white/40 flex flex-col">
            <h3 className="font-serif text-3xl lg:text-[2.5rem] text-primary mb-10 font-bold tracking-tight">
              Send a Direct Message
            </h3>

            {/* Banners */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, height: 0, scale: 0.95, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", scale: 1, marginBottom: 32 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95, marginBottom: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative overflow-hidden flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 px-5 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-green-800">Message Sent!</p>
                    <p className="text-[13px] text-green-700 mt-0.5 pr-6">{serverMessage}</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    type="button"
                    className="absolute top-4 right-4 text-green-600/60 hover:text-green-800 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, height: 0, scale: 0.95, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", scale: 1, marginBottom: 32 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95, marginBottom: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative overflow-hidden flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 px-5 py-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-red-800">Submission Failed</p>
                    <p className="text-[13px] text-red-700 mt-0.5 pr-6">{serverMessage}</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    type="button"
                    className="absolute top-4 right-4 text-red-600/60 hover:text-red-800 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-7 flex-1 flex flex-col">
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[11px] font-bold tracking-widest text-[#8c6b4a] uppercase">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.name}
                    className={inputClass(!!fieldErrors.name)}
                  />
                  <FieldError message={fieldErrors.name} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] font-bold tracking-widest text-[#8c6b4a] uppercase">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="username@gmail.com"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.email}
                    className={inputClass(!!fieldErrors.email)}
                  />
                  <FieldError message={fieldErrors.email} />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="mb-2 block text-[11px] font-bold tracking-wide text-[#8c6b4a]">
                  Company <span className="text-[10px] font-normal opacity-60">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Organic Solutions Ltd."
                  disabled={isLoading}
                  aria-invalid={!!fieldErrors.company}
                  className={inputClass(!!fieldErrors.company)}
                />
                <FieldError message={fieldErrors.company} />
              </div>

              {/* Message */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="mb-2 block text-[11px] font-bold tracking-wide text-[#8c6b4a]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  disabled={isLoading}
                  aria-invalid={!!fieldErrors.message}
                  className={[
                    "w-full flex-1 min-h-[140px] resize-none",
                    inputClass(!!fieldErrors.message),
                  ].join(" ")}
                />
                <FieldError message={fieldErrors.message} />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2.5 rounded-md bg-primary px-8 py-3.5 text-[15px] font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ── Right: Contact Details ── */}
          <div className="flex flex-col gap-6">

            {/* Card 1: Northern Region */}
            <div className="rounded-r-xl rounded-l-none bg-black/5 p-8 border-l-[4px] border-primary">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#8c6b4a] uppercase mb-4">
                Northern Region
              </div>
              <h4 className="text-[19px] font-bold text-primary mb-5">Your Address</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#8c6b4a] fill-[#8c6b4a]" />
                  <span className="text-[14px] font-medium text-foreground/80">Address</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-[18px] w-[18px] shrink-0 text-[#8c6b4a] fill-[#8c6b4a]" />
                  <span className="text-[14px] font-medium text-foreground/80">number</span>
                </div>
              </div>
            </div>

            {/* Card 2: Southern Region */}
            <div className="rounded-r-xl rounded-l-none bg-black/5 p-8 border-l-[4px] border-primary">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#8c6b4a] uppercase mb-4">
                Southern Region
              </div>
              <h4 className="text-[19px] font-bold text-primary mb-5">Address</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#8c6b4a] fill-[#8c6b4a]" />
                  <span className="text-[14px] font-medium text-foreground/80">addresss</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-[18px] w-[18px] shrink-0 text-[#8c6b4a] fill-[#8c6b4a]" />
                  <span className="text-[14px] font-medium text-foreground/80">number</span>
                </div>
              </div>
            </div>

            {/* Card 3: Direct Correspondence */}
            <div className="rounded-xl bg-primary p-8">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase mb-4">
                Direct Correspondence
              </div>
              <h4 className="text-[21px] font-bold text-white mb-3">info@laxmiessential.in</h4>
              <p className="text-[14px] leading-relaxed text-white/80 font-medium">
                For global sourcing partnerships, career opportunities, or technical data sheets.
              </p>
            </div>
          </div>
        </div>

        {/* ── LIVE MAP ── */}
        <div className="mt-16 mx-auto max-w-5xl">
          <LocationMap />
        </div>
      </Section>

      <Footer />
    </div>
  );
}
