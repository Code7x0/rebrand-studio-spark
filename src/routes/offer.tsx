import { createFileRoute } from "@tanstack/react-router";
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

import heroBg from "@/assets/what we offer.png";
import brochurePdf from "@/assets/brochure.pdf";
import imgEssentialOils from "@/assets/Container.png";
import imgBotanicalExtracts from "@/assets/Container (1).png";
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
    "inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[14px] font-bold transition-colors";
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

function Offer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-background" style={{ height: "65vh", minHeight: "550px", maxHeight: "700px" }}>
        <img
          src={heroBg}
          alt="Ingredients that Move Beyond Commodities"
          className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[4.5rem]">
            Ingredients that Move<br />Beyond Commodities
          </h1>
          <p className="mt-6 max-w-xl text-[16px] lg:text-[18px] leading-relaxed text-white/95 font-medium">
            We deliver ingredient systems that remove complexities, ensure product consistency, and help your brand stay agile making us the dependable partner you need in a fast-changing market.
          </p>
        </div>
      </section>

      {/* ── ESSENTIAL OILS ── */}
      <Section className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Essential Oils
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              Steam-distilled essential oils from traceable Indian farming networks. We offer both conventional and specialty oils tailored for aromatherapy, fine fragrance, and premium personal care applications.
            </p>
            <ul className="mt-8 space-y-4 text-[16px] lg:text-[18px] font-medium text-foreground/90">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                100% Traceable Farming
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Therapeutic Grade Quality
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Sustainable Sourcing
              </li>
            </ul>
          </div>
          <div className="overflow-hidden">
            <img
              src={imgEssentialOils}
              alt="Essential Oils"
              className="h-full w-full object-cover rounded-none"
            />
          </div>
        </div>
      </Section>

      {/* ── BOTANICAL EXTRACTS ── */}
      <Section className="bg-[color:var(--cream)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="order-2 lg:order-1 overflow-hidden relative">
            <img
              src={imgBotanicalExtracts}
              alt="Botanical Extracts Equipment"
              className="h-full w-full object-cover rounded-none"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Botanical Extracts
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              Advanced solvent and CO₂ extraction methods. We prioritize active retention, clean profiles, and seamless formulation compatibility for the nutraceutical, pharmaceutical, and functional food sectors.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex-1 min-w-[150px] rounded-xl bg-white/80 px-6 py-5 shadow-md border border-white backdrop-blur-sm text-center">
                <div className="font-bold text-[16px] lg:text-[18px] text-foreground">CO₂ Extraction</div>
                <div className="mt-1 text-[14px] lg:text-[15px] text-foreground/60 font-medium">Pure, solvent-free</div>
              </div>
              <div className="flex-1 min-w-[150px] rounded-xl bg-white/80 px-6 py-5 shadow-md border border-white backdrop-blur-sm text-center">
                <div className="font-bold text-[16px] lg:text-[18px] text-foreground">Clean Profiles</div>
                <div className="mt-1 text-[14px] lg:text-[15px] text-foreground/60 font-medium">Optimal active yield</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CUSTOM FORMULATIONS AND BLENDS ── */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="pr-0 lg:pr-8">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.1]">
                Custom Formulations<br />And Blends
              </h2>
              <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-primary-foreground/90 font-medium">
                Co-creating custom oil blends, extracts, and
                intermediates with client formulation teams. We
                support
                the development of unique SKUs, improved
                performance profiles, and IP-based proprietary
                product
                lines.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-lg bg-white/10 px-5 py-2.5 text-[15px] font-bold tracking-wide">
                  Unique SKUs
                </div>
                <div className="rounded-lg bg-white/10 px-5 py-2.5 text-[15px] font-bold tracking-wide">
                  IP Protection
                </div>
                <div className="rounded-lg bg-white/10 px-5 py-2.5 text-[15px] font-bold tracking-wide">
                  Intermediates
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0">
              {/* Images overlapping */}
              <div className="absolute left-0 top-0 w-[60%] aspect-square z-0">
                <img src={imgCustom1} alt="Custom Oil Blend" className="w-full h-full object-cover rounded-none" />
              </div>
              <div className="absolute right-0 bottom-[10%] w-[60%] aspect-square z-10 shadow-2xl">
                <img src={imgCustom2} alt="Scientists in Lab" className="w-full h-full object-cover rounded-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INGREDIENT SUPPORT SYSTEMS ── */}
      <Section className="bg-background">
        <div className="text-center mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
            Ingredient Support Systems
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Moving beyond the physical product to provide the technical backbone for your supply chain.
          </p>
        </div>
        
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-[#f8f6f2] p-8 md:p-10 shadow-sm border border-border/40">
            <h3 className="font-bold text-[18px] lg:text-[20px] text-foreground mb-4">Technical Documentation</h3>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/75 font-medium">
              Comprehensive dossiers including MSDS, COA, regulatory filings, and detailed specifications for global compliance.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8f6f2] p-8 md:p-10 shadow-sm border border-border/40">
            <h3 className="font-bold text-[18px] lg:text-[20px] text-foreground mb-4">Batch Traceability</h3>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/75 font-medium">
              Full documentation from procurement to manufacturing to every stage of the process.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f8f6f2] p-8 md:p-10 shadow-sm border border-border/40">
            <h3 className="font-bold text-[18px] lg:text-[20px] text-foreground mb-4">Testing Data</h3>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/75 font-medium">
              Rigorous GC-MS analysis and purity certificates for every batch we produce.
            </p>
          </div>
        </div>
      </Section>

      {/* ── INDUSTRIES WE SUPPORT ── */}
      <Section className="bg-[#f8f6f2]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="pr-4">
            <h2 className="font-serif text-3xl lg:text-[3rem] text-foreground">
              Industries We Support
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
              Our high-quality extracts and oils are engineered to meet the specific demands of diverse global sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
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
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="bg-background">
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl lg:text-[3.5rem] leading-[1.1] text-foreground">
            Ready to Simplify Your Ingredient Sourcing?
          </h2>
          <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/80 font-medium">
            Explore how our oils, extracts, and custom solutions can elevate your formulations and supply chains.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
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
        </div>
      </Section>

      <Footer />
    </div>
  );
}
