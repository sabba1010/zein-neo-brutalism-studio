import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  User,
  TrendingUp,
  Heart,
  Home,
  Quote,
} from "lucide-react";

import heroTeen from "@/assets/hero-teen.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Teen Counseling | Therapy That Gets Teenagers" },
      {
        name: "description",
        content:
          "Evidence-based therapy for teens 13-19 and their families in Folsom, CA and online. Anxiety, depression, ADHD, school stress and more.",
      },
      { property: "og:title", content: "Elite Teen Counseling | Therapy That Gets Teenagers" },
      {
        property: "og:description",
        content:
          "Evidence-based therapy for teens and support for the whole family. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Services", "For Parents", "About", "Locations", "Our Team", "Blog"];

const badges = [
  { icon: User, title: "Teen Focused", copy: "We specialize in what teens actually go through." },
  { icon: Star, title: "Proven Methods", copy: "Evidence-based therapies that actually work." },
  { icon: Users, title: "Family Involved", copy: "We partner with parents every step of the way." },
  {
    icon: TrendingUp,
    title: "Lasting Results",
    copy: "Building skills and confidence that last a lifetime.",
  },
];

const services = [
  { title: "Anxiety", copy: "Worry, panic, overthinking, social anxiety" },
  { title: "Depression", copy: "Sadness, lack of motivation, hopelessness" },
  { title: "School Stress", copy: "Academic pressure, overwhelm, burnout" },
  { title: "ADHD", copy: "Focus, organization, impulsivity" },
  { title: "Family Conflict", copy: "Communication, boundaries, parent-teen relationships" },
  { title: "Self Esteem", copy: "Confidence, identity, self-worth" },
];

const whoWeHelp = [
  { icon: User, title: "Teens", copy: "13-19 years old" },
  { icon: Users, title: "Parents", copy: "Guidance and tools" },
  { icon: Heart, title: "Families", copy: "Stronger connections" },
  { icon: Home, title: "In-Person & Online", copy: "Folsom, CA & throughout CA" },
];

const team = [
  {
    img: therapist1,
    name: "Andrea Merino",
    credential: "LMFT",
    specialties: "Anxiety, Depression, Family Therapy",
  },
  {
    img: therapist2,
    name: "Patrick Ezeli",
    credential: "LMFT",
    specialties: "Teen Therapy, Anxiety, OCD",
  },
  {
    img: therapist3,
    name: "Jacqueline Demuri",
    credential: "AMFT",
    specialties: "Trauma, Depression, Substance Use",
  },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`border-2 px-3 py-1 font-display text-2xl font-bold tracking-tight ${
          inverted ? "border-background text-background" : "border-foreground text-foreground"
        }`}
      >
        ELITE
      </span>
      <span className="font-display text-xs leading-tight font-semibold">
        TEEN
        <br />
        COUNSELING
      </span>
    </div>
  );
}

