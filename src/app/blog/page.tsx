import { Metadata } from 'next';
import BlogClient from '@/app/blog/blog-client';
import { getBlogPosts, getCategories, getTags } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - Juan Carlos Aguilera',
  description: 'Insights on product management, technology, and innovation from my experience leading product teams at John Deere, MOIA, and other industry leaders.',
  keywords: ['product management', 'blog', 'technology', 'innovation', 'leadership', 'strategy'],
  openGraph: {
    title: 'Blog - Juan Carlos Aguilera',
    description: 'Insights on product management, technology, and innovation from my experience leading product teams.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const [blogPosts, categories, tags] = await Promise.all([
    getBlogPosts(),
    getCategories(),
    getTags()
  ]);

  return <BlogClient blogPosts={blogPosts} categories={categories} tags={tags} />;
}
