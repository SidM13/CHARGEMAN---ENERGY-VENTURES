import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DetailSection, Faqs } from "@/components/site/DetailSection";
import { DetailCta } from "@/components/site/DetailCta";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { getSolutionBySlug, solutionItems } from "@/content/solutions";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const item = getSolutionBySlug(params.slug);
    if (!item) throw notFound();
    return { item: { ...item, icon: undefined } };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Chargeman" }, { name: "robots", content: "noindex" }] };
    }
    const it = loaderData.item;
    const url = `https://chargeman-energy-crafted.lovable.app/solutions/${params.slug}`;
    return {
      meta: [
        { title: `${it.title} — Chargeman Solutions` },
        { name: "description", content: it.summary },
        { property: "og:title", content: `${it.title} — Chargeman` },
        { property: "og:description", content: it.summary },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Solution not found</h1>
      <Link to="/solutions" className="mt-6 inline-block text-energy">Back to Solutions</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-3 text-navy/60">{(error as Error).message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-white">Try again</button>
    </div>
  ),
  component: SolutionDetail,
});

function SolutionDetail() {
  const { item } = Route.useLoaderData();
  const { slug } = Route.useParams();
  const Icon = getSolutionBySlug(slug)!.icon;
  return (
    <>
      <div className="h-16 lg:h-20" aria-hidden />
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Solutions", to: "/solutions" }, { label: item.title }]} />

      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, #20C45A 0%, transparent 50%), radial-gradient(circle at 80% 80%, #0E6FFF 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-energy-soft">Solution</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{item.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3.5 text-sm font-semibold shadow-lg shadow-energy/30 hover:bg-energy-soft">
                Discuss Engagement <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white/80">
                <Clock className="h-4 w-4" /> {item.timeline}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DetailSection eyebrow="Executive Summary" title="A senior-led practice, not a slide deck.">
        <p className="text-lg leading-relaxed text-navy/70">{item.summary}</p>
      </DetailSection>

      <DetailSection eyebrow="Business Challenges" title="What our clients are working through." tint>
        <ul className="grid gap-3 md:grid-cols-2">
          {item.challenges.map((c: string, i: number) => (
            <li key={i} className="rounded-xl border border-navy/10 bg-white p-5 text-navy/75">{c}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Our Approach" title="How Chargeman solves the problem.">
        <ul className="space-y-3">
          {item.approach.map((a: string, i: number) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-navy/75">{a}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Key Features" title="What's inside the engagement." tint>
        <div className="grid gap-4 md:grid-cols-2">
          {item.features.map((f: string, i: number) => (
            <div key={i} className="rounded-2xl border border-navy/10 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">Feature 0{i + 1}</div>
              <div className="mt-2 font-display text-lg font-semibold text-navy">{f}</div>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection eyebrow="Implementation Roadmap" title="From kick-off to sustained value.">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {item.roadmap.map((s: any, i: number) => (
            <li key={i} className="rounded-2xl border border-navy/10 bg-white p-5">
              <div className="text-xs font-semibold text-energy">Phase {i + 1}</div>
              <div className="mt-2 font-display text-lg font-bold text-navy">{s.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-navy/60">{s.body}</p>
            </li>
          ))}
        </ol>
      </DetailSection>

      <DetailSection eyebrow="Client Deliverables" title="Tangible outputs on every engagement." tint>
        <ul className="grid gap-3 md:grid-cols-2">
          {item.deliverables.map((d: string, i: number) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-navy/75">{d}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Expected ROI" title="Business benefits our clients realise.">
        <ul className="grid gap-3 md:grid-cols-2">
          {item.roi.map((r: any, i: number) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
              <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
              <span className="text-navy/75">{r}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Industries" title="Sectors served.">
        <div className="flex flex-wrap gap-3">
          {item.industries.map((ind: string) => (
            <span key={ind} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy/75">{ind}</span>
          ))}
        </div>
      </DetailSection>

      <DetailSection eyebrow="FAQs" title="Answers to common questions." tint>
        <Faqs items={item.faqs} />
      </DetailSection>

      <DetailSection eyebrow="Related Solutions" title="You may also be interested in.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionItems.filter((x) => x.slug !== item.slug).slice(0, 3).map((x) => (
            <Link key={x.slug} to="/solutions/$slug" params={{ slug: x.slug }} className="group block rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <x.icon className="h-6 w-6 text-energy" />
              <div className="mt-3 font-display text-lg font-bold text-navy group-hover:text-energy">{x.title}</div>
              <p className="mt-1 text-sm text-navy/60">{x.body}</p>
            </Link>
          ))}
        </div>
      </DetailSection>

      <DetailCta
        title={`Let's structure a ${item.title.toLowerCase()} engagement.`}
        body="A short introductory call is the fastest way to see whether Chargeman is the right partner for your program."
      />
    </>
  );
}
