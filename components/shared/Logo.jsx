import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo component for Aagaaz branding
 * Can be used in navbar, footer, and other locations
 */
export function Logo({
  className,
  size = "default",
  href = "/",
  showTagline = false,
  ...props
}) {
  const sizeClasses = {
    sm: "text-xl",
    default: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const LogoContent = () => (
    <div className={cn("flex flex-col", className)} {...props}>
      <div
        className={cn(
          "font-display text-accent font-semibold transition-colors duration-300",
          sizeClasses[size],
        )}
        style={{
          letterSpacing: "0.05em",
          color: "var(--aagaaz-gold)",
        }}
      >
        Aagaaz
      </div>
      {showTagline && (
        <div className="text-muted-foreground font-sans text-xs font-medium tracking-wider uppercase">
          Where celebrations begin
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
