import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, PoundSterling, ShieldCheck, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HomeHero } from "@/components/marketing/home-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { StatStrip } from "@/components/marketing/stat-strip";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { buildMetadata } from "@/lib/seo";
import { servicesBySlug } from "@/content/services";
import { specialties } from "@/content/specialties";
import { stats } from "@/content/stats";
import { securityFeatures } from "@/content/about";

export const metadata: Metadata = buildMetadata({
  title: "Accounting Outsourcing for Accountancy Firms",
  description:
    "SAS KPO Services is the outsourced back office for UK, US & Irish accountancy firms — bookkeeping, tax, payroll, year-end and company secretarial work, delivered accurately and on time.",
  path: "/",
  keywords: [
    "accounting outsourcing",
    "accountancy firm outsourcing",
    "bookkeeping outsourcing",
    "white label accounting",
  ],
});

const featuredServices = [
  "year-end-accounts",
  "bookkeeping",
  "payroll",
  "vat-returns",
  "corporation-tax",
  "management-accounts",
].map((slug) => servicesBySlug[slug]);

const whyPoints = [
  {
    icon: Gauge,
    title: "Capacity on demand",
    description: "Scale your team up for busy season and back down again — no hiring, no idle cost.",
  },
  {
    icon: PoundSterling,
    title: "Lower overheads",
    description: "Senior accounting talent at a fraction of the cost of building it in-house.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant & secure",
    description: "Two-level review and ISO-grade security on every job you hand over.",
  },
  {
    icon: TrendingUp,
    title: "Time for advisory",
    description: "Offload routine compliance work and free your people for higher-value advice.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Container className="pb-8">
        <LogoCloud />
      </Container>

      <Section className="pt-16 md:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="One partner for the whole back office"
              description="From day-to-day bookkeeping to year-end and company secretarial work — pick the services you need and add them seamlessly to your practice."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <StaggerItem key={s.slug}>
                <OfferingCard
                  href={`/services/${s.slug}`}
                  title={s.title}
                  summary={s.summary}
                  icon={s.icon}
                  eyebrow={s.category}
                />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">
                View all services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why firms choose SAS KPO"
              title="The numbers behind a dependable partner"
              description="Founded in 2021 and trusted across three countries — with a security record we're proud of."
            />
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <StatStrip stats={stats} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The difference"
              title="Built to make your practice stronger"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p) => (
              <StaggerItem key={p.title}>
                <Card className="h-full p-6">
                  <IconTile icon={p.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Specialties"
              title="Beyond compliance"
              description="Modernise and grow with cloud migration, Making Tax Digital, AI-assisted automation and marketing built for accountants."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((s) => (
              <StaggerItem key={s.slug}>
                <OfferingCard
                  href={`/specialties/${s.slug}`}
                  title={s.title}
                  summary={s.summary}
                  icon={s.icon}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Security first"
              title="Your clients' data, protected"
              description="Security isn't a feature — it's the foundation. Here's how we keep every file you share safe."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <Card className="h-full p-6">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
