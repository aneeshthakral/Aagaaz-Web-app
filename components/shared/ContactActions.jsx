/**
 * ContactActions - Luxury WhatsApp and phone contact buttons
 * Used throughout the site to provide immediate contact options
 */

import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactActions({
  layout = 'horizontal',
  showLabels = true,
  size = 'default',
  className = '',
  variant = 'default'
}) {
  // Placeholder contact details - to be replaced with real ones
  const contacts = {
    phone: '+91-XXXX-XXX-XXX', // Main hotel number
    whatsapp: '+91-XXXX-XXX-XXX', // WhatsApp number
    phoneNumber: '919999999999', // For tel: links
    whatsappNumber: '919999999999' // For wa.me links
  };

  const contactButtons = [
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${contacts.whatsappNumber}?text=Hello! I'm interested in Aagaaz for an upcoming celebration.`,
      className: 'bg-[#25D366] hover:bg-[#22C55E] text-white border-[#25D366] hover:border-[#22C55E]'
    },
    {
      type: 'phone',
      label: 'Call Now',
      icon: Phone,
      href: `tel:${contacts.phoneNumber}`,
      className: 'bg-accent hover:bg-accent-hover text-accent-foreground border-accent'
    }
  ];

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        {contactButtons.map(({ type, label, icon: Icon, href, className: btnClass }) => (
          <Button
            key={type}
            asChild
            size={size}
            className={`${btnClass} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <a
              href={href}
              target={type === 'whatsapp' ? '_blank' : undefined}
              rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-2"
            >
              <Icon className="h-4 w-4" />
              {showLabels && <span>{label}</span>}
            </a>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      {contactButtons.map(({ type, label, icon: Icon, href, className: btnClass }) => (
        <Button
          key={type}
          asChild
          size={size}
          className={`${btnClass} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        >
          <a
            href={href}
            target={type === 'whatsapp' ? '_blank' : undefined}
            rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {showLabels && <span>{label}</span>}
          </a>
        </Button>
      ))}
    </div>
  );
}

export function QuickContactBar({ className = '' }) {
  return (
    <div className={`bg-surface border-t border-border py-6 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-text-light mb-4">
            Need immediate assistance? Get in touch right away
          </p>
          <ContactActions
            layout="horizontal"
            showLabels={true}
            className="justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export function ContactActionsCompact({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-text-light">Quick contact:</span>
      <ContactActions
        layout="horizontal"
        showLabels={false}
        size="sm"
        className="gap-2"
      />
    </div>
  );
}