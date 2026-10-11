import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DetailCta } from "@/components/site/DetailCta";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Clock, Calendar, Tag } from "lucide-react";
import { getInsightBySlug, getRelatedInsights } from "@/content/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getInsightBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedInsights(params.slug, 3) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Chargeman" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    const url = `https://chargeman-energy-crafted.lovable.app/insights/${params.slug}`;
    return {
      meta: [
        { title: `${p.title} — Chargeman Insights` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: p.img },
        { property: "article:published_time", content: p.date },
        { property: "article:section", content: p.cat },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          articleSection: p.cat,
          author: { "@type": "Person", name: "Pankaj Manchanda" },
          publisher: { "@type": "Organization", name: "Chargeman Energy Ventures" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Article not found</h1>
      <Link to="/insights" className="mt-6 inline-block text-energy">Back to Insights</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40 pb-32 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-3 text-navy/60">{(error as Error).message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-energy px-6 py-3 text-sm font-semibold text-white">Try again</button>
    </div>
  ),
  component: InsightDetail,
});

function InsightDetail() {
  const { post, related } = Route.useLoaderData();
  return (
    <>
      <div className="h-16 lg:h-20" aria-hidden />
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Insights", to: "/insights" }, { label: post.title }]} />

      <section className="relative overflow-hidden bg-navy pb-12 pt-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-energy/20 px-3 py-1 font-semibold text-energy-soft">
                <Tag className="h-3 w-3" /> {post.cat}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto -mt-2 max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-2xl shadow-navy/20">
          <img src={post.img} alt={post.title} className="aspect-[16/8] w-full object-cover" loading="lazy" />
        </div>
      </div>

      <article className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-navy/75">
              {post.intro.map((p: string, i: number) => (<p key={i}>{p}</p>))}
            </div>
          </Reveal>

          {post.sections.map((sec: any, i: number) => (
            <Reveal key={i} delay={0.05}>
              <h2 className="mt-14 font-display text-3xl font-bold text-navy">{sec.heading}</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy/75">
                {sec.body.map((b: string, j: number) => (<p key={j}>{b}</p>))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.05}>
            <div className="mt-16 rounded-3xl border border-energy/20 bg-energy/5 p-8">
              <h3 className="font-display text-2xl font-bold text-navy">Key Takeaways</h3>
              <ul className="mt-5 space-y-3">
                {post.takeaways.map((t: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
                    <span className="text-navy/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">Related Insights</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Continue reading.</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((r: any, i: number) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <Link to="/insights/$slug" params={{ slug: r.slug }} className="group block overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.title} className="aspect-[16/10] w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-energy/10 px-3 py-1 font-semibold text-energy">{r.cat}</span>
                      <span className="text-navy/50">{r.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy group-hover:text-energy">{r.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DetailCta
        eyebrow="Need help with this topic?"
        title="Talk to Chargeman Energy Ventures."
        body="A short conversation is the fastest way to see how our perspective could apply to your organisation."
      />
    </>
  );
}
