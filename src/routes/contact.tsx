import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chargeman Energy Ventures" },
      { name: "description", content: "Book a consultation with Chargeman Energy Ventures. Advisory, project execution and strategic partnership across the global energy sector." },
      { property: "og:title", content: "Contact Chargeman Energy Ventures" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Book a consultation with our leadership team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the future of energy together."
        subtitle="Whether you're a government, PSU, EPC firm or private energy leader — we'd like to hear about your programs."
      />
      <section className="pb-24 pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-navy/10 bg-white p-8 shadow-xl shadow-navy/5 md:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-navy">Book a consultation</h2>
              <p className="mt-2 text-sm text-navy/60">We respond within two business days.</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div className="mt-5">
                <Field label="Area of interest" name="topic" placeholder="Oil & Gas advisory, renewables, hydrogen…" />
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-energy focus:outline-none focus:ring-4 focus:ring-energy/10"
                  placeholder="Tell us about your program…"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-energy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-energy/30 transition-colors hover:bg-energy-soft"
              >
                Send message <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="mt-4 text-sm font-medium text-eco">
                  Thank you — our team will be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-display text-lg font-bold text-navy">Office</h3>
                <div className="mt-6 space-y-5 text-sm text-navy/75">
                  <Row icon={MapPin} label="Corporate Office" value="Manchanda House, House No 50, Sector 8, Faridabad – 121006 (Haryana)" />
                  <Row icon={MapPin} label="Branch Office" value="Manchanda House, House No 414, Sector 40, Gurugram – 122003 (Haryana)" />
                  <Row icon={Mail} label="Email" value="chargemanenergy@gmail.com" href="mailto:chargemanenergy@gmail.com" />
                  <Row
                    icon={Phone}
                    label="Phone"
                    value={
                      <span className="flex flex-col gap-0.5">
                        <span>+91 99682 82769</span>
                        <span>+91 93199 08677</span>
                      </span>
                    }
                  />
                  <Row icon={Linkedin} label="LinkedIn" value="/in/pankajmanchanda9999" href="https://www.linkedin.com/in/pankajmanchanda9999/" />
                </div>
              </div>
              <div className="rounded-3xl border border-navy/10 bg-white p-5">
                <div className="text-xs font-semibold tracking-[0.08em] text-navy/55">
                  Corporate Office · Manchanda House, House No 50, Sector 8, Faridabad
                </div>
                <div className="mt-3 overflow-hidden rounded-2xl">
                  <iframe
                    title="Corporate office map"
                    src="https://www.google.com/maps?q=Manchanda+House,+House+No+50,+Sector+8,+Faridabad+121006,+Haryana&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="rounded-3xl border border-navy/10 bg-white p-5">
                <div className="text-xs font-semibold tracking-[0.08em] text-navy/55">
                  Branch Office · Manchanda House, House No 414, Sector 40, Gurugram
                </div>
                <div className="mt-3 overflow-hidden rounded-2xl">
                  <iframe
                    title="Branch office map"
                    src="https://www.google.com/maps?q=House+No+414,+Sector+40,+Gurugram+122003,+Haryana&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-navy/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-energy focus:outline-none focus:ring-4 focus:ring-energy/10"
      />
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/10 text-energy">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs font-semibold tracking-[0.06em] text-navy/55">{label}</div>
        <div className="mt-0.5 font-medium text-navy">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}