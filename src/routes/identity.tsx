import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

import heroBg from "@/assets/our_destiny.png";
import imgReliability from "@/assets/Rectangle 27.png";
import imgSystems from "@/assets/Rectangle 35.png";
import imgSourcing from "@/assets/Rectangle 36.png";

export const Route = createFileRoute("/identity")({
  head: () => ({
    meta: [
      { title: "Our Identity — Laxmi Essential Oils" },
      {
        name: "description",
        content: "Discover the heritage, precision, and reliable sourcing behind Laxmi Essential Oils.",
      },
      { property: "og:title", content: "Our Identity — Laxmi Essential Oils" },
    ],
  }),
  component: Identity,
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
    "inline-flex items-center justify-center rounded-md px-8 py-3 text-[15px] font-semibold transition-colors max-lg:w-full max-lg:py-4";
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

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
};

// Reusable component for the 3 identity narrative sections
function IdentitySection({
  image,
  imageAlt,
  title,
  children,
  imageLeft = false,
  bg = "bg-background",
}: {
  image: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
  imageLeft?: boolean;
  bg?: string;
}) {
  return (
    <Section className={bg}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Mobile: always image first */}
        <motion.div
          className={`overflow-hidden rounded-none shadow-sm max-lg:aspect-[16/9] ${imageLeft ? "lg:order-1" : "lg:order-2"} max-lg:order-1 group`}
          {...fadeUp}
        >
          <img src={image} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>

        <div className={`${imageLeft ? "lg:order-2" : "lg:order-1"} max-lg:order-2`}>
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3rem] text-foreground">
              {title}
            </h2>
            <div className="mt-5 space-y-5 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Identity() {
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
          alt="A Heritage of Trust, A Future of Precision."
          className="absolute inset-0 h-full w-full object-cover object-center"
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
            Who We Are
          </motion.p>

          <motion.h1
            className="max-w-3xl font-serif text-[2.1rem] leading-[1.05] text-white max-lg:max-w-[320px] sm:text-5xl lg:text-[5rem] lg:leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A Heritage of Trust,<br />A Future of Precision.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-[15px] lg:text-[18px] leading-relaxed text-white/90 font-medium max-lg:max-w-[360px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our journey spans generations, but our focus stays on today: helping you create products with confidence, authenticity, and traceability.
          </motion.p>
        </div>
      </section>

      {/* ── BUILT FOR RELIABILITY ── */}
      <IdentitySection
        image={imgReliability}
        imageAlt="Brown bottles representing reliable essential oils"
        title="Built for Reliability"
        imageLeft={false}
        bg="bg-background"
      >
        <p>
          At Laxmi Essential Oils, everything we do is designed to reduce uncertainty for our clients, for our partners, and for our teams.
        </p>
        <p>
          We bring order to the complexity of natural ingredient sourcing, manufacturing, and distribution, giving our clients confidence in every lot, every time.
        </p>
        <p>
          Our systems, controls, and relationships are built to deliver predictability, not surprises.
        </p>
      </IdentitySection>

      {/* ── SYSTEMS OVER GUESSWORK ── */}
      <IdentitySection
        image={imgSystems}
        imageAlt="Lab technician performing scientific precision analysis"
        title="Systems Over Guesswork"
        imageLeft={false}
        bg="bg-[color:var(--cream)]"
      >
        <p>
          In a category often driven by informal networks and variable quality, we stand apart with system and pure analysis.
        </p>
        <p>
          From verified raw materials to batch-specific documentation, our approach to manufacturing is defined by measurable standards and continuous monitoring.
        </p>
        <p>
          We combine traditional methods like steam distillation with advanced tech like CO2 extraction, GC-MS analysis, and fractional distillation, bringing scientific precision to an otherwise subjective space.
        </p>
      </IdentitySection>

      {/* ── SOURCING THAT GOES BEYOND ── */}
      <IdentitySection
        image={imgSourcing}
        imageAlt="Woman in field - sourcing"
        title="Sourcing that Goes Beyond Transactional"
        imageLeft={true}
        bg="bg-background"
      >
        <p>
          We work deep within farming and foraging communities, offering training, technical support, and stable demand pipelines. This not only secures better quality at the source but ensures long-term sustainability for both our partners and our clients.
        </p>
        <p>
          We inspect, audit, and track our supply chain at every node, not just to meet compliance, but because it's how we protect what matters.
        </p>
      </IdentitySection>

      {/* ── SUPPORTING BRANDS THAT DEMAND MORE ── */}
      <section className="bg-primary text-primary-foreground py-20 px-6 lg:py-24">
        <motion.div className="mx-auto max-w-screen-lg text-center" {...fadeUp}>
          <p className="lg:hidden mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            Our Clients
          </p>
          <h2 className="font-serif text-[2rem] leading-[1.1] lg:text-[3.5rem] tracking-tight">
            Supporting Brands That Demand More
          </h2>
          <p className="mt-7 text-[16px] lg:text-[18px] leading-relaxed text-primary-foreground/90 font-medium">
            Our clients are formulators, brands, and manufacturers who don't compromise.<br className="hidden md:block" />
            We supply to teams who demand batch-level consistency, documented quality parameters, and professional service at par with global expectations.
          </p>

          <div className="mt-10 mb-8">
            <div className="inline-block rounded-full bg-white/10 border border-white/20 px-8 py-3 text-[15px] lg:text-[18px] font-bold tracking-wide text-white shadow-sm backdrop-blur-sm">
              Europe • USA • Middle East • Global Partners
            </div>
          </div>

          <p className="text-[15px] lg:text-[16px] leading-relaxed text-primary-foreground/80 max-w-4xl mx-auto font-medium">
            Whether it's a skincare lab in Europe or a nutraceutical company in the US, our clients choose us for what we stand for: dependable supply, transparent communication, and a solutions-driven approach to ingredient sourcing.
          </p>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <motion.div className="flex flex-col items-center text-center" {...fadeUp}>
          <h2 className="font-serif text-[1.875rem] leading-[1.1] lg:text-[3.5rem] tracking-tight text-foreground max-w-3xl">
            Let's Build Stronger Supply Chains Together
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Discover how our sourcing, systems, and services can support your brand's quality goals.
          </p>
          <div className="mt-10 flex max-lg:flex-col w-full max-lg:max-w-sm flex-wrap justify-center gap-4 lg:gap-5">
            <Btn variant="primary" href="/capabilities">
              Explore Our Capabilities
            </Btn>
            <Btn variant="ghost" href="/contact">
              Contact Us
            </Btn>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
