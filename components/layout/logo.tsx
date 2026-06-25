import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SAS KPO Services — home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-[linear-gradient(120deg,var(--primary),var(--primary-strong))] text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 5.5h16M4 12h10M4 18.5h7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="m15.4 17 2.3 2.3L22 15"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-bold tracking-tight text-foreground">SAS KPO</span>
        <span className="text-[0.66rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Services
        </span>
      </span>
    </Link>
  );
}