function BrutalButton({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "link";
}) {
  if (variant === "link") {
    return (
      <button className="group inline-flex items-center gap-2 border-b-2 border-foreground pb-1 font-display text-sm tracking-wide uppercase">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    );
  }
  return (
    <button className="group inline-flex items-center gap-6 bg-primary px-6 py-4 font-display text-sm tracking-widest text-primary-foreground uppercase transition-colors hover:bg-accent">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

function Dots() {
  return (
    <div className="grid grid-cols-5 gap-2 opacity-60" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-foreground" />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="grain min-h-screen bg-background">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="font-display text-xs tracking-widest uppercase transition-colors hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>
        <BrutalButton>Book a Free Consultation</BrutalButton>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-accent md:h-24" aria-hidden="true" />
        <div className="torn-bottom relative bg-background pb-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-6 pb-16 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-start gap-6">
                <h1 className="text-6xl leading-[0.92] sm:text-7xl">
                  Therapy
                  <br />
                  That Gets
                  <br />
                  <span className="underline-scribble text-accent">Teenagers.</span>
                </h1>
                <div className="mt-4 hidden rounded-[50%] border-2 border-foreground px-7 py-5 font-hand text-lg leading-tight tracking-wide uppercase sm:block">
                  Real support.
                  <br />
                  Real change.
                  <br />
                  Real life.
                </div>
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Evidence-based care for teens and support for the whole family. We help your family
                move forward and feel like themselves again.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-8">
                <BrutalButton>Book a Free Consultation</BrutalButton>
                <BrutalButton variant="link">Learn More</BrutalButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <span className="tape -top-4 left-8 h-10 w-28 -rotate-12" aria-hidden="true" />
              <span className="tape -bottom-3 -left-6 h-10 w-28 rotate-6" aria-hidden="true" />
              <div className="rotate-2 border-8 border-card bg-card p-1 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]">
                <img
                  src={heroTeen}
                  alt="Teenager sitting against a concrete wall"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="absolute -right-10 bottom-24 hidden lg:block">
                <Dots />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="border-y-2 border-foreground bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, title, copy }, i) => (
            <div
              key={title}
              className={`flex items-start gap-4 py-8 ${i > 0 ? "lg:border-l-2 lg:border-border lg:pl-8" : ""}`}
            >
              <span className="border-2 border-foreground p-2">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="text-base">{title}</h3>
                <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">How We Help</p>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            Tools for today.
            <br />
            <span className="underline-scribble">Change for tomorrow.</span>
          </h2>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
            We help teens navigate life's challenges with confidence and clarity.
          </p>
          <div className="mt-8">
            <BrutalButton variant="link">View All Services</BrutalButton>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t-2 border-border sm:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`border-b-2 border-border px-0 py-8 sm:px-8 ${
                i % 3 !== 0 ? "sm:border-l-2" : ""
              }`}
            >
              <h3 className="text-lg">{s.title}</h3>
              <span className="mt-2 block h-[3px] w-16 bg-accent" />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we help */}
      <section className="relative">
        <span
          className="tape absolute -top-6 right-24 z-10 h-12 w-36 rotate-12 bg-accent opacity-80"
          aria-hidden="true"
        />
        <div className="torn-both grain bg-foreground py-20 text-background">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-hand text-3xl normal-case">
              <span className="underline-scribble">Who We Help</span>
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {whoWeHelp.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base">{title}</h3>
                    <p className="mt-1 text-xs text-background/70">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">Our Team</p>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            Experienced. Empathetic.
            <br />
            <span className="underline-scribble">Here for you.</span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Our therapists specialize in teen mental health and use proven approaches to help your
            family build a better tomorrow.
          </p>
          <div className="mt-8">
            <BrutalButton variant="link">Meet Our Team</BrutalButton>
          </div>
        </div>

        <div>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <figure
                key={m.name}
                className={`border-8 border-card bg-card pb-5 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.6)] ${
                  i === 1 ? "-rotate-1" : i === 2 ? "rotate-1" : "rotate-[-2deg]"
                }`}
              >
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.credential}`}
                  width={700}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="px-3 pt-4 text-center">
                  <h3 className="text-sm">{m.name}</h3>
                  <p className="mt-1 font-display text-[11px] tracking-widest text-muted-foreground uppercase">
                    {m.credential}
                  </p>
                  <p className="mt-2 text-[11px] text-muted-foreground">{m.specialties}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <BrutalButton variant="link">View All Therapists</BrutalButton>
          </div>
        </div>
      </section>

      {/* Testimonial + CTA */}
      <section className="relative">
        <div className="torn-both grain bg-lavender py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex gap-6">
              <Quote className="h-10 w-10 shrink-0 fill-foreground/80 text-foreground/80" />
              <div>
                <blockquote className="max-w-2xl text-xl leading-relaxed">
                  Elite Teen Counseling changed our family's life. Our daughter finally has the
                  tools she needs, and our home feels peaceful again.
                </blockquote>
                <p className="mt-6 font-display text-xs tracking-widest uppercase">
                  — Parent of a Client
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="relative -mt-16 mb-20 border-2 border-border bg-card p-10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]">
            <span className="tape -top-5 -left-6 h-10 w-28 -rotate-12" aria-hidden="true" />
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="underline-scribble text-3xl">Ready to take the first step?</h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  A free consultation is a no-pressure way to see if we're the right fit for your
                  teen and your family.
                </p>
              </div>
              <div className="md:text-right">
                <BrutalButton>Book Your Free Consultation</BrutalButton>
                <p className="mt-6 text-sm font-medium">
                  Questions? Call or text{" "}
                  <a href="tel:2486066264" className="text-accent underline">
                    (248) 606-6264
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
              Helping teens overcome today's challenges and build a better tomorrow.
            </p>
          </div>
          <div className="md:border-l-2 md:border-border md:pl-8">
            <h3 className="text-sm">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l-2 md:border-border md:pl-8">
            <h3 className="text-sm">Locations</h3>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {["Folsom, CA", "El Dorado Hills, CA", "Granite Bay, CA", "Roseville, CA", "Telehealth in CA"].map(
                (l) => (
                  <li key={l}>{l}</li>
                ),
              )}
            </ul>
          </div>
          <div className="md:border-l-2 md:border-border md:pl-8">
            <h3 className="text-sm">Contact</h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (248) 606-6264
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@eliteteencounseling.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> In-Person & Online
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
