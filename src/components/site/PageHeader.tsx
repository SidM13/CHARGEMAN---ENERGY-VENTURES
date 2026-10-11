import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-hero relative overflow-hidden pb-24 pt-40 text-white">
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-energy/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-eco/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-eco">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}