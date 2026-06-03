import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { X, Menu } from "lucide-react";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/identity", label: "Our Identity" },
  { to: "/offer", label: "What We Offer" },
  { to: "/capabilities", label: "Our Capabilities" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-background border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="Laxmi Essential Oils" className="h-10 w-10 object-contain" />
            <span className="font-serif text-2xl font-semibold text-foreground">
              Laxmi Essential Oils
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[15px] font-medium text-foreground/85 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-md bg-primary px-5 py-2.5 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90 [&.active]:opacity-90"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center md:hidden p-2 -mr-2 rounded-md text-foreground hover:bg-black/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background md:hidden">
          {/* Top bar inside overlay */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img src={logo} alt="Laxmi Essential Oils" className="h-9 w-9 object-contain" />
              <span className="font-serif text-xl font-semibold text-foreground">
                Laxmi Essential Oils
              </span>
            </Link>
            <button
              className="flex items-center justify-center p-2 -mr-2 rounded-md text-foreground hover:bg-black/5 transition-colors"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 px-6 py-8 flex-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="py-4 text-[18px] font-medium text-foreground/80 border-b border-border/30 hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-semibold"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 w-full rounded-md bg-primary px-5 py-4 text-center text-[16px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
