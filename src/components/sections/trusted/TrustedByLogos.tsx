import BlurReveal from "@/components/kit/BlurReveal";

type TrustedByLogosProps = {
  label?: string;
  className?: string;
};

const BRANDS = [
  {
    name: "Apex Media Studios",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 140 32" fill="currentColor">
        <path d="M12 4L4 28H10L12 21H18L20 28H26L18 4H12ZM13.8 15.5L15 10L16.2 15.5H13.8Z" />
        <text x="32" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">APEX MEDIA</text>
      </svg>
    ),
  },
  {
    name: "Horizon Digital",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 150 32" fill="currentColor">
        <circle cx="12" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M7 16H17" stroke="currentColor" strokeWidth="3" />
        <text x="30" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">HORIZON</text>
      </svg>
    ),
  },
  {
    name: "Vanguard Audio",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 155 32" fill="currentColor">
        <path d="M4 8L12 24L20 8H15L12 16L9 8H4Z" />
        <path d="M18 10V22M22 6V26M26 13V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <text x="36" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">VANGUARD</text>
      </svg>
    ),
  },
  {
    name: "Paramount Cinema",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 160 32" fill="currentColor">
        <polygon points="12,4 20,20 4,20" />
        <polygon points="12,10 17,20 7,20" fill="var(--background)" />
        <text x="28" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">PARAMOUNT</text>
      </svg>
    ),
  },
  {
    name: "Nexus Labs",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="currentColor">
        <path d="M6 24V8H10L16 18V8H20V24H16L10 14V24H6Z" />
        <text x="28" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">NEXUS LABS</text>
      </svg>
    ),
  },
  {
    name: "Starlight Motion",
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 150 32" fill="currentColor">
        <path d="M12 4L14.5 10.5L21 12L14.5 13.5L12 20L9.5 13.5L3 12L9.5 10.5L12 4Z" />
        <text x="28" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">STARLIGHT</text>
      </svg>
    ),
  },
];

export default function TrustedByLogos({
  label = "Trusted by leading regional & enterprise brands",
  className,
}: TrustedByLogosProps) {
  return (
    <section aria-label="Trusted By" className={`relative py-8 ${className ?? ""}`}>
      <div className="mx-auto w-[var(--container)] border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-6 backdrop-blur-[14px] lg:p-8">
        <BlurReveal delay={0.1}>
          <p className="mb-6 font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground text-center lg:text-left">
            {label}
          </p>
        </BlurReveal>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
          {BRANDS.map((brand, idx) => (
            <BlurReveal key={brand.name} delay={0.15 + idx * 0.05} className="w-full flex justify-center">
              <div
                className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 opacity-75 hover:opacity-100 flex items-center justify-center py-2 px-3"
                title={brand.name}
              >
                {brand.svg}
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
