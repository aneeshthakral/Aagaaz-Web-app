"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from 'gsap';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Logo } from "../shared/Logo";
import './MobileNav.css';

/**
 * CardNav-based mobile navigation with brand theming
 * Features: All 7 items, brand colors, GSAP animations, Enquire Now CTA
 */

const MobileNav = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  // Navigation items structured for CardNav - All 7 items, no slice limit
  const navigationCards = [
    {
      label: "Revenue",
      bgColor: "var(--aagaaz-gold)",
      textColor: "var(--charcoal)",
      links: [
        { label: "Rooms", href: "/rooms", ariaLabel: "View guest rooms" },
        { label: "Banquet", href: "/banquet", ariaLabel: "View banquet halls" },
        { label: "Kitty Parties", href: "/kitty-parties", ariaLabel: "View kitty party venues" }
      ]
    },
    {
      label: "Experiences",
      bgColor: "var(--wine)",
      textColor: "var(--cream)",
      links: [
        { label: "Dining", href: "/dining", ariaLabel: "View Fessta restaurant" },
        { label: "Experiences", href: "/experiences", ariaLabel: "View event experiences" }
      ]
    },
    {
      label: "Discover",
      bgColor: "var(--charcoal)",
      textColor: "var(--cream)",
      links: [
        { label: "Gallery", href: "/gallery", ariaLabel: "View photo gallery" },
        { label: "Story", href: "/story", ariaLabel: "Learn about Aagaaz" }
      ]
    }
  ];

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease: 'power3.out'
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [navigationCards]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  const isActivePage = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="card-nav-container">
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <Logo size="sm" />
          </div>

          <Link
            href="/#enquire-now"
            className="card-nav-cta-button"
            onClick={() => {
              setIsHamburgerOpen(false);
              setIsExpanded(false);
            }}
          >
            Enquire Now
          </Link>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {navigationCards.map((card, idx) => (
            <div
              key={`${card.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: card.bgColor, color: card.textColor }}
            >
              <div className="nav-card-label">{card.label}</div>
              <div className="nav-card-links">
                {card.links?.map((link, i) => (
                  <Link
                    key={`${link.label}-${i}`}
                    className={`nav-card-link ${isActivePage(link.href) ? 'active' : ''}`}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    onClick={() => {
                      setIsHamburgerOpen(false);
                      setIsExpanded(false);
                    }}
                  >
                    <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export { MobileNav };
export default MobileNav;
