export interface Founder {
  name: string;
  role: string;
  credential: string;
  bio: string;
}

/** Group photo of the founders — Mustafa Bag (left) and Husain Sangam (right). */
export const foundersImage = {
  src: "/founders.jpg",
  alt: "LedgerBridge co-founders Mustafa Bag (left) and Husain Sangam (right)",
};

export const founders: Founder[] = [
  {
    name: "Husain Sangam",
    role: "Co-Founder & Director",
    credential: "Chartered Accountant (CA)",
    bio: "A qualified Chartered Accountant with 7+ years of experience in accounting, auditing, financial reporting, management accounts and assurance services. Associated with Deloitte Haskins & Sells, with experience across diverse industries and expertise in IFRS reporting, year-end accounts, audit and process improvement.",
  },
  {
    name: "Mustafa Bag",
    role: "Co-Founder & Director",
    credential: "ACCA · B.Com",
    bio: "An ACCA-qualified professional with a Bachelor of Commerce degree and over 5 years of experience in UK accounting, management accounts, year-end accounts and tax compliance services. Having worked with multiple KPOs, he brings exposure to diverse industries and strong expertise in high-quality accounting and compliance solutions.",
  },
];
