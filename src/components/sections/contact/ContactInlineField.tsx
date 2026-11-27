import { useState, type FormEvent } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import BlurReveal from "@/components/kit/BlurReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ContactInlineFieldProps = {
  title?: string;
  subtitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  successText?: string;
  errorText?: string;
  address?: string;
  phone?: string;
  phoneFormatted?: string;
  contactEmail?: string;
  hoursWeekday?: string;
  hoursSaturday?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
  ariaLabel?: string;
  className?: string;
};

const ContactInlineField = ({
  title = "Start a project",
  subtitle = "Reach out directly or send us your details for a quote within 24 hours.",
  namePlaceholder = "Your name",
  emailPlaceholder = "Work email",
  buttonText = "Request rates",
  successText = "Thanks! Our studio production team will contact you shortly.",
  errorText = "Please provide a valid work email so we can reply.",
  address = "1734 Maryland Avenue Baltimore, Md 21201",
  phone = "18633431726",
  phoneFormatted = "1 (863) 343-1726",
  contactEmail = "info@blackopsmediagroup.online",
  hoursWeekday = "Monday–Friday 9am to 4pm",
  hoursSaturday = "Saturday 10am to 2pm",
  onSubmit,
  ariaLabel,
  className,
}: ContactInlineFieldProps) => {
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const ok = /.+@.+\..+/.test(email);
    setStatus(ok ? successText : errorText);
    if (ok) onSubmit?.({ name, email });
  };

  return (
    <section id="contact" data-drift="hero" aria-label={ariaLabel ?? title} className={cn("relative py-[var(--section-space)]", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col items-center gap-8 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:p-10">
        <div className="text-center">
          <BlurReveal as="h2" className="text-balance text-[length:var(--text-h2)]">
            {title}
          </BlurReveal>
          {subtitle && (
            <BlurReveal as="p" delay={0.05} className="mt-2 text-[length:var(--text-body)] text-muted-foreground max-w-xl mx-auto">
              {subtitle}
            </BlurReveal>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <BlurReveal delay={0.1} className="flex flex-col gap-2.5 border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] p-5 text-left transition-colors duration-200 hover:border-accent/40">
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="size-4 shrink-0" />
              <span className="font-mono text-[length:var(--text-label)] uppercase tracking-wider text-muted-foreground">Address</span>
            </div>
            <p className="font-sans text-[length:var(--text-body)] text-foreground font-medium leading-snug">
              {address}
            </p>
          </BlurReveal>

          <BlurReveal delay={0.15} className="flex flex-col gap-2.5 border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] p-5 text-left transition-colors duration-200 hover:border-accent/40">
            <div className="flex items-center gap-2 text-accent">
              <Phone className="size-4 shrink-0" />
              <span className="font-mono text-[length:var(--text-label)] uppercase tracking-wider text-muted-foreground">Phone</span>
            </div>
            <a href={`tel:${phone}`} className="font-sans text-[length:var(--text-body)] text-foreground font-medium leading-snug hover:text-accent transition-colors">
              {phoneFormatted}
            </a>
          </BlurReveal>

          <BlurReveal delay={0.18} className="flex flex-col gap-2.5 border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] p-5 text-left transition-colors duration-200 hover:border-accent/40">
            <div className="flex items-center gap-2 text-accent">
              <Mail className="size-4 shrink-0" />
              <span className="font-mono text-[length:var(--text-label)] uppercase tracking-wider text-muted-foreground">Email</span>
            </div>
            <a href={`mailto:${contactEmail}`} className="font-sans text-[length:var(--text-body)] text-foreground font-medium leading-snug hover:text-accent transition-colors break-all">
              {contactEmail}
            </a>
          </BlurReveal>

          <BlurReveal delay={0.2} className="flex flex-col gap-2.5 border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] p-5 text-left transition-colors duration-200 hover:border-accent/40">
            <div className="flex items-center gap-2 text-accent">
              <Clock className="size-4 shrink-0" />
              <span className="font-mono text-[length:var(--text-label)] uppercase tracking-wider text-muted-foreground">Office Hours</span>
            </div>
            <div className="font-sans text-[length:var(--text-body)] text-foreground font-medium leading-snug space-y-0.5">
              <p>{hoursWeekday}</p>
              <p>{hoursSaturday}</p>
            </div>
          </BlurReveal>
        </div>

        {/* Form */}
        <BlurReveal as="form" delay={0.25} onSubmit={submit} className="flex w-full max-w-[35rem] flex-col border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] lg:flex-row">
          <input name="name" placeholder={namePlaceholder} aria-label={namePlaceholder} autoComplete="name" className="h-[3.25rem] min-w-0 shrink-0 lg:flex-1 border-b border-border bg-transparent px-[1.125rem] text-[length:var(--text-body)] placeholder:text-muted-foreground focus:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] focus:outline-none lg:border-r lg:border-b-0" />
          <input name="email" type="email" placeholder={emailPlaceholder} aria-label={emailPlaceholder} autoComplete="email" className="h-[3.25rem] min-w-0 shrink-0 lg:flex-1 border-b border-border bg-transparent px-[1.125rem] text-[length:var(--text-body)] placeholder:text-muted-foreground focus:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] focus:outline-none lg:border-r lg:border-b-0" />
          <button type="submit" className="btn-primary min-h-[3.25rem]">
            {buttonText}
          </button>
        </BlurReveal>
        <p role="status" className="min-h-5 text-center text-[length:var(--text-small)] text-accent">{status}</p>
      </div>
    </section>
  );
};

export default ContactInlineField;
