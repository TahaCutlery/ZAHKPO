import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/section";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { footerColumns } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = 2026;
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The trusted outsourcing partner for UK accounting firms. Skilled people, SOP-driven
              processes, modern technology — work delivered accurately and on time.
            </p>
            <NewsletterForm />
            <SocialLinks />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <a
            href={`tel:${contact.phoneHref}`}
            className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {contact.email}
          </a>
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{contact.ukOffice.lines.slice(0, 3).join(", ")}</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/faq" className="transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
