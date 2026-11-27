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
              name: "Work",
              href: "#work"
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
                  href: "#work"
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
                  text: "1734 Maryland Avenue Baltimore, Md 21201",
                  href: "#contact"
                },
                {
                  text: "1 (863) 343-1726",
                  href: "tel:18633431726"
                },
                {
                  text: "Mon–Fri 9am–4pm | Sat 10am–2pm",
                  href: "#contact"
                },
                {
                  text: "info@blackopsmediagroup.online",
                  href: "mailto:info@blackopsmediagroup.online"
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
