import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { AnimatedCounter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { HomeHero } from "@/components/marketing/home-hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
// import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { buildMetadata } from "@/lib/seo";
import { servicesBySlug } from "@/content/services";
import { specialties } from "@/content/specialties";
import { securityFeatures } from "@/content/about";
import { challenges } from "@/content/home";
import { deliveryMetrics, deliveryStandards } from "@/content/stats";

export const metadata: Metadata = buildMetadata({
  title: "Accounting Outsourcing for UK Accounting Firms",
  description:
    "LedgerBridge is a technology-driven KPO and the outsourced back office for UK accounting firms - bookkeeping, year-end accounts, tax, payroll, audit support and CFO advisory, delivered accurately and on time.",
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

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Container className="pb-8 pt-12">
        <LogoCloud label="Trusted by accounting firms across the UK - on the platforms your clients already use" />
      </Container>

      <Section className="pt-16 md:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="One partner for the whole back office"
              description="From day-to-day bookkeeping to year-end, audit support and CFO advisory - pick the services you need and add more as your practice grows."
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
              title="Your Challenges, Our Solutions"
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

      <Section className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why firms trust LedgerBridge"
              title="Our Delivery in Numbers"
              description="Real metrics from live engagements - measured on every job, not promised in a pitch."
            />
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {deliveryMetrics.map((m) => (
              <StaggerItem key={m.label}>
                <Card className="h-full p-8 text-center">
                  <p className="text-5xl font-semibold tracking-tight text-primary md:text-6xl">
                    <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </p>
                  <p className="mt-3 text-sm leading-snug text-muted-foreground">{m.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Stagger className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryStandards.map((s) => (
              <StaggerItem key={s.label}>
                <Card className="h-full p-6 text-center">
                  <p className="text-2xl font-semibold tracking-tight text-foreground">{s.value}</p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* <TestimonialsSection /> */}

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our vibrant office"
              title="Inside LedgerBridge"
              description="Our delivery centre in Khargone - a modern, secure workspace purpose-built for focused, confidential client work."
            />
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[12rem] md:grid-cols-3 md:auto-rows-[15rem] md:gap-6">
            <StaggerItem className="sm:col-span-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-entrance.jpg"
                  alt="The LedgerBridge office entrance in Vadodara, with the LB monogram on frosted glass"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem className="sm:row-span-2">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-workstations.jpg"
                  alt="Two team members working side by side at LedgerBridge workstations"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-team.jpg"
                  alt="The LedgerBridge team at work in the open-plan office"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border sm:aspect-auto sm:h-full">
                <Image
                  src="/images/office-cabin.jpg"
                  alt="A LedgerBridge accountant working at a dual-screen desk in a private cabin"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
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

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Security first"
              title="Your clients' data, protected"
              description="Security isn't a feature - it's the foundation. Here's how we keep every file you share safe."
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
