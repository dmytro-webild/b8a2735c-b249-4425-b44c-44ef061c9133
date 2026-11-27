import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type StatementStarPassageProps = {
  label?: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
};

const StatementStarPassage = ({ label = "In transit", title = "Between one shape and the next, everything is in motion", ariaLabel, className }: StatementStarPassageProps) => (
  <section data-drift="stars" aria-label={ariaLabel ?? title} className={cn("relative flex min-h-[90svh] items-end py-[var(--section-space)]", className)}>
    <div className="mx-auto flex w-[var(--container)] flex-col gap-4 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:flex-row lg:items-end lg:justify-between lg:p-8">
      {label && <p className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground">{label}</p>}
      <BlurReveal as="h2" delay={0.1} className="max-w-[18ch] text-balance text-[length:var(--text-h2)] lg:text-right">
        {title}
      </BlurReveal>
    </div>
  </section>
);

export default StatementStarPassage;
