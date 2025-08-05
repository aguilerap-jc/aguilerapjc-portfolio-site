# Adding New Blog Posts

This guide explains how to add new blog posts to your personal branding website.

## Quick Start

To add a new blog post, you need to update these files:

1. **Create new content file** (if using markdown)
2. **Update blog data source**
3. **Update categories/tags** (if new ones are introduced)

## Step-by-Step Guide

### 1. Create Blog Content File

Create a new markdown file in `/src/content/blog/`:

```markdown
---
title: "Your New Post Title"
excerpt: "Brief description that will appear in the blog list and meta tags"
category: "Product Strategy"
tags: ["product-management", "strategy", "leadership"]
publishedAt: "2025-01-15"
readTime: 5
featured: false
---

# Your Blog Post Title

Your blog content goes here. You can use standard markdown formatting:

## Headings
- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

### Code blocks
```javascript
const example = "code";
```

> Blockquotes for emphasis

Images can be added to `/public/images/blog/` and referenced like:
![Alt text](/images/blog/your-image.jpg)
```

### 2. Update Blog Data Source

Depending on your implementation, update the appropriate file:

#### Option A: Static Array (in `/src/data/blog.ts`)
```typescript
export const blogPosts: BlogPost[] = [
  // ...existing posts...
  {
    id: "unique-post-id",
    title: "Your New Post Title",
    slug: "your-new-post-slug", // URL-friendly version
    excerpt: "Brief description...",
    category: "Product Strategy",
    tags: ["product-management", "strategy"],
    publishedAt: "2025-01-15",
    readTime: 5,
    featured: false, // Set to true for featured posts
    content: `Your full markdown content here...`
  }
];
```

#### Option B: Dynamic Loading (in `/src/lib/blog.ts`)
If you're dynamically loading from markdown files, ensure your new file follows the naming convention and includes proper frontmatter.

### 3. Update Categories and Tags (if needed)

If introducing new categories or tags, update:

```typescript
// In your data file
export const categories = [
  "Product Strategy",
  "Digital Transformation", 
  "Technology Leadership",
  "New Category" // Add new category here
];

export const tags = [
  "product-management",
  "strategy", 
  "leadership",
  "new-tag" // Add new tags here
];
```

### 4. Create Individual Post Page (if needed)

Ensure you have a dynamic route at `/src/app/blog/[slug]/page.tsx`:

```typescript
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

## Blog Post Frontmatter Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title (used in SEO) |
| `excerpt` | string | ✅ | Brief description for previews |
| `category` | string | ✅ | Must match existing categories |
| `tags` | array | ✅ | Array of relevant tags |
| `publishedAt` | string | ✅ | ISO date format (YYYY-MM-DD) |
| `readTime` | number | ✅ | Estimated reading time in minutes |
| `featured` | boolean | ✅ | Whether to highlight as featured |
| `slug` | string | 🔄 | Auto-generated from filename if not provided |

## Automatic Updates

The following components will automatically update when you add a new post:

- ✅ **Blog list page** (`/src/app/blog/blog-client.tsx`)
- ✅ **Search functionality** 
- ✅ **Category/tag filters**
- ✅ **Post counters** in hero section
- ✅ **Results summary**

## Optional Updates

Consider updating these if relevant:

- **SEO metadata** in blog pages
- **Sitemap** (if implemented)
- **RSS feed** (if implemented)
- **Featured posts section** on homepage
- **Recent posts widget** (if exists)

## Best Practices

### Content Guidelines
- **Title**: Clear, descriptive, 50-60 characters for SEO
- **Excerpt**: 150-160 characters, compelling summary
- **Tags**: 3-5 relevant tags, use existing ones when possible
- **Read Time**: Estimate ~200 words per minute
- **Images**: Optimize for web, use descriptive alt text

### Technical Guidelines
- **Slug**: Use kebab-case, no special characters
- **File names**: Use kebab-case matching the slug
- **Markdown**: Follow consistent formatting
- **Categories**: Keep to 5-7 main categories maximum

### SEO Optimization
- Include target keywords in title and excerpt
- Use proper heading hierarchy (H1 → H2 → H3)
- Add internal links to related posts
- Optimize images with proper alt text

## Troubleshooting

### Common Issues

**Post not appearing:**
- Check that the file is in the correct directory
- Verify frontmatter format is correct
- Ensure the post data is added to your data source

**Broken links:**
- Verify slug matches between data and file name
- Check that the dynamic route exists
- Ensure proper URL encoding

**Category/Tag not filtering:**
- Confirm category/tag names match exactly (case-sensitive)
- Check that they're added to the categories/tags arrays

### Validation Checklist

Before publishing, verify:
- [ ] Post appears in blog list
- [ ] Individual post page loads correctly
- [ ] Search finds the post
- [ ] Category filter works
- [ ] Tag filters work
- [ ] Read time is reasonable
- [ ] All links work
- [ ] Images load properly
- [ ] Mobile view looks good
