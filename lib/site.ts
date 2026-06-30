export const siteConfig = {
  name: "LedgerBridge",
  shortName: "LedgerBridge",
  legalName: "Zah Professional Services Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theledgerbridge.com",
  founded: 2025,
  tagline: "Growth Beyond Limits",
  description:
    "LedgerBridge is a technology-driven KPO and trusted outsourcing partner for UK accounting firms — bookkeeping, year-end accounts, tax, payroll, audit support and CFO advisory, delivered accurately and on time.",
  contact: {
    phone: "+91 88899 84419",
    phoneHref: "+918889984419",
    phoneAlt: "+91 79999 83500",
    phoneAltHref: "+917999983500",
    email: "info@theledgerbridge.com",
    careersEmail: "info@theledgerbridge.com",
    ukOffice: {
      label: "Head Office",
      lines: [
        "GF 178, New Radhavallabh Market",
        "Khargone",
        "Madhya Pradesh 451001",
        "India",
      ],
    },
    deliveryOffices: [] as { label: string; lines: string[] }[],
  },
  social: [] as { platform: "LinkedIn" | "Facebook" | "Instagram" | "X"; url: string }[],
  markets: ["United Kingdom"],
} as const;

export type SiteConfig = typeof siteConfig;
