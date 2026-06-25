import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { serviceCategories, services } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Outsourced Accounting Services",
  description:
    "Explore SAS KPO's full range of outsourced accounting, tax and company secretarial services — built to add capacity to your practice without adding headcount.",
  path: "/services",
  keywords: ["outsourced accounting services", "tax outsourcing", "company secretarial outsourcing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

const categoryCopy: Record<string, string> = {
  Accounting: "Keep the books accurate and every deadline met.",
  Tax: "Returns prepared, reviewed and filed on time.",
  "Company Secretarial": "Stay compliant across the whole company lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Services"
        title="Outsourced accounting, tax & company secretarial"
        description="Pick the services your practice needs and plug them straight in. Every job is delivered by qualified people, reviewed twice, and handled on secure systems."
        crumbs={crumbs}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Get in touch
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {serviceCategories.map((category, i) => {
        const items = services.filter((s) => s.category === category);
        return (
          <Section
            key={category}
            className={i % 2 === 1 ? "border-y border-border bg-surface" : undefined}
          >
            <Container>
              <Reveal>
                <SectionHeading align="left" eyebrow={category} title={categoryCopy[category]} />
              </Reveal>
              <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <StaggerItem key={s.slug}>
                    <OfferingCard
                      href={`/services/${s.slug}`}
                      title={s.title}
                      summary={s.summary}
                      icon={s.icon}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <CTASection />
    </>
  );
}
