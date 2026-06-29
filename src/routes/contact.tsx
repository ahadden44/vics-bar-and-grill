import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contactHero from "@/assets/vics/inside.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vic's Bar & Grill" },
      { name: "description", content: "Get in touch with Vic's Bar & Grill. Find our location, hours, phone number, and send us a message." },
      { property: "og:title", content: "Contact — Vic's Bar & Grill" },
      { property: "og:description", content: "Location, hours, and contact info for Vic's Bar & Grill." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Page Header with photo background */}
      <section className="relative overflow-hidden border-b-4 border-gold py-24 sm:py-32">
        <img
          src={contactHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.4em] text-gold">
            Stop In or Reach Out
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            CONTACT
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-body)] text-white/85">
            We would love to hear from you. Drop by, give us a call, or send a message.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-foreground sm:text-4xl">
              GET IN TOUCH
            </h2>
            <p className="mt-4 font-[family-name:var(--font-body)] text-muted-foreground">
              Have a question about our menu, want to book a private event, or just want to say hi? Reach out — we are always happy to chat.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-sm font-bold text-foreground">Address</h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                    Victoria, MN 55386
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-sm font-bold text-foreground">Phone</h3>
                  <a
                    href="tel:+19525454567"
                    className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    (952) 545-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-sm font-bold text-foreground">Email</h3>
                  <a
                    href="mailto:info@vicsbarandgrill.com"
                    className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    info@vicsbarandgrill.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] text-sm font-bold text-foreground">Hours</h3>
                  <ul className="mt-1 space-y-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                    <li>Mon – Thu: 11am – 11pm</li>
                    <li>Fri – Sat: 11am – 1am</li>
                    <li>Sunday: 11am – 10pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-foreground">
              Send a Message
            </h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-[family-name:var(--font-body)] text-sm">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-border bg-background font-[family-name:var(--font-body)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-[family-name:var(--font-body)] text-sm">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-border bg-background font-[family-name:var(--font-body)]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-[family-name:var(--font-body)] text-sm">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What is this about?"
                  className="border-border bg-background font-[family-name:var(--font-body)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-[family-name:var(--font-body)] text-sm">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what is on your mind..."
                  rows={5}
                  className="border-border bg-background font-[family-name:var(--font-body)]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold-dark"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <iframe
          title="Vic's Bar & Grill map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Vics+Bar+and+Grill+Victoria+MN&output=embed"
          className="block h-80 w-full border-0"
        />
      </section>
    </>
  );
}
