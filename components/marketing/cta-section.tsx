import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Add capacity without adding headcount",
  description = "Tell us what's on your plate. We'll show you exactly how SAS KPO can take it on — accurately, securely and on time.",
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,var(--color-primary),var(--color-primary-strong))] px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotted opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/85">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-transparent bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
              >
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-transparent text-primary-foreground hover:bg-white/10"
              >
                <a href={`tel:${siteConfig.contact.phoneHref}`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
