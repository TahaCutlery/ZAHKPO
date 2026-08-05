import { founders } from "@/content/team";

export const siteConfig = {
  name: "LedgerBridge",
  shortName: "LedgerBridge",
  legalName: "Zah Professional Services Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theledgerbridge.com",
  founded: 2025,
  tagline: "Growth Beyond Limits",
  description:
    "LedgerBridge is a technology-driven KPO and trusted outsourcing partner for UK accounting firms - bookkeeping, year-end accounts, tax, payroll, audit support and CFO advisory, delivered accurately and on time.",
  contact: {
    phoneAlt: "+91 79999 83500",
    phoneAltHref: "+917999983500",
    careersEmail: "info@theledgerbridge.com",
    ukOffice: {
      label: "Head Office",
      phone: "+44 784 842 6766",
      email: "info@theledgerbridge.com",
      phoneHref: "+44XXXXXXXXXX",
      address: [
        "5 Ruslip Road",
        "Greenford",
        "England",
        "UB6 9QD",
      ],
    },
    khOffice: {
      label: "Head Office",
      phone: "+91 88899 84419",
      email: "info@theledgerbridge.com",
      phoneHref: "+918889984419",
      address: [
        "GF 178, New Radhavallabh Market",
        "Khargone",
        "Madhya Pradesh 451001",
        "India",
      ],
    },
    deliveryOffices: [] as { label: string; lines: string[] }[],
  },
  social: [
    {
      platform: "LinkedIn",
      url: founders[1].linkedin,
    },
  ] as { platform: "LinkedIn" | "Facebook" | "Instagram" | "X"; url: string }[],
  markets: ["United Kingdom"],
} as const;

export type SiteConfig = typeof siteConfig;
