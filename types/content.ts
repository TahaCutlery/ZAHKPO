import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "Accounting" | "Tax" | "Company Secretarial";

export interface Deliverable {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface QA {
  question: string;
  answer: string;
}

/** Shared shape for both service and specialty detail pages. */
export interface OfferingBase {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** short label used on cards / teasers */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  deliverables: Deliverable[];
  process?: ProcessStep[];
  benefits: Benefit[];
  faqs?: QA[];
  related?: string[];
}

export interface Service extends OfferingBase {
  category: ServiceCategory;
}

export interface Specialty extends OfferingBase {
  accent?: "primary" | "accent";
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface Tool {
  name: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readingTime: number; // minutes
  related?: string[]; // service/specialty hrefs
}

export interface OpenRole {
  title: string;
  location: string;
  type: string;
  count: number;
}
