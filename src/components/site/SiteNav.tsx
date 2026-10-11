import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/projects", label: "Projects" },
  { to: "/solutions", label: "Solutions" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const solid = scrolled || pathname.split("/").filter(Boolean).length > 1;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-black/5 bg-white/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white shadow-lg shadow-navy/15 ring-1 ring-black/5"
            aria-hidden
          >
            <img src={logoMark} alt="" className="h-[31px] w-[31px]" />
          </span>
          <span
            className={cn(
              "font-display text-[15px] font-bold uppercase leading-none tracking-tight transition-colors",
              solid ? "text-primary" : "text-white drop-shadow-[0_1px_6px_rgba(14,111,255,0.6)]",
            )}
          >
            Chargeman
            <br />
            <span className="text-[10px] font-semibold tracking-[0.12em]">
              Energy Ventures (OPC)
            </span>
            <br />
            <span className="text-[9px] font-medium tracking-[0.14em]">
              Private Limited
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-navy/70 hover:bg-navy/5 hover:text-navy"
                  : "text-white/80 hover:bg-white/10 hover:text-white",
              )}
              activeProps={{
                className: cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold",
                  solid ? "bg-navy/5 text-navy" : "bg-white/15 text-white",
                ),
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg shadow-energy/20 transition-all hover:shadow-xl hover:shadow-energy/30 md:inline-flex",
              "bg-energy text-white hover:bg-energy-soft",
            )}
          >
            Book Consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full lg:hidden",
              solid ? "text-navy hover:bg-navy/5" : "text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy hover:bg-navy/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-energy px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}