import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "http://localhost:3000/conditions-utilisation",
      changeFrequency: "monthly",
    },
    {
      url: "http://localhost:3000/politique-de-confidentialite",
      changeFrequency: "monthly",
    },
  ];
}
