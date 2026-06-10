import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import worldMap from "@/assets/world-map.png";
import iconTraceableSourcing from "@/assets/icon-traceable-sourcing.png";
import iconReliableManufacturing from "@/assets/icon-reliable-manufacturing.png";
import iconOptimumPricing from "@/assets/icon-optimum-pricing.png";
import gearIcon from "@/assets/gear-icon.png";
import offerEssentialOils from "@/assets/offer-essential-oils.png";
import offerBotanicalExtracts from "@/assets/offer-botanical-extracts.png";
import offerCustomSolutions from "@/assets/offer-custom-solutions.png";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import heroImg from "@/assets/hero.webp";
import brochurePdf from "@/assets/brochure.pdf";
import whoImg from "@/assets/who-we-are.webp";
import gcmsImg from "@/assets/gcms.webp";
import industriesImg from "@/assets/industries.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laxmi Essential Oils — India's Leading High-Grade Essential Oils Supplier" },
      {
        name: "description",
        content:
          "For over three generations, Laxmi Essential Oils has supplied steam-distilled essential oils and botanical extracts with traceability, consistency, and care.",
      },
      { property: "og:title", content: "Laxmi Essential Oils" },
      {
        property: "og:description",
        content:
          "India's leading high-grade essential oils and botanical extracts supplier.",
      },
    ],
  }),
  component: Home,
});


function Btn({
  children,
  variant = "primary",
  href = "#",
  target,
  download,
  fullWidthMobile = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  target?: string;
  download?: string;
  fullWidthMobile?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-[14px] font-semibold tracking-wide transition-all duration-200";
  const mobile = fullWidthMobile ? "max-sm:w-full max-sm:py-4" : "";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,74,39,0.38)]"
      : "border-2 border-white/60 text-white hover:bg-white/15 hover:-translate-y-0.5";
  return (
    <a href={href} target={target} download={download} className={`${base} ${mobile} ${styles}`}>
      {children}
    </a>
  );
}

const offerings = [
  {
    image: offerEssentialOils,
    title: "Essential Oils",
    body: "We offer a wide portfolio of steam-distilled essential oils sourced directly from farmers across India.",
  },
  {
    image: offerBotanicalExtracts,
    title: "Botanical Extracts",
    body: "Our extracts are developed with precision, ensuring retention of active compounds and consistent quality.",
  },
  {
    image: offerCustomSolutions,
    title: "Custom Solutions",
    body: "We work closely with clients to develop specific formulations and blends suited to their product needs.",
  },
];

const stats = [
  { label: "Direct Sourcing", value: "100%" },
  { label: "Traceability", value: "Full" },
  { label: "Testing", value: "GC-MS" },
  { label: "Pricing", value: "Optimum" },
];

const mobileHeroStats = [
  { value: "30+", label: "Years" },
  { value: "500+", label: "Products" },
  { value: "80+", label: "Countries" },
];

const reasons = [
  { icon: iconTraceableSourcing,     title: "Traceable Sourcing",     body: "We work directly with cultivators to ensure every raw material meets our sourcing and quality benchmarks." },
  { icon: iconOptimumPricing,        title: "Reliable Manufacturing",  body: "In-house capabilities for extraction and testing ensure consistency across batches and orders." },
  { icon: iconReliableManufacturing, title: "Optimum Pricing",         body: "We focus on value, balancing cost with quality to support your business over the long term." },
];

