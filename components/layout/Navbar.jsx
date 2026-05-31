"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "../shared/Logo";
import { MobileNav } from "./MobileNav";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

/**
 * Main navigation component with revenue pages prioritized
 * Features: Logo, nav links, persistent Enquire CTA, mobile menu
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
  { name: "Contact", href: "/contact" },
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
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex lg:space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActivePage(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4",
                  "hover:bg-accent/5 hover:text-secondary",
                  isActivePage(item.href)
                    ? "bg-accent/10 text-secondary"
                    : "text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side: Enquire CTA + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enquire CTA Button */}
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 hidden font-medium sm:inline-flex"
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
