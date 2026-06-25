import {
  Award,
  Building2,
  Eye,
  Gauge,
  HeartHandshake,
  Lock,
  type LucideIcon,
  MessageSquare,
  ServerCog,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutValues: IconItem[] = [
  { title: "Accuracy first", description: "Every job passes a two-level review. Precision isn't optional in accounting.", icon: Target },
  { title: "Responsive by default", description: "Proactive communication and quick turnarounds — we work as an extension of your team.", icon: MessageSquare },
  { title: "Long-term partnership", description: "We invest in understanding your practice, not just clearing a task list.", icon: HeartHandshake },
  { title: "Quality-driven", description: "Qualified people and structured processes, so the output is consistently dependable.", icon: Award },
];

export const differentiators: IconItem[] = [
  { title: "Experienced, qualified team", description: "ACCA-qualified accountants and seasoned specialists across UK, US and Irish work.", icon: Award },
  { title: "Cost-effective scale", description: "Senior capacity on demand — without the overhead of in-house hiring.", icon: TrendingUp },
  { title: "Built to flex", description: "Scale up for peak season and back down again, with no fixed cost hangover.", icon: Gauge },
  { title: "Security as standard", description: "Encrypted systems and ISO-certified facilities protect every file you share.", icon: ShieldCheck },
];

export const securityFeatures: IconItem[] = [
  { title: "256-bit encryption", description: "Bank-grade encryption protects data in transit and at rest.", icon: Lock },
  { title: "ISO-certified facilities", description: "Delivery from secure, certified environments.", icon: Building2 },
  { title: "24/7 monitoring", description: "Continuous monitoring of systems and access.", icon: Eye },
  { title: "Zero breaches since 2021", description: "A clean security record across our entire history.", icon: ServerCog },
];

export const timeline: { year: string; title: string; description: string }[] = [
  {
    year: "2021",
    title: "Founded",
    description:
      "SAS KPO Services starts as a two-person team with a simple idea: give accountancy firms a back office they can rely on.",
  },
  {
    year: "The early years",
    title: "Building the team",
    description:
      "We grow into a team of qualified accounting professionals and form our first long-term firm partnerships.",
  },
  {
    year: "Scaling up",
    title: "Going multi-region",
    description:
      "Delivery expands across the UK, USA and Ireland, backed by secure, ISO-certified infrastructure and structured quality control.",
  },
  {
    year: "Today",
    title: "A full-service partner",
    description:
      "From bookkeeping to company secretarial work — plus cloud, Making Tax Digital, AI-assisted automation and marketing — under one roof.",
  },
];
