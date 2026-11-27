import { useEffect, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Cta = { text: string; href: string };

type AboutParticleShapeProps = {
  title?: string;
  description?: string;
  note?: string;
  hint?: string;
  touchHint?: string;
  primaryButton?: Cta;
  ariaLabel?: string;
  className?: string;
};

const STAR = "M11 2v18M2 11h18M4.6 4.6l12.8 12.8M17.4 4.6 4.6 17.4";

const AboutParticleShape = ({
  title = "Any shape, in particles",
  description = "The shape comes from the 3D library. Any model there can turn into a cloud like this one.",
  note = "Reduced motion keeps it still.",
  hint = "Move across it",
  touchHint = "Drag across it",
  primaryButton = { text: "Start a project", href: "#contact" },
  ariaLabel,
  className,
}: AboutParticleShapeProps) => {
  const hintRef = useRef<HTMLParagraphElement>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(matchMedia("(hover: none)").matches);
    const hide = () => {
      if (hintRef.current) hintRef.current.style.opacity = "0";
    };
    addEventListener("pointermove", hide, { once: true });
    return () => removeEventListener("pointermove", hide);
  }, []);

  return (
    <section data-drift="model" aria-label={ariaLabel ?? title} className={cn("relative h-svh min-h-[47.5rem] overflow-x-clip", className)}>
      <div className="relative h-full">
        <div className="relative mx-auto flex h-full w-[var(--container)] flex-col justify-between pt-[clamp(6rem,14svh,9rem)] pb-[clamp(1.875rem,4svh,2.5rem)] lg:pt-[50svh]">
          <div className="flex items-start justify-between gap-[var(--gap)]">
            {description && (
              <div className="border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:p-8">
                <BlurReveal as="p" className="max-w-[18.75rem] text-balance text-[length:var(--text-label)] uppercase leading-[1.35] tracking-[0.02em] lg:max-w-[22.5rem]">
                  {description}
                </BlurReveal>
              </div>
            )}
            {note && (
              <div className="hidden border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:block lg:p-8">
                <BlurReveal as="p" delay={0.1} className="max-w-[14.375rem] text-balance text-right text-[length:var(--text-label)] uppercase leading-[1.35] tracking-[0.02em]">
                  {note}
                </BlurReveal>
              </div>
            )}
          </div>
          {hint && (
            <p ref={hintRef} className="absolute left-1/2 top-[26svh] -translate-x-1/2 whitespace-nowrap border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] px-3.5 py-2 backdrop-blur-[14px] text-[length:var(--text-label)] uppercase tracking-[0.2em] text-muted-foreground transition-opacity duration-[var(--dur-base)]">
              {touch ? touchHint : hint}
            </p>
          )}
          <div className="flex flex-col-reverse gap-[clamp(1.5rem,3vw,3rem)] border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:flex-row lg:items-end lg:justify-between lg:p-8">
            {primaryButton && (
              <BlurReveal delay={0.1} className="flex gap-1.5">
                <a href={primaryButton.href} className="btn-primary flex-1 lg:flex-none">
                  <p className="btn-label">{primaryButton.text}</p>
                </a>
                <a href={primaryButton.href} aria-label={primaryButton.text} className="btn-primary btn-star">
                  <svg viewBox="0 0 22 22" aria-hidden="true">
                    <path d={STAR} stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                </a>
              </BlurReveal>
            )}
            <BlurReveal as="h2" delay={0.2} className="max-w-[12ch] text-balance text-[length:var(--text-h1)] lg:text-right">
              {title}
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutParticleShape;