// Reusable fade-up animation for mobile sections
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
};

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ──
          Mobile: full viewport height, content pinned to bottom
          Desktop: 65vh with min/max unchanged
      */}
      <section
        className="relative max-lg:flex w-full overflow-hidden bg-background max-lg:min-h-[100svh] max-lg:flex-col max-lg:justify-end max-lg:pb-28"
        style={{ height: "80vh", minHeight: "600px", maxHeight: "900px" }}
      >
        {/* Slow luxury zoom — 20s to scale to 1.08, GPU-accelerated */}
        <motion.img
          src={heroImg}
          alt="Essential oil dropper over botanicals"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, ease: "linear" }}
        />
        {/* Left-to-right gradient for desktop legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        {/* Bottom-up gradient — cinematic depth for all sizes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

        <div className="relative mx-auto flex w-full h-full min-h-[100svh] lg:min-h-0 max-w-7xl flex-col justify-end pb-16 sm:pb-20 lg:pb-24 px-6 pt-32 lg:px-10">

          {/* Eyebrow label */}
          <motion.p
            className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Kanpur, India
          </motion.p>

          <motion.h1
            className="max-w-4xl font-serif text-[2.1rem] leading-[1.05] text-white max-lg:max-w-[340px] sm:text-5xl lg:text-[4.5rem] lg:leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            India's Leading High-Grade Essential Oils Supplier
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-[15px] lg:text-[17px] leading-[1.75] text-white/85 font-medium max-lg:max-w-[360px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
          >
            For over three generations, we've helped brands like yours source and
            manufacture essential oils and botanical extracts with the one thing
            that matters most — certainty.
          </motion.p>

          <motion.div
            className="mt-7 flex max-sm:flex-col max-sm:gap-3 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.62, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Btn variant="primary" href="/offer" fullWidthMobile>Explore Our Products</Btn>
            <Btn
              variant="ghost"
              href={brochurePdf}
              target="_blank"
              download="Laxmi-Essential-Oils-Brochure.pdf"
              fullWidthMobile
            >
              Download Brochure
            </Btn>
          </motion.div>

        </div>
      </section>

      {/* ── WHO WE ARE ──
          Mobile: image FIRST (full-width with aspect ratio), then text
          Desktop: side-by-side grid unchanged
      */}
      <Section id="contact" className="bg-[#f8f6f2]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="pr-0 lg:pr-8 max-lg:order-2">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3.5rem] text-foreground">Who We Are</h2>
              <div className="mt-6 space-y-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                <p>
                  Laxmi Essential Oils is built on a foundation that spans three generations of learning, refining, and evolving in the world of botanicals and air care. With deep roots in Indian agriculture and a process-driven approach to extraction and delivery, we offer a dependable supply of high-quality ingredients to businesses across wellness, flavour, fragrance, and personal care sectors.
                </p>
                <p>
                  Our operations are designed to offer quality, transparency, and consistency, backed by an understanding of both farming practices and manufacturing standards. Over the years, we've built lasting partnerships based on shared values and long-term collaboration.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden rounded-none shadow-sm max-lg:order-1 max-lg:aspect-[4/3] group"
            {...fadeUp}
          >
            <img src={whoImg} alt="Essential oil bottles in the field" className="h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </Section>

      {/* ── WHAT WE OFFER ── */}
      <Section id="offer" className="bg-[color:var(--cream)]">
        <motion.h2 className="text-center font-serif text-[1.875rem] lg:text-6xl text-foreground" {...fadeUp}>
          What We Offer
        </motion.h2>
        <div className="mt-12 lg:mt-16 grid gap-6 lg:gap-8 md:grid-cols-3">
          {offerings.map(({ image, title, body }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center rounded-2xl bg-background/60 p-8 lg:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <img
                src={image}
                alt={title}
                className="h-28 lg:h-32 w-auto object-contain"
              />
              <h3 className="mt-6 font-sans text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── HOW WE WORK (Product Range / Stats) ──
          Mobile: simplified premium stat chips (no gear icon)
          Desktop: original 2-col layout with gear icon unchanged
      */}
      <section id="products" className="bg-primary text-primary-foreground py-16 px-6 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          {/* DESKTOP LAYOUT (hidden on mobile) */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl">How We Work</h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-primary-foreground/90">
                <p>
                  Every stage of our process is defined by clarity and control. We work directly with cultivators to ensure plant material is traceable and responsibly sourced. Our manufacturing units operate with in-house steam distillation and CO2 extraction capabilities, supported by GC-MS analysis and other testing protocols.
                </p>
                <p>
                  Our goal is to deliver ingredients that meet defined standards, without compromise. We maintain transparency across sourcing, manufacturing, and documentation, ensuring every order aligns with client specifications. Our pricing remains optimum to help you scale without compromising quality.
                </p>
              </div>
            </div>
            <div className="relative self-center overflow-hidden rounded-3xl p-2">
              <img
                src={gearIcon}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] object-contain select-none"
              />
              <div className="relative grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center rounded-2xl px-10 py-10 text-center"
                    style={{
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      minWidth: "170px",
                      minHeight: "148px",
                    }}
                  >
                    <div className="font-serif text-4xl text-[color:var(--gold)] lg:text-5xl font-normal">
                      {s.value}
                    </div>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT — premium, editorial */}
          <div className="lg:hidden">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 mb-5">
                How We Work
              </p>
              <h2 className="font-serif text-[2rem] leading-[1.1]">
                Precision at Every Stage
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-primary-foreground/85">
                Every stage of our process is defined by clarity and control — from direct cultivator partnerships to in-house GC-MS testing. We deliver ingredients that meet defined standards, without compromise.
              </p>
            </motion.div>

            {/* Premium stat chips */}
            <motion.div
              className="mt-10 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { value: "3rd Gen", label: "Family Enterprise" },
                { value: "GC-MS", label: "In-House Testing" },
                { value: "100%", label: "Traceable Sourcing" },
                { value: "Global", label: "Export Ready" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex flex-col items-center justify-center rounded-2xl py-8 text-center"
                  style={{
                    background: "rgba(255,255,255,0.09)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <div className="font-serif text-[1.65rem] text-[color:var(--gold)] font-normal">{chip.value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">{chip.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GCMS TESTING ──
          Mobile: image first full-bleed, then text
          Desktop: original side-by-side
      */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="overflow-hidden rounded-none shadow-sm max-lg:aspect-[16/10] group"
            {...fadeUp}
          >
            <img src={gcmsImg} alt="Lab testing" className="h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <div className="pl-0 lg:pl-8">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3.5rem]">GCMS and GLC testing</h2>
              <div className="mt-6 space-y-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                <p>
                  At Laxmi Essential Oils & Oleoresins, we use advanced Gas Chromatography (GLC) and Gas Chromatography–Mass Spectrometry (GC-MS) in-house to ensure the purity, safety, and consistency of every essential oil, solvent extract, and CO₂ extract we produce.
                </p>
                <p>
                  These techniques separate and "fingerprint" the individual components of each batch, allowing us to verify botanical authenticity, monitor key marker compounds, and rapidly detect any adulteration or contamination, even at trace levels.
                </p>
                <p>
                  By combining routine GLC profiling with in-depth GC-MS characterization, we maintain tight quality control from raw material to finished product.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES WE SERVE ──
          Mobile: text first (editorial), then image
          Desktop: text left, image right unchanged
      */}
      <Section className="bg-background">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          <div>
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-5xl">Industries We Serve</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  We supply botanicals and essential oils to businesses across wellness, flavour, and fragrance sectors. Our clients include manufacturers of cosmetics, incense sticks, and herbal formulations who value consistency, traceability, air care and professional support.
                </p>
                <p>
                  In the domestic market, we work with formulation teams developing a range of products from skincare and fragrance lines to herbal blends. Our long-term clients rely on us not only for reliable supply but also for technical inputs and co-development of new product lines.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden rounded-lg max-lg:aspect-[4/3] group"
            {...fadeUp}
          >
            <img src={industriesImg} alt="Cosmetic bottles" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </Section>

      {/* ── WHY CHOOSE US ── */}
      <Section className="bg-[color:var(--cream)]">
        <motion.h2 className="text-center font-serif text-[1.875rem] leading-[1.1] lg:text-5xl" {...fadeUp}>
          Why Choose Us
        </motion.h2>
        <div className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon, title, body }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-background p-8 lg:p-10 text-center shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 cursor-default border border-transparent hover:border-black/5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center">
                <img src={icon} alt={title} className="h-full w-full object-contain" />
              </div>
              <h3 className="font-sans text-[18px] font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── GLOBAL REACH ── */}
      <Section id="identity" className="bg-background">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          <motion.div className="flex items-center justify-center" {...fadeUp}>
            <img
              src={worldMap}
              alt="World map showing global reach"
              className="w-full max-w-[560px] object-contain"
            />
          </motion.div>
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-5xl">Global Reach and Certifications</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">
              We currently supply ingredients to clients worldwide. Our processes are certified for export and align with international documentation standards. Testing is done using GC-MS and other in-house tools to ensure compliance and safety.
            </p>
            <div className="mt-8">
              <a
                href="/identity"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 max-lg:w-full max-lg:py-4"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
