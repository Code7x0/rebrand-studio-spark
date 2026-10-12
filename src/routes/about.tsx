import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

// Hero
import heroBg from "@/assets/Home page first image 1.webp";

// Process step images
import stepFarm from "@/assets/1st image png au 1.png";
import stepSourcing from "@/assets/2nd image png au 1.png";
import stepManufacturing from "@/assets/3rd image png au 1.png";
import stepDelivery from "@/assets/4th image png au 1.png";
import arrowImg from "@/assets/arrow png 1.png";

// Science section
import labImg from "@/assets/dsdsds 1.webp";

// Partnership & Sustainability
import handshakeImg from "@/assets/2nd image png au 2.png";
import solarIcon from "@/assets/1 1.png";
import tilledIcon from "@/assets/2 1.png";
import communityIcon from "@/assets/3 1.png";
import line4Img from "@/assets/Line 4.png";

// Vision
import compassImg from "@/assets/compass 1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Laxmi Essential Oils" },
      {
        name: "description",
        content:
          "Learn about Laxmi Essential Oils — a legacy rooted in Indian agriculture, built on three generations of expertise in botanicals and essential oils.",
      },
      { property: "og:title", content: "About Us — Laxmi Essential Oils" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
  }),
  component: About,
});

const processSteps = [
  {
    image: stepFarm,
    label: "Field Cultivation",
    desc: "We work directly with cultivators, cooperatives, and suppliers across India",
  },
  {
    image: stepSourcing,
    label: "Responsible Sourcing",
    desc: "Ensuring responsible sourcing, superior raw material quality, and full traceability.",
  },
  {
    image: stepManufacturing,
    label: "Dual Manufacturing Hubs",
    desc: "Our dual manufacturing hubs, strategically located in North and South India",
  },
  {
    image: stepDelivery,
    label: "Global Delivery",
    desc: "Enable us to deliver a diverse portfolio of oils, extracts, and natural ingredients with consistency across seasons and batches.",
  },
];

const sustainabilityItems = [
  { icon: solarIcon, label: "Solar Energy" },
  { icon: tilledIcon, label: "Tilled Field" },
  { icon: communityIcon, label: "Community Support" },
];

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
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors max-lg:w-full max-lg:py-4 max-lg:text-[15px]";
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

