import { createFileRoute } from "@tanstack/react-router";
import { Clock, Music, Trophy, Beer, Star, Phone } from "lucide-react";
import eventsHero from "@/assets/vics/drinks.webp";

const weeklyEvents = [
  {
    day: "Every Day",
    title: "Pull Tabs & TouchTunes",
    time: "Open — Close",
    description: "Kick back with bar games, jukebox favorites, and an easy neighborhood crowd. Stop in anytime.",
    icon: Beer,
  },
  {
    day: "Tuesdays",
    title: "Trivia Night",
    time: "7:00 PM — 9:00 PM",
    description: "Teams of 2–6 welcome. Bring your best guesses and grab a table for the night. $2 per person entry.",
    icon: Trophy,
  },
  {
    day: "Saturdays",
    title: "Karaoke Night",
    time: "9:00 PM — Close",
    description: "Sing your heart out or cheer on your friends. Hundreds of songs in the system. No cover, tips appreciated.",
    icon: Music,
  },
  {
    day: "Sundays",
    title: "Game Day",
    time: "12:00 PM — Late",
    description: "Football season or playoffs — we've got the games, the specials, and the crowd for it.",
    icon: Star,
  },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Vic's Bar & Grill" },
      { name: "description", content: "Upcoming events, trivia nights, live music, and weekly specials at Vic's Bar & Grill." },
      { property: "og:title", content: "Events — Vic's Bar & Grill" },
      { property: "og:description", content: "Trivia, live music, watch parties, and more." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      {/* Page Header with photo background */}
      <section className="relative overflow-hidden border-b-4 border-gold py-24 sm:py-32">
        <img
          src={eventsHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.4em] text-gold">
            What&apos;s On
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            EVENTS &amp; ENTERTAINMENT
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-body)] text-white/85">
            Every week brings something new. Join us for trivia, karaoke, pull tabs, and TouchTunes.
          </p>
        </div>
      </section>

      {/* Weekly Events — elevated panel for contrast */}
      <section className="bg-panel">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Every Week
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-foreground sm:text-5xl">
              WEEKLY LINEUP
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {weeklyEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.title}
                  className="group relative overflow-hidden rounded-lg border border-border bg-deep p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-gold hover:shadow-2xl"
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-gold" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-gold text-primary-foreground shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="inline-block rounded bg-gold px-3 py-1 font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        {event.day}
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground">
                        {event.title}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 font-[family-name:var(--font-body)] text-sm font-semibold text-gold">
                        <Clock className="h-3.5 w-3.5" /> {event.time}
                      </p>
                      <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Private Events CTA — high-contrast gold panel */}
      <section className="bg-gold">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.4em] text-primary-foreground/70">
            Book the Room
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-primary-foreground sm:text-5xl">
            HOST YOUR EVENT AT VIC&apos;S
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-body)] text-primary-foreground/85">
            Birthdays, corporate gatherings, anniversaries — we can reserve the space just for you. Full bar, great menu options, and we&apos;ll make your guests feel special.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19525454567"
              className="inline-flex items-center gap-2 rounded-md bg-deep px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-background"
            >
              <Phone className="h-4 w-4" />
              Call to Inquire
            </a>
            <a
              href="mailto:info@vicsbarandgrill.com"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/80 px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
