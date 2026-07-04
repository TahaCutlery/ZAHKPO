import type { Stat } from "@/types/content";

// Outcomes from our work helping a UK accounting firm clear its backlog (see case study).
export const stats: Stat[] = [
  { value: 100, suffix: "%", label: "On-time VAT submissions" },
  { value: 0, label: "Penalty instances" },
  { value: 35, suffix: "%", label: "Reduction in processing time" },
  { value: 1, label: "Tree planted per new engagement" },
];

/** "Our Delivery in Numbers" — headline metrics for the "Why firms trust LedgerBridge" section. */
export const deliveryMetrics: Stat[] = [
  { value: 100, suffix: "%", label: "On-time VAT submissions" },
  { value: 0, label: "Penalty instances" },
  { value: 35, suffix: "%", label: "Reduction in processing time" },
];

/** Qualitative delivery standards shown alongside the headline metrics. */
export const deliveryStandards: { value: string; label: string }[] = [
  { value: "GDPR", label: "Aligned security processes" },
  { value: "CA & ACCA", label: "Qualified founders" },
  { value: "SOP-driven", label: "Multi-level quality checks" },
  { value: "Xero · QuickBooks · Dext", label: "Platform expertise" },
];
