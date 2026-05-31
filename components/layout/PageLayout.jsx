import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../shared/WhatsAppFloat";
import { PageTransition } from "../animations/MotionUtils";

/**
 * Enhanced page layout component with smooth transitions
 * Includes: Navbar, animated main content area, Footer, WhatsApp float
 */
export function PageLayout({
  children,
  whatsappMessage,
  className = "",
  ...props
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageTransition className={`flex-1 ${className}`} {...props}>
        <main>
          {children}
        </main>
      </PageTransition>

      <Footer />

      {/* Persistent WhatsApp Button with luxury motion */}
      <WhatsAppFloat message={whatsappMessage} />
    </div>
  );
}

export default PageLayout;
