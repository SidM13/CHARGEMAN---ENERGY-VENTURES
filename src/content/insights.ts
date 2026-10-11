import refinery from "@/assets/refinery.jpg";
import renewables from "@/assets/renewables.jpg";
import hydrogen from "@/assets/hydrogen.jpg";
import lng from "@/assets/lng.jpg";
import engineers from "@/assets/engineers.jpg";

export type InsightPost = {
  slug: string;
  title: string;
  cat: string;
  img: string;
  date: string;
  readingTime: string;
  excerpt: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
};

function baseSections(topic: string, angle: string): InsightPost["sections"] {
  return [
    {
      heading: "Industry Trends",
      body: [
        `The last twenty-four months have compressed a decade of change into ${topic}. Capital that once flowed by default toward legacy assets is now weighed against transition timelines, evolving policy regimes, and a customer base that is increasingly literate about sustainability and cost.`,
        `Three trends dominate: the acceleration of renewables buildout, the industrialisation of new molecules like hydrogen and derivatives, and the rewiring of grids to accommodate distributed, variable generation. Each trend interacts with the others, and none can be pursued in isolation.`,
        `Against this backdrop, ${angle}. Leaders who understand this converging landscape are pulling ahead — not by chasing every trend, but by concentrating capital and talent on the intersections where their existing capabilities create disproportionate advantage.`,
      ],
    },
    {
      heading: "Challenges",
      body: [
        `The most persistent challenge in ${topic} is not technical. It is organisational: aligning boards, executives, operators and investors around a coherent multi-decade strategy while still hitting quarterly numbers.`,
        `Technical challenges remain formidable — supply chain constraints, permitting friction, integration complexity — but they are largely solvable. What is harder is building the muscle to make consistently good, high-stakes capital decisions in an uncertain environment.`,
        `Talent is the second binding constraint. The industry is retiring its most experienced operators faster than it is training their replacements. The response cannot be simply hiring more; it has to be a structural rethink of how knowledge is captured, transferred and applied at scale.`,
      ],
    },
    {
      heading: "Solutions and Best Practices",
      body: [
        `Winning organisations in ${topic} share a small number of common practices. They treat portfolio strategy as a continuous discipline, not an annual exercise. They invest deliberately in the interfaces between engineering, commercial and finance functions. And they use scenarios, not point forecasts, to stress-test every material decision.`,
        `Governance matters as much as strategy. The best-run programs have clear stage-gates, independent assurance and disciplined escalation. Boards that ask sharper questions get sharper answers — and better outcomes.`,
        `Best practice also increasingly means embracing digital tools: high-fidelity asset models, integrated schedule and cost systems, and analytics that give executives real-time visibility into what matters. The technology is table stakes; the differentiator is the operating discipline wrapped around it.`,
      ],
    },
    {
      heading: "Future Outlook",
      body: [
        `Over the next decade, ${topic} will be shaped by three intertwined forces: policy ambition around net-zero, the deployment of hundreds of billions of dollars into new infrastructure, and a step-change in what customers expect from their energy providers.`,
        `Winners will look markedly different from the incumbents of the last cycle. They will be more integrated across the value chain, more comfortable with digital, and more willing to hold their portfolios accountable against long-term value as well as cash.`,
        `Chargeman's own view is cautiously optimistic. The scale of the transition is genuine, the capital is real, and the technology is proven at pilot scale. The bottleneck now is execution — and execution is a solvable problem.`,
      ],
    },
    {
      heading: "Recommendations",
      body: [
        `For boards and executives in ${topic}, three recommendations stand out. First, treat strategy as a live process — refresh it against scenarios at least twice a year, not once. Second, invest in the organisational muscle needed to execute complex programs: strong PMOs, integrated cost and schedule discipline, and honest independent assurance.`,
        `Third, build long-term partnerships with a small number of trusted advisors who understand the sector deeply and can bring senior perspective into your executive conversations. The alternative — a rotating cast of generalist consultants — costs more, delivers less, and leaves no lasting capability behind.`,
        `Above all, resist the temptation to treat the energy transition as a communications exercise. The organisations that will win the next decade are the ones treating it as a genuine, quantitative, cross-functional transformation.`,
      ],
    },
  ];
}

