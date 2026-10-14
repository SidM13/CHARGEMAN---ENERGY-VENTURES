import {
  ArrowRight,
  Compass,
  Factory,
  Fuel,
  Gauge,
  Lightbulb,
  Sun,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

import energyAdvisoryImage from "@/assets/energy-advisory.jpg";
import energyAdvisorImage from "@/assets/energy-advisor-card.jpg";
import engineeringEpcImage from "@/assets/engineering-epc-card.jpg";
import energyTransitionStrategyImage from "@/assets/energy-transition-strategy-card.jpg";
import investmentTddImage from "@/assets/investment-tdd-card.jpg";
import lngGasValueChainImage from "@/assets/lng-gas-value-chain-card.jpg";
import marketingBusinessDevelopmentImage from "@/assets/marketing-business-development-card.jpg";
import pankajSiteImage from "@/assets/pankaj-site.jpg";
import pankajDeskImage from "@/assets/pankaj-desk.jpg";
import powerGridImage from "@/assets/power-grid-card.jpg";
import solarUtilityRenewablesImage from "@/assets/solar-utility-renewables-card.jpg";
import upstreamOilGasImage from "@/assets/upstream-oil-gas-card.jpg";

export type ExpertiseItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string; caption: string; focus?: string }[];
  overview: string[];
  process: { title: string; body: string }[];
  deliverables: string[];
  benefits: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
};

const defaultProcess = [
  { title: "Discovery", body: "Structured intake with executive stakeholders to map objectives, constraints, and existing capability." },
  { title: "Assessment", body: "Deep technical, commercial and regulatory diagnostic across the asset, program or portfolio." },
  { title: "Strategy", body: "Board-ready recommendations, sequencing, and investment cases with clear trade-offs." },
  { title: "Implementation", body: "Hands-on execution support with our team embedded alongside yours through mobilisation." },
  { title: "Monitoring", body: "KPI dashboards, milestone governance, and independent assurance against the plan." },
  { title: "Continuous Improvement", body: "Quarterly reviews, benchmarking and roadmap updates as market conditions evolve." },
];

const defaultDeliverables = [
  "Executive strategy report and board deck",
  "Technical & commercial assessment package",
  "Implementation roadmap with milestones and owners",
  "Risk register and mitigation playbook",
  "Performance dashboards and KPI framework",
  "Handover documentation and training",
];

const defaultIndustries = [
  "Utilities",
  "Manufacturing",
  "Commercial Buildings",
  "Government & Public Sector",
  "Renewable Energy",
  "Industrial Facilities",
];

