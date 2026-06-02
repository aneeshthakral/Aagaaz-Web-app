"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "../shared/Logo";
import { MobileNav } from "./MobileNav";
import { StarBorder } from "../shared/StarBorder";
import { cn } from "@/lib/utils";

/**
 * Brand-themed sticky navigation with StarBorder CTA
 * Features: Gold background, dark text (contrast compliance), all 7 items visible
 */

const navigationItems = [
  // Revenue pages first (the money makers)
  { name: "Rooms", href: "/rooms" },
  { name: "Banquet", href: "/banquet" },
  { name: "Kitty Parties", href: "/kitty-parties" },

  // Supporting pages
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Story", href: "/story" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActivePage = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Height reservation spacer to prevent hero overlap */}
      <div className="h-20" />

      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-accent border-b border-accent-hover/20 shadow-sm">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation - All 7 items visible */}
            <nav className="hidden items-center space-x-1 lg:flex xl:space-x-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActivePage(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 xl:px-4",
                    "hover:bg-white/10 hover:text-charcoal/90",
                    isActivePage(item.href)
                      ? "bg-white/15 text-charcoal font-semibold"
                      : "text-charcoal/80",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side: StarBorder Enquire CTA + Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* StarBorder Enquire CTA Button - Desktop only */}
              <div className="hidden lg:block">
                <StarBorder as={Link} href="/#enquire-now" className="hover:scale-105 transition-transform duration-200">
                  Enquire Now
                </StarBorder>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
