import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  slug: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and content
        return {
          slug,
          content: contentHtml,
          ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
        } as BlogPost;
      })
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and content
    return {
      slug,
      content: contentHtml,
      ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts();
  return allPosts.filter(post => post.featured);
}

export async function getCategories(): Promise<string[]> {
  const allPosts = await getBlogPosts();
  return Array.from(new Set(allPosts.map(post => post.category)));
}

export async function getTags(): Promise<string[]> {
  const allPosts = await getBlogPosts();
  return Array.from(new Set(allPosts.flatMap(post => post.tags)));
}
