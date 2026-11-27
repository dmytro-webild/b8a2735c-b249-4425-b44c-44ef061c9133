import { useCallback, useEffect, useRef, useState } from "react";
import { usePreloadImages } from "@/components/kit/kitMotion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const pad = (n: number) => String(n).padStart(2, "0");

type Testimonial = { quote: string; name: string; role?: string; imageSrc?: string; imageAlt?: string };

type TestimonialPaperCarouselProps = {
  tag?: string;
  title?: string;
  items?: Testimonial[];
  ariaLabel?: string;
  className?: string;
};

const TestimonialPaperCarousel = ({
  tag = "Clients",
  title = "What teams say",
  items = [
    { quote: "We stopped arguing about which number was right. Now we argue about what to do with it.", name: "Lina Osei", role: "Head of Finance" },
    { quote: "The forecasts were live in three weeks, and they have beaten our old model every month since.", name: "Jonas Reid", role: "COO" },
    { quote: "Our analysts ask questions in plain words and get an answer with its sources in seconds.", name: "Mara Voss", role: "Data Lead" },
  ],
  ariaLabel,
  className,
}: TestimonialPaperCarouselProps) => {
  const reduce = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", duration: reduce ? 0 : 30 });
  const sectionRef = useRef<HTMLElement>(null);
  usePreloadImages(sectionRef, "150%");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const [snaps, setSnaps] = useState(items.length);
  const progress = useMotionValue(0);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setCurrent(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  const track = useCallback(() => {
    if (!emblaApi) return;
    const count = emblaApi.scrollSnapList().length;
    progress.set(count > 1 ? Math.min(1, Math.max(0, emblaApi.scrollProgress())) : 1);
  }, [emblaApi, progress]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    track();
    emblaApi.on("select", sync).on("reInit", sync).on("scroll", track).on("reInit", track);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync).off("scroll", track).off("reInit", track);
    };
  }, [emblaApi, sync, track]);

  return (
    <section ref={sectionRef} aria-label={ariaLabel ?? title} className={cn("relative py-[var(--section-space)]", className)}>
      <div className="kit-card mx-auto flex w-[var(--container)] flex-col gap-[clamp(1.5rem,3vw,3rem)] p-[1.375rem] lg:p-8">
        <div className="flex flex-col gap-4">
          {tag && (
            <BlurReveal as="p" className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground">
              {tag}
            </BlurReveal>
          )}
          <BlurReveal as="h2" words={title} delay={0.05} className="max-w-[20ch] text-balance text-[length:var(--text-h1)] font-light" />
        </div>
        <div className="flex flex-col gap-6">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {items.map((item, index) => (
                <BlurReveal
                  key={index}
                  as="article"
                  delay={Math.min(index, 2) * 0.1}
                  className={cn(
                    "flex min-w-0 shrink-0 grow-0 basis-[88%] flex-col gap-8 border-l border-border px-[clamp(1.25rem,2.5vw,2.5rem)] first:border-l-0 first:pl-0 md:basis-1/2",
                    items.length > 2 && "lg:basis-1/3",
                  )}
                >
                  <p aria-hidden="true" className="whitespace-nowrap font-mono text-[length:var(--text-label)]">{`[ ${pad(index + 1)} ]`}</p>
                  <blockquote className="text-balance text-[length:var(--text-h3)] font-light leading-[1.3] [overflow-wrap:anywhere]">{`“${item.quote}”`}</blockquote>
                  <div className="mt-auto flex items-center gap-4 border-t border-border pt-4">
                    {item.imageSrc && (
                      <div className="relative isolate size-12 shrink-0 overflow-hidden bg-[radial-gradient(120%_90%_at_70%_20%,color-mix(in_srgb,var(--accent)_70%,white),color-mix(in_srgb,var(--accent)_45%,var(--deep))_45%,var(--deep))]">
                        <Media src={item.imageSrc} alt={item.imageAlt ?? ""} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover mix-blend-multiply brightness-90 contrast-[1.4] grayscale" />
                      </div>
                    )}
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <p className="text-[length:var(--text-body)] [overflow-wrap:anywhere]">{item.name}</p>
                      {item.role && <p className="text-[length:var(--text-small)] text-muted-foreground [overflow-wrap:anywhere]">{item.role}</p>}
                    </div>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 border-t border-border pt-4">
            <p aria-hidden="true" className="whitespace-nowrap font-mono text-[length:var(--text-label)] tabular-nums">{`${pad(current + 1)} / ${pad(snaps)}`}</p>
            <div aria-hidden="true" className="relative h-px min-w-0 flex-1 bg-border">
              <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-foreground will-change-transform" />
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous testimonial"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-10 cursor-pointer items-center justify-center border border-border transition-colors duration-300 hover:bg-foreground hover:text-background disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ArrowLeft className="size-4" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                disabled={!canNext}
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-10 cursor-pointer items-center justify-center border border-border transition-colors duration-300 hover:bg-foreground hover:text-background disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ArrowRight className="size-4" strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPaperCarousel;
