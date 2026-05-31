import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "../shared/Logo";

/**
 * Footer component with Aagaaz contact details and navigation
 * Includes business information, links, and branding
 */

const navigationSections = {
  Celebrations: [
    { name: "Banquet Halls", href: "/banquet" },
    { name: "Kitty Parties", href: "/kitty-parties" },
    { name: "Corporate Events", href: "/experiences" },
  ],
  Services: [
    { name: "Luxury Rooms", href: "/rooms" },
    { name: "Fine Dining", href: "/dining" },
    { name: "Event Planning", href: "/experiences" },
  ],
  Explore: [
    { name: "Gallery", href: "/gallery" },
    { name: "Our Story", href: "/story" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const contactInfo = {
  address: "Pakhowal Road, Opp Silver Oak Garden & Resort, Ludhiana-142022",
  phone: "+91-9592099941",
  whatsapp: "+91-6239503191",
  email: "info@aagaaz.in",
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Brand & Contact */}
            <div className="lg:col-span-2">
              <Logo size="lg" showTagline href="/" />

              <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
                Premier celebration venue in Ludhiana. From intimate kitty
                parties to grand weddings, we create the perfect beginning for
                every special moment.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {contactInfo.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-accent h-5 w-5 flex-shrink-0" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-accent h-5 w-5 flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(navigationSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-display text-foreground mb-4 font-semibold">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Aagaaz. All rights reserved.
              </p>

              <div className="text-muted-foreground flex items-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
