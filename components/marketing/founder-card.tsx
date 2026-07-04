import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Founder } from "@/content/team";

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <Card interactive className="group flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[2/3] overflow-hidden sm:aspect-[3/3.2]">
        <Image
          src={founder.image.src}
          alt={founder.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          className="object-cover object-top transition-transform duration-500 ease-out-quint group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#031833]/85 via-transparent to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f8d509]/95 px-3 py-1 text-xs font-semibold text-[#1c1600]">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            {founder.credential}
          </span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{founder.name}</h3>
          <p className="text-sm font-medium text-white/75">{founder.role}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {founder.expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
