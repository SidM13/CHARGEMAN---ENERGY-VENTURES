import {
  Briefcase,
  Compass,
  Fuel,
  Gauge,
  LineChart,
  ShieldCheck,
  Sun,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type SolutionItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  body: string;
  summary: string;
  challenges: string[];
  approach: string[];
  features: string[];
  roadmap: { title: string; body: string }[];
  deliverables: string[];
  roi: string[];
  caseStudy: { client: string; scope: string; outcome: string };
  industries: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
};

const defaultRoadmap = [
  { title: "Mobilise", body: "Kick-off, data room, stakeholder alignment and governance setup in the first two weeks." },
  { title: "Diagnose", body: "Structured technical, commercial and organisational diagnostic against benchmarks." },
  { title: "Design", body: "Solution architecture, business case and executive endorsement." },
  { title: "Deliver", body: "Phased implementation with Chargeman embedded alongside the client team." },
  { title: "Sustain", body: "Handover, capability transfer and ongoing assurance." },
];

const defaultIndustries = [
  "Utilities",
  "Oil & Gas Majors",
  "Renewable IPPs",
  "Sovereign & Public Sector",
  "Private Equity & Infrastructure Funds",
  "Heavy Industry",
];

function faqs(topic: string) {
  return [
    { q: `What is the smallest engagement you'll take on for ${topic}?`, a: "We typically start with a focused four-to-six week diagnostic before scaling up. Nothing is too small if it is genuinely strategic." },
    { q: "Do you take equity or success fees?", a: "In select cases, yes. Where interests are clearly alignable and disclosure is clean, we can structure success-linked or equity-linked compensation." },
    { q: "How senior is the team on the ground?", a: "Every engagement is personally led by PANKAJ MANCHANDA, Founder & CEO, with senior specialists — not junior analysts — carrying the day-to-day workload." },
    { q: "Can we retain you as an ongoing advisor?", a: "Yes. Many clients keep Chargeman on a quarterly retainer for board, IC and strategic sounding-board support." },
    { q: "How do you protect confidentiality across competing clients?", a: "Strict information barriers, conflict checks at intake, and dedicated teams per mandate. We routinely serve competing clients in the same sector without any spillover." },
    { q: "Do you provide references from prior clients?", a: "Yes, on request and with mutual consent. Most of our work is referral-driven, so this is a normal part of our process." },
  ];
}

