import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/vics/logo.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="h-0.5 w-full bg-gold" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Vic's Bar & Grill logo"
                className="h-14 w-14 object-contain"
                width={56}
                height={56}
              />
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-gold">
                VIC&apos;S
              </h3>
            </div>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
              Your neighborhood bar and grill. Great food, cold drinks, and a welcoming local atmosphere.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-[family-name:var(--font-body)] text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-widest text-foreground">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Mon – Thu: 11am – 11pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Fri – Sat: 11am – 1am</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Sunday: 11am – 10pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Victoria, MN 55386</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+19525454567" className="hover:text-gold transition-colors">
                  (952) 545-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vic&apos;s Bar &amp; Grill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
