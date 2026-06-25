import * as React from "react";

import { Container, Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Breadcrumb, type Crumb } from "./breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, description, crumbs, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dotted opacity-50 mask-fade-b"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative py-14 md:py-20 lg:py-24">
        {crumbs ? <Breadcrumb items={crumbs} className="mb-6" /> : null}
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}
