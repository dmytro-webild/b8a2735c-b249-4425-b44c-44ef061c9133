import HeroDrift from "@/components/sections/hero/HeroDrift";
import TrustedByLogos from "@/components/sections/trusted/TrustedByLogos";
import StatementStarPassage from "@/components/sections/statement/StatementStarPassage";
import ServicesTiltCards from "@/components/sections/features/ServicesTiltCards";
import PortfolioWorkShowcase from "@/components/sections/portfolio/PortfolioWorkShowcase";
import AboutParticleShape from "@/components/sections/about/AboutParticleShape";
import TestimonialPaperCarousel from "@/components/sections/testimonial/TestimonialPaperCarousel";
import FaqPaperAccordion from "@/components/sections/faq/FaqPaperAccordion";
import ContactInlineField from "@/components/sections/contact/ContactInlineField";
import ParticleDriftStage from "@/components/kit/ParticleDriftStage";
import LoaderParticleCount from "@/components/loaders/LoaderParticleCount";

export default function HomePage() {
  return (
    <>
      <ParticleDriftStage
        variant="drift"
      />

      <LoaderParticleCount
        brand="Blackops Media Group"
        label="Initializing studio media engine..."
        introDelay={1.4}
      />

      <div id="home" data-webild-section="HeroDrift" data-webild-section-id="HeroDrift-1" data-section="home">
        <HeroDrift
          brand="Blackops Media Group"
          title="Cinematic video & audio production"
          description="We create high-contrast visual brands, commercial films, crisp audio, and modern design for ambitious businesses nationwide."
          tags={[
            "Cinematic Video",
            "Audio Production",
            "Graphic Design"
          ]}
          primaryButton={{
            text: "View work",
            href: "#work"
          }}
          introDelay={1.4}
        />
      </div>

      <div id="trusted" data-webild-section="TrustedByLogos" data-webild-section-id="TrustedByLogos-1" data-section="trusted">
        <TrustedByLogos />
      </div>

      <div id="stars" data-webild-section="StatementStarPassage" data-webild-section-id="StatementStarPassage-1" data-section="stars">
        <StatementStarPassage
          label="Production Standards"
          title="We transform complex briefs into high-impact visual media."
        />
      </div>

      <div id="services" data-webild-section="ServicesTiltCards" data-webild-section-id="ServicesTiltCards-1" data-section="services">
        <ServicesTiltCards
          tag="Our Standard"
          title="Built for modern channels"
          items={[
            {
              title: "Cinematic Video Production",
              description: "High-contrast commercial video editing, color grading, and broadcast-ready finishing.",
              imageSrc: "https://img.b2bpic.net/free-photo/freelancer-using-retouching-program-touchscreen-device_482257-121823.jpg?_wi=3",
              imageAlt: "Freelancer using retouching program on touchscreen device",
              href: "#work",
              linkText: "Explore service"
            },
            {
              title: "Commercial Photography",
              description: "Crisp studio product photography and high-resolution commercial images for digital and print.",
              imageSrc: "https://img.b2bpic.net/free-photo/man-doing-product-photography_23-2148970201.jpg?_wi=2",
              imageAlt: "Man doing product photography",
              href: "#work",
              linkText: "Explore service"
            },
            {
              title: "Audio & Sound Design",
              description: "Crystal-clear sound engineering, custom voiceovers, and rich audio production for media.",
              imageSrc: "https://img.b2bpic.net/free-photo/audio-technician-working-recording-editing-new-music-studio_482257-93653.jpg?_wi=2",
              imageAlt: "Audio technician working on recording and editing new music in studio",
              href: "#work",
              linkText: "Explore service"
            },
            {
              title: "Graphic & Web Design",
              description: "Modern visual identity, sharp typography, and web development tailored to your brand.",
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-man-designing-websites_23-2149930943.jpg?_wi=3",
              imageAlt: "Medium shot man designing websites",
              href: "#work",
              linkText: "Explore service"
            }
          ]}
          linkText="Explore services"
        />
      </div>

      <div id="work" data-webild-section="PortfolioWorkShowcase" data-webild-section-id="PortfolioWorkShowcase-1" data-section="work">
        <PortfolioWorkShowcase />
      </div>

      <div id="model" data-webild-section="AboutParticleShape" data-webild-section-id="AboutParticleShape-1" data-section="model">
        <AboutParticleShape
          title="Built in our creative studio"
          description="Cinematic video, commercial photos, audio editing, and graphic design built for high-growth campaigns."
          note="Full-service audio, video, and design."
          hint="Move to inspect"
          touchHint="Drag to inspect"
          primaryButton={{
            text: "Start a project",
            href: "#contact"
          }}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPaperCarousel" data-webild-section-id="TestimonialPaperCarousel-1" data-section="testimonial">
        <TestimonialPaperCarousel
          tag="Client Feedback"
          title="Trusted by Leading Brands"
          items={[
            {
              quote: "Blackops Media Group delivered a broadcast-quality video series that completely overhauled our brand presence.",
              name: "Luke Okafor",
              role: "Creative Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-1868.jpg",
              imageAlt: "Positive bearded Black male with a tattoo on cross arms, dressed in a white shirt."
            },
            {
              quote: "Their commercial photography and glitch graphic design aesthetic gave our product launch a high-impact visual edge.",
              name: "Grace Henderson",
              role: "Marketing Director",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-girl-jacket-white-shirt-looking-camera_132075-13827.jpg",
              imageAlt: "Portrait of girl in jacket and white shirt looking at camera"
            },
            {
              quote: "The sound design and audio production for our podcast series was flawless, crisp, and finished ahead of schedule.",
              name: "Daniel Brooks",
              role: "Brand Strategist",
              imageSrc: "https://img.b2bpic.net/free-photo/handsome-bearded-elegant-male-eyeglasses-dressed-dark-blue-suit-with-bow-tie-grey-vignette-background_613910-15660.jpg",
              imageAlt: "Handsome bearded elegant male in eyeglasses dressed in a dark blue suit with bow tie over grey vignette background."
            },
            {
              quote: "From raw video footage to final edit, their production crew brought unmatched cinematic style and creative precision.",
              name: "Leah Webb",
              role: "Operations Manager",
              imageSrc: "https://img.b2bpic.net/free-photo/young-beautiful-business-woman-sitting-work-table-working-papers-laptop-isolated-gray_231208-11557.jpg?_wi=2",
              imageAlt: "Young beautiful business woman sitting at work table working on papers and laptop isolated on gray"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqPaperAccordion" data-webild-section-id="FaqPaperAccordion-1" data-section="faq">
        <FaqPaperAccordion
          title="Before starting a project"
          items={[
            {
              title: "What services do you offer?",
              description: "We provide video production, commercial photography, graphic design, sound engineering, film editing, and custom web building."
            },
            {
              title: "Where are you located and do you service outside your area?",
              description: "We operate out of our main studio at 100 N Charles St, serving clients locally, nationally, and internationally."
            },
            {
              title: "How do project quotes work?",
              description: "Send us your campaign requirements or creative brief, and we will provide a detailed scope and timeline within 24 hours."
            },
            {
              title: "What industries do you work with?",
              description: "We produce media for commercial brands, technology firms, advertising agencies, and local enterprise clients."
            },
            {
              title: "What is your typical turnaround time?",
              description: "Turnaround depends on the project scope. Photography and motion design typically take 3 to 5 business days, while full video campaigns take 2 weeks."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactInlineField" data-webild-section-id="ContactInlineField-1" data-section="contact">
        <ContactInlineField
          title="Start a project"
          namePlaceholder="Your name"
          emailPlaceholder="Work email"
          buttonText="Request rates"
          successText="Thanks! Our studio production team will contact you shortly."
          errorText="Please provide a valid work email so we can reply."
        />
      </div>
    </>
  );
}
