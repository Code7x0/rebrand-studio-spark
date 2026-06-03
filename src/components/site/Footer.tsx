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
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link to={href} className="text-sm hover:opacity-80 transition-opacity">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="text-sm hover:opacity-80 transition-opacity">
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
