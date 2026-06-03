import { createFileRoute } from "@tanstack/react-router";
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
    "inline-flex items-center justify-center rounded-md px-8 py-3 text-[15px] font-semibold transition-colors";
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

function Identity() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-background" style={{ height: "65vh", minHeight: "550px", maxHeight: "700px" }}>
        <img
          src={heroBg}
          alt="A Heritage of Trust, A Future of Precision."
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[5rem]">
            A Heritage of Trust,<br />A Future of Precision.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] lg:text-[18px] leading-relaxed text-white/95 font-medium">
            Our journey spans generations, but our focus stays on today: helping you create products with confidence, authenticity, and traceability.
          </p>
        </div>
      </section>

      {/* ── BUILT FOR RELIABILITY ── */}
      <Section className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Built for Reliability
            </h2>
            <div className="mt-6 space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              <p>
                At Laxmi Essential Oils, everything we do is designed to reduce uncertainty for our clients, for our partners, and for our teams.
              </p>
              <p>
                We bring order to the complexity of natural ingredient sourcing, manufacturing, and distribution, giving our clients confidence in every lot, every time.
              </p>
              <p>
                Our systems, controls, and relationships are built to deliver predictability, not surprises.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden rounded-none shadow-sm">
            <img
              src={imgReliability}
              alt="Brown bottles representing reliable essential oils"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── SYSTEMS OVER GUESSWORK ── */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Systems Over Guesswork
            </h2>
            <div className="mt-6 space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              <p>
                In a category often driven by informal networks and variable quality, we stand apart with system and pure analysis.
              </p>
              <p>
                From verified raw materials to batch-specific documentation, our approach to manufacturing is defined by measurable standards and continuous monitoring.
              </p>
              <p>
                We combine traditional methods like steam distillation with advanced tech like CO2 extraction, GC-MS analysis, and fractional distillation, bringing scientific precision to an otherwise subjective space.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden rounded-none shadow-sm">
            <img
              src={imgSystems}
              alt="Lab technician performing scientific precision analysis"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ── SOURCING THAT GOES BEYOND ── */}
      <Section className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-none shadow-sm">
            <img
              src={imgSourcing}
              alt="Woman in field - sourcing"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Sourcing that Goes Beyond Transactional
            </h2>
            <div className="mt-6 space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              <p>
                We work deep within farming and foraging communities, offering training, technical support, and stable demand pipelines. This not only secures better quality at the source but ensures long-term sustainability for both our partners and our clients.
              </p>
              <p>
                We inspect, audit, and track our supply chain at every node, not just to meet compliance, but because it's how we protect what matters.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SUPPORTING BRANDS THAT DEMAND MORE ── */}
      <section className="bg-primary text-primary-foreground py-20 px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] tracking-tight">
            Supporting Brands That Demand More
          </h2>
          <p className="mt-8 text-[16px] lg:text-[18px] leading-relaxed text-primary-foreground/90 font-medium">
            Our clients are formulators, brands, and manufacturers who don't compromise.<br className="hidden md:block" />
            We supply to teams who demand batch-level consistency, documented quality parameters, and professional service at par with global expectations.
          </p>
          
          <div className="mt-12 mb-10">
            <div className="inline-block rounded-full bg-white/10 border border-white/20 px-10 py-3 text-[16px] lg:text-[18px] font-bold tracking-wide text-white shadow-sm backdrop-blur-sm">
              Europe • USA • Middle East • Global Partners
            </div>
          </div>
          
          <p className="text-[15px] lg:text-[16px] leading-relaxed text-primary-foreground/80 max-w-4xl mx-auto font-medium">
            Whether it's a skincare lab in Europe or a nutraceutical company in the US, our clients choose us for what we stand for: dependable supply, transparent communication, and a solutions-driven approach to ingredient sourcing.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-foreground max-w-3xl">
            Let's Build Stronger Supply Chains Together
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Discover how our sourcing, systems, and services can support your brand's quality goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Btn variant="primary" href="/capabilities">
              Explore Our Capabilities
            </Btn>
            <Btn variant="ghost" href="/contact">
              Contact Us
            </Btn>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
