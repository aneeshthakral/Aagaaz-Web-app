import { getBaseSchemas, siteMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: `${siteMetadata.siteName} | ${siteMetadata.defaultTitle}`,
    template: `%s | ${siteMetadata.siteName}`,
  },
  applicationName: siteMetadata.siteName,
  category: "hospitality",
  description: siteMetadata.defaultDescription,
  keywords: [
    "Aagaaz Ludhiana",
    "banquet hall Ludhiana",
    "wedding venue Ludhiana",
    "kitty party venue Ludhiana",
    "hotel rooms Ludhiana",
    "restaurant on Pakhowal Road",
  ],
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteMetadata.siteUrl,
    title: `${siteMetadata.siteName} | ${siteMetadata.defaultTitle}`,
    description: siteMetadata.defaultDescription,
    siteName: siteMetadata.siteName,
    locale: "en_IN",
    images: [
      {
        url: siteMetadata.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.siteName} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.siteName} | ${siteMetadata.defaultTitle}`,
    description: siteMetadata.defaultDescription,
    images: [siteMetadata.defaultOgImage],
  },
};

export default function RootLayout({ children }) {
  const baseSchemas = getBaseSchemas();

  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchemas) }}
        />
        {children}
      </body>
    </html>
  );
}
