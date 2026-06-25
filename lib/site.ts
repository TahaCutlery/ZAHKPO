export const siteConfig = {
  name: "SAS KPO Services",
  shortName: "SAS KPO",
  legalName: "SAS KPO Services",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://saskpo.co.uk",
  founded: 2021,
  tagline: "Precision in accounting. Confidence in compliance.",
  description:
    "SAS KPO Services is the outsourced back office for UK, US and Irish accountancy firms — bookkeeping, tax, payroll, year-end and company secretarial work, delivered accurately and on time.",
  contact: {
    phone: "+44 204 615 6780",
    phoneHref: "+442046156780",
    email: "sales@saskpo.co.uk",
    careersEmail: "hr@saskpo.co.uk",
    ukOffice: {
      label: "London (HQ)",
      lines: ["71–75 Shelton Street", "Covent Garden", "London WC2H 9JQ", "United Kingdom"],
    },
    deliveryOffices: [
      { label: "Ahmedabad", lines: ["1021 Gala Empire, Thaltej", "Gujarat 380054, India"] },
      { label: "Jamnagar", lines: ["Pancheshwar Tower", "Gujarat 361001, India"] },
      { label: "Mandsaur", lines: ["Madhya Pradesh 458001, India"] },
    ],
  },
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/sas-kpo/" },
    { platform: "Facebook", url: "https://www.facebook.com/p/SAS-KPO-Services-61556891825789/" },
    { platform: "Instagram", url: "https://www.instagram.com/saskposervices/" },
    { platform: "X", url: "https://x.com/kpo_sas" },
  ],
  markets: ["United Kingdom", "United States", "Ireland"],
} as const;

export type SiteConfig = typeof siteConfig;
