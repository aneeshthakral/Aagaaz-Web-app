/**
 * BookingPlatforms - Links to external booking platforms
 * Shows Booking.com, MakeMyTrip, and Goibibo links
 */

import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platforms = [
  {
    name: 'Booking.com',
    url: 'https://www.booking.com/searchresults.html?ss=Aagaaz%2C+Ludhiana',
    logo: 'B.com',
    color: 'bg-[#003580] hover:bg-[#002147] text-white'
  },
  {
    name: 'MakeMyTrip',
    url: 'https://www.makemytrip.com/hotels/hotel_aagaaz_for_luxury_stay_celebration-details-ludhiana.html',
    logo: 'MMT',
    color: 'bg-[#FF6B2C] hover:bg-[#E55A25] text-white'
  },
  {
    name: 'Goibibo',
    url: 'https://www.goibibo.com/hotels/aagaaz-for-luxury-stay-celebration-hotel-in-ludhiana-5495347842795969158/',
    logo: 'Goibibo',
    color: 'bg-[#EF6614] hover:bg-[#D55512] text-white'
  }
];

export function BookingPlatforms({ className = '', showTitle = true }) {
  return (
    <div className={`bg-surface-subtle border border-border rounded-lg p-6 ${className}`}>
      {showTitle && (
        <div className="text-center mb-4">
          <p className="text-sm text-text-light font-medium">
            Also listed on these platforms
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        {platforms.map((platform) => (
          <Button
            key={platform.name}
            asChild
            variant="outline"
            size="sm"
            className={`${platform.color} border-transparent hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="font-semibold text-xs">{platform.logo}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        ))}
      </div>

      <div className="text-center mt-3">
        <p className="text-xs text-text-light">
          Compare availability across platforms
        </p>
      </div>
    </div>
  );
}

export function BookingPlatformsCompact({ className = '' }) {
  return (
    <BookingPlatforms
      className={`py-4 ${className}`}
      showTitle={false}
    />
  );
}

export function BookingPlatformsInline({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 text-sm ${className}`}>
      <span className="text-text-light">Also on:</span>
      {platforms.map((platform, index) => (
        <span key={platform.name} className="flex items-center">
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline-offset-4 hover:underline transition-colors"
          >
            {platform.name}
          </a>
          {index < platforms.length - 1 && (
            <span className="text-text-light mx-1">•</span>
          )}
        </span>
      ))}
    </div>
  );
}
