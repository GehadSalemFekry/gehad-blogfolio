import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// Function to get blog slugs dynamically from MDX files
const getBlogSlugs = (): string[] => {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const hostname = "https://gehadsalem.tech";

  // Static pages
  const staticPages = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/blog", priority: 0.9 },
    { url: "/toolbox", priority: 0.8 },
    { url: "/privacy-policy", priority: 0.5 },
  ];

  // Get blog slugs and assign priority
  const blogSlugs = getBlogSlugs().map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...blogSlugs];

  // Generate the sitemap in the correct format
  return allPages.map((page) => ({
    url: `${hostname}${page.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
