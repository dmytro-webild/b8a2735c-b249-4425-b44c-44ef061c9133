import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";
import DepthTiltCard from "@/components/library/effects/DepthTiltCard";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const pad = (n: number) => String(n).padStart(2, "0");

type Service = { title: string; description?: string; imageSrc?: string; imageAlt?: string; href?: string; linkText?: string };

type ServicesTiltCardsProps = {
  tag?: string;
  title?: string;
  description?: string;
  items?: Service[];
  linkText?: string;
  ariaLabel?: string;
  className?: string;
};

const ServicesTiltCards = ({
  tag = "Services",
  title = "What we build",
  description,
  items = [
    { title: "Forecasting", description: "Demand and revenue models that update as new data lands.", href: "#" },
    { title: "Search over your data", description: "Ask questions in plain words and get answers with their sources.", href: "#" },
    { title: "Data pipelines", description: "Clean, tested feeds from every system you already run.", href: "#" },
  ],
  linkText = "Learn more",
  ariaLabel,
  className,
}: ServicesTiltCardsProps) => {
  const withImages = items.some((item) => item.imageSrc);

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col gap-[clamp(1.5rem,3vw,3rem)]">
        <div className="flex flex-col gap-4 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:p-8">
          {tag && (
            <BlurReveal as="p" className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground">
              {tag}
            </BlurReveal>
          )}
          <BlurReveal as="h2" words={title} delay={0.05} className="max-w-[20ch] text-balance text-[length:var(--text-h1)] font-light" />
          {description && (
            <BlurReveal as="p" delay={0.15} className="max-w-[22.5rem] text-balance text-[length:var(--text-body)] leading-[1.45] text-muted-foreground">
              {description}
            </BlurReveal>
          )}
        </div>
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <DepthTiltCard key={index} maxTilt={6} className="h-full">
              <BlurReveal as="article" delay={(index % 3) * 0.1} className="kit-card flex h-full flex-col gap-6 p-[1.375rem] lg:p-8">
                  <p aria-hidden="true" className="whitespace-nowrap font-mono text-[length:var(--text-label)]">{`[ ${pad(index + 1)} ]`}</p>
                  {withImages && (
                    <div className="relative isolate aspect-[4/3] w-full overflow-hidden bg-[radial-gradient(120%_90%_at_70%_20%,color-mix(in_srgb,var(--accent)_70%,white),color-mix(in_srgb,var(--accent)_45%,var(--deep))_45%,var(--deep))]">
                      {item.imageSrc && (
                        <Media
                          src={item.imageSrc}
                          alt={item.imageAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 size-full scale-[1.06] object-cover mix-blend-multiply brightness-90 contrast-[1.4] grayscale"
                        />
                      )}
                    </div>
                  )}
                  <div className="mt-auto flex flex-col gap-3">
                    <h3 className="text-balance text-[length:var(--text-h3)] font-light [overflow-wrap:anywhere]">{item.title}</h3>
                    {item.description && (
                      <p className="text-balance text-[length:var(--text-body)] leading-[1.45] text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                  {item.href && (
                    <a href={item.href} className="btn-link self-start border-t border-border pt-4 text-[length:var(--text-small)]">
                      {item.linkText ?? linkText}
                    </a>
                  )}
              </BlurReveal>
            </DepthTiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTiltCards;
