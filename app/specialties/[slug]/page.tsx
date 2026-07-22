// import type { Metadata } from "next";
// import { notFound } from "next/navigation";

// import { ServiceDetail, type RelatedItem } from "@/components/marketing/service-detail";
// import { JsonLd } from "@/components/seo/json-ld";
// import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
// import { getSpecialty, specialties, specialtiesBySlug } from "@/content/specialties";

// export function generateStaticParams() {
//   return specialties.map((s) => ({ slug: s.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const specialty = getSpecialty(slug);
//   if (!specialty) return {};
//   return buildMetadata({
//     title: specialty.metaTitle,
//     description: specialty.metaDescription,
//     path: `/specialties/${slug}`,
//     keywords: [specialty.title.toLowerCase(), "accountancy", "LedgerBridge"],
//   });
// }

// export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const specialty = getSpecialty(slug);
//   if (!specialty) notFound();

//   const related: RelatedItem[] = (specialty.related ?? [])
//     .map((rs) => {
//       const r = specialtiesBySlug[rs];
//       return r
//         ? { href: `/specialties/${r.slug}`, title: r.title, summary: r.summary, icon: r.icon }
//         : null;
//     })
//     .filter((x): x is RelatedItem => x !== null);

//   const crumbs = [
//     { label: "Home", href: "/" },
//     { label: "Industries", href: "/specialties" },
//     { label: specialty.title },
//   ];

//   return (
//     <>
//       <JsonLd
//         data={[
//           serviceSchema({
//             name: specialty.title,
//             description: specialty.metaDescription,
//             path: `/specialties/${slug}`,
//           }),
//           breadcrumbSchema(crumbs),
//           ...(specialty.faqs?.length ? [faqSchema(specialty.faqs)] : []),
//         ]}
//       />
//       <ServiceDetail offering={specialty} crumbs={crumbs} related={related} />
//     </>
//   );
// }