export const insightPosts: InsightPost[] = [
  {
    slug: "india-energy-transition-global-playbook",
    title: "Why India's Energy Transition Will Rewrite Global Playbooks",
    cat: "Energy Transition",
    img: renewables,
    date: "Nov 2026",
    readingTime: "9 min read",
    excerpt: "India is not simply following the global energy transition — it is quietly redesigning it, and the world's boards should be paying attention.",
    intro: [
      "India is on track to become the single largest incremental source of global energy demand for the next two decades. How that demand is met — with what mix of coal, gas, renewables and new molecules — will shape the world's energy trajectory more than almost any other national decision.",
      "What is under-appreciated outside the country is that India is not simply importing global transition playbooks. It is building its own — more integrated, more finance-led, and in many places more ambitious than what has been tried in mature markets.",
      "This piece examines what makes India's transition distinct, what it means for global energy leaders, and where the biggest risks and opportunities lie over the next ten years.",
    ],
    sections: baseSections("the Indian energy transition", "Indian corporates and public sector entities are demonstrating a level of ambition and coordination that most global peers cannot match"),
    takeaways: [
      "India's transition is capital-led, not policy-led, and moves faster than most observers realise.",
      "Renewables and green hydrogen are becoming a single integrated bet, not two separate ones.",
      "Global boards should treat India as a lead market, not a follower.",
    ],
  },
  {
    slug: "next-decade-upstream-oil-gas",
    title: "The Next Decade of Upstream Oil & Gas",
    cat: "Oil Markets",
    img: refinery,
    date: "Oct 2026",
    readingTime: "8 min read",
    excerpt: "Upstream oil and gas is neither the sunset business its critics claim nor the eternal cash machine its defenders assume.",
    intro: [
      "Discussion of upstream oil and gas tends to collapse into one of two caricatures — imminent stranded-asset apocalypse, or business-as-usual for another fifty years. Neither is true.",
      "The reality is more interesting: a decade in which capital discipline, ESG pressure and volatile geopolitics reshape who wins and who loses, without radically changing global barrels-per-day for at least a decade.",
      "This article sets out the strategic questions upstream boards should be pressing on their teams over the next twelve months.",
    ],
    sections: baseSections("upstream oil & gas", "the operators generating the best returns are those combining capital discipline with genuine operational excellence and relentless efficiency in their own operations"),
    takeaways: [
      "Capital discipline is the new competitive advantage, not production growth.",
      "Operational efficiency is now table stakes for premium valuation.",
      "Portfolio choices made in this cycle will shape returns for a generation.",
    ],
  },
  {
    slug: "green-hydrogen-bankable-projects",
    title: "Green Hydrogen: From Promise to Bankable Projects",
    cat: "Renewables",
    img: hydrogen,
    date: "Sep 2026",
    readingTime: "10 min read",
    excerpt: "Green hydrogen is finally moving from press release to FID. Here is what separates the pilots that will scale from those that will quietly disappear.",
    intro: [
      "For the last five years, green hydrogen has generated an extraordinary volume of announcements and a much smaller volume of steel in the ground. That is starting to change.",
      "A first wave of projects is reaching final investment decision, financed by real lenders on real terms. The lessons from these transactions are already reshaping how the next wave is being structured.",
      "This piece distils what boards, developers and investors should know about the current state of hydrogen bankability, and what to insist on before committing capital.",
    ],
    sections: baseSections("green hydrogen and derivatives", "the projects clearing FID are those with credible anchor offtake, disciplined technology selection and a genuine understanding of the electricity input side"),
    takeaways: [
      "Bankability starts with credible offtake — everything else follows.",
      "Electrolyser technology choice materially changes risk and returns.",
      "Policy support is helpful but not sufficient; economics must stand on their own.",
    ],
  },
  {
    slug: "lng-multi-fuel-future",
    title: "LNG in a Multi-Fuel Future",
    cat: "Policy",
    img: lng,
    date: "Jul 2026",
    readingTime: "9 min read",
    excerpt: "LNG remains a critical bridge fuel, but the shape of that bridge is being redrawn by geopolitics, contract structures and the energy transition.",
    intro: [
      "LNG has spent the last five years reasserting itself as the most flexible, geopolitically important molecule in the global energy mix. It has also become dramatically more contested.",
      "New export capacity, evolving buyer expectations, and a wave of emissions-linked contract terms are reshaping how the market clears and how projects are structured.",
      "This piece looks at where LNG sits in a genuinely multi-fuel future, and what that means for producers, buyers and infrastructure investors.",
    ],
    sections: baseSections("global LNG", "buyers are increasingly asking questions about emissions intensity and contract flexibility that the sector's traditional counterparts are only beginning to answer"),
    takeaways: [
      "LNG remains structurally important through at least 2040.",
      "Emissions-linked contract terms are becoming standard.",
      "Portfolio flexibility is now more valuable than incremental capacity.",
    ],
  },
  {
    slug: "digital-operations-energy-efficiency",
    title: "Digital Operations: Rewriting Energy Efficiency",
    cat: "Technology",
    img: engineers,
    date: "Jun 2026",
    readingTime: "7 min read",
    excerpt: "Digital operations is no longer a differentiator — it is a baseline expectation. The question is how to convert it into durable value.",
    intro: [
      "Every operator now runs a portfolio of digital initiatives. What separates leaders from the rest is not the presence of these initiatives but the discipline with which they are prioritised, integrated and cashed in.",
      "The most successful digital programs share a common characteristic: they are led from the operations organisation, not the IT function, and they are held to hard operational KPIs.",
      "This piece looks at what a mature digital operating model actually looks like in energy — and how boards should evaluate the digital work already going on in their own organisations.",
    ],
    sections: baseSections("digital operations in energy", "leaders are pushing beyond point solutions toward integrated operating models that give executives real-time visibility over cost, safety and reliability"),
    takeaways: [
      "Digital value comes from operating models, not point tools.",
      "Operational KPIs — not IT metrics — should govern digital programs.",
      "Executive sponsorship and data discipline are the two biggest enablers.",
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insightPosts.find((p) => p.slug === slug);
}

export function getRelatedInsights(slug: string, count = 3) {
  return insightPosts.filter((p) => p.slug !== slug).slice(0, count);
}