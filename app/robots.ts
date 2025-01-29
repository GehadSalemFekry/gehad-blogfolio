import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"], // Prevent indexing admin or API routes
      },
    ],
    sitemap: "https://gehadsalem.tech/sitemap.xml", 
  };
}
