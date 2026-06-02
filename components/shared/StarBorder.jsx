import "./StarBorder.css";
import { cn } from "@/lib/utils";

/**
 * StarBorder - Animated gold border component for premium CTAs
 * Pure CSS implementation with brand theming and reduced motion support
 */

export function StarBorder({
  as: Component = "button",
  className = "",
  thickness = 1,
  children,
  ...rest
}) {
  return (
    <Component
      className={cn("star-border-container", className)}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div className="star-border-gradient-bottom" />
      <div className="star-border-gradient-top" />
      <div className="star-border-inner-content">{children}</div>
    </Component>
  );
}

export default StarBorder;