import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, ListChecks, PoundSterling, ShieldCheck, TrendingUp } from "lucide-react";

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
import { caseStudy, challenges } from "@/content/home";

export const metadata: Metadata = buildMetadata({
  title: "Accounting Outsourcing for UK Accounting Firms",
  description:
    "LedgerBridge is a technology-driven KPO and the outsourced back office for UK accounting firms — bookkeeping, year-end accounts, tax, payroll, audit support and CFO advisory, delivered accurately and on time.",
  path: "/",
  keywords: [
    "accounting outsourcing UK",
    "accountancy firm outsourcing",
    "bookkeeping outsourcing",
    "white label accounting",
  ],
});

const featuredServices = [
  "bookkeeping",
  "year-end-accounts",
  "management-accounts",
  "vat-returns",
  "cfo-advisory",
  "audit-support",
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
    icon: ListChecks,
    title: "SOP-driven & secure",
    description: "Standardised processes, multi-level review and GDPR-aligned security on every job.",
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
              description="From day-to-day bookkeeping to year-end, audit support and CFO advisory — pick the services you need and add them seamlessly to your practice."
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
              eyebrow="Challenges we understand"
              title="Your challenges, our solutions"
              description="UK firms face the same pressures again and again. Here's how LedgerBridge helps with each one."
            />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <StaggerItem key={c.challenge}>
                <Card className="h-full p-5">
                  <p className="text-sm font-medium text-muted-foreground line-through decoration-border">
                    {c.challenge}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {c.solution}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
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
              eyebrow="Case study"
              title="Helping a UK firm clear its backlog"
              description={caseStudy.client}
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6">
                <h3 className="font-semibold text-foreground">The challenges</h3>
                <ul className="mt-4 space-y-2.5">
                  {caseStudy.challenges.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card className="h-full p-6">
                <h3 className="font-semibold text-foreground">Our approach</h3>
                <ul className="mt-4 space-y-2.5">
                  {caseStudy.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
            <StatStrip stats={caseStudy.results} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Specialties"
              title="Beyond compliance"
              description="Modernise and grow with cloud migration, Making Tax Digital, AI-assisted automation and digital marketing built for accountants."
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

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Security first"
              title="Your clients' data, protected"
              description="Security isn't a feature — it's the foundation. Here's how we keep every file you share safe."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
