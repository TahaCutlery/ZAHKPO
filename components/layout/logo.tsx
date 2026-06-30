import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * LedgerBridge wordmark + monogram. The mark is a crisp vector "LB" — amber L,
 * white B — on the teal brand gradient, so it stays sharp at any size and in
 * both themes (no raster scaling).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="LedgerBridge — home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,var(--primary-strong),var(--primary))] shadow-[var(--shadow-soft)] ring-1 ring-inset ring-white/15 transition-transform duration-300 ease-out-quint group-hover:-translate-y-0.5"
      >
        {/* soft top highlight for a little depth */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="relative text-[1.1rem] font-extrabold leading-none tracking-[-0.06em]">
          <span className="text-[var(--accent)]">L</span>
          <span className="text-white">B</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-bold tracking-tight text-foreground">
          Ledger<span className="text-primary">Bridge</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Growth Beyond Limits
        </span>
      </span>
    </Link>
  );
}
