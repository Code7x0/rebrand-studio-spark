import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { X, Menu, Phone } from "lucide-react";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/identity", label: "Our Identity" },
  { to: "/offer", label: "What We Offer" },
  { to: "/capabilities", label: "Our Capabilities" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Frosted glass header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/25 shadow-[0_2px_24px_rgba(0,0,0,0.06)]"
            : "bg-background border-border/40"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-10 lg:py-3.5">

          {/* Logo + two-line brand name */}
          <Link to="/" className="flex items-center gap-3 lg:gap-4 shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Laxmi Essential Oil Oleoresins and Fragrance"
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain transition-transform duration-300 hover:scale-105 shrink-0"
            />
            <div className="flex flex-col leading-snug">
              <span className="font-['Cinzel',serif] font-bold text-foreground text-[20px] sm:text-[23px] lg:text-[28px] tracking-[0.03em] leading-none">
                Laxmi Essential Oil
              </span>
              <span className="font-['Outfit',sans-serif] text-[9.5px] sm:text-[11px] lg:text-[12.5px] font-bold tracking-[0.18em] lg:tracking-[0.24em] text-foreground/60 mt-1 uppercase whitespace-nowrap">
                OLEORESINS AND FRAGRANCE
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:gap-8 md:flex shrink-0">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative text-[15px] lg:text-[16.5px] font-medium text-foreground/85 whitespace-nowrap transition-colors duration-200 hover:text-primary [&.active]:text-primary [&.active]:font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-out hover:after:w-full [&.active]:after:w-full"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-2.5 lg:px-7 lg:py-3 text-[15px] lg:text-[16px] font-semibold text-primary-foreground whitespace-nowrap transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,74,39,0.35)] [&.active]:opacity-90"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center md:hidden p-2 -mr-2 rounded-lg text-foreground hover:bg-black/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
          </button>
        </div>
      </header>

      {/* ── PREMIUM FULL-SCREEN MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[color:var(--primary)] md:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Top bar with full name */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Link to="/" className="flex items-center gap-3.5" onClick={() => setOpen(false)}>
                <img
                  src={logo}
                  alt="Laxmi Essential Oil Oleoresins and Fragrance"
                  className="h-16 w-16 object-contain brightness-0 invert shrink-0"
                />
                <div className="flex flex-col leading-snug">
                  <span className="font-['Cinzel',serif] text-[20px] sm:text-[22px] font-bold text-white tracking-[0.03em] leading-tight">
                    Laxmi Essential Oil
                  </span>
                  <span className="font-['Outfit',sans-serif] text-[10px] sm:text-[11.5px] font-bold tracking-[0.18em] text-white/70 mt-1 uppercase whitespace-nowrap">
                    OLEORESINS AND FRAGRANCE
                  </span>
                </div>
              </Link>
              <button
                className="flex items-center justify-center p-2 -mr-2 rounded-lg text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Nav links — large serif */}
            <nav className="flex flex-col flex-1 px-6 pt-10 pb-4 overflow-y-auto">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-serif text-[2.5rem] leading-none text-white/80 border-b border-white/10 hover:text-white transition-colors [&.active]:text-[color:var(--gold)]"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + navLinks.length * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block py-5 font-serif text-[2.5rem] leading-none text-[color:var(--gold)] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>

            {/* Bottom action bar — both buttons → /contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="px-6 py-4 border-t border-white/10"
              style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
            >
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 py-4 text-[14px] font-semibold text-white/80 transition-colors active:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center rounded-full bg-white py-4 text-[14px] font-bold text-[color:var(--primary)] transition-colors active:bg-white/90"
                >
                  Request Quote →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
