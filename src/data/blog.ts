// Re-export types and functions from the lib/blog module
export type { BlogPost } from '@/lib/blog';
export { 
  getBlogPosts,
  getBlogPost,
  getAllBlogSlugs,
  getCategories,
  getTags
} from '@/lib/blog';
