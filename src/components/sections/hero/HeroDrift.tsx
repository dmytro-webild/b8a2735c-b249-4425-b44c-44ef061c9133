import BlurReveal from "@/components/kit/BlurReveal";
import StarButton from "@/components/kit/StarButton";
import CompanyLogo from "@/components/kit/CompanyLogo";

type HeroDriftProps = {
  brand?: string;
  title?: string;
  description?: string;
  tags?: string[];
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  introDelay?: number;
  className?: string;
};

export default function HeroDrift({
  brand = "Blackops Media Group",
  title = "Motion that answers back",
  description = "It follows your pointer, your scroll and your pause, and it moves in reply.",
  tags = ["Particle engine", "Scroll morphs", "Pointer field"],
  primaryButton = { text: "Start a project", href: "#contact" },
  secondaryButton,
  introDelay = 0,
  className,
}: HeroDriftProps) {
  return (
    <section aria-label="Introduction" data-drift="hero" className={`relative h-svh min-h-[40rem] overflow-x-clip ${className ?? ""}`}>
      <div className="mx-auto flex h-full w-[var(--container)] flex-col pb-7 pt-24 lg:pb-[1.625rem] lg:pt-[15svh]">
        {brand && (
          <BlurReveal delay={introDelay} className="mb-4 inline-flex items-center gap-2.5 self-start border border-border bg-[color-mix(in_srgb,var(--background)_80%,transparent)] px-3.5 py-1.5 backdrop-blur-[8px]">
            <CompanyLogo className="size-4 text-accent" />
            <span className="font-mono text-[length:var(--text-label)] font-medium uppercase tracking-[0.08em] text-foreground">{brand}</span>
          </BlurReveal>
        )}
        <BlurReveal as="h1" words={title} delay={introDelay + 0.05} className="max-w-[11ch] text-balance text-[length:var(--text-display)]" />
        <div className="flex-1" />
        <div className="relative">
          <div aria-hidden="true" className="absolute -left-[50vw] -right-[50vw] top-0 h-px bg-border lg:bg-[linear-gradient(90deg,var(--border)_0_33%,transparent_33%_67%,var(--border)_67%)]" />
          <div className="flex flex-col gap-6 pt-6 lg:gap-8 lg:pt-7">
            {description && (
              <BlurReveal as="p" delay={introDelay + 0.15} className="max-w-[22.5rem] text-balance text-[length:var(--text-label)] uppercase leading-[1.35] tracking-[0.02em]">
                {description}
              </BlurReveal>
            )}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              {tags.length > 0 && (
                <BlurReveal delay={introDelay + 0.3} className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[length:var(--text-label)] text-muted-foreground lg:text-[length:var(--text-small)]">
                  {tags.map((tag, i) => (
                    <div key={tag} className="flex items-center gap-4">
                      {i > 0 && <div aria-hidden="true" className="hidden size-1 rounded-full bg-current lg:block" />}
                      <p className="whitespace-nowrap uppercase">{tag}</p>
                    </div>
                  ))}
                </BlurReveal>
              )}
              <BlurReveal delay={introDelay + 0.45} className="flex w-full flex-col gap-1.5 lg:w-auto lg:flex-row">
                {secondaryButton && (
                  <a href={secondaryButton.href} className="btn-secondary">
                    <p className="btn-label">{secondaryButton.text}</p>
                  </a>
                )}
                <StarButton text={primaryButton.text} href={primaryButton.href} className="w-full lg:w-auto" />
              </BlurReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
