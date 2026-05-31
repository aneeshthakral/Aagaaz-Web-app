import { siteMetadata, siteRoutes } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return siteRoutes.map((route) => ({
    url: new URL(route.path, siteMetadata.siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
