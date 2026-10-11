import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export function DetailCta({
  eyebrow = "Let's Talk",
  title,
  body,
  primary = { label: "Schedule Consultation", to: "/contact" },
  secondary = { label: "Contact Us", to: "/contact" },
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="pb-28 pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 text-white md:p-16"
          style={{ background: "linear-gradient(135deg,#0E6FFF 0%,#071B34 60%,#20C45A 130%)" }}
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">{eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-lg hover:bg-white/90"
              >
                <Calendar className="h-4 w-4" /> {primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}