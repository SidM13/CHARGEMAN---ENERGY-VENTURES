import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Compass,
  Download,
  Factory,
  Gauge,
  Leaf,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";
import { Reveal, StatCounter } from "@/components/site/Reveal";
import hero from "@/assets/hero-energy.jpg";
import portraitAsset from "@/assets/pankaj-portrait.png.asset.json";
const portrait = portraitAsset.url;
import { featuredExpertise } from "@/content/expertise";
import { featuredProjects } from "@/content/projects";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chargeman Energy Ventures — 38 Years of Professional Excellence" },
      {
        name: "description",
        content:
          "Global energy consulting and engineering across Oil & Gas, Renewables and Infrastructure — led by PANKAJ MANCHANDA, Founder & CEO, former CGM of ONGC and ONGC Green Limited (OGL).",
      },
      { property: "og:title", content: "Chargeman Energy Ventures — 38 Years of Professional Excellence" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "Global energy consulting and engineering across Oil & Gas, Renewables and Infrastructure — led by PANKAJ MANCHANDA, Founder & CEO, former CGM of ONGC and ONGC Green Limited (OGL).",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Industries />
      <AboutPreview />
      <ExpertisePreview />
      <FeaturedProjects />
      <Philosophy />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden gradient-hero pt-24 text-white">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/60 to-navy" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-eco" />
              Global Energy Consulting & Ventures
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              38 Years of{" "}
              <span className="text-gradient-brand">Professional Excellence</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Delivering excellence across Oil & Gas, Power, Renewable Energy,
              Strategic Consulting and Sustainable Energy Ventures — for
              Government, PSUs and global energy leaders.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3.5 text-sm font-semibold shadow-lg shadow-energy/30 transition-all hover:bg-energy-soft hover:shadow-xl"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Profile
              </a>
            </div>
          </Reveal>
        </div>

        {/* Executive card */}
        <Reveal delay={0.3}>
          <div className="relative mx-auto w-full max-w-md lg:mt-8">
            <div
              className="absolute -inset-0.5 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "linear-gradient(135deg,#0E6FFF,#20C45A)" }}
            />
            <div className="glass-dark relative overflow-hidden rounded-3xl p-6">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={portrait}
                  alt="PANKAJ MANCHANDA, Founder & CEO, Chargeman Energy Ventures (OPC) Private Limited"
                  className="aspect-[4/3] w-full object-cover object-top"
                  width={782}
                  height={678}
                />
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.15em] text-eco">Leadership</div>
                <div className="mt-2 font-display text-xl font-bold tracking-wide">PANKAJ MANCHANDA</div>
                <div className="mt-1 text-sm font-semibold text-white/85">Founder &amp; CEO</div>
                <div className="mt-1 text-xs font-semibold tracking-wide text-white/60">DIN 11834127</div>
                <div className="text-sm text-white/70">
                  Chargeman Energy Ventures (OPC) Private Limited
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/80">
                  <span className="font-semibold text-white">Former Chief General Manager</span>
                  <br />
                  Oil and Natural Gas Corporation (ONGC) and ONGC Green Limited (OGL)
                </div>
                <div className="mt-3 flex items-start gap-2 text-xs text-white/65">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-energy-soft" />
                  <span>
                    Corporate Office · Manchanda House, House No 50, Sector 8, Faridabad
                    <br />
                    Branch Office · Manchanda House, House No 414, Sector 40, Gurugram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative -mt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gradient-hero relative overflow-hidden rounded-3xl p-10 shadow-2xl shadow-navy/20 md:p-14">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-energy/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-eco/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-4">
            <StatCounter value={38} suffix="+" label="Years of Experience" />
            <StatCounter value={20} suffix="+" label="Major Projects" />
            <StatCounter value={100} suffix="+" label="Operational Facilities" />
            <StatCounter value={3000} prefix="₹" suffix="+ Cr" label="Projects Managed" />
          </div>
        </div>
      </div>
    </section>
  );
}

const industries = [
  "Oil & Gas",
  "Renewables",
  "Infrastructure",
  "LNG",
  "Energy Transition",
];