function faqs(topic: string) {
  return [
    { q: `How is a typical ${topic} engagement structured?`, a: `We begin with a two-to-three week diagnostic, followed by a strategy sprint and, where required, an implementation phase that can run from three to eighteen months depending on scope.` },
    { q: "Who leads the engagement from Chargeman's side?", a: "Every engagement is personally led by PANKAJ MANCHANDA, Founder & CEO, supported by a curated bench of specialists drawn from our global network of operators, engineers and commercial advisors." },
    { q: "Do you work with international or India-only clients?", a: "Both. We serve energy majors, utilities, sovereign entities and private capital across India, the Middle East, Africa, South-East Asia and Europe." },
    { q: "How do you price your work?", a: "We work on fixed-scope, retainer, and success-linked models. Fees are agreed transparently at the outset, tied to milestones rather than time-and-materials whenever possible." },
    { q: "Can you integrate with our existing consultants or EPC partners?", a: "Yes. We routinely act as owner's advisor alongside global engineering firms, financial advisors and legal counsel — bringing sector depth and executive perspective." },
    { q: "How do you handle confidentiality?", a: "All engagements are governed by robust NDAs, segregated data rooms and strict information-barrier protocols. Confidentiality is fundamental to how we operate." },
  ];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    slug: "upstream-oil-gas",
    icon: Fuel,
    title: "Upstream Oil & Gas",
    image: upstreamOilGasImage,
    imageAlt: "PANKAJ MANCHANDA reviewing upstream oil and gas production operations with an engineer in a modern control room",
    body: "Exploration strategy, drilling optimisation, and production management for onshore and offshore assets.",
    overview: [
      "Upstream oil and gas remains the backbone of global energy supply, yet the operating environment has never been more complex. Capital discipline, ESG scrutiny and volatile commodity cycles demand a new class of advisory partner — one that combines deep operational experience with sharp commercial judgement.",
      "Chargeman brings four decades of hands-on upstream leadership across exploration, appraisal, development and production. We help operators optimise recovery, extend field life, and structure investment decisions that stand up to boardroom and investor scrutiny.",
      "From single-asset optimisation to multi-basin portfolio strategy, our engagements are executive-led, data-driven, and grounded in what actually works in the field.",
    ],
    process: defaultProcess,
    deliverables: [
      "Reserves and resources independent review",
      "Field development plan (FDP) evaluation",
      "Drilling and completions optimisation study",
      "Production system debottlenecking roadmap",
      "Portfolio ranking and capital allocation model",
      "Executive briefing pack for board approval",
    ],
    benefits: [
      "Increased ultimate recovery and NPV per barrel",
      "Lower drilling and lifting costs through benchmarking",
      "Faster investment decisions with board-ready cases",
      "Reduced HSE and operational risk exposure",
      "Improved partner and regulator alignment",
    ],
    industries: defaultIndustries,
    faqs: faqs("upstream oil & gas"),
  },
  {
    slug: "engineering-epc",
    icon: Factory,
    title: "Engineering & EPC",
    image: engineeringEpcImage,
    imageAlt: "PANKAJ MANCHANDA in a safety helmet reviewing engineering drawings and piping layouts with engineers at an EPC plant under construction",
    body: "End-to-end execution — feasibility, FEED, procurement, construction and commissioning.",
    overview: [
      "Complex energy infrastructure is where strategy meets steel. Getting engineering, procurement and construction right is the single largest determinant of a project's economics — and the single most common source of overruns.",
      "Chargeman advises owners, EPC contractors and financiers on how to structure, execute and govern complex programs so that they deliver on schedule, on budget and to the intended operational specification.",
      "Our engagements draw on real-world execution scars, not textbook theory — from oil & gas processing plants to renewable megaprojects.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Reduced schedule slippage across construction phases",
      "Improved contractor performance and claims management",
      "Lower total installed cost through smart procurement",
      "Predictable commissioning and start-up",
      "Documented lessons learned for future programs",
    ],
    industries: defaultIndustries,
    faqs: faqs("engineering & EPC"),
  },
  {
    slug: "marketing-business-development",
    icon: Lightbulb,
    title: "Marketing & Business Development",
    image: marketingBusinessDevelopmentImage,
    imageAlt: "PANKAJ MANCHANDA presenting an energy market growth strategy to business partners in a conference room",
    body: "Commercial strategy, offtake structuring, and market entry for energy majors.",
    overview: [
      "Great assets do not automatically become great businesses. Turning molecules and electrons into durable margins requires disciplined commercial strategy, deep customer insight, and structured offtake execution.",
      "Chargeman advises producers, traders and integrated majors on where to compete, how to price, and how to structure contracts that survive commodity cycles.",
      "We combine market intelligence with hands-on negotiation experience across LNG, refined products, power, renewables and emerging fuels.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Higher realised margins across the commercial book",
      "Structured offtake underpinning project finance",
      "New market access and customer diversification",
      "Robust contract portfolio resilient to shocks",
      "Faster time-to-first-revenue on new assets",
    ],
    industries: defaultIndustries,
    faqs: faqs("marketing & business development"),
  },
  {
    slug: "energy-consulting",
    icon: Compass,
    title: "Energy Advisory",
    image: energyAdvisorImage,
    imageAlt: "PANKAJ MANCHANDA leading an executive energy portfolio advisory session in a modern boardroom",
    gallery: [
      {
        src: pankajSiteImage,
        alt: "PANKAJ MANCHANDA in a white safety helmet and high-visibility vest standing inside a large underground project cavern with vehicles behind him",
        caption: "On site — PANKAJ MANCHANDA at an underground project cavern.",
      },
      {
        src: energyAdvisoryImage,
        alt: "PANKAJ MANCHANDA in a crude oil trading suite with live price charts, legal agreement documents and a framed merger handshake photograph on the desk",
        caption: "In the boardroom — PANKAJ MANCHANDA on crude trading, merger discussions and legal agreements.",
      },
      {
        src: pankajDeskImage,
        alt: "PANKAJ MANCHANDA seated at his executive office desk in a navy suit, a laptop and documents on the desk, glass-walled office behind him",
        caption: "At the desk — PANKAJ MANCHANDA, where advisory work is run day to day.",
      },
    ],
    body: "Board-level advisory on portfolio, regulation, and long-horizon capital allocation.",
    overview: [
      "Boards and executive committees increasingly face energy questions that cut across geology, engineering, geopolitics and capital markets. Traditional consulting frameworks struggle to hold all of these together.",
      "Chargeman was built for exactly this brief: independent, executive-grade advisory delivered by senior operators who have lived the decisions, not just analysed them.",
      "We serve as trusted counsel to CEOs, CFOs, boards and government leaders as they navigate energy strategy in a rapidly transitioning world.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Sharper strategic clarity at the board level",
      "Better-quality capital allocation decisions",
      "Improved regulatory and stakeholder positioning",
      "Clear line of sight to long-term value creation",
      "Confidence in navigating the energy transition",
    ],
    industries: defaultIndustries,
    faqs: faqs("energy advisory"),
  },
  {
    slug: "solar-utility-scale-renewables",
    icon: Sun,
    title: "Solar & Utility-Scale Renewables",
    image: solarUtilityRenewablesImage,
    imageAlt: "PANKAJ MANCHANDA and an engineer reviewing plans during a utility-scale solar farm inspection",
    body: "Feasibility, structuring and execution of large-scale solar and hybrid projects.",
    overview: [
      "Utility-scale solar has moved from novelty to backbone technology in less than a decade. But scale brings complexity — land, grid, offtake, financing and O&M all determine whether a project delivers on its promise.",
      "Chargeman advises developers, IPPs and investors on how to originate, structure and execute solar and hybrid programs that meet return thresholds while withstanding regulatory and market scrutiny.",
      "Our work spans single-site GW-scale plants, distributed C&I portfolios, and integrated solar hybrids.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Higher project IRRs through smart configuration",
      "Faster bid-to-financial-close cycles",
      "Reduced curtailment and revenue leakage",
      "Robust technical due diligence for lenders",
      "Long-term operational availability and yield",
    ],
    industries: defaultIndustries,
    faqs: faqs("utility-scale solar"),
  },
  {
    slug: "lng-gas-value-chain",
    icon: Waves,
    title: "LNG & Gas Value Chain",
    image: lngGasValueChainImage,
    imageAlt: "PANKAJ MANCHANDA reviewing operations with engineers at a coastal LNG terminal",
    body: "Liquefaction, regasification, and gas trading advisory across the value chain.",
    overview: [
      "LNG has become a truly global commodity, and gas remains the critical bridge fuel across most credible transition scenarios. Managing exposure, infrastructure and contracts across this chain is a strategic imperative.",
      "Chargeman advises producers, importers, utilities and traders on structuring, portfolio management, and infrastructure investment across liquefaction, shipping, regasification and downstream distribution.",
      "Our advisory is grounded in decades of transacting, operating and negotiating in real gas markets.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Optimised portfolio between long-term and spot",
      "Right-sized infrastructure investment decisions",
      "Improved trading margins and risk management",
      "Stronger negotiating positions with counterparties",
      "Strategic optionality across regions and buyers",
    ],
    industries: defaultIndustries,
    faqs: faqs("LNG and gas value chain"),
  },
  {
    slug: "investment-technical-due-diligence",
    icon: Gauge,
    title: "Investment & TDD",
    image: investmentTddImage,
    imageAlt: "PANKAJ MANCHANDA leading technical due diligence for an institutional energy investment",
    body: "Technical due diligence and investment advisory for institutional capital.",
    overview: [
      "Institutional capital deployed into energy assets demands a level of technical scrutiny that generalist advisors cannot deliver. The difference between a good return and a write-down often lies in details buried deep in engineering, geology or contracts.",
      "Chargeman provides independent technical due diligence and investment advisory for private equity, infrastructure funds, sovereign wealth funds and strategic acquirers.",
      "Our reports are lender-grade, investment-committee-ready, and unafraid to say what needs to be said.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Sharper valuation and downside protection",
      "Cleaner SPAs, warranties and CPs",
      "Identified upside and value-creation levers",
      "Confident IC approval and lender alignment",
      "Post-close 100-day plan for value capture",
    ],
    industries: defaultIndustries,
    faqs: faqs("investment & TDD"),
  },
  {
    slug: "power-grid",
    icon: Zap,
    title: "Power & Grid",
    image: powerGridImage,
    imageAlt: "PANKAJ MANCHANDA reviewing transmission and grid integration plans with power system engineers",
    body: "Power sector advisory across generation, transmission and integration.",
    overview: [
      "The power sector is being rewired in real time — by renewables, digitalisation and shifting demand patterns. Utilities, IPPs and grid operators need advisors who understand both the physics and the economics.",
      "Chargeman advises on generation portfolios, transmission investment, market design and grid integration of variable renewables.",
      "We bridge the historical divide between traditional utilities and the new energy stack.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "Optimised generation mix and dispatch strategy",
      "Reduced integration cost for renewables",
      "Better grid investment prioritisation",
      "Improved reliability and system economics",
      "Regulatory positioning for evolving markets",
    ],
    industries: defaultIndustries,
    faqs: faqs("power & grid"),
  },
  {
    slug: "energy-transition-strategy",
    icon: ArrowRight,
    title: "Energy Transition Strategy",
    image: energyTransitionStrategyImage,
    imageAlt: "PANKAJ MANCHANDA leading a net-zero energy transition roadmap workshop",
    body: "Net-zero pathways and enterprise-wide transition programs for energy majors.",
    overview: [
      "The energy transition is not a single decision — it is a decade-long, enterprise-wide reshaping of portfolios, capabilities and culture. Half-measures produce stranded assets; over-rotation destroys capital.",
      "Chargeman helps energy majors, utilities and industrials build integrated transition strategies that balance ambition with cash-flow reality.",
      "We are pragmatic, quantitative, and unafraid of trade-offs — because that is what real transformation requires.",
    ],
    process: defaultProcess,
    deliverables: defaultDeliverables,
    benefits: [
      "A defensible enterprise transition roadmap",
      "Portfolio rebalancing without value destruction",
      "New growth platforms in new-energy segments",
      "Improved investor narrative and cost of capital",
      "Cultural and organisational readiness for change",
    ],
    industries: defaultIndustries,
    faqs: faqs("energy transition"),
  },
];

const prioritySlugs = ["energy-consulting", "engineering-epc", "upstream-oil-gas"];
expertiseItems.sort((a, b) => {
  const rank = (slug: string) => {
    const index = prioritySlugs.indexOf(slug);
    return index < 0 ? prioritySlugs.length : index;
  };
  return rank(a.slug) - rank(b.slug);
});

export const featuredExpertise = expertiseItems.filter((item) =>
  [...prioritySlugs, "solar-utility-scale-renewables"].includes(item.slug),
);

export function getExpertiseBySlug(slug: string) {
  return expertiseItems.find((i) => i.slug === slug);
}
