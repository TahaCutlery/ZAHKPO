export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export const faqs: Faq[] = [
  {
    category: "Getting started",
    question: "What does SAS KPO Services actually do?",
    answer:
      "We're the outsourced back office for accountancy firms and businesses. We handle bookkeeping, payroll, tax returns, year-end accounts and company secretarial work so your team can focus on advice, relationships and growth.",
  },
  {
    category: "Getting started",
    question: "Why should a firm outsource its accounting work?",
    answer:
      "Outsourcing cuts cost and saves time while giving you qualified specialists on demand. You add capacity and improve accuracy and compliance without the expense and commitment of building an in-house team.",
  },
  {
    category: "Getting started",
    question: "Can you support firms outside the UK?",
    answer:
      "Yes. We support accountancy firms and businesses across the UK, USA and Ireland, working remotely through secure digital systems and to each region's standards.",
  },
  {
    category: "Security",
    question: "Is it safe to share our financial data with you?",
    answer:
      "Security is built into everything we do — 256-bit encryption, ISO-certified facilities and 24/7 monitoring, aligned to international data-protection standards. We've maintained a clean record with zero data breaches since 2021.",
  },
  {
    category: "Services",
    question: "What are management accounts and why do they matter?",
    answer:
      "Management accounts are regular financial reports — usually monthly or quarterly — that track performance, monitor cash flow and surface the insight a business needs to plan and make confident decisions.",
  },
  {
    category: "Services",
    question: "Why are company secretarial services important?",
    answer:
      "They keep a company legally compliant: accurate statutory records, on-time filings and sound corporate governance that prevent penalties and protect the business's standing.",
  },
  {
    category: "AI & technology",
    question: "How does AI improve accounting?",
    answer:
      "AI automates repetitive tasks like data entry and reconciliation, processes large volumes quickly and surfaces real-time insight. Qualified accountants review the output, so you get speed and accuracy together.",
  },
  {
    category: "AI & technology",
    question: "Is AI accounting suitable for small businesses?",
    answer:
      "Absolutely. Automation helps smaller businesses manage their finances efficiently, reduce cost and gain clear financial visibility without needing a large in-house accounting team.",
  },
  {
    category: "AI & technology",
    question: "What's the future of AI in accounting?",
    answer:
      "Expect more automation of routine work, richer financial analysis and faster insight. The role of the accountant shifts further toward advice, interpretation and strategy.",
  },
  {
    category: "AI & technology",
    question: "Can AI help with financial forecasting?",
    answer:
      "Yes. AI analyses historical data to model forecasts that support budgeting, trend prediction and informed financial planning — always with human review of the assumptions.",
  },
  {
    category: "Marketing",
    question: "Why would an accountancy firm need digital marketing?",
    answer:
      "Digital marketing builds brand awareness, reaches the right clients online and generates qualified leads through SEO, paid, social and content — turning visibility into measurable growth.",
  },
  {
    category: "Marketing",
    question: "Why combine accounting and marketing support?",
    answer:
      "Together they fuel growth: organised, accurate finances on one side and a steady pipeline of new clients and revenue on the other — both managed by one partner.",
  },
];

export const faqCategories = [
  "Getting started",
  "Security",
  "Services",
  "AI & technology",
  "Marketing",
] as const;