function Industries() {
  return (
    <section className="border-y border-navy/5 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Sectors we lead
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((i) => (
            <span
              key={i}
              className="font-display text-lg font-semibold text-navy/60 transition-colors hover:text-navy md:text-xl"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section id="profile" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={engineers}
                alt="Engineers inspecting pipeline infrastructure"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={1400}
                height={1000}
              />
            </div>
            <div className="glass-card absolute -bottom-8 -right-6 hidden max-w-xs rounded-2xl p-5 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-energy/10 text-energy">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-navy/60">Leadership</div>
                  <div className="font-semibold text-navy">Former CGM, ONGC and OGL</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">
              About Chargeman
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              Four decades of shaping India's energy future.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              Chargeman Energy Ventures is founded on the operational excellence
              and strategic clarity of a career built at the heart of India's
              oil and gas industry — from production of oil and gas to
              marketing, and transitioning into new businesses in renewable
              energy. That domain knowledge of oil and gas projects, along with
              contract laws and advisory, is what we bring to complex energy
              projects worldwide.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Strategic Consulting", icon: Compass },
                { label: "Project Execution", icon: Factory },
                { label: "Energy Transition", icon: Leaf },
                { label: "Investment Advisory", icon: Gauge },
              ].map((it) => (
                <div
                  key={it.label}
                  className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-navy/5 text-navy">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-navy">{it.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-energy hover:text-navy"
            >
              Read the full story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExpertisePreview() {
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">
                Expertise
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                Deep capability across the entire energy value chain.
              </h2>
            </div>
          </Reveal>
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
          >
            View all expertise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExpertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <Link to="/expertise/$slug" params={{ slug: e.slug }} className="group block h-full rounded-3xl border border-navy/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-energy/30 hover:shadow-xl hover:shadow-navy/10">
                {e.image && <img src={e.image} alt={e.imageAlt} width={1408} height={1008} loading="lazy" className="mb-6 aspect-[7/4] w-full rounded-xl object-cover" />}
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                  style={{ background: "linear-gradient(135deg,#071B34,#0E6FFF)" }}
                >
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{e.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-energy opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">
                Featured Projects
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                Delivering complex energy programs, at scale.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Link
                to="/projects"
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-navy-deep"
              >
                <div className="overflow-hidden"><img
                  src={p.img}
                  alt={p.alt}
                  width={1408}
                  height={1008}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                /></div>
                <div className="flex flex-1 flex-col items-start p-6 text-primary-foreground md:p-8">
                  <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{p.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  { title: "Integrity", body: "Unwavering standards in every commitment we make." },
  { title: "Innovation", body: "Engineering-led problem solving for tomorrow's energy." },
  { title: "Leadership", body: "Executive experience shaping industry direction." },
  { title: "Sustainability", body: "Building the transition to clean, resilient energy." },
  { title: "Growth", body: "Value creation for stakeholders and partners." },
  { title: "Vision", body: "A clear line of sight to the energy future." },
];

function Philosophy() {
  return (
    <section className="gradient-hero relative overflow-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-eco">
              Leadership Philosophy
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Six principles that guide every engagement.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.04}>
              <div className="glass-dark h-full rounded-2xl p-8">
                <div className="font-display text-3xl font-bold text-white">{v.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "A rare combination of deep operational experience and strategic clarity. Chargeman brings executive credibility that moves complex energy programs forward.",
    name: "Public Sector Undertaking",
    role: "Board Advisor Engagement",
  },
  {
    quote:
      "Their advisory reshaped how we approached upstream partnerships. The impact on our project timeline and capex was immediate and measurable.",
    name: "Global EPC Contractor",
    role: "Program Advisor",
  },
  {
    quote:
      "For our renewable transition strategy, Chargeman provided the technical and commercial rigor we needed to build board-ready plans.",
    name: "Private Energy Group",
    role: "Strategy Partner",
  },
];

function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">
              Trusted by
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              Partnering with leaders across the global energy landscape.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-8">
                <div className="text-3xl leading-none text-energy">“</div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-navy/10 pt-4">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-navy/60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-12 text-white md:p-20"
          style={{
            background:
              "linear-gradient(135deg,#0E6FFF 0%,#071B34 60%,#20C45A 130%)",
          }}
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Let's Talk
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Let's build the future of energy together.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Engage Chargeman for advisory, project execution or strategic
              partnership. We work with organisations shaping the next era of
              global energy.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-lg hover:bg-white/90"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
