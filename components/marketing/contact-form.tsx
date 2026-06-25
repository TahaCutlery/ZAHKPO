"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";
import { cn } from "@/lib/utils";
import { contactSchema, contactTopics, type ContactValues } from "@/lib/validations";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {optional ? (
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        ) : null}
      </Label>
      {children}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

export function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      topic: "General enquiry",
      message: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    if (values.website) return; // honeypot
    // Client-only flow (no backend by project decision): confirm via the thank-you page.
    await new Promise((resolve) => setTimeout(resolve, 800));
    router.push("/thank-you");
  }

  const describedBy = (field: keyof ContactValues, hasError: boolean) =>
    hasError ? `${field}-error` : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName?.message}>
          <Input
            id="firstName"
            autoComplete="given-name"
            invalid={!!errors.firstName}
            aria-describedby={describedBy("firstName", !!errors.firstName)}
            {...register("firstName")}
          />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName?.message}>
          <Input
            id="lastName"
            autoComplete="family-name"
            invalid={!!errors.lastName}
            aria-describedby={describedBy("lastName", !!errors.lastName)}
            {...register("lastName")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={!!errors.email}
            aria-describedby={describedBy("email", !!errors.email)}
            {...register("email")}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field id="company" label="Company / firm" optional error={errors.company?.message}>
        <Input id="company" autoComplete="organization" {...register("company")} />
      </Field>

      <Field id="topic" label="How can we help?" error={errors.topic?.message}>
        <select
          id="topic"
          className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
          {...register("topic")}
        >
          {contactTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Your message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us what's on your plate and how we can help…"
          invalid={!!errors.message}
          aria-describedby={describedBy("message", !!errors.message)}
          {...register("message")}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 rounded border-input accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy("consent", !!errors.consent)}
            {...register("consent")}
          />
          <Label htmlFor="consent" className="font-normal text-muted-foreground">
            I agree to the{" "}
            <Link href="/privacy" className="text-primary underline underline-offset-4">
              privacy policy
            </Link>{" "}
            and to being contacted about my enquiry.
          </Label>
        </div>
        <FieldError id="consent-error" className="mt-1.5">
          {errors.consent?.message}
        </FieldError>
      </div>

      {/* Honeypot field — hidden from users, catches bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <Button type="submit" size="lg" loading={isSubmitting} className={cn("w-full sm:w-auto")}>
        {!isSubmitting ? <Send className="size-4" aria-hidden="true" /> : null}
        Send message
      </Button>
    </form>
  );
}
