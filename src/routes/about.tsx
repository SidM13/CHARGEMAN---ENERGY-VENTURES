import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapPin } from "lucide-react";
import portrait from "@/assets/pankaj-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chargeman Energy Ventures" },
      {
        name: "description",
        content:
          "Chargeman Energy Ventures is founded on 38 years of professional excellence. Meet PANKAJ MANCHANDA, Founder & CEO — former Chief General Manager, Oil and Natural Gas Corporation (ONGC) and ONGC Green Limited (OGL).",
      },
      { property: "og:title", content: "About Chargeman Energy Ventures" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "Four decades of shaping India's energy future.",
      },
    ],
  }),
  component: AboutPage,
});

const journey = [
  { year: "1987", title: "Career Begins", body: "Joined ONGC — foundation years across upstream operations." },
  { year: "1995-2010", title: "Operational Leadership", body: "Progressive leadership roles across major field, EPC and marketing functions." },
  { year: "2010-2020", title: "Chief General Manager, ONGC & OGL", body: "Executive leadership of complex energy programs at Oil and Natural Gas Corporation (ONGC) and ONGC Green Limited (OGL)." },
  { year: "2020", title: "Strategic Consulting", body: "Advisory to PSUs, Government and private energy majors on transition strategy." },
  { year: "2024", title: "Chargeman Energy Ventures", body: "Founded to deliver executive-grade energy advisory and ventures worldwide." },
  { year: "Future", title: "Energy Transition", body: "Scaling investments in renewables, hydrogen and sustainable ventures." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Four decades of shaping India's energy future."
        subtitle="A career built at the heart of the energy industry — now dedicated to helping organisations navigate the most important transition of our time."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-navy/10">
                <img src={portrait} alt="PANKAJ MANCHANDA, Founder & CEO" className="aspect-[4/3] w-full object-cover object-top" />
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">Founder &amp; CEO</div>
                <div className="mt-2 font-display text-2xl font-bold tracking-wide text-navy">PANKAJ MANCHANDA</div>
                <div className="mt-1 text-sm text-navy/70">
                  Founder &amp; CEO, Chargeman Energy Ventures (OPC) Private Limited
                </div>
                <div className="mt-1 text-xs font-semibold tracking-wide text-navy/55">DIN 11834127</div>
                <div className="mt-1 text-sm text-navy/70">
                  Former Chief General Manager, Oil and Natural Gas Corporation (ONGC) and ONGC
                  Green Limited (OGL)
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-navy/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                  <span>
                    Corporate Office · House No 50, Sector 8, Faridabad – 121006 (Haryana)
                    <br />
                    Branch Office · House No 414, Sector 40, Gurugram – 122003 (Haryana)
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">The story</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy/70">
                <p>
                  Chargeman Energy Ventures was founded to bring executive-grade
                  operational and strategic insight to the world's most complex
                  energy programs. The company is built on 38 years of front-line
                  leadership at India's largest energy institution.
                </p>
                <p>
                  We work with Government, PSUs, EPC firms and private energy
                  companies — advising on upstream strategy, EPC execution,
                  renewable transition and long-horizon investment planning.
                </p>
                <p>
                  Our conviction is simple: the energy transition will be won by
                  leaders who combine deep technical expertise with clear
                  commercial thinking. That is what we bring to every engagement.
                </p>
              </div>
            </Reveal>

            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold text-navy">Career Journey</h3>
              <div className="mt-8 space-y-6 border-l-2 border-navy/10 pl-6">
                {journey.map((j, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-energy ring-4 ring-white" />
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-energy">{j.year}</div>
                      <div className="mt-1 font-display text-xl font-bold text-navy">{j.title}</div>
                      <p className="mt-1 text-navy/70">{j.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
