import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="gradient-hero relative overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow-lg shadow-black/20 ring-1 ring-white/25">
                <img src={logoMark} alt="" className="h-8 w-8" />
              </span>
              <span className="font-display text-[17px] font-bold uppercase leading-none">
                Chargeman
                <br />
                <span className="text-[11px] font-semibold tracking-[0.12em] opacity-80">
                  Energy Ventures (OPC)
                </span>
                <br />
                <span className="text-[10px] font-medium tracking-[0.14em] opacity-70">
                  Private Limited
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Chargeman Energy Ventures (OPC) Private Limited — delivering excellence
              across Oil & Gas, Power, Renewables, and the global energy transition.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy-soft" />
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.06em] text-white/55">
                    Corporate Office
                  </span>
                  House No 50, Sector 8, Faridabad – 121006 (Haryana)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy-soft" />
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.06em] text-white/55">
                    Branch Office
                  </span>
                  House No 414, Sector 40, Gurugram – 122003 (Haryana)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-energy-soft" />
                <a href="mailto:chargemanenergy@gmail.com" className="hover:text-white">
                  chargemanenergy@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-energy-soft" />
                <span className="flex flex-col">
                  <span>+91 99682 82769</span>
                  <span>+91 93199 08677</span>
                </span>
              </div>
            </div>
          </div>

          <FooterCol
            title="Company"
            items={[
              { to: "/about", label: "About" },
              { to: "/expertise", label: "Expertise" },
              { to: "/insights", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Solutions"
            items={[
              { to: "/solutions", label: "Oil & Gas" },
              { to: "/solutions", label: "Power" },
              { to: "/solutions", label: "Renewables" },
              { to: "/solutions", label: "Advisory" },
            ]}
          />
          <FooterCol
            title="Projects"
            items={[
              { to: "/projects", label: "All Projects" },
              { to: "/expertise", label: "Expertise" },
              { to: "/solutions", label: "Consulting" },
            ]}
          />
          <FooterCol
            title="Legal"
            items={[
              { to: "/", label: "Privacy" },
              { to: "/", label: "Terms" },
              { to: "/", label: "Compliance" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Chargeman Energy Ventures (OPC) Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/pankajmanchanda9999/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-sm text-white/75">
        {items.map((it, i) => (
          <li key={i}>
            <Link to={it.to} className="hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
