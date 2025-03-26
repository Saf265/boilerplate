import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";
import { logger } from "./logger";

const postSchema = z.object({
  title: z.string().min(50).max(60),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean(),
  categories: z.array(z.string()),
  meta: z.object({
    keywords: z.array(z.string()),
  }),
});

export type Post = z.infer<typeof postSchema> & {
  slug: string;
  content: string;
};
const postsDirectory = path.join(process.cwd(), "content");
export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);

  const fileNames = files.filter((file) => file.endsWith(".mdx"));

  const posts = [];
  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf8");
    const frontmatter = matter(fileContent);
    const safeData = postSchema.safeParse(frontmatter.data);

    if (!safeData.success) {
      logger.error("front matter title lenght", frontmatter.data.title.length);
      logger.error(
        `Invalid frontmatter in ${fileName}: ${safeData.error.errors.join(
          ", "
        )}`
      );

      continue;
    }

    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(/^\d+-/, "").replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
