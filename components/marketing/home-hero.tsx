"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Award, Clock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-12%] -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8%] top-[18%] -z-10 size-[26rem] rounded-full bg-accent/10 blur-3xl"
      />
      <Container>
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="flex flex-col items-center py-20 text-center md:py-28 lg:py-32"
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            The trusted outsourcing partner for UK accounting firms
          </motion.span>

          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            The outsourced back office <span className="text-gradient">UK accounting firms</span>{" "}
            rely on
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Bookkeeping, year-end, tax, payroll, audit support and CFO advisory — handled by skilled
            people on secure systems, delivered on time. People first, process driven, technology
            enabled, so your team can focus on growing the practice.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Explore services</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" /> GDPR-aligned security
            </li>
            <li className="inline-flex items-center gap-2">
              <Award className="size-4 text-primary" aria-hidden="true" /> CA &amp; ACCA-qualified founders
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" /> SOP-driven, on-time delivery
            </li>
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
