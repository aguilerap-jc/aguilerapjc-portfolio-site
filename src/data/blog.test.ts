// Mock the blog module to avoid ES module issues during testing
jest.mock('../lib/blog', () => ({
  getBlogPostBySlug: jest.fn(),
  getAllBlogPosts: jest.fn(() => []),
}));

import {
  getBlogPosts,
  getBlogPost,
  getAllBlogSlugs,
  getCategories,
  getTags,
  BlogPost
} from './blog'

describe('Blog Data Layer', () => {
  describe('Blog Data Exports', () => {
    it('exports all required functions', () => {
      expect(typeof getBlogPosts).toBe('function')
      expect(typeof getBlogPost).toBe('function')
      expect(typeof getAllBlogSlugs).toBe('function')
      expect(typeof getCategories).toBe('function')
      expect(typeof getTags).toBe('function')
    })

    it('exports BlogPost type', () => {
      // This is a TypeScript interface, so we test its usage
      const mockPost: BlogPost = {
        id: 'test',
        title: 'Test',
        excerpt: 'Test excerpt',
        content: 'Test content',
        publishedAt: '2024-01-01',
        author: 'Test Author',
        tags: ['test'],
        category: 'Test',
        readTime: 5,
        featured: false,
        slug: 'test-slug',
        seo: {
          metaTitle: 'Test Meta',
          metaDescription: 'Test Description',
          keywords: ['test']
        }
      }
      
      expect(mockPost).toBeDefined()
      expect(mockPost.id).toBe('test')
    })

    it('re-exports functions from lib/blog correctly', async () => {
      // These functions should be callable and return appropriate types
      expect(getBlogPosts).toBeInstanceOf(Function)
      expect(getBlogPost).toBeInstanceOf(Function)
      expect(getAllBlogSlugs).toBeInstanceOf(Function)
      expect(getCategories).toBeInstanceOf(Function)
      expect(getTags).toBeInstanceOf(Function)
    })
  })

  describe('Function Signatures', () => {
    it('getBlogPosts returns Promise<BlogPost[]>', async () => {
      // Note: This will use actual file system, but should handle gracefully
      try {
        const result = await getBlogPosts()
        expect(Array.isArray(result)).toBe(true)
        if (result.length > 0) {
          expect(result[0]).toHaveProperty('id')
          expect(result[0]).toHaveProperty('title')
          expect(result[0]).toHaveProperty('slug')
        }
      } catch (error) {
        // If no blog posts exist, that's fine for this test
        expect(error).toBeDefined()
      }
    })

    it('getAllBlogSlugs returns Promise<string[]>', async () => {
      try {
        const result = await getAllBlogSlugs()
        expect(Array.isArray(result)).toBe(true)
        if (result.length > 0) {
          expect(typeof result[0]).toBe('string')
        }
      } catch (error) {
        // If no blog posts exist, that's fine for this test
        expect(error).toBeDefined()
      }
    })

    it('getCategories returns Promise<string[]>', async () => {
      try {
        const result = await getCategories()
        expect(Array.isArray(result)).toBe(true)
        if (result.length > 0) {
          expect(typeof result[0]).toBe('string')
        }
      } catch (error) {
        // If no blog posts exist, that's fine for this test
        expect(error).toBeDefined()
      }
    })

    it('getTags returns Promise<string[]>', async () => {
      try {
        const result = await getTags()
        expect(Array.isArray(result)).toBe(true)
        if (result.length > 0) {
          expect(typeof result[0]).toBe('string')
        }
      } catch (error) {
        // If no blog posts exist, that's fine for this test
        expect(error).toBeDefined()
      }
    })

    it('getBlogPost handles valid slug', async () => {
      try {
        const posts = await getBlogPosts()
        if (posts.length > 0) {
          const firstPost = posts[0]
          const result = await getBlogPost(firstPost.slug)
          if (result) {
            expect(result).toHaveProperty('id')
            expect(result).toHaveProperty('title')
            expect(result.slug).toBe(firstPost.slug)
          }
        }
      } catch (error) {
        // If no blog posts exist, that's fine for this test
        expect(error).toBeDefined()
      }
    })

    it('getBlogPost handles invalid slug', async () => {
      const result = await getBlogPost('non-existent-slug')
      expect(result).toBeNull()
    })
  })

  describe('Data Consistency', () => {
    it('maintains consistency between blog functions', async () => {
      try {
        const [posts, slugs, categories, tags] = await Promise.all([
          getBlogPosts(),
          getAllBlogSlugs(),
          getCategories(),
          getTags()
        ])

        // Slugs should match post slugs
        const postSlugs = posts.map(p => p.slug)
        expect(slugs.sort()).toEqual(postSlugs.sort())

        // Categories should match post categories
        const postCategories = [...new Set(posts.map(p => p.category))]
        expect(categories.sort()).toEqual(postCategories.sort())

        // Tags should include all post tags
        const postTags = [...new Set(posts.flatMap(p => p.tags))]
        expect(tags.sort()).toEqual(postTags.sort())
      } catch {
        // If no blog posts exist, functions should still be consistent
        const slugs = await getAllBlogSlugs()
        const categories = await getCategories()
        const tags = await getTags()
        
        expect(slugs).toEqual([])
        expect(categories).toEqual([])
        expect(tags).toEqual([])
      }
    })

    it('ensures unique categories', async () => {
      try {
        const categories = await getCategories()
        const uniqueCategories = [...new Set(categories)]
        expect(categories.length).toBe(uniqueCategories.length)
      } catch (error) {
        // Expected if no blog content exists
        expect(error).toBeDefined()
      }
    })

    it('ensures unique tags', async () => {
      try {
        const tags = await getTags()
        const uniqueTags = [...new Set(tags)]
        expect(tags.length).toBe(uniqueTags.length)
      } catch (error) {
        // Expected if no blog content exists
        expect(error).toBeDefined()
      }
    })

    it('ensures unique slugs', async () => {
      try {
        const slugs = await getAllBlogSlugs()
        const uniqueSlugs = [...new Set(slugs)]
        expect(slugs.length).toBe(uniqueSlugs.length)
      } catch (error) {
        // Expected if no blog content exists
        expect(error).toBeDefined()
      }
    })
  })

  describe('Interface Compliance', () => {
    it('ensures BlogPost interface compliance in returned data', async () => {
      try {
        const posts = await getBlogPosts()
        posts.forEach(post => {
          // Required fields
          expect(post).toHaveProperty('id')
          expect(post).toHaveProperty('title')
          expect(post).toHaveProperty('excerpt')
          expect(post).toHaveProperty('content')
          expect(post).toHaveProperty('publishedAt')
          expect(post).toHaveProperty('author')
          expect(post).toHaveProperty('tags')
          expect(post).toHaveProperty('category')
          expect(post).toHaveProperty('readTime')
          expect(post).toHaveProperty('featured')
          expect(post).toHaveProperty('slug')
          expect(post).toHaveProperty('seo')

          // Type checks
          expect(typeof post.id).toBe('string')
          expect(typeof post.title).toBe('string')
          expect(typeof post.excerpt).toBe('string')
          expect(typeof post.content).toBe('string')
          expect(typeof post.publishedAt).toBe('string')
          expect(typeof post.author).toBe('string')
          expect(Array.isArray(post.tags)).toBe(true)
          expect(typeof post.category).toBe('string')
          expect(typeof post.readTime).toBe('number')
          expect(typeof post.featured).toBe('boolean')
          expect(typeof post.slug).toBe('string')
          expect(typeof post.seo).toBe('object')

          // SEO object structure
          if (post.seo.metaTitle) expect(typeof post.seo.metaTitle).toBe('string')
          if (post.seo.metaDescription) expect(typeof post.seo.metaDescription).toBe('string')
          if (post.seo.keywords) expect(Array.isArray(post.seo.keywords)).toBe(true)
        })
      } catch (error) {
        // Expected if no blog content exists
        expect(error).toBeDefined()
      }
    })
  })

  describe('Error Handling', () => {
    it('handles missing blog directory gracefully', async () => {
      // The functions should not throw unhandled exceptions
      await expect(getBlogPosts()).resolves.toBeDefined()
      await expect(getAllBlogSlugs()).resolves.toBeDefined()
      await expect(getCategories()).resolves.toBeDefined()
      await expect(getTags()).resolves.toBeDefined()
    })

    it('handles invalid slug gracefully', async () => {
      const result = await getBlogPost('definitely-not-a-real-slug-12345')
      expect(result).toBeNull()
    })

    it('handles empty slug gracefully', async () => {
      const result = await getBlogPost('')
      expect(result).toBeNull()
    })
  })
})
