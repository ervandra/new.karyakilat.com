import { getBlogPosts } from "@/lib/blog";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getBlogPosts();
  const headersList = await headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${protocol}://${domain}/custom`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...allPosts.map((post) => ({
      url: `${protocol}://${domain}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

