const siteName = "Aagaaz";
const siteUrl = "https://aagaaz.in";
const defaultTitle = "Luxury Celebrations, Stays, and Dining in Ludhiana";
const defaultDescription =
  "Aagaaz on Pakhowal Road, Ludhiana offers banquet halls, kitty party venues, 44 guest rooms, and Fessta Restaurant for weddings, family celebrations, business events, and stays.";
const defaultOgImage = "/opengraph-image";
const businessAddress = {
  streetAddress: "Opp Silver Oak Garden & Resort, Pakhowal Road",
  addressLocality: "Ludhiana",
  addressRegion: "Punjab",
  postalCode: "142022",
  addressCountry: "IN",
};

export const siteMetadata = {
  siteName,
  siteUrl,
  defaultTitle,
  defaultDescription,
  defaultOgImage,
  phone: "+91-9592099941",
  whatsapp: "+91-6239503191",
  email: "info@aagaaz.in",
  businessAddress,
};

export const siteRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/banquet", priority: 0.95, changeFrequency: "weekly" },
  { path: "/kitty-parties", priority: 0.9, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/dining", priority: 0.85, changeFrequency: "weekly" },
  { path: "/experiences", priority: 0.85, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.8, changeFrequency: "weekly" },
  { path: "/story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

function toAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultOgImage,
  keywords = [],
  type = "website",
} = {}) {
  const pageTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | ${defaultTitle}`;
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return {
    title: pageTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      url: canonicalUrl,
      title: pageTitle,
      description,
      siteName,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function getBaseSchemas() {
  const organizationUrl = toAbsoluteUrl("/");
  const imageUrl = toAbsoluteUrl(defaultOgImage);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${organizationUrl}#organization`,
      name: siteName,
      url: organizationUrl,
      email: siteMetadata.email,
      telephone: siteMetadata.phone,
      logo: imageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": `${organizationUrl}#lodging`,
      name: `${siteName} Celebrations & Hospitality`,
      url: organizationUrl,
      description: defaultDescription,
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      address: {
        "@type": "PostalAddress",
        ...businessAddress,
      },
      image: imageUrl,
      numberOfRooms: 44,
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "High-speed WiFi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Restaurant",
          value: true,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "@id": `${organizationUrl}#venue`,
      name: `${siteName} Banquet and Celebration Venue`,
      url: toAbsoluteUrl("/banquet"),
      telephone: siteMetadata.phone,
      address: {
        "@type": "PostalAddress",
        ...businessAddress,
      },
      image: imageUrl,
      maximumAttendeeCapacity: 180,
    },
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `${organizationUrl}#restaurant`,
      name: "Fessta Restaurant",
      servesCuisine: ["Indian", "Italian", "Oriental", "Continental"],
      url: toAbsoluteUrl("/dining"),
      telephone: siteMetadata.phone,
      address: {
        "@type": "PostalAddress",
        ...businessAddress,
      },
      image: imageUrl,
    },
  ];
}
