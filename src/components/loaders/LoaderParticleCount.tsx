"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useReducedMotion } from "motion/react";
import { driftCount } from "@/components/kit/driftStats";
import CompanyLogo from "@/components/kit/CompanyLogo";

type LoaderParticleCountProps = {
  brand?: string;
  label?: string;
  count?: number;
  introDelay?: number;
  onComplete?: () => void;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function LoaderParticleCount({ brand = "Drift", label = "Particles live", count, introDelay = 1.4, onComplete }: LoaderParticleCountProps) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const numRef = useRef<HTMLParagraphElement>(null);
  const finish = useRef(onComplete);

  useEffect(() => {
    finish.current = onComplete;
  });

  useEffect(() => {
    if (reduce) {
      setDone(true);
      finish.current?.();
      return;
    }
    const fmt = (v: number) => (v >= 1000 ? `${Math.round(v / 1000)}k` : String(Math.round(v)));
    const run = animate(0, count ?? driftCount(), {
      duration: Math.max(0.4, introDelay - 0.2),
      ease: EASE,
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = fmt(v);
      },
    });
    const t = window.setTimeout(() => {
      setDone(true);
      finish.current?.();
    }, (introDelay + 1) * 1000);
    return () => {
      run.stop();
      window.clearTimeout(t);
    };
  }, [reduce, count, introDelay]);

  if (done) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.9, delay: introDelay, ease: EASE }}
      className="fixed inset-0 z-[200] bg-background text-foreground"
    >
      <motion.div
        animate={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5, delay: introDelay, ease: EASE }}
        className="mx-auto flex h-full w-[var(--container)] flex-col justify-between py-7"
      >
        <div className="flex items-center shrink-0" aria-label={brand || "Blackops Media Group"}>
          <CompanyLogo className="h-12 sm:h-14 w-auto max-h-14 shrink-0" />
        </div>
        <div className="grid gap-1.5">
          <p ref={numRef} className="border-l border-muted-foreground pl-3.5 text-[length:var(--text-display)] font-light tabular-nums leading-none tracking-[-0.035em]">
            0
          </p>
          <p className="pl-[15px] text-[length:var(--text-small)] text-muted-foreground">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
