# Personal Branding Website Documentation

This documentation provides comprehensive guides for maintaining and extending your personal branding website.

## Quick Links

- [Adding New Blog Posts](./blog/adding-new-posts.md)
- [Blog Structure Overview](./blog/structure.md)
- [Development Guidelines](./development/guidelines.md)

## Project Overview

This is a Next.js-based personal branding website featuring:
- Blog system with search and filtering
- Project showcase
- Experience timeline
- Contact functionality

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── content/            # Blog content (markdown files)
├── data/               # Static data files
└── lib/                # Utility functions and types
```

## Key Features

- **Dynamic Blog System**: Markdown-based content with frontmatter
- **Search & Filtering**: Real-time search with category and tag filters
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data

# Technical Documentation

This document provides comprehensive technical setup, testing, and troubleshooting information for developers working on this project.

## 🏗️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Commands

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev

# Production build
npm run build
npm start

# Code quality
npm run lint

# Testing
npm test
```

## 🧪 Testing Configuration

This project uses **Jest** and **React Testing Library** for comprehensive testing.

### Test Setup Details
- **Test files**: Use `.test.tsx` or `.test.ts` extensions
- **Jest config**: [`jest.config.js`](../../jest.config.js)
- **Babel config**: [`babel.jest.config.js`](../../babel.jest.config.js) (tests only)
- **Test environment**: `jsdom`
- **Custom matchers**: `@testing-library/jest-dom` via [`jest.setup.js`](../../jest.setup.js)

### Testing Commands
```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

## 📁 Project Structure

```
personal-branding/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── blog/              # Blog listing and individual posts
│   │   ├── projects/          # Project showcase pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   └── sections/         # Page sections
│   ├── content/              # Blog posts (markdown)
│   ├── data/                 # Static data files
│   └── lib/                  # Utilities and types
├── public/
│   └── images/               # Static assets
├── docs/                     # Documentation
├── jest.config.js           # Jest configuration
├── babel.jest.config.js     # Babel config for tests only
├── jest.setup.js           # Test environment setup
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## ⚙️ Build Configuration

### Turbopack vs Babel
- **Main app**: Uses Next.js's SWC/Turbopack compiler for fast development
- **Tests only**: Use Babel for Jest compatibility
- **Important**: No root-level `.babelrc` or `babel.config.js` should exist

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured for clean imports
- Next.js optimizations included

## 🔧 Troubleshooting

### Common Issues

**1. Babel/Turbopack Conflicts**
```bash
# ❌ Remove if they exist:
rm .babelrc babel.config.js

# ✅ Keep only:
babel.jest.config.js  # For tests only
```

**2. Missing Dependencies**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**3. Test Environment Issues**
```bash
# Ensure jest.setup.js is properly configured
# Check jest.config.js testEnvironment is 'jsdom'
```

**4. TypeScript Errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update type definitions
npm install --save-dev @types/node @types/react
```

**5. Build Failures**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Performance Optimization
- Images are optimized with Next.js Image component
- Code splitting enabled by default
- Static generation for blog posts
- Tailwind CSS purging for smaller bundle size

## 🔄 Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/your-feature
   npm run dev
   ```

2. **Testing**
   ```bash
   npm test
   npm run lint
   ```

3. **Build Verification**
   ```bash
   npm run build
   npm start
   ```

4. **Deployment**
   - Push to main branch
   - Vercel auto-deploys from GitHub

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

See [Development Guidelines](./guidelines.md) for coding standards and best practices.
