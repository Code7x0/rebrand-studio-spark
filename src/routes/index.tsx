import { createFileRoute } from "@tanstack/react-router";
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
import heroImg from "@/assets/hero.png";
import brochurePdf from "@/assets/brochure.pdf";
import whoImg from "@/assets/who-we-are.png";
import gcmsImg from "@/assets/gcms.png";
import industriesImg from "@/assets/industries.png";

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
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  target?: string;
  download?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-white/80 text-white hover:bg-white/10";
  return (
    <a href={href} target={target} download={download} className={`${base} ${styles}`}>
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

const reasons = [
  { icon: iconTraceableSourcing,     title: "Traceable Sourcing",     body: "We work directly with cultivators to ensure every raw material meets our sourcing and quality benchmarks." },
  { icon: iconOptimumPricing,        title: "Reliable Manufacturing",  body: "In-house capabilities for extraction and testing ensure consistency across batches and orders." },
  { icon: iconReliableManufacturing, title: "Optimum Pricing",         body: "We focus on value, balancing cost with quality to support your business over the long term." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-background" style={{ height: "65vh", minHeight: "550px", maxHeight: "700px" }}>
        <img
          src={heroImg}
          alt="Essential oil dropper over botanicals"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[4.5rem]">
            India's Leading High-Grade Essential Oils Supplier
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] lg:text-[18px] leading-relaxed text-white/95 font-medium">
            For over three generations, we've helped brands like yours source and
            manufacture essential oils and botanical extracts with the one thing
            that matters most — certainty.
            <br /><br />
            From farm to finished product, we ensure traceability, consistency,
            and care in every drop.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Btn variant="primary" href="/offer">Explore Our Products</Btn>
            <Btn
              variant="ghost"
              href={brochurePdf}
              target="_blank"
              download="Laxmi-Essential-Oils-Brochure.pdf"
            >
              Download Brochure
            </Btn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section id="contact" className="bg-[#f8f6f2]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="pr-0 lg:pr-8">
            <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">Who We Are</h2>
            <div className="mt-8 space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              <p>
                Laxmi Essential Oils is built on a foundation that spans three generations of learning, refining, and evolving in the world of botanicals and air care. With deep roots in Indian agriculture and a process-driven approach to extraction and delivery, we offer a dependable supply of high-quality ingredients to businesses across wellness, flavour, fragrance, and personal care sectors.
              </p>
              <p>
                Our operations are designed to offer quality, transparency, and consistency, backed by an understanding of both farming practices and manufacturing standards. Over the years, we've built lasting partnerships based on shared values and long-term collaboration.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-none shadow-sm">
            <img src={whoImg} alt="Essential oil bottles in the field" className="h-full w-full object-cover rounded-none" />
          </div>
        </div>
      </Section>

      {/* WHAT WE OFFER */}
      <Section id="offer" className="bg-[color:var(--cream)]">
        <h2 className="text-center font-serif text-5xl lg:text-6xl text-foreground">What We Offer</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {offerings.map(({ image, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center rounded-2xl bg-background/60 p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <img
                src={image}
                alt={title}
                className="h-32 w-auto object-contain"
              />
              <h3 className="mt-6 font-sans text-2xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCT RANGE */}
      <section id="products" className="bg-primary text-primary-foreground py-16 px-6 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
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
              {/* Gear icon decorative background — centred behind all 4 cards */}
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
        </div>
      </section>

      {/* GCMS */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-none shadow-sm">
            <img src={gcmsImg} alt="Lab testing" className="h-full w-full object-cover rounded-none" />
          </div>
          <div className="pl-0 lg:pl-8">
            <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1]">GCMS and GLC testing</h2>
            <div className="mt-8 space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
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
          </div>
        </div>
      </Section>

      {/* SUSTAINABLE & RESPONSIBLE BUSINESS */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl">Industries We Serve</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p>
                We supply botanicals and essential oils to businesses across wellness, flavour, and fragrance sectors. Our clients include manufacturers of cosmetics, incense sticks, and herbal formulations who value consistency, traceability, air care and professional support.
              </p>
              <p>
                In the domestic market, we work with formulation teams developing a range of products from skincare and fragrance lines to herbal blends. Our long-term clients rely on us not only for reliable supply but also for technical inputs and co-development of new product lines.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={industriesImg} alt="Cosmetic bottles" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-[color:var(--cream)]">
        <h2 className="text-center font-serif text-4xl lg:text-5xl">Why Choose Us</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col items-center rounded-2xl bg-background p-10 text-center shadow-sm">
              <div className="mb-8 flex h-[110px] w-[110px] items-center justify-center">
                <img src={icon} alt={title} className="h-full w-full object-contain" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GLOBAL REACH */}
      <Section id="identity" className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={worldMap}
              alt="World map showing global reach"
              className="w-full max-w-[560px] object-contain"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl">Global Reach and Certifications</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">
              We currently supply ingredients to clients worldwide. Our processes are certified for export and align with international documentation standards. Testing is done using GC-MS and other in-house tools to ensure compliance and safety.
            </p>
            <div className="mt-8">
              <Btn variant="primary">Learn More</Btn>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
