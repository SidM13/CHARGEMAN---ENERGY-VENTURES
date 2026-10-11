import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { solutionItems } from "@/content/solutions";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Energy Solutions — Chargeman" },
      { name: "description", content: "Advisory and delivery solutions across Oil & Gas, Power, Renewables, Investment and Hydrogen." },
      { property: "og:title", content: "Energy Solutions — Chargeman" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "End-to-end solutions across the energy value chain." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="End-to-end solutions across the energy value chain."
        subtitle="Capability areas designed to move complex energy programs from strategy to execution."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionItems.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 6) * 0.04}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                    style={{ background: "linear-gradient(135deg,#0E6FFF,#20C45A)" }}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">{s.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-energy">
                    Discuss engagement <ArrowRight className="h-3.5 w-3.5" />
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
