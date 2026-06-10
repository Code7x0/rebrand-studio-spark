import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import {
  Droplet,
  Wind,
  Flower2,
  Sparkles,
  Pill,
  Coffee
} from "lucide-react";

import heroBg from "@/assets/what we offer.webp";
import brochurePdf from "@/assets/brochure.pdf";
import imgEssentialOils from "@/assets/Container.webp";
import imgBotanicalExtracts from "@/assets/Container (1).webp";
import imgCustom1 from "@/assets/offer-custom-1.png";
import imgCustom2 from "@/assets/offer-custom-2.png";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "What We Offer — Laxmi Essential Oils" },
      {
        name: "description",
        content: "Explore our premium essential oils, botanical extracts, and custom formulation services.",
      },
      { property: "og:title", content: "What We Offer — Laxmi Essential Oils" },
    ],
  }),
  component: Offer,
});

function Btn({
  children,
  variant = "primary",
  href = "#",
  target,
  download,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  target?: string;
  download?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[14px] font-bold transition-colors max-lg:w-full max-lg:py-4 max-lg:text-[15px]";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a href={href} target={target} download={download} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
};

function Offer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ──
          Mobile: full viewport, content bottom-pinned
          Desktop: 65vh with existing constraints
      */}
      <section
        className="relative max-lg:flex w-full overflow-hidden bg-background max-lg:min-h-[100svh] max-lg:flex-col max-lg:justify-end max-lg:pb-28"
        style={{ height: "80vh", minHeight: "600px", maxHeight: "900px" }}
      >
        <motion.img
          src={heroBg}
          alt="Ingredients that Move Beyond Commodities"
          className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply opacity-90"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex w-full h-full min-h-[100svh] lg:min-h-0 max-w-7xl flex-col max-lg:justify-end max-lg:pb-28 lg:justify-center px-6 py-12 lg:px-10 lg:py-16">
          <motion.p
            className="lg:hidden mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Products
          </motion.p>

          <motion.h1
            className="max-w-2xl font-serif text-[2.1rem] leading-[1.05] text-white max-lg:max-w-[320px] sm:text-5xl lg:text-[4.5rem] lg:leading-[1.15]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ingredients that Move<br />Beyond Commodities
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-[15px] lg:text-[18px] leading-relaxed text-white/90 font-medium max-lg:max-w-[360px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We deliver ingredient systems that remove complexities, ensure product consistency, and help your brand stay agile making us the dependable partner you need in a fast-changing market.
          </motion.p>
        </div>
      </section>

      {/* ── ESSENTIAL OILS ──
          Mobile: image full-bleed first, then text
          Desktop: text left, image right
      */}
      <Section className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="max-lg:order-2">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3rem] text-foreground">
                Essential Oils
              </h2>
              <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                Steam-distilled essential oils from traceable Indian farming networks. We offer both conventional and specialty oils tailored for aromatherapy, fine fragrance, and premium personal care applications.
              </p>
              <ul className="mt-7 space-y-4 text-[16px] lg:text-[18px] font-medium text-foreground/90">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  100% Traceable Farming
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  Therapeutic Grade Quality
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  Sustainable Sourcing
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden max-lg:order-1 max-lg:aspect-[4/3] group"
            {...fadeUp}
          >
            <img
              src={imgEssentialOils}
              alt="Essential Oils"
              className="h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </Section>

      {/* ── BOTANICAL EXTRACTS ──
          Mobile: image full-bleed first (not reversed), then text
          Desktop: image left, text right (order-1/order-2)
      */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="overflow-hidden relative max-lg:aspect-[4/3] lg:order-1 group"
            {...fadeUp}
          >
            <img
              src={imgBotanicalExtracts}
              alt="Botanical Extracts Equipment"
              className="h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <div className="lg:order-2">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3rem] text-foreground">
                Botanical Extracts
              </h2>
              <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                Advanced solvent and CO₂ extraction methods. We prioritize active retention, clean profiles, and seamless formulation compatibility for the nutraceutical, pharmaceutical, and functional food sectors.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[140px] rounded-xl bg-white/80 px-5 py-4 shadow-md border border-white backdrop-blur-sm text-center">
                  <div className="font-bold text-[16px] lg:text-[18px] text-foreground">CO₂ Extraction</div>
                  <div className="mt-1 text-[13px] text-foreground/60 font-medium">Pure, solvent-free</div>
                </div>
                <div className="flex-1 min-w-[140px] rounded-xl bg-white/80 px-5 py-4 shadow-md border border-white backdrop-blur-sm text-center">
                  <div className="font-bold text-[16px] lg:text-[18px] text-foreground">Clean Profiles</div>
                  <div className="mt-1 text-[13px] text-foreground/60 font-medium">Optimal active yield</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── CUSTOM FORMULATIONS AND BLENDS ──
          Mobile: single hero image (imgCustom2), then text
          Desktop: overlapping image composition
      */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="pr-0 lg:pr-8">
              <motion.div {...fadeUp}>
                <h2 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl lg:text-[3.5rem]">
                  Custom Formulations<br />And Blends
                </h2>
                <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-primary-foreground/90 font-medium">
                  Co-creating custom oil blends, extracts, and
                  intermediates with client formulation teams. We
                  support the development of unique SKUs, improved
                  performance profiles, and IP-based proprietary
                  product lines.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-lg bg-white/10 px-4 py-2.5 text-[14px] font-bold tracking-wide">
                    Unique SKUs
                  </div>
                  <div className="rounded-lg bg-white/10 px-4 py-2.5 text-[14px] font-bold tracking-wide">
                    IP Protection
                  </div>
                  <div className="rounded-lg bg-white/10 px-4 py-2.5 text-[14px] font-bold tracking-wide">
                    Intermediates
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile: single full-width image */}
            <motion.div
              className="lg:hidden mt-8 aspect-[4/3] overflow-hidden"
              {...fadeUp}
            >
              <img src={imgCustom2} alt="Scientists in Lab" className="w-full h-full object-cover" />
            </motion.div>

            {/* Desktop: overlapping images composition */}
            <div className="hidden lg:block relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0 group">
              <div className="absolute left-0 top-0 w-[60%] aspect-square z-0 overflow-hidden">
                <img src={imgCustom1} alt="Custom Oil Blend" className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute right-0 bottom-[10%] w-[60%] aspect-square z-10 shadow-2xl overflow-hidden">
                <img src={imgCustom2} alt="Scientists in Lab" className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INGREDIENT SUPPORT SYSTEMS ── */}
      <Section className="bg-background">
        <motion.div className="text-center mx-auto max-w-3xl" {...fadeUp}>
          <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3rem] text-foreground">
            Ingredient Support Systems
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Moving beyond the physical product to provide the technical backbone for your supply chain.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-14 grid gap-5 lg:gap-8 md:grid-cols-3">
          {[
            {
              title: "Technical Documentation",
              body: "Comprehensive dossiers including MSDS, COA, regulatory filings, and detailed specifications for global compliance.",
            },
            {
              title: "Batch Traceability",
              body: "Full documentation from procurement to manufacturing to every stage of the process.",
            },
            {
              title: "Testing Data",
              body: "Rigorous GC-MS analysis and purity certificates for every batch we produce.",
            },
          ].map(({ title, body }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl bg-[#f8f6f2] p-8 lg:p-10 shadow-sm border border-border/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 cursor-default hover:border-black/5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <h3 className="font-bold text-[18px] lg:text-[20px] text-foreground mb-4">{title}</h3>
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/75 font-medium">{body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── INDUSTRIES WE SUPPORT ── */}
      <Section className="bg-[#f8f6f2]">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="pr-4">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3rem] text-foreground">
                Industries We Support
              </h2>
              <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                Our high-quality extracts and oils are engineered to meet the specific demands of diverse global sectors.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8"
            {...fadeUp}
          >
            {[
              { icon: Droplet, text: "Essential Oils & Aromatherapy" },
              { icon: Wind, text: "Air Care Products" },
              { icon: Flower2, text: "Flavours & Fragrances" },
              { icon: Sparkles, text: "Cosmetics & Personal Care" },
              { icon: Pill, text: "Pharmaceuticals & Nutraceuticals" },
              { icon: Coffee, text: "Functional Food & Beverage" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#9d8461]">
                  <item.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <span className="text-[16px] lg:text-[18px] font-bold text-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <motion.div className="flex flex-col items-center text-center mx-auto max-w-3xl" {...fadeUp}>
          <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3.5rem] text-foreground">
            Ready to Simplify Your Ingredient Sourcing?
          </h2>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Explore how our oils, extracts, and custom solutions can elevate your formulations and supply chains.
          </p>
          <div className="mt-10 flex max-lg:flex-col w-full max-lg:max-w-sm flex-wrap justify-center gap-4 lg:gap-5">
            <Btn
              variant="primary"
              href={brochurePdf}
              target="_blank"
              download="Laxmi-Essential-Oils-Brochure.pdf"
            >
              Download Product Brochure
            </Btn>
            <Btn variant="ghost" href="/contact">
              Contact Our Sales Team
            </Btn>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
