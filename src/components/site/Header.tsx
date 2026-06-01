import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Identity", href: "#identity" },
  { label: "What We Offer", href: "#offer" },
  { label: "Our Capabilities", href: "#capabilities" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Laxmi Essential Oils" className="h-9 w-9" />
          <span className="font-serif text-lg font-semibold text-primary">
            Laxmi Essential Oils
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
