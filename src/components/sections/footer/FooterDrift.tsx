import CompanyLogo from "@/components/kit/CompanyLogo";

type FooterDriftProps = {
  brand?: string;
  note?: string;
  columns?: { title: string; links: { text: string; href: string }[] }[];
  copyright?: string;
  className?: string;
};

export default function FooterDrift({
  brand = "Drift",
  note = "A particle layer that reads your visitors and answers in motion.",
  columns = [
    { title: "Engine", links: [{ text: "Overview", href: "#" }, { text: "Shapes", href: "#" }, { text: "Pointer field", href: "#" }, { text: "Performance", href: "#" }] },
    { title: "Studio", links: [{ text: "Work", href: "#" }, { text: "Team", href: "#" }, { text: "Journal", href: "#" }] },
    { title: "Connect", links: [{ text: "Instagram", href: "#" }, { text: "LinkedIn", href: "#" }, { text: "Dribbble", href: "#" }] },
  ],
  copyright = "© 2026 Drift Studio",
  className,
}: FooterDriftProps) {
  return (
    <footer aria-label="Footer" className={`relative pb-[var(--gutter)] ${className ?? ""}`}>
      <div className="mx-auto grid w-[var(--container)] grid-cols-2 gap-8 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:p-8">
        <div className="col-span-2 grid content-start gap-[1.125rem] lg:col-span-1">
          <a href="#home" className="flex items-center shrink-0" aria-label={brand || "Blackops Media Group"}>
            <CompanyLogo className="h-10 sm:h-12 md:h-14 w-auto max-h-14 shrink-0" />
          </a>
          {note && <p className="max-w-[18.75rem] text-balance text-[length:var(--text-label)] uppercase leading-[1.35] tracking-[0.02em]">{note}</p>}
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-[1.125rem] font-sans text-[length:var(--text-label)] font-normal uppercase leading-[1.35] tracking-[0.04em]">{col.title}</h3>
            <ul className="grid gap-2.5 text-[length:var(--text-small)] text-muted-foreground">
              {col.links.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="transition-colors duration-300 hover:text-foreground">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {copyright && <p className="col-span-2 border-t border-border pt-6 font-mono text-[length:var(--text-label)] text-muted-foreground lg:col-span-4">{copyright}</p>}
      </div>
    </footer>
  );
}
