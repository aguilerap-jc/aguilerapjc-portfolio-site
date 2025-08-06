# Development Guidelines

This document outlines coding standards, best practices, and development workflows for the personal branding website.

## Code Style and Standards

### TypeScript Guidelines
- Use TypeScript for all new code
- Define interfaces for all data structures
- Use strict type checking
- Prefer `interface` over `type` for object definitions
- Use meaningful variable and function names

```typescript
// ✅ Good
interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
}

// ❌ Avoid
type Post = {
  i: string;
  t: string;
  p: string;
}
```

### React Component Guidelines

#### Component Structure
```typescript
// 1. Imports (external libs first, then internal)
import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

// 2. Type definitions
interface ComponentProps {
  posts: BlogPost[];
  className?: string;
}

// 3. Main component
export default function BlogComponent({ posts, className }: ComponentProps) {
  // 4. State and hooks
  const [searchTerm, setSearchTerm] = useState('');
  
  // 5. Computed values
  const filteredPosts = useMemo(() => {
    // filtering logic
  }, [searchTerm, posts]);
  
  // 6. Event handlers
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  // 7. Render
  return (
    <div className={className}>
      {/* JSX content */}
    </div>
  );
}
```

#### Component Best Practices
- Use functional components with hooks
- Keep components focused on single responsibility
- Extract custom hooks for complex logic
- Use meaningful prop names
- Include proper TypeScript types
- Add JSDoc comments for complex components

```typescript
/**
 * Interactive blog client component with search and filtering capabilities
 * @param blogPosts - Array of blog posts to display
 * @param categories - Available categories for filtering
 * @param tags - Available tags for filtering
 */
export default function BlogClient({ blogPosts, categories, tags }: BlogClientProps) {
  // Component implementation
}
```

### CSS and Styling Guidelines

#### Tailwind CSS Best Practices
- Use utility classes over custom CSS when possible
- Group related classes logically
- Use responsive prefixes consistently
- Extract common patterns into components

```tsx
// ✅ Good - grouped logically
<div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">

// ❌ Avoid - random order
<div className="shadow-md bg-white transition-shadow hover:shadow-lg rounded-lg justify-center p-4 flex items-center">
```

#### Class Organization
```tsx
// Recommended order:
// 1. Layout (flex, grid, position)
// 2. Sizing (w-, h-, p-, m-)
// 3. Typography (text-, font-)
// 4. Colors (bg-, text-, border-)
// 5. Effects (shadow-, transition-)
// 6. Interactive states (hover:, focus:)
<button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
```

### File Organization

#### Directory Structure
```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── [feature]/         # Feature-based organization
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   └── sections/         # Page sections
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── data/                 # Static data files
```

#### File Naming Conventions
- **Components**: PascalCase (`BlogClient.tsx`)
- **Utilities**: camelCase (`blogUtils.ts`)
- **Pages**: lowercase with hyphens (`blog-post.tsx`)
- **Types**: PascalCase with `.types.ts` suffix (`Blog.types.ts`)

## Git Workflow

### Branch Naming
- **Features**: `feature/description` (`feature/blog-search`)
- **Fixes**: `fix/description` (`fix/mobile-layout`)
- **Refactor**: `refactor/description` (`refactor/blog-components`)

### Commit Messages
Follow conventional commit format:
```
type(scope): description

feat(blog): add search functionality
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
style(blog): improve card hover effects
refactor(components): extract common hooks
```

### Pull Request Guidelines
- Include clear description of changes
- Add screenshots for UI changes
- Test on mobile and desktop
- Update documentation if needed
- Request review from team members

## Testing Strategy

### Unit Testing
```typescript
// Example test structure
describe('BlogClient Component', () => {
  it('filters posts by search term', () => {
    // Test implementation
  });
  
  it('updates category filter correctly', () => {
    // Test implementation
  });
});
```

### Testing Checklist
- [ ] Component renders without errors
- [ ] Interactive features work as expected
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Accessibility requirements met
- [ ] Performance impact acceptable

## Performance Guidelines

### React Performance
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers passed to children
- Avoid inline object/array creation in render
- Implement proper key props for lists

```typescript
// ✅ Good
const filteredPosts = useMemo(() => 
  posts.filter(post => post.title.includes(searchTerm)), 
  [posts, searchTerm]
);

// ❌ Avoid
const filteredPosts = posts.filter(post => post.title.includes(searchTerm));
```

### Bundle Optimization
- Use dynamic imports for heavy components
- Optimize images with Next.js Image component
- Tree-shake unused code
- Monitor bundle size with webpack-bundle-analyzer

### Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Accessibility (a11y) Standards

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<article>`)
- Include proper ARIA labels
- Ensure keyboard navigation works

### Form Accessibility
```typescript
// ✅ Good
<label htmlFor="search" className="sr-only">Search articles</label>
<input
  id="search"
  type="text"
  aria-describedby="search-help"
  placeholder="Search articles..."
/>

// Add ARIA attributes for screen readers
<button aria-label="Remove search filter">×</button>
```

### Color and Contrast
- Maintain WCAG AA contrast ratios (4.5:1)
- Don't rely solely on color for information
- Test with colorblind users in mind

## Security Considerations

### Data Sanitization
- Sanitize user inputs
- Use proper escaping for dynamic content
- Validate form inputs on both client and server

### Content Security
- Use CSP headers
- Sanitize markdown content if user-generated
- Validate file uploads (if implemented)

## Deployment Guidelines

### Build Process
```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Static export (if needed)
npm run export
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yoursite.com
ANALYTICS_ID=your-analytics-id
```

### Pre-deployment Checklist
- [ ] All tests pass
- [ ] Build succeeds without warnings
- [ ] Performance metrics within targets
- [ ] Accessibility audit passes
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags updated

## Monitoring and Analytics

### Performance Monitoring
- Use Web Vitals reporting
- Monitor bundle size changes
- Track loading performance
- Set up error tracking

### Analytics Setup
- Google Analytics 4 for user behavior
- Core Web Vitals monitoring
- Conversion tracking for goals
- A/B testing for improvements

## Documentation Standards

### Code Documentation
- Use JSDoc for complex functions
- Include README files for major features
- Document component props and interfaces
- Maintain changelog for releases

### API Documentation
- Document all API endpoints
- Include request/response examples
- Specify error codes and handling
- Version API changes properly

This guideline document ensures consistent, maintainable, and high-quality code across the entire personal branding website project.
