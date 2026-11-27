import { Outlet } from "react-router-dom";
import NavbarDrift from "@/components/navbars/NavbarDrift";
import FooterDrift from "@/components/sections/footer/FooterDrift";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="grid">
      <header data-webild-section="Header">
        <NavbarDrift
          brand="Blackops Media Group"
          navItems={[
            {
              name: "Home",
              href: "#home"
            },
            {
              name: "Capabilities",
              href: "#stars"
            },
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Studio",
              href: "#model"
            }
          ]}
          primaryButton={{
            text: "Get in Touch",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="grid">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterDrift
          brand="Blackops Media Group"
          note="Cinematic video production, commercial photography, audio engineering, and graphic design for clients nationwide."
          columns={[
            {
              title: "Navigation",
              links: [
                {
                  text: "Overview",
                  href: "#home"
                },
                {
                  text: "Capabilities",
                  href: "#stars"
                },
                {
                  text: "Services",
                  href: "#services"
                },
                {
                  text: "Work Showcase",
                  href: "#model"
                }
              ]
            },
            {
              title: "Studio",
              links: [
                {
                  text: "Testimonials",
                  href: "#testimonial"
                },
                {
                  text: "Project FAQ",
                  href: "#faq"
                },
                {
                  text: "Contact Us",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Connect",
              links: [
                {
                  text: "hello@blackopsmediagroup.com",
                  href: "mailto:hello@blackopsmediagroup.com"
                },
                {
                  text: "100 N Charles St Studio",
                  href: "#contact"
                },
                {
                  text: "Start a Project",
                  href: "#contact"
                }
              ]
            }
          ]}
          copyright="© 2026 Blackops Media Group. All rights reserved."
        />
      </footer>
    </div>
  );
}
