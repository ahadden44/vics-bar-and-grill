import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, Utensils, Calendar, Beer, Clock, MapPin, Phone, Star } from "lucide-react";
import heroOutside from "@/assets/vics/vicsoutsidebanner.jpg";
import heroInside from "@/assets/vics/inside.jpg";
import heroBurger from "@/assets/vics/burger2.jpg";
import heroDrinks from "@/assets/vics/drinks.webp";
import heroPatio from "@/assets/vics/outdoor.jpg";
import logo from "@/assets/vics/logo.jpg";
import foodHero from "@/assets/vics/burger.jpg";

const heroSlides = [heroOutside, heroInside, heroBurger, heroDrinks, heroPatio];

const reviews = [
  {
    quote:
      "Amazing local burger/casual food spot. Come and seat yourself on their outdoor patio or inside to watch sports. Extremely quick service and the food is excellent! My family has been going for years!",
    author: "Google Reviewer",
  },
  {
    quote:
      "Best burgers in the area. Great place to watch the Twins or sports. Highly recommended this place.",
    author: "Chris O.",
  },
  {
    quote:
      "Love Vic's. Old school watering hole with some of the best burgers around the area. Great hang.",
    author: "Donnie L.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vic's Bar & Grill — Victoria Neighborhood Bar" },
      { name: "description", content: "Award-winning burgers, cold beer, and neighborhood fun in Victoria, MN. Happy hour 10–6 daily." },
      { property: "og:title", content: "Vic's Bar & Grill" },
      { property: "og:description", content: "Award-winning burgers, cold beer, and neighborhood fun in Victoria, MN." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden sm:min-h-[80vh]">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== slide}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background/85" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <img
            src={logo}
            alt="Vic's Bar & Grill"
            className="mx-auto mb-6 h-28 w-28 object-contain drop-shadow-2xl sm:h-36 sm:w-36"
            width={144}
            height={144}
          />
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Your Neighborhood Bar &amp; Grill
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[0.95] text-white sm:text-7xl md:text-8xl">
            AWARD-WINNING BURGERS,
            <br />
            <span className="text-gold">COLD BEER &amp; GOOD TIMES</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-white/80 sm:text-lg">
            Full bar, friendly staff, and a fun atmosphere. Our burgers are ground fresh daily with a signature spice blend that makes them worth the drive.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              View Menu
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Find Us
            </Link>
          </div>
          {/* Slide indicators */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === slide ? "w-8 bg-gold" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Clock className="h-6 w-6 text-gold" />
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Happy Hour Daily
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm font-medium text-foreground">
                10am – 6pm · $2.50 rails &amp; bottles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-gold" />
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Location
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm font-medium text-foreground">
                Victoria, MN
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-gold" />
            <div>
              <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Call Us
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm font-medium text-foreground">
                (952) 545-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group rounded-lg border-t-4 border-gold bg-card p-8 shadow-lg transition-transform hover:-translate-y-1">
            <Utensils className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-foreground">
              AWARD-WINNING BURGERS
            </h3>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
              Hand-pattied and ground fresh daily with a signature spice blend that makes them spectacular and worth the drive.
            </p>
            <Link
              to="/menu"
              className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Explore Menu <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="group rounded-lg border-t-4 border-gold bg-card p-8 shadow-lg transition-transform hover:-translate-y-1">
            <Calendar className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-foreground">
              PATIO &amp; SPORTS
            </h3>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
              Nice patio seating and a great spot to watch the game with TouchTunes, pull tabs, and cold beer.
            </p>
            <Link
              to="/events"
              className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              View Events <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="group rounded-lg border-t-4 border-gold bg-card p-8 shadow-lg transition-transform hover:-translate-y-1">
            <Beer className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-foreground">
              HAPPY HOUR
            </h3>
            <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
              Happy Hour 10–6 daily with $2.50 rails and bottles. Pull tabs, TouchTunes, and cold drinks keep every night buzzing.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Learn More <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              About Vic&apos;s
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-foreground sm:text-5xl">
              A LOCAL TRADITION
            </h2>
            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-muted-foreground">
              Vic&apos;s Bar &amp; Grill is a true neighborhood place, built around local owners, friendly staff, and the kind of regulars who make the room feel familiar the moment you walk in.
            </p>
            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-muted-foreground">
              From fresh-ground burgers to cold beer and live events, the goal has always been simple: make a spot people want to return to again and again.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-gold px-6 py-2.5 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Our Story <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <img
              src={foodHero}
              alt="Burger, wings, and beer at Vic's Bar & Grill"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl lg:aspect-auto"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* This Week — elevated panel */}
      <section className="bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Every Week
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-foreground sm:text-5xl">
            THIS WEEK AT VIC&apos;S
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-body)] text-muted-foreground">
            A quick look at what makes every week at Vic&apos;s feel like home.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { day: "Happy Hour", time: "10:00 AM – 6:00 PM Daily", desc: "$2.50 rails & bottles all day long." },
            { day: "Pull Tabs & TouchTunes", time: "Open to close", desc: "Jukebox favorites and easy bar-night fun." },
            { day: "Game Day", time: "All Weekend", desc: "Catch the game on the patio with cold beer." },
          ].map((w) => (
            <div key={w.day} className="relative overflow-hidden rounded-lg border border-border bg-deep p-6 shadow-lg">
              <div className="absolute left-0 top-0 h-full w-1 bg-gold" />
              <h3 className="font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-gold">
                {w.day}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-foreground">{w.time}</p>
              <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-gold-dark"
          >
            See All Events
          </Link>
        </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-foreground sm:text-5xl">
              WHAT OUR GUESTS ARE SAYING
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-body)] text-muted-foreground">
              Don&apos;t just take our word for it — here&apos;s what the neighborhood thinks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.author} className="rounded-lg border border-border bg-background p-6">
                <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-wider text-foreground">
                  {r.author} <span className="text-muted-foreground">· Google Review</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gold high-contrast panel */}
      <section className="bg-gold">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-primary-foreground sm:text-5xl">
            JOIN US TONIGHT
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-body)] text-primary-foreground/85">
            Walk-ins always welcome. Grab a seat, order a round, and make some memories.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-deep px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-background"
            >
              Get Directions
            </Link>
            <a
              href="tel:+19525454567"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/80 px-8 py-3 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" />
              Call to Reserve
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
