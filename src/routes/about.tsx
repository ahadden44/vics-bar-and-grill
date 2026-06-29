import { createFileRoute } from "@tanstack/react-router";
import { Tv, Music, Beer, Users } from "lucide-react";
import insidePhoto from "@/assets/vics/inside.jpg";
import aboutHero from "@/assets/vics/outdoor2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vic's Bar & Grill" },
      { name: "description", content: "Learn the story behind Vic's Bar & Grill — your neighborhood bar and grill." },
      { property: "og:title", content: "About — Vic's Bar & Grill" },
      { property: "og:description", content: "The story behind Vic's Bar & Grill." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Page Header with photo background */}
      <section className="relative overflow-hidden border-b-4 border-gold py-24 sm:py-32">
        <img
          src={aboutHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.4em] text-gold">
            About Us
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            OUR STORY
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-body)] text-white/85">
            More than a bar. More than a grill. A place where neighbors become friends.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Welcome to Vic&apos;s
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-foreground sm:text-5xl">
          A TRUE NEIGHBORHOOD PLACE
        </h2>
        <div className="mt-6 space-y-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-muted-foreground">
          <p>
            Vic&apos;s Bar &amp; Grill is a true neighborhood place, built around local owners, friendly staff, and the kind of regulars who make the room feel familiar the moment you walk in.
          </p>
          <p>
            From fresh-ground burgers to cold beer and live events, the goal has always been simple: make a spot people want to return to again and again.
          </p>
          <p>
            Vic&apos;s is where local people meet for casual lunches, weekend dinners, and private celebrations. We value familiar faces, new guests, and the easy kind of hospitality that makes a bar feel like part of the block.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl text-foreground sm:text-4xl">
            WHY VIC&apos;S?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-background">
                <Tv className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-body)] text-lg font-bold text-foreground">
                Quality Food
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                Fresh ingredients, house-ground burgers, and a menu built for real appetite.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-background">
                <Beer className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-body)] text-lg font-bold text-foreground">
                Cold Beer &amp; Specials
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                Full bar service, Happy Hour 10–6, and drinks that keep the night moving.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-background">
                <Music className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-body)] text-lg font-bold text-foreground">
                Neighborhood Fun
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                TouchTunes, pull tabs, and weekly events in a room that stays lively without losing its neighborhood feel.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-background">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-body)] text-lg font-bold text-foreground">
                For the Neighborhood
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                Families, friend groups, first dates, and flying solo — everyone is welcome at Vic&apos;s.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
