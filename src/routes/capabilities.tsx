import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { CircleCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

import heroBg from "@/assets/our capabilites.webp";
import imgAgri1 from "@/assets/Sustainable farming.png";
import imgAgri2 from "@/assets/Indian agricultural land.png";
import imgManufacturing from "@/assets/Img - Industrial manufacturing_margin.png";
import imgTesting from "@/assets/99.webp";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Our Capabilities — Laxmi Essential Oils" },
      {
        name: "description",
        content: "Discover our advanced infrastructure, traceable sourcing, and quality control systems.",
      },
      { property: "og:title", content: "Our Capabilities — Laxmi Essential Oils" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
  }),
  component: Capabilities,
});

function Btn({
  children,
  variant = "primary",
  href = "#",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[15px] font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Capabilities() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative max-lg:flex w-full overflow-hidden bg-black max-lg:min-h-[100svh] max-lg:flex-col max-lg:justify-end max-lg:pb-28"
        style={{ height: "80vh", minHeight: "600px", maxHeight: "900px" }}
      >
        <motion.img
          src={heroBg}
          alt="Precision at Every Stage, From Soil to System"
          className="absolute inset-0 h-full w-full object-cover object-[center_0%] opacity-85 block"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        <div className="relative mx-auto flex w-full h-full min-h-[100svh] lg:min-h-0 max-w-7xl flex-col max-lg:justify-end max-lg:pb-28 lg:justify-center px-6 py-12 lg:px-10 lg:py-16">
          <div className="w-full">
            <motion.h1
              className="max-w-3xl font-serif text-[2.1rem] leading-[1.05] text-white max-lg:max-w-[340px] sm:text-5xl lg:text-[4.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Precision at Every Stage,<br />From Soil to System
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-[15px] lg:text-[18px] leading-relaxed text-white/95 font-medium max-lg:max-w-[360px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              From seed to solution, our infrastructure delivers the quality, consistency, and reliability your formulations demand helping you scale with certainty and meet every market expectation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CULTIVATION AND TRACEABLE SOURCING ── */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full mt-4 lg:mt-0">
            {/* Images overlapping */}
            <div className="absolute left-0 top-0 w-[70%] aspect-square z-10 overflow-hidden rounded-[16px] shadow-sm">
              <img src={imgAgri2} alt="Indian agricultural land" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-[5%] bottom-[5%] w-[65%] aspect-square z-0 overflow-hidden rounded-[16px] shadow-sm">
              <img src={imgAgri1} alt="Sustainable farming" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="pl-0 lg:pl-10">
            <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">
              Cultivation And<br className="hidden lg:block" />Traceable Sourcing
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              Our process begins long before the lab. We maintain direct partnerships with farmers across India, ensuring total transparency from the very first sprout.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 text-[#9d8461]">
                  <CircleCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-foreground">Monitoring & Management</h3>
                  <p className="mt-1 text-[15px] text-foreground/70 font-medium leading-relaxed">
                    Expert guidance on soil health, harvesting schedules, and soil management practices.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 text-[#9d8461]">
                  <CircleCheck className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-foreground">Backward Integration</h3>
                  <p className="mt-1 text-[15px] text-foreground/70 font-medium leading-relaxed">
                    Uncompromised raw materials, delivered through complete vertical control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ADVANCED MANUFACTURING INFRASTRUCTURE ── */}
      <Section className="bg-[#f8f6f2]">
        <div className="text-center mx-auto max-w-4xl mb-16">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">
            Advanced Manufacturing Infrastructure
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          {/* Left Column (Strategic Footprint) */}
          <div className="flex flex-col bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-border/40">
            <h3 className="font-bold text-2xl text-foreground">Strategic Footprint</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-foreground/80 font-medium max-w-md">
              Units strategically located across North and South India to optimize fresh raw material processing and logistics speed. Designed for high-volume flexibility and specialized small-batch refinement.
            </p>
            <div className="mt-10 mt-auto rounded-2xl overflow-hidden w-full h-[240px] bg-background">
              <img src={imgManufacturing} alt="Industrial Manufacturing" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Right Column (2 stacked cards) */}
          <div className="flex flex-col gap-8">
            {/* Core Extraction Technologies */}
            <div className="bg-primary rounded-3xl p-8 lg:p-10 shadow-sm text-white">
              <h3 className="font-bold text-2xl">Core Extraction Technologies</h3>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-[12px] font-bold text-white/50 tracking-wider uppercase mb-1">Method 01</div>
                  <div className="font-semibold text-[15px]">Steam Distillation</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-[12px] font-bold text-white/50 tracking-wider uppercase mb-1">Method 02</div>
                  <div className="font-semibold text-[15px]">Solvent Extraction</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-[12px] font-bold text-white/50 tracking-wider uppercase mb-1">Method 03</div>
                  <div className="font-semibold text-[15px]">Supercritical CO₂</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-[12px] font-bold text-white/50 tracking-wider uppercase mb-1">Method 04</div>
                  <div className="font-semibold text-[15px]">Fractional Distillation</div>
                </div>
              </div>
            </div>
            
            {/* Scalability */}
            <div className="bg-[#f0eee8] rounded-3xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-bold text-2xl text-foreground">Scalability</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground/80 font-medium max-w-sm">
                Optimized for both experimental trial runs and global-scale industrial supply.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── IN-HOUSE QUALITY CONTROL AND TESTING ── */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="pr-0 lg:pr-8">
              <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1]">
                In-House Quality<br />Control And Testing
              </h2>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-primary-foreground/90 font-medium">
                Every drop is a promise kept. Our state-of-the-art laboratories operate with surgical precision, ensuring the integrity of our botanical extracts.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-8 relative">
                {/* Vertical separator line between cols */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -ml-4 hidden sm:block" />
                
                <div>
                  <h3 className="font-bold text-[18px] lg:text-[20px] text-white">Instrumentation</h3>
                  <p className="mt-2 text-[14px] lg:text-[15px] leading-relaxed text-white/75 font-medium">
                    GC-MS and GLC systems for molecular profile verification.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] lg:text-[20px] text-white">Documentation</h3>
                  <p className="mt-2 text-[14px] lg:text-[15px] leading-relaxed text-white/75 font-medium">
                    Comprehensive COAs, MSDS, and technical data sheets provided.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-[32px] rounded-tl-none shadow-xl relative w-full h-[350px] lg:h-[450px]">
              <img
                src={imgTesting}
                alt="Quality Control Testing"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT & COMPLIANCE ── */}
      <Section className="bg-[#f8f6f2]">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Research & Development Support */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-border/40 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl lg:text-[1.75rem] text-foreground">Research & Development Support</h3>
              <p className="mt-6 text-[16px] leading-relaxed text-foreground/80 font-medium">
                We don't just supply ingredients; we co-create them. Our R&D team supports the customization of blends and extract profiles tailored to your sensory or functional needs.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-full border border-border/60 bg-background px-4 py-2 text-[13px] font-bold text-foreground">
                Product Prototyping
              </div>
              <div className="rounded-full border border-border/60 bg-background px-4 py-2 text-[13px] font-bold text-foreground">
                Compliance Doc
              </div>
              <div className="rounded-full border border-border/60 bg-background px-4 py-2 text-[13px] font-bold text-foreground">
                Ingredient Optimization
              </div>
            </div>
          </div>
          
          {/* Global Compliance and Export */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl lg:text-[1.75rem]">Global Compliance and Export</h3>
              <p className="mt-6 text-[16px] leading-relaxed text-white/80 font-medium">
                Serving tier-one markets across Europe, North America, and the Middle East. We manage the full spectrum of international logistics, ensuring every shipment is compliance-ready.
              </p>
            </div>
            
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
                Comprehensive Documentation
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
                MSDS & Testing Reports
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
                Global Supply Chain Management
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">
            Built to Support Your Next Innovation
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Partner with us for ingredient systems supported by robust capabilities, transparent processes, and technical expertise.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Btn variant="primary" href="/contact">
              Download Capability Deck
            </Btn>
            <Btn variant="ghost" href="/contact">
              Speak to a Technical Expert
            </Btn>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