// Reusable fade-up for whileInView sections
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
};

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ──
          Mobile: full viewport, content pinned to bottom
          Desktop: 65vh with existing constraints
      */}
      <section
        className="relative max-lg:flex w-full overflow-hidden bg-background max-lg:min-h-[100svh] max-lg:flex-col max-lg:justify-end max-lg:pb-28"
        style={{ height: "80vh", minHeight: "600px", maxHeight: "900px" }}
      >
        <motion.img
          src={heroBg}
          alt="Essential oils and botanicals"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex w-full h-full min-h-[100svh] lg:min-h-0 max-w-7xl flex-col max-lg:justify-end max-lg:pb-28 lg:justify-center px-6 py-12 lg:px-10 lg:py-16">
          <motion.p
            className="lg:hidden mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Story
          </motion.p>

          <motion.h1
            className="max-w-3xl font-serif text-[2.1rem] leading-[1.05] text-white max-lg:max-w-[340px] sm:text-5xl lg:text-[4.5rem] lg:leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A Legacy Rooted in Indian Agriculture, Evolved for the World
          </motion.h1>

          <motion.div
            className="mt-5 max-w-2xl space-y-4 text-[15px] lg:text-[18px] leading-relaxed text-white/90 font-medium max-lg:max-w-[360px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              Laxmi Essential Oils is an essential oils and botanical ingredients company, built on a foundation of Indian agricultural traditions and elevated through extraction, innovation, quality control, and a global mindset.
            </p>
            {/* Hide second paragraph on mobile for cleaner hero */}
            <p className="lg:block hidden">
              As a family enterprise operating for three generations, we have consistently refined our processes. Over the years, we have integrated scientific rigour with agrarian expertise — creating a dependable bridge between Indian agriculture and global industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FROM FARM TO FINISHED INGREDIENT ── */}
      <Section className="bg-background">
        <motion.h2
          className="text-center font-serif text-[1.875rem] leading-[1.1] lg:text-5xl text-foreground"
          {...fadeUp}
        >
          From Farm to Finished Ingredient
        </motion.h2>

        {/* Desktop: horizontal with arrows */}
        <div className="mt-16 hidden md:flex items-start justify-between">
          {processSteps.map((step, i) => (
            <div key={step.label} className="flex flex-row items-start flex-1 group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex flex-1 flex-col items-center text-center px-4">
                <div className="flex h-[140px] items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img src={step.image} alt={step.label} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="mt-6 font-sans text-[17px] font-bold text-foreground">{step.label}</h3>
                <p className="mt-3 text-[14px] font-medium leading-relaxed text-foreground/80 max-w-[200px]">{step.desc}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="flex items-start justify-center pt-[60px] px-2">
                  <img src={arrowImg} alt="→" className="h-6 w-auto opacity-70" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards with reveal animation */}
        <div className="mt-12 flex flex-col gap-10 md:hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Step number */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-[15px] font-bold text-primary">{i + 1}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="mt-3 w-px flex-1 min-h-[40px] bg-primary/15" />
                )}
              </div>
              {/* Content */}
              <div className="pb-4">
                <div className="flex h-[100px] w-[100px] items-center justify-center mb-4">
                  <img src={step.image} alt={step.label} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="font-sans text-[17px] font-bold text-foreground">{step.label}</h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-foreground/75">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── BEYOND EXTRACTION (Science section) ──
          Mobile: lab image full-bleed with aspect ratio, then text
          Desktop: side-by-side unchanged
      */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-lg:order-2">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3.5rem] text-foreground">
                Beyond Extraction, A Science Led Approach to Quality
              </h2>
              <div className="mt-6 space-y-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
                <p>
                  Laxmi Essential Oils is driven by precision and consistency at every stage of processing. Our facilities are equipped with advanced steam distillation, supercritical CO₂ extraction, solvent extraction, and fractional distillation technologies. All is supported by an in-house GC-MS and GLC equipment laboratory ensuring rigorous, real-time quality control.
                </p>
                <p>
                  Our processes align with international standards, enabling us to supply customers globally across personal care, wellness, flavour, fragrance, and pharmaceutical sectors.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden rounded-none shadow-sm max-lg:order-1 max-lg:aspect-[4/3] group"
            {...fadeUp}
          >
            <img
              src={labImg}
              alt="Laboratory testing equipment"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </Section>

      {/* ── PARTNERSHIP + SUSTAINABILITY ──
          Mobile: stacked with clean divider hidden
      */}
      <Section className="bg-background">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch">
          {/* Left: Building Long-Term Partnership */}
          <div className="flex-1 lg:pr-8">
            <motion.div {...fadeUp}>
              <div className="flex justify-center w-full mb-8">
                <img
                  src={handshakeImg}
                  alt="Partnership"
                  className="h-28 lg:h-32 w-auto object-contain"
                />
              </div>
              <h2 className="mt-4 font-serif text-[1.875rem] leading-[1.1] lg:text-4xl text-foreground">
                Building Long-Term Partnership
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-foreground/80">
                <p>
                  What we bring is about trust. Over the decades, we have grown not through aggressive selling, but by nurturing partnerships based on transparency, service, and an unwavering commitment to quality.
                </p>
                <p>
                  We support clients not only as suppliers but as partners in product development, formulation innovation, and category expansion.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <img src={line4Img} alt="divider" className="h-[80%] max-h-[400px] w-auto object-contain opacity-60" />
          </div>

          {/* Right: Guided by Sustainability */}
          <div className="flex-1 lg:pl-8">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-4xl text-foreground">
                Guided by Sustainability and Responsibility
              </h2>
              <div className="mt-8 flex items-center justify-between gap-4">
                {sustainabilityItems.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center flex-1"
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="h-[100px] lg:h-[120px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[16px] leading-relaxed text-foreground/80">
                Our journey is grounded in respect for the earth, for the farmers and the communities we engage with. We constantly invest in sustainable farming practices, energy-efficient processes, and social initiatives that uplift our partner communities and ensure the long-term viability of our sourcing ecosystems.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── VISION FOR THE FUTURE ── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-[1fr_auto]"
            {...fadeUp}
          >
            <div className="max-w-2xl">
              <p className="lg:hidden mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Our Direction
              </p>
              <h2 className="font-serif text-[2rem] leading-[1.1] lg:text-5xl">
                Vision For The Future
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-primary-foreground/85">
                To be recognised as a globally respected, India-origin essential oils and botanical ingredients company, delivering quality, consistency, and innovation, while remaining anchored in ethical and environmental stewardship. We aim to expand our product range, grow our global client base, and set new standards in traceability and quality for the natural extracts industry.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={compassImg}
                alt="Compass — guiding vision"
                className="h-40 w-40 lg:h-56 lg:w-56 object-contain opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <div className="flex flex-col items-center text-center">
          <motion.div {...fadeUp} className="w-full flex flex-col items-center">
            <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-5xl text-foreground max-w-2xl">
              Discover How We Can Support Your Formulation Goals
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/70">
              Explore our portfolio or connect with our team to discuss your sourcing needs.
            </p>
            <div className="mt-10 flex max-lg:flex-col w-full max-lg:max-w-sm flex-wrap justify-center gap-4">
              <Btn variant="primary" href="/capabilities">
                Explore Our Capabilities
              </Btn>
              <Btn variant="ghost" href="/contact">
                Contact Us
              </Btn>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
