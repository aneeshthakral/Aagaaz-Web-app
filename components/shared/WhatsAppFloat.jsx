"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp button component
 * Persistent across all pages with proper click-to-chat integration
 */

const WHATSAPP_NUMBER = "916239503191"; // wa.me requires digits only
const WHATSAPP_MESSAGE =
  "Hi! I'd like to enquire about celebrations at Aagaaz.";

export function WhatsAppFloat({
  className,
  message = WHATSAPP_MESSAGE,
  ...props
}) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={cn(
        "fixed right-6 bottom-6 z-50",
        "flex h-14 w-14 items-center justify-center",
        "rounded-full bg-accent text-accent-foreground shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-xl",
        "focus-visible:ring-4 focus-visible:ring-accent/30 focus-visible:outline-none",
        "animate-pulse hover:animate-none",
        className,
      )}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      {...props}
    >
      <MessageCircle className="h-6 w-6" />

      {/* Pulsing ring animation */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full bg-accent/30",
          "animate-ping",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

/**
 * Utility component for customizing WhatsApp messages for specific pages
 */
export function WhatsAppFloatWithMessage({ pageType, ...props }) {
  const messages = {
    banquet:
      "Hi! I'd like to enquire about banquet halls for my celebration at Aagaaz.",
    kitty: "Hi! I'd like to enquire about kitty party venues at Aagaaz.",
    rooms: "Hi! I'd like to enquire about room bookings at Aagaaz.",
    dining:
      "Hi! I'd like to enquire about dining at Fessta Restaurant, Aagaaz.",
    contact: "Hi! I'd like to get in touch with Aagaaz for my celebration.",
  };

  return (
    <WhatsAppFloat
      message={messages[pageType] || messages.contact}
      {...props}
    />
  );
}
