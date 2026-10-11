import { Reveal } from "./Reveal";

export function DetailSection({
  eyebrow,
  title,
  children,
  tint = false,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "bg-surface py-20" : "py-20"}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-energy">{eyebrow}</p>
          )}
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
      {items.map((f, i) => (
        <details key={i} className="group px-6 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-display text-lg font-semibold text-navy marker:content-['']">
            {f.q}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-navy/15 text-navy/60 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-base leading-relaxed text-navy/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}