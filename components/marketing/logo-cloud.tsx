import { cn } from "@/lib/utils";
import { tools } from "@/content/tools";

export function LogoCloud({
  className,
  label = "Working across the platforms your clients already use",
}: {
  className?: string;
  label?: string | null;
}) {
  return (
    <div className={className}>
      {label ? <p className="text-center text-sm text-muted-foreground">{label}</p> : null}
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {tools.map((tool) => (
          <li
            key={tool}
            className={cn(
              "text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground",
            )}
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
