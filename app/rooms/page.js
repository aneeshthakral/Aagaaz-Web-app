import { createPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout";
import { RoomsEnquiry } from "@/components/shared";
import { PlaceholderImage } from "@/components/shared";

export const metadata = createPageMetadata({
  title: "Guest Rooms and Accommodation in Ludhiana",
  description:
    "Stay at Aagaaz in Ludhiana with 44 guest rooms, modern amenities, dining access, and event-friendly accommodation near Pakhowal Road.",
  path: "/rooms",
  keywords: ["hotel rooms Ludhiana", "stay on Pakhowal Road", "guest rooms Aagaaz"],
});

export default function RoomsPage() {
  return (
    <PageLayout whatsappMessage="Hi! I'd like to enquire about room bookings at Aagaaz.">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <PlaceholderImage
          width={1920}
          height={1080}
          text="Luxury Room Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Comfort & Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience hospitality at its finest with 44 well-appointed rooms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enquiry"
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-md transition-all duration-300 hover:scale-105"
            >
              Check Availability
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-text font-semibold rounded-md transition-all duration-300"
            >
              View Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section id="rooms" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              From comfortable standard rooms to luxurious suites, find accommodation that suits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Standard Room",
                description: "Comfortable accommodation with modern amenities",
                amenities: ["King Size Bed", "LCD TV", "Air Conditioning", "WiFi"]
              },
              {
                type: "Deluxe Room",
                description: "Spacious rooms with enhanced comfort and style",
                amenities: ["Premium Bedding", "Mini Bar", "Work Desk", "Room Service"]
              },
              {
                type: "Suite",
                description: "Luxury accommodation with separate living area",
                amenities: ["Separate Living Room", "Premium Amenities", "Balcony", "Butler Service"]
              }
            ].map((room, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <PlaceholderImage
                  width={400}
                  height={250}
                  text={room.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2">{room.type}</h3>
                  <p className="text-text-light mb-4">{room.description}</p>
                  <ul className="space-y-1">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm text-text-light flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Modern Amenities
            </h2>
            <p className="text-xl text-text-light">
              Everything you need for a comfortable stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "24/7 Room Service",
              "High-Speed WiFi",
              "LCD Television",
              "Air Conditioning",
              "Mini Bar",
              "Safe Deposit",
              "Laundry Service",
              "Parking Facility",
              "Restaurant Access",
              "Event Facilities",
              "Business Center",
              "Concierge Service"
            ].map((amenity, index) => (
              <div key={index} className="text-center p-4 bg-surface border border-border rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <p className="text-sm font-medium text-text">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Room Gallery</h2>
            <p className="text-text-light">See our beautiful accommodations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <PlaceholderImage
                key={i}
                width={300}
                height={200}
                text={`Room ${i}`}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <RoomsEnquiry />
        </div>
      </section>
    </PageLayout>
  );
}
