import { useId, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Item = { title: string; description: string };

type FaqPaperAccordionProps = {
  title?: string;
  items?: Item[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Item[] = [
  { title: "What exactly is this?", description: "A particle layer for websites. One cloud of points takes a new shape for each section and answers the pointer as people move across it." },
  { title: "Does it run on older phones?", description: "Yes. Phones draw fewer particles at a lower pixel ratio, and the scene pauses when the tab is hidden." },
  { title: "Is it accessible?", description: "All the content is ordinary text. With reduced motion turned on, the shapes still change but nothing drifts or swirls." },
  { title: "Can it take my own shape?", description: "Any 3D model in the library can become the cloud: the page samples points across its surface when it loads." },
];

const STAR = "M11 2v18M2 11h18M4.6 4.6l12.8 12.8M17.4 4.6 4.6 17.4";

const FaqPaperAccordion = ({ title = "Questions people ask", items = DEFAULT_ITEMS, ariaLabel, className }: FaqPaperAccordionProps) => {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative py-[var(--section-space)]", className)}>
      <div className="kit-card mx-auto flex w-[var(--container)] flex-col items-center p-[1.375rem] lg:p-8">
        <svg viewBox="0 0 22 22" aria-hidden="true" className="mb-[1.125rem] size-[1.125rem]">
          <path d={STAR} stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
        <BlurReveal as="h2" className="max-w-[18ch] text-balance text-center text-[length:var(--text-h2)]">
          {title}
        </BlurReveal>
        <ul className="mt-[clamp(1.5rem,3vw,3rem)] w-full max-w-[40rem]">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <li key={i} className="border-b border-border">
                <button
                  type="button"
                  id={`${id}-q${i}`}
                  aria-expanded={expanded}
                  aria-controls={`${id}-a${i}`}
                  onClick={() => setOpen(expanded ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left text-[length:var(--text-label)] uppercase tracking-[0.03em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                >
                  <p className="text-balance">{item.title}</p>
                  <div aria-hidden="true" className="relative size-3 flex-none">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-current" />
                    <div className={cn("absolute inset-x-0 top-1/2 h-px bg-current transition-transform duration-[400ms] ease-[var(--ease-out)]", expanded ? "rotate-0" : "rotate-90")} />
                  </div>
                </button>
                <div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  className={cn("grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out)]", expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                >
                  <p className={cn("max-w-[32.5rem] overflow-hidden text-[length:var(--text-small)] leading-[1.5] text-muted-foreground", expanded && "pb-5")}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FaqPaperAccordion;
