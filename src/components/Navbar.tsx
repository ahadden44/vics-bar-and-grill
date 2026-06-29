import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/vics/logo.jpg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/menu", label: "MENU" },
  { to: "/about", label: "ABOUT" },
  { to: "/events", label: "EVENTS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {/* Gold accent line */}
      <div className="h-0.5 w-full bg-gold" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vic's Bar & Grill logo"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            width={64}
            height={64}
          />
          <div className="leading-tight">
            <div className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-gold sm:text-3xl">
              VIC&apos;S
            </div>
            <div className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              Bar &amp; Grill · Victoria
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-[family-name:var(--font-body)] text-sm font-semibold tracking-widest transition-colors ${
                  isActive
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+19525454567"
            className="hidden items-center gap-2 font-[family-name:var(--font-body)] text-sm font-medium text-gold transition-colors hover:text-gold-light lg:flex"
          >
            <Phone className="h-4 w-4" />
            (952) 545-4567
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-[family-name:var(--font-body)] text-sm font-semibold tracking-widest py-2 transition-colors ${
                    isActive ? "text-gold" : "text-foreground hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+19525454567"
              className="flex items-center gap-2 py-2 font-[family-name:var(--font-body)] text-sm font-medium text-gold"
            >
              <Phone className="h-4 w-4" />
              (952) 545-4567
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
