import { 
  getBlogPosts, 
  getBlogPost, 
  getAllBlogSlugs, 
  getCategories, 
  getTags 
} from './blog';
import fs from 'fs';
import path from 'path';

// Mock fs module
jest.mock('fs');
jest.mock('path');

// Mock remark and related modules
jest.mock('remark', () => ({
  remark: jest.fn(() => ({
    use: jest.fn().mockReturnThis(),
    process: jest.fn().mockResolvedValue({
      toString: jest.fn(() => '<h1>Test Content</h1>\n<p>This is the content of the test blog post.</p>')
    })
  }))
}));

jest.mock('remark-html', () => jest.fn());

const mockFs = fs as jest.Mocked<typeof fs>;
const mockPath = path as jest.Mocked<typeof path>;

describe('Blog Utility Functions', () => {
  const mockMarkdownContent = `---
title: "Test Blog Post"
excerpt: "This is a test excerpt"
publishedAt: "2024-01-01"
author: "Test Author"
tags: ["test", "blog"]
category: "Technology"
readTime: 5
featured: true
seo:
  metaTitle: "Test Meta Title"
  metaDescription: "Test meta description"
  keywords: ["test", "blog", "tech"]
---

# Test Content

This is the content of the test blog post.
`;

  const mockMarkdownContent2 = `---
title: "Another Test Post"
excerpt: "Another test excerpt"
publishedAt: "2024-01-02"
author: "Test Author"
tags: ["react", "nextjs"]
category: "Development"
readTime: 8
featured: false
---

# Another Test

This is another test post.
`;

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock path.join to return a consistent path
    mockPath.join.mockImplementation((...args) => args.join('/'));
    
    // Mock process.cwd()
    Object.defineProperty(process, 'cwd', {
      value: jest.fn(() => '/mock/project'),
      configurable: true
    });
  });

  describe('getBlogPosts', () => {
    it('should return all blog posts when markdown files exist', async () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md', 'another-post.md'] as any);
      mockFs.readFileSync
        .mockReturnValueOnce(mockMarkdownContent)
        .mockReturnValueOnce(mockMarkdownContent2);

      const posts = await getBlogPosts();

      expect(posts).toHaveLength(2);
      // Posts should be sorted by publishedAt desc (newer first)
      expect(posts[0].title).toBe('Another Test Post'); // 2024-01-02 is newer
      expect(posts[0].slug).toBe('another-post');
      expect(posts[0].featured).toBe(false);
      expect(posts[1].title).toBe('Test Blog Post'); // 2024-01-01 is older
      expect(posts[1].slug).toBe('test-post');
      expect(posts[1].featured).toBe(true);
    });

    it('should return empty array when no markdown files exist', async () => {
      mockFs.readdirSync.mockReturnValue([] as any);

      const posts = await getBlogPosts();

      expect(posts).toHaveLength(0);
    });

    it('should filter out non-markdown files', async () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md', 'readme.txt', 'another-post.md'] as any);
      mockFs.readFileSync
        .mockReturnValueOnce(mockMarkdownContent)
        .mockReturnValueOnce(mockMarkdownContent2);

      const posts = await getBlogPosts();

      expect(posts).toHaveLength(2);
      expect(mockFs.readFileSync).toHaveBeenCalledTimes(2);
    });
  });

  describe('getBlogPost', () => {
    it('should return a specific blog post by slug', async () => {
      mockFs.readFileSync.mockReturnValue(mockMarkdownContent);

      const post = await getBlogPost('test-post');

      expect(post).toBeDefined();
      expect(post?.title).toBe('Test Blog Post');
      expect(post?.slug).toBe('test-post');
      expect(post?.content).toContain('<h1>Test Content</h1>');
    });

    it('should return null for non-existent post', async () => {
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('File not found');
      });

      const post = await getBlogPost('non-existent');

      expect(post).toBeNull();
    });
  });

  describe('getAllBlogSlugs', () => {
    it('should return array of slugs from markdown files', async () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md', 'another-post.md', 'readme.txt'] as any);

      const slugs = await getAllBlogSlugs();

      expect(slugs).toHaveLength(2);
      expect(slugs).toContain('test-post');
      expect(slugs).toContain('another-post');
      expect(slugs).not.toContain('readme');
    });

    it('should return empty array when no markdown files exist', async () => {
      mockFs.readdirSync.mockReturnValue([] as any);

      const slugs = await getAllBlogSlugs();

      expect(slugs).toHaveLength(0);
    });
  });

  describe('getCategories', () => {
    it('should return unique categories from all posts', async () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md', 'another-post.md'] as any);
      mockFs.readFileSync
        .mockReturnValueOnce(mockMarkdownContent)
        .mockReturnValueOnce(mockMarkdownContent2);

      const categories = await getCategories();

      expect(categories).toHaveLength(2);
      expect(categories).toContain('Technology');
      expect(categories).toContain('Development');
    });

    it('should return empty array when no posts exist', async () => {
      mockFs.readdirSync.mockReturnValue([] as any);

      const categories = await getCategories();

      expect(categories).toHaveLength(0);
    });
  });

  describe('getTags', () => {
    it('should return unique tags from all posts', async () => {
      mockFs.readdirSync.mockReturnValue(['test-post.md', 'another-post.md'] as any);
      mockFs.readFileSync
        .mockReturnValueOnce(mockMarkdownContent)
        .mockReturnValueOnce(mockMarkdownContent2);

      const tags = await getTags();

      expect(tags).toHaveLength(4);
      expect(tags).toContain('test');
      expect(tags).toContain('blog');
      expect(tags).toContain('react');
      expect(tags).toContain('nextjs');
    });

    it('should return empty array when no posts exist', async () => {
      mockFs.readdirSync.mockReturnValue([] as any);

      const tags = await getTags();

      expect(tags).toHaveLength(0);
    });
  });
});
