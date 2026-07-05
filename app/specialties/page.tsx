import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/marketing/page-hero";
import { OfferingCard } from "@/components/marketing/offering-card";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { specialties } from "@/content/specialties";

export const metadata: Metadata = buildMetadata({
  title: "Specialties: Cloud, MTD, AI & Digital Marketing",
  description:
    "Beyond compliance — cloud accounting migration, Making Tax Digital, AI-assisted automation and digital marketing that help your UK practice modernise and grow.",
  path: "/specialties",
  keywords: ["cloud accounting", "making tax digital", "AI accounting", "accountancy marketing"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Specialties" }];

export default function SpecialtiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Specialties"
        title="Modernise and grow, beyond the compliance basics"
        description="Cloud migration, Making Tax Digital, AI-assisted automation and marketing built specifically for accountancy firms — the work that moves a practice forward."
        crumbs={crumbs}
        image={{ src: "/images/boardroom-meeting.jpg", mobileSrc: "/images/mobile/boardroom-meeting-mobile.jpg" }}
      >
        <Button asChild size="lg" variant="accent">
          <Link href="/contact">
            Book a Discovery Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2">
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

      <CTASection />
    </>
  );
}
