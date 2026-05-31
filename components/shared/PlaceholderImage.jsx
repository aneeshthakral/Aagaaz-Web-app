import { cn } from "@/lib/utils";

/**
 * Placeholder image component for layout consistency
 * Sized properly so real photos can drop in without layout shift
 */
export function PlaceholderImage({
  width = 800,
  height = 600,
  className,
  alt = "Placeholder image",
  type = "hotel", // hotel, food, event, room
  ...props
}) {
  // Color themes for different content types
  const typeColors = {
    hotel: "from-amber-100 to-amber-200",
    food: "from-orange-100 to-orange-200",
    event: "from-rose-100 to-rose-200",
    room: "from-blue-100 to-blue-200",
    default: "from-gray-100 to-gray-200",
  };

  const gradientClass = typeColors[type] || typeColors.default;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-gradient-to-br",
        gradientClass,
        className,
      )}
      style={{
        maxWidth: `${width}px`,
        aspectRatio: `${width}/${height}`,
      }}
      role="img"
      aria-label={alt}
      {...props}
    >
      {/* Elegant pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />

      {/* Content indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/40">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-sm font-medium tracking-wider text-gray-600 uppercase">
            {width} × {height}
          </div>
          <div className="mt-1 text-xs text-gray-500 capitalize">
            {type === "default" ? "Image" : type} Photo
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hero background placeholder - full viewport
 */
export function HeroPlaceholder({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "via-cream to-pearl relative min-h-screen bg-gradient-to-br from-amber-50",
        'bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c9a961" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]',
        className,
      )}
      {...props}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

      {children}
    </div>
  );
}
