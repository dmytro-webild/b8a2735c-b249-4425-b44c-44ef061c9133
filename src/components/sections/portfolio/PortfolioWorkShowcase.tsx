import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  ExternalLink,
  Eye,
  X,
  Globe,
  Video,
  Headphones,
  Palette,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import BlurReveal from "@/components/kit/BlurReveal";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type PortfolioCategory =
  | "All"
  | "Web Development"
  | "Video & Film"
  | "Audio Production"
  | "Graphic Design";

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Web Development" | "Video & Film" | "Audio Production" | "Graphic Design";
  year: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  liveUrl?: string;
  featured?: boolean;
  services: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "fivestar-health-md",
    title: "Five Star Health MD",
    client: "Five Star Health & Wellness",
    category: "Web Development",
    year: "2026",
    tagline: "Wix Studio Health Platform & Patient Portal",
    description:
      "A high-contrast, modern medical website and booking system designed for primary care clinics. Engineered for rapid patient onboarding, interactive telehealth booking, and mobile responsiveness with streamlined clinical UI.",
    imageSrc: "https://img.b2bpic.net/free-photo/doctor-working-laptop-office-medical-service-concept_1150-13797.jpg",
    imageAlt: "Five Star Health MD website preview",
    liveUrl: "https://fivestarhealthmd.wixstudio.com/5starhealthmd",
    featured: true,
    services: ["Wix Studio Web Building", "Medical UX/UI", "Appointment Workflow", "SEO Optimization"],
    results: [
      "+210% Online Patient Bookings",
      "Sub-1.2s Mobile Page Load Speed",
      "HIPAA-Compliant Contact Integration",
    ],
    testimonial: {
      quote: "Blackops Media Group delivered a breathtaking website layout for Five Star Health MD. Patient conversion surged within the first month.",
      author: "Dr. Marcus Vance",
      role: "Medical Director, Five Star Health",
    },
  },
  {
    id: "fabralous-fits",
    title: "Fabralous Fits",
    client: "Fabralous Fits Apparel",
    category: "Web Development",
    year: "2026",
    tagline: "Custom E-Commerce & Fashion Web Platform",
    description:
      "High-fashion e-commerce web build featuring dark-mode aesthetic, responsive product catalog, interactive size guide, and streamlined checkout experience.",
    imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-man-designing-websites_23-2149930943.jpg?_wi=1",
    imageAlt: "Fabralous Fits website preview",
    liveUrl: "https://www.fabralousfits.com",
    featured: true,
    services: ["Custom Web Building", "E-Commerce UX/UI", "Catalog Design", "Brand Identity"],
    results: [
      "+180% Mobile Conversion Rate",
      "Seamless Payment Gateway Integration",
      "High-Contrast Visual Aesthetic",
    ],
  },
  {
    id: "zbhar-wellness",
    title: "ZBHAR Wellness",
    client: "ZBHAR Wellness Organization",
    category: "Web Development",
    year: "2026",
    tagline: "Holistic Community Health & Wellness Platform",
    description:
      "Empowering community wellness platform with interactive event calendar, resource center, client membership portal, and clean responsive layout.",
    imageSrc: "https://img.b2bpic.net/free-photo/young-beautiful-business-woman-sitting-work-table-working-papers-laptop-isolated-gray_231208-11557.jpg?_wi=1",
    imageAlt: "ZBHAR Wellness website preview",
    liveUrl: "https://www.zbharwellness.org",
    featured: false,
    services: ["Web Architecture", "Community Portal", "Event Management System", "Accessibility Standards"],
    results: [
      "3x Increase in Member Sign-ups",
      "100% Mobile Responsive Layout",
      "Streamlined Program Navigation",
    ],
  },
  {
    id: "vivid-threads",
    title: "Vivid Threads",
    client: "Vivid Threads",
    category: "Web Development",
    year: "2026",
    tagline: "Modern Lifestyle & Apparel Web Showcase",
    description:
      "A sleek, lifestyle-driven web build designed to showcase dynamic lookbooks, custom brand media, and fast interactive shopping galleries.",
    imageSrc: "https://img.b2bpic.net/free-photo/man-doing-product-photography_23-2148970201.jpg?_wi=1",
    imageAlt: "Vivid Threads website preview",
    liveUrl: "https://www.vividthreads.com/",
    featured: false,
    services: ["Web Building & Design", "Lookbook Showcase", "Media Optimization", "Mobile-First UX"],
    results: [
      "+140% Engagement & Time on Site",
      "Ultra-Fast Media Loading",
      "Custom Interactive Lookbook Grid",
    ],
  },
  {
    id: "one-dose",
    title: "One Dose",
    client: "One Dose Health",
    category: "Web Development",
    year: "2026",
    tagline: "Wix Health & Clinical Services Portal",
    description:
      "Clean, modern medical web platform providing patients with direct access to treatment information, consultation scheduling, and healthcare resources.",
    imageSrc: "https://img.b2bpic.net/free-photo/freelancer-using-retouching-program-touchscreen-device_482257-121823.jpg?_wi=1",
    imageAlt: "One Dose website preview",
    liveUrl: "https://blackops1368.wixsite.com/one-dose",
    featured: false,
    services: ["Wix Site Building", "Healthcare UX", "Patient Consultation Funnel", "SEO & Analytics"],
    results: [
      "Instant Consultation Booking",
      "High-Trust Design System",
      "Optimized Mobile Experience",
    ],
  },
  {
    id: "aethel-commercial-film",
    title: "Aethel Motion Commercial",
    client: "Aethel Tech Innovations",
    category: "Video & Film",
    year: "2026",
    tagline: "Cinematic 4K Brand & Product Showcase",
    description:
      "Full cinematic video production including dark-theme color grading, high-speed camera work, glitch visual effects, and broadcast-ready finishing for enterprise marketing.",
    imageSrc: "https://img.b2bpic.net/free-photo/freelancer-using-retouching-program-touchscreen-device_482257-121823.jpg?_wi=2",
    imageAlt: "Video production crew editing commercial film",
    liveUrl: "#contact",
    featured: false,
    services: ["4K Video Production", "Cinematic Color Grading", "Glitch Motion Graphics", "Sound Sync"],
    results: [
      "1.4M+ Video Views Across Channels",
      "45% Increase in Ad Engagement",
      "Featured on Broadcast Digital Networks",
    ],
  },
  {
    id: "vanguard-sound-design",
    title: "Vanguard Spatial Soundscape",
    client: "Vanguard Media Network",
    category: "Audio Production",
    year: "2025",
    tagline: "Executive Audio Mastering & Custom Score",
    description:
      "Crisp multi-track audio engineering, sound effect layering, and voiceover mastering for an executive podcast series and corporate film intros.",
    imageSrc: "https://img.b2bpic.net/free-photo/audio-technician-working-recording-editing-new-music-studio_482257-93653.jpg?_wi=1",
    imageAlt: "Audio technician working on studio recording console",
    liveUrl: "#contact",
    featured: false,
    services: ["Audio Mastering", "Voiceover Editing", "Spatial Sound Design", "Podcast Post-Production"],
    results: [
      "Broadcast Standard -14 LUFS Mastering",
      "50+ Episodes Produced",
      "Awarded Top Audio Quality Badge",
    ],
  },
  {
    id: "krypton-brand-identity",
    title: "Krypton Visual System",
    client: "Krypton Digital Agency",
    category: "Graphic Design",
    year: "2025",
    tagline: "High-Contrast Visual Identity & 3D Assets",
    description:
      "Complete graphic design architecture featuring custom typography, vector identity assets, dark mode UI patterns, and high-impact digital social collateral.",
    imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-man-designing-websites_23-2149930943.jpg?_wi=2",
    imageAlt: "Graphic designer creating visual brand identity",
    liveUrl: "#contact",
    featured: false,
    services: ["Brand Architecture", "Vector Logo Systems", "3D Typography", "Social Campaign Assets"],
    results: [
      "Unified Brand Guidelines Delivered",
      "300+ Marketing Assets Created",
      "+85% Brand Recognition Index",
    ],
  },
];

