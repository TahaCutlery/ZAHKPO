export interface Founder {
  name: string;
  role: string;
  credential: string;
  bio: string;
  image: { src: string; alt: string };
  expertise: string[];
}

export const founders: Founder[] = [
  {
    name: "Husain Sangam",
    role: "Co-Founder & Director",
    credential: "Chartered Accountant (CA)",
    bio: "A qualified Chartered Accountant with 7+ years of experience in accounting, auditing, financial reporting, management accounts and assurance services. Associated with Deloitte Haskins & Sells, with experience across diverse industries and expertise in IFRS reporting, year-end accounts, audit and process improvement.",
    image: {
      src: "/team/husain-sangam.jpg",
      alt: "Husain Sangam, Co-Founder & Director of LedgerBridge",
    },
    expertise: ["IFRS Reporting", "Audit & Assurance", "Year-End Accounts", "Process Improvement"],
  },
  {
    name: "Mustafa Bag",
    role: "Co-Founder & Director",
    credential: "ACCA · B.Com",
    bio: "An ACCA-qualified professional with a Bachelor of Commerce degree and over 5 years of experience in UK accounting, management accounts, year-end accounts and tax compliance services. Having worked with multiple KPOs, he brings exposure to diverse industries and strong expertise in high-quality accounting and compliance solutions.",
    image: {
      src: "/team/mustafa-bag.jpg",
      alt: "Mustafa Bag, Co-Founder & Director of LedgerBridge",
    },
    expertise: ["UK Accounting", "Management Accounts", "Tax Compliance", "KPO Operations"],
  },
];
