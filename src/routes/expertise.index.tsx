import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { expertiseItems } from "@/content/expertise";

export const Route = createFileRoute("/expertise/")({
  head: () => ({
    meta: [
      { title: "Expertise — Chargeman Energy Ventures" },
      { name: "description", content: "Deep capability across Oil & Gas, EPC, Renewables and the energy transition." },
      { property: "og:title", content: "Expertise — Chargeman" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Full-spectrum energy capability, from upstream to net-zero." },
    ],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="Full-spectrum energy capability."
        subtitle="From upstream operations to the frontier of the energy transition — a single, integrated bench of expertise."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseItems.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 6) * 0.04}>
                <Link
                  to="/expertise/$slug"
                  params={{ slug: it.slug }}
                  className="group block h-full rounded-3xl border border-navy/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-energy/30 hover:shadow-xl hover:shadow-navy/10"
                >
                  {it.image && (
                    <img
                      src={it.image}
                      alt={it.imageAlt}
                      width={1672}
                      height={941}
                      loading="lazy"
                      className="mb-6 aspect-[7/4] w-full rounded-xl object-cover"
                    />
                  )}
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                    style={{ background: "linear-gradient(135deg,#071B34,#0E6FFF)" }}
                  >
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">{it.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-energy">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
