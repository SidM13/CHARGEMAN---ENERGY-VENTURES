import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy/5 bg-white">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 py-4 text-sm text-navy/60">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-navy/30" />}
              {c.to && !last ? (
                <Link to={c.to} className="hover:text-energy">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-navy" : ""} aria-current={last ? "page" : undefined}>
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}