export const solutionItems: SolutionItem[] = [
  {
    slug: "oil-gas-advisory",
    icon: Fuel,
    title: "Oil & Gas Advisory",
    body: "Portfolio, operations, and execution strategy across upstream and midstream.",
    summary: "A premium advisory practice for operators, investors and Government navigating the next chapter of oil and gas — where capital discipline, ESG and geopolitics have redrawn the rules.",
    challenges: [
      "Volatile commodity prices squeezing project economics",
      "Rising scrutiny from investors and regulators on ESG",
      "Ageing infrastructure and unplanned downtime risk",
      "Talent gaps as senior operators retire",
      "Uncertain long-run demand for hydrocarbons",
    ],
    approach: [
      "Portfolio review to rank assets on NPV, cash generation and strategic fit",
      "Operational benchmarking against global top-quartile performers",
      "Capital allocation model reflecting price bands and cost of capital",
      "Executive-level narrative for the board and capital markets",
    ],
    features: [
      "Board-grade portfolio ranking model",
      "Independent reserves and resources review",
      "Operational excellence diagnostic",
      "M&A and divestment strategy",
      "ESG integration into planning",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Portfolio strategy report and IC pack",
      "Asset-by-asset value creation plans",
      "Divestment and acquisition long-list",
      "Capital and operating cost benchmarks",
      "Board and investor communications toolkit",
    ],
    roi: [
      "8-15% uplift in portfolio NPV over five years",
      "10-20% reduction in unit lifting costs",
      "Improved credit and equity story with markets",
      "Sharper capital discipline and cash generation",
    ],
    caseStudy: {
      client: "National Oil Company, MENA region",
      scope: "Full portfolio review and capital reallocation strategy across 40+ assets over nine months.",
      outcome: "Reallocated USD 4B of capex over five years, exited two non-core basins and unlocked a 12% uplift in modelled portfolio NPV.",
    },
    industries: defaultIndustries,
    timeline: "3-12 months, with quarterly retainer options.",
    faqs: faqs("oil & gas advisory"),
  },
  {
    slug: "power-sector-solutions",
    icon: Gauge,
    title: "Power Sector Solutions",
    body: "Generation, transmission and grid integration advisory.",
    summary: "End-to-end advisory for utilities, IPPs and system operators building the power system of the 2030s — cleaner, smarter and dramatically more capital-intensive.",
    challenges: [
      "Rapid renewables build-out straining grid stability",
      "Ageing transmission and distribution assets",
      "Uncertain merit-order and market design",
      "Escalating capex and financing needs",
      "Regulatory frameworks lagging technology change",
    ],
    approach: [
      "Integrated generation-transmission-demand modelling",
      "Investment prioritisation under multiple market scenarios",
      "Regulatory positioning and stakeholder strategy",
      "Technology and vendor selection support",
    ],
    features: [
      "System-level capacity expansion planning",
      "Grid integration and flexibility roadmap",
      "Market and tariff design advisory",
      "Hybrid asset structuring",
      "Digital operations and asset management",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Long-term system plan (10-20 years)",
      "Investment prioritisation matrix",
      "Regulatory position papers",
      "Tender and PPA structuring support",
      "Executive briefings and stakeholder decks",
    ],
    roi: [
      "5-15% reduction in system capex over the plan",
      "Higher reliability and lower congestion cost",
      "Better returns on renewable assets",
      "Improved standing with regulators and financiers",
    ],
    caseStudy: {
      client: "State-owned utility, South Asia",
      scope: "Twenty-year integrated resource plan with a focus on 40% renewables penetration and grid integration.",
      outcome: "Approved by regulator; capex plan of USD 6B rationalised by 11% with improved reliability targets.",
    },
    industries: defaultIndustries,
    timeline: "4-18 months depending on scope.",
    faqs: faqs("power sector"),
  },
  {
    slug: "renewables-programs",
    icon: Sun,
    title: "Renewables Programs",
    body: "Utility-scale solar — end-to-end delivery.",
    summary: "Program-level advisory for developers and investors building GW-scale renewables portfolios across solar and hybrids.",
    challenges: [
      "Compressed development timelines vs. permitting reality",
      "Land, grid connection and community risk",
      "Volatile equipment pricing and supply chain risk",
      "Aggressive bid tariffs squeezing returns",
      "Complex financing and offtake structures",
    ],
    approach: [
      "Pipeline triage and prioritisation by risk-adjusted IRR",
      "Standardised playbooks across development, EPC and O&M",
      "Sharpened bid economics and structuring",
      "Program-level governance and performance tracking",
    ],
    features: [
      "Pipeline value-at-risk analysis",
      "Standardised EPC and O&M contracting playbook",
      "Bid optimisation and pricing support",
      "Grid and interconnection strategy",
      "Hybrid architecture design",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Program strategy and pipeline map",
      "Standard contracts and technical specs library",
      "Bid support materials for each opportunity",
      "Performance dashboards for the whole portfolio",
      "Quarterly steering-committee packs",
    ],
    roi: [
      "50-150 bps uplift in program-average equity IRR",
      "20-30% reduction in bid preparation cycle time",
      "Higher win-rate on strategic tenders",
      "Long-term operational availability > 98.5%",
    ],
    caseStudy: {
      client: "Renewables IPP, India",
      scope: "Structuring a 5 GW multi-technology pipeline over 24 months with standardised contracting and bid economics.",
      outcome: "Won 3.2 GW of new capacity at leading tariffs; equity IRR improved by ~110 bps program-wide.",
    },
    industries: defaultIndustries,
    timeline: "6-24 months, program-based.",
    faqs: faqs("renewables programs"),
  },
  {
    slug: "energy-advisory",
    icon: Compass,
    title: "Energy Advisory",
    body: "Board-level strategy for Government and energy majors.",
    summary: "Independent, executive-grade advisory for CEOs, boards and Government confronting the deepest strategic questions in energy.",
    challenges: [
      "Long-horizon uncertainty in demand and technology",
      "Balancing legacy assets with transition ambition",
      "Investor and stakeholder pressure at record highs",
      "Complex, cross-border regulatory landscapes",
      "Talent and capability gaps at the top of the house",
    ],
    approach: [
      "Scenario-based long-range strategy work",
      "Portfolio, capability and organisational review",
      "Direct engagement with boards and executive committees",
      "Ongoing advisory relationship at CEO / Chair level",
    ],
    features: [
      "Long-range strategy and scenario planning",
      "Board effectiveness and governance reviews",
      "Executive coaching and succession planning",
      "Investor and stakeholder engagement strategy",
      "M&A and JV strategy at group level",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Group strategy blueprint",
      "Board and executive alignment memo",
      "Investor narrative and disclosure framework",
      "Organisational and capability roadmap",
      "Quarterly board briefings",
    ],
    roi: [
      "Improved strategic coherence across the enterprise",
      "Stronger capital markets narrative",
      "Better board decisions on critical trade-offs",
      "Reduced strategic drift and reactive decision-making",
    ],
    caseStudy: {
      client: "Integrated energy major, Asia",
      scope: "Long-range strategy refresh with the board and executive team, informing a five-year capital plan.",
      outcome: "Adopted strategy realigned USD 12B of planned capex, with new business lines contributing 25% of NPV by 2030.",
    },
    industries: defaultIndustries,
    timeline: "3-12 months plus ongoing retainer.",
    faqs: faqs("energy advisory"),
  },
  {
    slug: "project-management",
    icon: Briefcase,
    title: "Project Management",
    body: "Executive-grade PMO for complex, multi-billion energy programs.",
    summary: "An owner-side PMO capability designed for mega-projects where cost, schedule and reputation are on the line.",
    challenges: [
      "Concurrent workstreams across disciplines and geographies",
      "Contractor and vendor performance risk",
      "Complex interfaces with regulators and communities",
      "Cost overruns and schedule slippage",
      "Weak visibility for owners and boards",
    ],
    approach: [
      "Set up an owner's PMO with clear governance and cadence",
      "Deploy integrated cost, schedule and risk controls",
      "Independent assurance and stage-gate reviews",
      "Escalation discipline and executive reporting",
    ],
    features: [
      "Integrated master schedule and cost model",
      "Risk and interface management framework",
      "Contractor performance dashboards",
      "Stage-gate governance and assurance",
      "Executive and board reporting cadence",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "PMO charter and governance framework",
      "Integrated schedule, cost and risk models",
      "Contractor performance reports",
      "Independent assurance memos at each stage",
      "Monthly board-ready dashboard",
    ],
    roi: [
      "5-20% capex savings vs. baseline",
      "Reduced schedule slippage on critical path",
      "Predictable start-up and early revenue",
      "Fewer claims and disputes at handover",
    ],
    caseStudy: {
      client: "Global energy owner, USD 3B refinery upgrade",
      scope: "Owner's PMO across three-year execution program spanning engineering, procurement and construction.",
      outcome: "Delivered ahead of revised schedule with 7% capex savings and zero material safety incidents.",
    },
    industries: defaultIndustries,
    timeline: "12-48 months, program duration.",
    faqs: faqs("project management"),
  },
  {
    slug: "investment-advisory",
    icon: LineChart,
    title: "Investment Advisory",
    body: "Structuring, valuation and investor support across energy assets.",
    summary: "Buy-side and sell-side advisory for investors, developers and corporates transacting in energy assets.",
    challenges: [
      "Valuation uncertainty under multiple transition scenarios",
      "Complex SPA and risk allocation negotiations",
      "Sponsor and lender expectations to reconcile",
      "Regulatory and consent risk at close",
      "Post-close integration and value capture",
    ],
    approach: [
      "Independent technical and commercial diagnostics",
      "Valuation and financial structuring support",
      "SPA and warranty negotiation input",
      "100-day post-close value creation plan",
    ],
    features: [
      "Independent commercial and technical review",
      "Valuation model and sensitivity library",
      "SPA input and negotiation coaching",
      "Lender-ready due diligence pack",
      "Post-close value capture roadmap",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "IC-ready investment memo",
      "Full valuation and modelling package",
      "Lender diligence responses",
      "Negotiation strategy for SPA and CPs",
      "Post-close 100-day plan",
    ],
    roi: [
      "Sharper entry price and downside protection",
      "Faster path to signing and close",
      "Post-close plan captures identified upside",
      "Improved lender terms and cost of debt",
    ],
    caseStudy: {
      client: "Infrastructure fund, Europe",
      scope: "Buy-side advisor on a USD 1.4B renewables platform acquisition across four markets.",
      outcome: "Renegotiated entry price down by 6%, secured lender-friendly structure and 100-day plan delivered on time.",
    },
    industries: defaultIndustries,
    timeline: "3-9 months transaction cycle.",
    faqs: faqs("investment advisory"),
  },
  {
    slug: "technical-due-diligence",
    icon: ShieldCheck,
    title: "Technical Due Diligence",
    body: "Independent TDD for capital deployment and M&A.",
    summary: "Lender- and IC-grade technical diligence for oil & gas, power and renewables assets — trusted by institutional investors and lenders worldwide.",
    challenges: [
      "Compressed diligence timelines vs. asset complexity",
      "Aggressive sponsor projections to test",
      "Regulatory, HSE and permitting exposure",
      "Contractual gaps in EPC, O&M and PPA",
      "Difficult risk allocation between parties",
    ],
    approach: [
      "Site visits, data-room review and management interviews",
      "Model reconstruction and sensitivity testing",
      "Contractual and regulatory review",
      "Clear rating on risks with materiality and mitigation",
    ],
    features: [
      "Independent site and asset condition review",
      "Reserves / resource / yield validation",
      "EPC, O&M and PPA contract review",
      "HSE and regulatory diligence",
      "Lender-standard TDD report",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Full TDD report to lender standard",
      "Model overlay and sensitivity pack",
      "Contractual risk register",
      "Site visit report and photographs",
      "Executive summary for IC",
    ],
    roi: [
      "Downside protection through better risk pricing",
      "Faster syndication with lender-standard report",
      "Higher-conviction IC decisions",
      "Stronger negotiating hand on CPs and warranties",
    ],
    caseStudy: {
      client: "Consortium of international lenders",
      scope: "TDD on a 1.2 GW combined-cycle gas plant refinancing.",
      outcome: "Report accepted by all seven lenders; refinancing closed on schedule with improved covenants.",
    },
    industries: defaultIndustries,
    timeline: "4-12 weeks per transaction.",
    faqs: faqs("technical due diligence"),
  },
  {
    slug: "hydrogen-strategy",
    icon: Wind,
    title: "Hydrogen Strategy",
    body: "Green hydrogen pathways, offtake and pilot execution.",
    summary: "Strategy and execution support for corporates and Government building credible hydrogen and derived-fuels businesses.",
    challenges: [
      "Uncertain economics and policy landscape",
      "Nascent offtake markets and thin liquidity",
      "Infrastructure and logistics gaps",
      "Technology risk across electrolyser platforms",
      "Difficulty separating hype from opportunity",
    ],
    approach: [
      "Value-chain modelling across production, transport and end-use",
      "Policy and incentive optimisation across jurisdictions",
      "Offtake structuring and anchor customer engagement",
      "Pilot design that scales to commercial",
    ],
    features: [
      "Green / blue hydrogen strategy blueprint",
      "Full value-chain economic model",
      "Offtake and customer engagement plan",
      "Pilot project design and structuring",
      "Policy and incentive optimisation",
    ],
    roadmap: defaultRoadmap,
    deliverables: [
      "Hydrogen strategy and business case",
      "Value-chain model and sensitivities",
      "Offtake targeting and outreach plan",
      "Pilot project design pack",
      "Board and government engagement decks",
    ],
    roi: [
      "Clear go / no-go decisions saving misdirected capex",
      "First-mover positioning without first-mover losses",
      "Bankable pilots that scale to commercial",
      "Alignment with global policy and incentive frameworks",
    ],
    caseStudy: {
      client: "Sovereign entity, Middle East",
      scope: "National green hydrogen and ammonia strategy across production, ports and offtake.",
      outcome: "Strategy adopted at cabinet level; three anchor projects moved to FEED with international partners.",
    },
    industries: defaultIndustries,
    timeline: "4-12 months, plus program advisory.",
    faqs: faqs("hydrogen strategy"),
  },
];

export function getSolutionBySlug(slug: string) {
  return solutionItems.find((i) => i.slug === slug);
}