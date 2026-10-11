import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { insightPosts } from "@/content/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Chargeman Energy Ventures" },
      { name: "description", content: "Perspectives on the energy transition, oil markets, renewables, policy and technology." },
      { property: "og:title", content: "Insights — Chargeman" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Editorial perspectives on the global energy transition." },
    ],
  }),
  component: InsightsPage,
});

const categories = ["All", "Energy Transition", "Oil Markets", "Renewables", "Policy", "Technology"] as const;

function InsightsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      insightPosts.filter(
        (p) =>
          (cat === "All" || p.cat === cat) &&
          p.title.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, cat],
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on the global energy transition."
        subtitle="Editorial views from the front lines of oil, gas, renewables, policy and technology."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search insights"
                aria-label="Search insights"
                className="w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy/40 focus:border-energy focus:outline-none focus:ring-4 focus:ring-energy/10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={
                    "rounded-full px-4 py-2 text-xs font-semibold transition-colors " +
                    (cat === c
                      ? "bg-navy text-white"
                      : "border border-navy/15 bg-white text-navy/70 hover:bg-navy/5")
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 6) * 0.04}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
                >
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="aspect-[16/10] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-energy/10 px-3 py-1 font-semibold text-energy">{p.cat}</span>
                      <span className="text-navy/50">{p.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-navy group-hover:text-energy">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-energy">
                      Read <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full py-16 text-center text-navy/60">No insights match your search.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
