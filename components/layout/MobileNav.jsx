"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Logo } from "../shared/Logo";
import { cn } from "@/lib/utils";

/**
 * Mobile navigation component using shadcn Sheet
 * Same navigation structure as desktop but optimized for mobile
 */

const navigationItems = [
  // Revenue pages first
  { name: "Rooms", href: "/rooms" },
  { name: "Banquet", href: "/banquet" },
  { name: "Kitty Parties", href: "/kitty-parties" },

  // Supporting pages
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActivePage = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80 p-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle>
            <Logo size="sm" href="/" />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 p-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                aria-current={isActivePage(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                  "hover:bg-accent/10 hover:text-secondary",
                  isActivePage(item.href)
                    ? "bg-accent/10 text-secondary"
                    : "text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto p-6 pt-0">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              onClick={handleLinkClick}
            >
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
