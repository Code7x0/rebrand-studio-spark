import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Identity", href: "#identity" },
  { label: "What We Offer", href: "#offer" },
  { label: "Our Capabilities", href: "#capabilities" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-background border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Laxmi Essential Oils" className="h-10 w-10 object-contain" />
          <span className="font-serif text-2xl font-semibold text-foreground">
            Laxmi Essential Oils
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-5 py-2.5 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
