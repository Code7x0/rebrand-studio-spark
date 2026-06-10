import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

const cols: { label: string; href: string }[][] = [
  [
    { label: "About Us", href: "/about" },
    { label: "Our Capabilities", href: "/capabilities" },
  ],
  [
    { label: "Our Identity", href: "/identity" },
    { label: "Certifications", href: "#" },
  ],
  [
    { label: "Sustainability", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms & Privacy", href: "#" },
  ],
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Extra bottom padding on mobile so sticky CTA bar doesn't overlap */}
      <div className="mx-auto max-w-7xl px-6 py-14 pb-32 lg:px-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-5">
              {col.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link to={href} className="text-[15px] lg:text-sm hover:opacity-80 transition-opacity py-1 inline-block">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="text-[15px] lg:text-sm hover:opacity-80 transition-opacity py-1 inline-block">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-90">
            © 2025 Laxmi Essential Oils. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
