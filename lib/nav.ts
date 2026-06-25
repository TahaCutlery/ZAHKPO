export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaGroup {
  label: string;
  items: NavLink[];
}

/** Services grouped for the mega menu and the /services hub. */
export const serviceGroups: MegaGroup[] = [
  {
    label: "Accounting",
    items: [
      {
        label: "Year-End Accounts",
        href: "/services/year-end-accounts",
        description: "FRS-compliant statutory accounts, filed on time.",
      },
      {
        label: "Management Accounts",
        href: "/services/management-accounts",
        description: "Monthly insight, variance analysis and forecasts.",
      },
      {
        label: "Bookkeeping",
        href: "/services/bookkeeping",
        description: "Accurate reconciliations and ledger upkeep.",
      },
      {
        label: "Payroll",
        href: "/services/payroll",
        description: "Fully managed, compliant, on schedule.",
      },
      {
        label: "CIS Returns",
        href: "/services/cis-returns",
        description: "Construction Industry Scheme, penalty-free.",
      },
      {
        label: "iXBRL Tagging",
        href: "/services/ixbrl-tagging",
        description: "HMRC-ready, machine-readable accounts.",
      },
    ],
  },
  {
    label: "Tax",
    items: [
      {
        label: "VAT Returns",
        href: "/services/vat-returns",
        description: "MTD-compliant quarterly VAT, reviewed and filed.",
      },
      {
        label: "Personal Tax",
        href: "/services/personal-tax",
        description: "Self-Assessment without the January crunch.",
      },
      {
        label: "Corporation Tax",
        href: "/services/corporation-tax",
        description: "CT600 computations, risk-checked and filed.",
      },
    ],
  },
  {
    label: "Company Secretarial",
    items: [
      {
        label: "Business Setup",
        href: "/services/business-setup",
        description: "Formation to dissolution, fully supported.",
      },
      {
        label: "Tax Registrations",
        href: "/services/tax-registrations",
        description: "VAT, PAYE, SA and CIS — right first time.",
      },
      {
        label: "Corporate Due Diligence",
        href: "/services/corporate-due-diligence",
        description: "Director IDV, AML/KYC and statutory support.",
      },
    ],
  },
];

export const specialtyLinks: NavLink[] = [
  {
    label: "Cloud Accounting",
    href: "/specialties/cloud-accounting",
    description: "Migrate to the cloud without disruption.",
  },
  {
    label: "Making Tax Digital",
    href: "/specialties/mtd",
    description: "Stress-free digital tax compliance.",
  },
  {
    label: "AI Accounting",
    href: "/specialties/ai-accounting",
    description: "Automation with human quality control.",
  },
  {
    label: "Marketing Services",
    href: "/specialties/marketing-services",
    description: "Growth marketing built for accountants.",
  },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog", description: "Guides on outsourcing, tax and cloud." },
  { label: "FAQ", href: "/faq", description: "Answers to common outsourcing questions." },
];

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Specialties", href: "/specialties" },
  { label: "Life at SAS", href: "/life-at-sas" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Year-End Accounts", href: "/services/year-end-accounts" },
      { label: "Management Accounts", href: "/services/management-accounts" },
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Payroll", href: "/services/payroll" },
      { label: "VAT Returns", href: "/services/vat-returns" },
      { label: "Corporation Tax", href: "/services/corporation-tax" },
    ],
  },
  {
    title: "Specialties",
    links: specialtyLinks.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Life at SAS", href: "/life-at-sas" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
