import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api"],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
