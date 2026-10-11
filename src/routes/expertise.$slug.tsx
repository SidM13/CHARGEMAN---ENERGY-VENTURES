import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DetailSection, Faqs } from "@/components/site/DetailSection";
import { DetailCta } from "@/components/site/DetailCta";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getExpertiseBySlug, expertiseItems } from "@/content/expertise";

export const Route = createFileRoute("/expertise/$slug")({
  loader: ({ params }) => {
    const item = getExpertiseBySlug(params.slug);
    if (!item) throw notFound();
    return { item: { ...item, icon: undefined } };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Chargeman" }, { name: "robots", content: "noindex" }] };
    }
    const it = loaderData.item;
    const url = `https://chargeman-energy-crafted.lovable.app/expertise/${params.slug}`;
    return {
      meta: [
        { title: `${it.title} — Chargeman Expertise` },
        { name: "description", content: it.body },
        { property: "og:title", content: `${it.title} — Chargeman` },
        { property: "og:description", content: it.body },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Expertise not found</h1>
      <Link to="/expertise" className="mt-6 inline-block text-energy">Back to Expertise</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-3 text-navy/60">{(error as Error).message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-white">Try again</button>
    </div>
  ),
  component: ExpertiseDetail,
});

function ExpertiseDetail() {
  const { item } = Route.useLoaderData();
  const { slug } = Route.useParams();
  const Icon = getExpertiseBySlug(slug)!.icon;
  const gallery = item.gallery;
  return (
    <>
      <div className="h-16 lg:h-20" aria-hidden />
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Expertise", to: "/expertise" },
          { label: item.title },
        ]}
      />
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 20%, #0E6FFF 0%, transparent 50%), radial-gradient(circle at 80% 80%, #20C45A 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-energy-soft">Expertise</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{item.body}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3.5 text-sm font-semibold shadow-lg shadow-energy/30 hover:bg-energy-soft">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <DetailSection eyebrow="In the Field" title="From the project site to the trading desk.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" style={{ objectPosition: g.focus ?? "center" }} />
                <figcaption className="px-5 py-4 text-sm leading-relaxed text-navy/60">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </DetailSection>
      )}

      <DetailSection eyebrow="About the Service" title="What this practice does — and why it matters.">
        <div className="space-y-5 text-lg leading-relaxed text-navy/70">
          {item.overview.map((p: string, i: number) => (<p key={i}>{p}</p>))}
        </div>
      </DetailSection>

      <DetailSection eyebrow="Our Process" title="How we engage." tint>
        <ol className="grid gap-6 md:grid-cols-2">
          {item.process.map((s: any, i: number) => (
            <li key={i} className="rounded-2xl border border-navy/10 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-energy">Step {i + 1}</div>
              <h3 className="mt-2 font-display text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.body}</p>
            </li>
          ))}
        </ol>
      </DetailSection>

      <DetailSection eyebrow="Deliverables" title="What you receive.">
        <ul className="grid gap-3 md:grid-cols-2">
          {item.deliverables.map((d: string, i: number) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-navy/75">{d}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Benefits" title="Measurable outcomes." tint>
        <ul className="grid gap-3 md:grid-cols-2">
          {item.benefits.map((b: string, i: number) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
              <span className="text-navy/75">{b}</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Industries Served" title="Sectors where we deliver.">
        <div className="flex flex-wrap gap-3">
          {item.industries.map((ind: string) => (
            <span key={ind} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy/75">{ind}</span>
          ))}
        </div>
      </DetailSection>

      <DetailSection eyebrow="FAQs" title="Common questions." tint>
        <Faqs items={item.faqs} />
      </DetailSection>

      <DetailSection eyebrow="Explore" title="Other expertise areas.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.filter((x) => x.slug !== item.slug).slice(0, 3).map((x) => (
            <Link key={x.slug} to="/expertise/$slug" params={{ slug: x.slug }} className="group block rounded-2xl border border-navy/10 bg-white p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all">
              <x.icon className="h-6 w-6 text-energy" />
              <div className="mt-3 font-display text-lg font-bold text-navy group-hover:text-energy">{x.title}</div>
              <p className="mt-1 text-sm text-navy/60">{x.body}</p>
            </Link>
          ))}
        </div>
      </DetailSection>

      <DetailCta
        title={`Ready to bring executive depth to your ${item.title.toLowerCase()} program?`}
        body="Schedule a confidential conversation with PANKAJ MANCHANDA, Founder & CEO, and the Chargeman team."
      />
    </>
  );
}
