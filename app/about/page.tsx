import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { StatStrip } from "@/components/marketing/stat-strip";
import { CTASection } from "@/components/marketing/cta-section";
import { IconTile } from "@/components/marketing/icon-tile";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { aboutValues, differentiators, securityFeatures, timeline } from "@/content/about";
import { stats } from "@/content/stats";

export const metadata: Metadata = buildMetadata({
  title: "About SAS KPO Services",
  description:
    "Founded in 2021, SAS KPO Services helps accountancy firms scale with ACCA-qualified talent, ISO-grade security and a true partnership model across the UK, USA and Ireland.",
  path: "/about",
  keywords: ["about SAS KPO", "accounting outsourcing partner", "ACCA qualified team"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="About"
        title="The back office accountancy firms count on"
        description="We started in 2021 with a simple belief: firms do their best work when the routine compliance load is handled by people they can trust. That's still what drives us."
        crumbs={crumbs}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Work with us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              SAS KPO Services is an outsourced accounting partner for practices across the UK, USA
              and Ireland. We work as a quiet extension of your team — accurate, responsive and
              security-first — so you can spend your time where it matters most: advising clients and
              growing the firm.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-12">
            <StatStrip stats={stats} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="From two people to a full-service partner"
                description="Steady, deliberate growth — built on relationships and a reputation for getting the detail right."
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="space-y-8">
                {timeline.map((t, i) => (
                  <li key={t.year} className="flex gap-5">
                    <div className="flex flex-col items-center pt-1">
                      <span
                        className="size-3 rounded-full bg-primary ring-4 ring-primary/15"
                        aria-hidden="true"
                      />
                      {i < timeline.length - 1 ? (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t.year}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground">{t.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we stand for" title="The values behind the work" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="h-full p-6">
                  <IconTile icon={v.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why firms choose us" title="A partner, not just a provider" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <Card className="h-full p-6">
                  <IconTile icon={d.icon} />
                  <h3 className="mt-4 font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
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
              eyebrow="Security first"
              title="Built on trust and protection"
              description="A clean security record since day one, backed by encryption, certified facilities and round-the-clock monitoring."
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
