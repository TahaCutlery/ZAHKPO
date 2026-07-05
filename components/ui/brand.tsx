import * as React from "react";

/**
 * Renders string content with the "Bridge" in every "LedgerBridge" occurrence
 * in the brand gold, matching the logo lockup. Non-string nodes pass through
 * untouched so callers can still supply custom JSX titles.
 */
export function BrandHighlight({ children }: { children: React.ReactNode }) {
  if (typeof children !== "string" || !children.includes("LedgerBridge")) {
    return <>{children}</>;
  }
  return (
    <>
      {children.split(/(LedgerBridge)/g).map((part, i) =>
        part === "LedgerBridge" ? (
          <React.Fragment key={i}>
            Ledger<span className="text-accent">Bridge</span>
          </React.Fragment>
        ) : (
          part
        ),
      )}
    </>
  );
}