const CATEGORIES: { label: PortfolioCategory; icon: typeof Globe }[] = [
  { label: "All", icon: Sparkles },
  { label: "Web Development", icon: Globe },
  { label: "Video & Film", icon: Video },
  { label: "Audio Production", icon: Headphones },
  { label: "Graphic Design", icon: Palette },
];

export interface PortfolioWorkShowcaseProps {
  tag?: string;
  title?: string;
  description?: string;
  projects?: ProjectItem[];
  ariaLabel?: string;
  className?: string;
}

export default function PortfolioWorkShowcase({
  tag = "SELECTED WORK",
  title = "Our Work & Case Studies",
  description = "Explore recent client projects spanning custom web building, cinematic film production, audio engineering, and graphic identity systems.",
  projects = DEFAULT_PROJECTS,
  ariaLabel = "Work and Portfolio Showcase",
  className,
}: PortfolioWorkShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      aria-label={ariaLabel}
      className={cn("relative py-8 text-foreground", className)}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border border-border bg-[color-mix(in_srgb,var(--background)_85%,transparent)] p-[1.375rem] backdrop-blur-[14px] lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              {tag && (
                <BlurReveal
                  as="p"
                  className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-muted-foreground"
                >
                  [ {tag} ]
                </BlurReveal>
              )}
              <BlurReveal
                as="h2"
                words={title}
                delay={0.05}
                className="mt-2 text-balance text-[length:var(--text-h1)] font-light"
              />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-[length:var(--text-small)] text-primary">
              <Sparkles className="size-4 animate-pulse text-primary" />
              <span>{projects.length} Verified Deliverables</span>
            </div>
          </div>
          {description && (
            <BlurReveal
              as="p"
              delay={0.15}
              className="max-w-[44rem] text-balance text-[length:var(--text-body)] leading-[1.5] text-muted-foreground"
            >
              {description}
            </BlurReveal>
          )}

          {/* Filter Navigation Tabs */}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/80 pt-6">
            {CATEGORIES.map(({ label, icon: Icon }) => {
              const count =
                label === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === label).length;
              const isActive = activeCategory === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[length:var(--text-label)] uppercase transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      : "border-border bg-card/40 text-muted-foreground hover:border-border/80 hover:text-foreground"
                  )}
                >
                  <Icon className={cn("size-3.5", isActive ? "text-primary" : "text-muted-foreground")} />
                  <span>{label}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[0.7rem]",
                      isActive
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <BlurReveal
              key={project.id}
              as="article"
              delay={(index % 3) * 0.08}
              className={cn(
                "group kit-card flex h-full flex-col overflow-hidden border border-border bg-[color-mix(in_srgb,var(--card)_90%,transparent)] backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)]",
                project.featured && "md:col-span-2 lg:col-span-2"
              )}
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-deep">
                <Media
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[length:var(--text-label)] uppercase backdrop-blur-md text-foreground">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[length:var(--text-label)] text-muted-foreground backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/40 backdrop-blur-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary rounded-full px-4 py-2 text-[length:var(--text-small)] font-mono flex items-center gap-2 shadow-lg"
                  >
                    <Eye className="size-4" />
                    <span>View Case Study</span>
                  </button>
                  {project.liveUrl && project.liveUrl !== "#contact" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary rounded-full px-4 py-2 text-[length:var(--text-small)] font-mono flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="size-4" />
                      <span>Visit Site</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2 font-mono text-[length:var(--text-label)] text-primary">
                    <span>{project.client}</span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[length:var(--text-label)] text-primary border border-primary/30">
                        <Sparkles className="size-3" /> Featured Site
                      </span>
                    )}
                  </div>
                  <h3 className="text-[length:var(--text-h3)] font-light text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[length:var(--text-small)] text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer Info */}
                <div className="flex flex-col gap-3 border-t border-border/60 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="rounded-md bg-muted/60 px-2 py-1 font-mono text-[0.75rem] text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="rounded-md bg-muted/60 px-2 py-1 font-mono text-[0.75rem] text-muted-foreground">
                        +{project.services.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn-link font-mono text-[length:var(--text-small)] text-foreground group-hover:text-primary"
                    >
                      Explore Project Details →
                    </button>
                    {project.liveUrl && project.liveUrl !== "#contact" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        title="Visit Site"
                        aria-label="Visit Site"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>

        {/* Modal Project Case Study */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-project-title"
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-border bg-card p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full border border-border bg-background p-2 text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                aria-label="Close project modal"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-col gap-6">
                {/* Modal Header */}
                <div className="flex flex-col gap-2 pr-10">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[length:var(--text-label)]">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-primary border border-primary/40">
                      {selectedProject.category}
                    </span>
                    <span className="text-muted-foreground">• {selectedProject.client}</span>
                    <span className="text-muted-foreground">• {selectedProject.year}</span>
                  </div>
                  <h2
                    id="modal-project-title"
                    className="text-[length:var(--text-h2)] font-light text-foreground"
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="font-mono text-[length:var(--text-small)] text-primary">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Modal Media */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-border bg-deep">
                  <Media
                    src={selectedProject.imageSrc}
                    alt={selectedProject.imageAlt ?? selectedProject.title}
                    className="size-full object-cover"
                  />
                </div>

                {/* Description & Details */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col gap-4 md:col-span-2">
                    <h3 className="text-[length:var(--text-h3)] font-light text-foreground">
                      Project Overview
                    </h3>
                    <p className="text-[length:var(--text-body)] leading-[1.6] text-muted-foreground">
                      {selectedProject.description}
                    </p>

                    {/* Key Results */}
                    {selectedProject.results.length > 0 && (
                      <div className="mt-2 flex flex-col gap-3 rounded-lg border border-border bg-background/50 p-4">
                        <h4 className="font-mono text-[length:var(--text-label)] uppercase text-foreground">
                          Key Deliverable Outcomes
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedProject.results.map((res) => (
                            <div key={res} className="flex items-start gap-2 text.small text-muted-foreground">
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-[length:var(--text-small)]">{res}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Client Quote if available */}
                    {selectedProject.testimonial && (
                      <blockquote className="border-l-2 border-primary pl-4 py-2 my-2 italic text-muted-foreground text-[length:var(--text-body)]">
                        "{selectedProject.testimonial.quote}"
                        <footer className="mt-2 not-italic font-mono text-[length:var(--text-label)] text-foreground">
                          — {selectedProject.testimonial.author},{" "}
                          <span className="text-muted-foreground">
                            {selectedProject.testimonial.role}
                          </span>
                        </footer>
                      </blockquote>
                    )}
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="flex flex-col gap-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
                    <div>
                      <h4 className="font-mono text-[length:var(--text-label)] uppercase text-muted-foreground mb-3">
                        Services Provided
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.services.map((svc) => (
                          <span
                            key={svc}
                            className="rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-[length:var(--text-label)] text-foreground"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-border pt-6 mt-auto">
                      {selectedProject.liveUrl && selectedProject.liveUrl !== "#contact" ? (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary rounded-full text-center flex items-center justify-center gap-2 py-3"
                        >
                          <ExternalLink className="size-4" />
                          <span>Visit Site</span>
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          onClick={() => setSelectedProject(null)}
                          className="btn-primary rounded-full text-center flex items-center justify-center gap-2 py-3"
                        >
                          <span>Request Similar Project</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="btn-secondary rounded-full py-2 font-mono text-[length:var(--text-small)]"
                      >
                        Close Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
