import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { projectItems } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Chargeman Energy Ventures" },
      { name: "description", content: "Solar EPC, solar panel dealership and distributorship, CBG, rotating equipment maintenance, and oil and gas projects from Chargeman Energy Ventures." },
      { property: "og:title", content: "Projects — Chargeman" },
      { property: "og:description", content: "Solar EPC, CBG, turbines, compressors, pumps, offshore platforms and onshore oil and gas installations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Delivering complex energy programs, at scale."
        subtitle="Solar EPC and panel distribution, compressed biogas, rotating equipment maintenance, and oil and gas infrastructure."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {projectItems.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.05}>
                <Link to="/contact" className="group flex h-full flex-col overflow-hidden rounded-3xl bg-navy-deep">
                  <div className="overflow-hidden"><img src={p.img} alt={p.alt} width={1408} height={1008} className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" loading="lazy" /></div>
                  <div className="flex flex-1 flex-col items-start p-6 text-primary-foreground md:p-8">
                    <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
                      {p.tag}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-primary-foreground/80">{p.body}</p>
                    <div className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-eco">
                      Discuss your project <ArrowUpRight className="h-4 w-4" />
                    </div>
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