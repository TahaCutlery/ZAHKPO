import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { SearchClient, type SearchDoc } from "@/components/search/search-client";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { posts } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Search",
  description: "Search the SAS KPO Services website for services, specialties and articles.",
  path: "/search",
  noindex: true,
});

const index: SearchDoc[] = [
  ...services.map((s) => ({
    title: s.title,
    description: s.summary,
    href: `/services/${s.slug}`,
    type: "Service",
  })),
  ...specialties.map((s) => ({
    title: s.title,
    description: s.summary,
    href: `/specialties/${s.slug}`,
    type: "Specialty",
  })),
  ...posts.map((p) => ({
    title: p.meta.title,
    description: p.meta.description,
    href: `/blog/${p.meta.slug}`,
    type: "Article",
  })),
  { title: "About", description: "Our story, values and security.", href: "/about", type: "Page" },
  { title: "Contact", description: "Get in touch with the team.", href: "/contact", type: "Page" },
  { title: "FAQ", description: "Common questions about outsourcing.", href: "/faq", type: "Page" },
  { title: "Life at SAS", description: "Careers and culture at SAS KPO.", href: "/life-at-sas", type: "Page" },
];

const crumbs = [{ label: "Home", href: "/" }, { label: "Search" }];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you need"
        description="Search across our services, specialties and articles."
        crumbs={crumbs}
      />
      <Section>
        <Container>
          <SearchClient docs={index} initialQuery={q ?? ""} />
        </Container>
      </Section>
    </>
  );
}
