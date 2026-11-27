import { useState, type FormEvent } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BlurReveal from "@/components/kit/BlurReveal";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ContactInlineFieldProps = {
  title?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  successText?: string;
  errorText?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
  ariaLabel?: string;
  className?: string;
};

const ContactInlineField = ({
  title = "Let's talk.",
  namePlaceholder = "Name",
  emailPlaceholder = "Email",
  buttonText = "Contact us",
  successText = "Thanks, we will write back within a day.",
  errorText = "Add an email address so we can reply.",
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
      <div className="mx-auto flex w-[var(--container)] flex-col items-center gap-9 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] text-center backdrop-blur-[14px] lg:p-8">
        <BlurReveal as="h2" className="max-w-[14ch] text-balance text-[length:var(--text-display)]">
          {title}
        </BlurReveal>
        <BlurReveal as="form" delay={0.1} onSubmit={submit} className="flex w-full max-w-[35rem] flex-col border border-border bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] lg:flex-row">
          <input name="name" placeholder={namePlaceholder} aria-label={namePlaceholder} autoComplete="name" className="h-[3.25rem] min-w-0 shrink-0 lg:flex-1 border-b border-border bg-transparent px-[1.125rem] text-[length:var(--text-body)] placeholder:text-muted-foreground focus:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] focus:outline-none lg:border-r lg:border-b-0" />
          <input name="email" type="email" placeholder={emailPlaceholder} aria-label={emailPlaceholder} autoComplete="email" className="h-[3.25rem] min-w-0 shrink-0 lg:flex-1 border-b border-border bg-transparent px-[1.125rem] text-[length:var(--text-body)] placeholder:text-muted-foreground focus:bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] focus:outline-none lg:border-r lg:border-b-0" />
          <button type="submit" className="btn-primary min-h-[3.25rem]">
            {buttonText}
          </button>
        </BlurReveal>
        <p role="status" className="min-h-5 text-[length:var(--text-small)] text-accent">{status}</p>
      </div>
    </section>
  );
};

export default ContactInlineField;
