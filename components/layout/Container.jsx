import { cn } from "@/lib/utils";

/**
 * Container component for consistent max-width and padding across all pages
 * Follows Aagaaz design system with luxury spacing
 */
export function Container({ children, className, size = "default", ...props }) {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-7xl", // 1280px - generous for luxury feel
    lg: "max-w-screen-2xl", // 1536px for wide layouts
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        "sm:px-8 lg:px-12", // Progressive enhancement for larger screens
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
