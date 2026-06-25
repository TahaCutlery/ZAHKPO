import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/marketing/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { SocialLinks } from "@/components/layout/social-links";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact SAS KPO Services",
  description:
    "Talk to SAS KPO Services about outsourcing your accounting. Call +44 204 615 6780, email sales@saskpo.co.uk, or send us a message — we reply fast.",
  path: "/contact",
  keywords: ["contact SAS KPO", "accounting outsourcing enquiry", "book a call"],
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export default function ContactPage() {
  const { contact } = siteConfig;
  const offices = [{ label: contact.ukOffice.label, lines: contact.ukOffice.lines }, ...contact.deliveryOffices];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your back office"
        description="Tell us what's on your plate and we'll show you how SAS KPO can help. We typically reply within one business day."
        crumbs={crumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in the form and the right person will be in touch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>

            <div className="space-y-8">
              <div className="space-y-3">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Call us</span>
                    <span className="font-medium">{contact.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">Email us</span>
                    <span className="font-medium">{contact.email}</span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Offices
                </h3>
                <ul className="mt-4 space-y-4">
                  {offices.map((office) => (
                    <li key={office.label} className="flex gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm">
                        <span className="block font-medium text-foreground">{office.label}</span>
                        <span className="text-muted-foreground">{office.lines.join(", ")}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Follow us
                </h3>
                <SocialLinks className="mt-3" />
              </div>

              <iframe
                title="SAS KPO London office location"
                src="https://www.google.com/maps?q=71-75%20Shelton%20Street%2C%20Covent%20Garden%2C%20London%20WC2H%209JQ&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full rounded-2xl border border-border"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
