import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import BlogClient from './blog-client'
import { BlogPost } from '@/lib/blog'

// Mock Next.js Link
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return <a href={href} {...props}>{children}</a>
  }
})

describe('BlogClient', () => {
  const mockBlogPosts: BlogPost[] = [
    {
      id: '1',
      slug: 'test-post-1',
      title: 'Test Product Management Post',
      excerpt: 'This is a test excerpt about product management',
      content: '<p>Test content</p>',
      publishedAt: '2024-01-01',
      author: 'Test Author',
      tags: ['product-management', 'strategy'],
      category: 'Product Management',
      readTime: 5,
      featured: true,
      seo: {
        metaTitle: 'Test Meta Title',
        metaDescription: 'Test meta description',
        keywords: ['test', 'product']
      }
    },
    {
      id: '2',
      slug: 'test-post-2',
      title: 'Technology Innovation Post',
      excerpt: 'This is about technology and innovation',
      content: '<p>Technology content</p>',
      publishedAt: '2024-01-02',
      author: 'Tech Author',
      tags: ['technology', 'innovation'],
      category: 'Technology',
      readTime: 8,
      featured: false,
      seo: {
        metaTitle: 'Tech Meta Title',
        metaDescription: 'Tech meta description',
        keywords: ['tech', 'innovation']
      }
    },
    {
      id: '3',
      slug: 'test-post-3',
      title: 'Leadership Strategies',
      excerpt: 'Leadership and team management insights',
      content: '<p>Leadership content</p>',
      publishedAt: '2024-01-03',
      author: 'Leader Author',
      tags: ['leadership', 'management'],
      category: 'Leadership',
      readTime: 6,
      featured: false,
      seo: {
        metaTitle: 'Leadership Meta Title',
        metaDescription: 'Leadership meta description',
        keywords: ['leadership', 'team']
      }
    }
  ]

  const mockCategories = ['Product Management', 'Technology', 'Leadership']
  const mockTags = ['product-management', 'strategy', 'technology', 'innovation', 'leadership', 'management']

  const defaultProps = {
    blogPosts: mockBlogPosts,
    categories: mockCategories,
    tags: mockTags
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<BlogClient {...defaultProps} />)
    expect(screen.getByText('Product Management Insights')).toBeInTheDocument()
  })

  it('displays correct statistics in hero section', () => {
    render(<BlogClient {...defaultProps} />)
    
    expect(screen.getByText('3 Articles')).toBeInTheDocument()
    expect(screen.getByText('3 Categories')).toBeInTheDocument()
    expect(screen.getByText('6 Topics')).toBeInTheDocument()
  })

  it('renders all blog posts by default', () => {
    render(<BlogClient {...defaultProps} />)
    
    expect(screen.getByText('Test Product Management Post')).toBeInTheDocument()
    expect(screen.getByText('Technology Innovation Post')).toBeInTheDocument()
    expect(screen.getByText('Leadership Strategies')).toBeInTheDocument()
  })

  it('filters posts by search term', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'product' } })
    })
    
    expect(screen.getByText('Test Product Management Post')).toBeInTheDocument()
    expect(screen.queryByText('Technology Innovation Post')).not.toBeInTheDocument()
    expect(screen.queryByText('Leadership Strategies')).not.toBeInTheDocument()
  })

  it('filters posts by category', () => {
    render(<BlogClient {...defaultProps} />)
    
    const categorySelect = screen.getByLabelText('Category')
    
    act(() => {
      fireEvent.change(categorySelect, { target: { value: 'Technology' } })
    })
    
    expect(screen.queryByText('Test Product Management Post')).not.toBeInTheDocument()
    expect(screen.getByText('Technology Innovation Post')).toBeInTheDocument()
    expect(screen.queryByText('Leadership Strategies')).not.toBeInTheDocument()
  })

  it('filters posts by tag', () => {
    render(<BlogClient {...defaultProps} />)
    
    const tagSelect = screen.getByLabelText('Topic')
    
    act(() => {
      fireEvent.change(tagSelect, { target: { value: 'leadership' } })
    })
    
    expect(screen.queryByText('Test Product Management Post')).not.toBeInTheDocument()
    expect(screen.queryByText('Technology Innovation Post')).not.toBeInTheDocument()
    expect(screen.getByText('Leadership Strategies')).toBeInTheDocument()
  })

  it('combines multiple filters correctly', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    const categorySelect = screen.getByLabelText('Category')
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'management' } })
      fireEvent.change(categorySelect, { target: { value: 'Product Management' } })
    })
    
    expect(screen.getByText('Test Product Management Post')).toBeInTheDocument()
    expect(screen.queryByText('Technology Innovation Post')).not.toBeInTheDocument()
    expect(screen.queryByText('Leadership Strategies')).not.toBeInTheDocument()
  })

  it('shows active filters when applied', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'test search' } })
    })
    
    expect(screen.getByText('Active filters:')).toBeInTheDocument()
    expect(screen.getByText('Search: "test search"')).toBeInTheDocument()
  })

  it('allows clearing individual filters', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'test search' } })
    })
    
    expect(screen.getByText('Search: "test search"')).toBeInTheDocument()
    
    const clearSearchButton = screen.getByLabelText('Remove search filter')
    
    act(() => {
      fireEvent.click(clearSearchButton)
    })
    
    expect(screen.queryByText('Search: "test search"')).not.toBeInTheDocument()
  })

  it('clears all filters when clear all button is clicked', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    const categorySelect = screen.getByLabelText('Category')
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'test' } })
      fireEvent.change(categorySelect, { target: { value: 'Technology' } })
    })
    
    const clearAllButton = screen.getByText('Clear all filters')
    
    act(() => {
      fireEvent.click(clearAllButton)
    })
    
    expect(screen.queryByText('Active filters:')).not.toBeInTheDocument()
    expect(screen.getByDisplayValue('')).toBeInTheDocument() // Search input cleared
  })

  it('displays no results message when no posts match filters', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'nonexistent search term' } })
    })
    
    expect(screen.getByText('No articles found')).toBeInTheDocument()
    expect(screen.getByText(/Try adjusting your search terms/)).toBeInTheDocument()
  })

  it('shows featured badge on featured posts', () => {
    render(<BlogClient {...defaultProps} />)
    
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('displays post metadata correctly', () => {
    render(<BlogClient {...defaultProps} />)
    
    // Use more specific queries to avoid conflicts with dropdown options
    const categoryBadges = screen.getAllByText('Product Management').filter(el => 
      el.closest('.bg-blue-100')
    )
    expect(categoryBadges).toHaveLength(1)
    expect(screen.getByText('5 min read')).toBeInTheDocument()
    expect(screen.getByText('Jan 1, 2024')).toBeInTheDocument()
  })

  it('displays post tags', () => {
    render(<BlogClient {...defaultProps} />)
    
    // Use more specific queries to avoid conflicts with dropdown options
    const tagElements = screen.getAllByText('product-management').filter(el => 
      el.closest('.bg-gray-100') && el.closest('.cursor-pointer')
    )
    expect(tagElements).toHaveLength(1)
    
    // Same for strategy tag
    const strategyElements = screen.getAllByText('strategy').filter(el => 
      el.closest('.bg-gray-100') && el.closest('.cursor-pointer')
    )
    expect(strategyElements).toHaveLength(1)
  })

  it('creates correct links to individual posts', () => {
    render(<BlogClient {...defaultProps} />)
    
    const postLink = screen.getByRole('link', { name: /Test Product Management Post/ })
    expect(postLink).toHaveAttribute('href', '/blog/test-post-1')
  })

  it('displays correct results summary', () => {
    render(<BlogClient {...defaultProps} />)
    
    expect(screen.getByText('Showing 3 of 3 articles')).toBeInTheDocument()
  })

  it('updates results summary when filters are applied', () => {
    render(<BlogClient {...defaultProps} />)
    
    // Apply a search filter that will match at least one result
    fireEvent.change(screen.getByLabelText('Search Articles'), {
      target: { value: 'Product' }  // This should match multiple posts
    })
    
    // Check that filtering works and updates the results count
    expect(screen.getByText(/Showing \d+ of 3 articles/)).toBeInTheDocument()
    expect(screen.getByText('matching your filters')).toBeInTheDocument()
  })

  it('handles empty blog posts array gracefully', () => {
    render(<BlogClient {...{ ...defaultProps, blogPosts: [] }} />)
    
    expect(screen.getByText('0 Articles')).toBeInTheDocument()
    expect(screen.getByText('No articles found')).toBeInTheDocument()
  })

  it('handles empty categories array', () => {
    render(<BlogClient {...{ ...defaultProps, categories: [] }} />)
    
    const categorySelect = screen.getByLabelText('Category')
    expect(categorySelect).toBeInTheDocument()
    expect(screen.getByText('All Categories')).toBeInTheDocument()
  })

  it('handles empty tags array', () => {
    render(<BlogClient {...{ ...defaultProps, tags: [] }} />)
    
    const tagSelect = screen.getByLabelText('Topic')
    expect(tagSelect).toBeInTheDocument()
    expect(screen.getByText('All Topics')).toBeInTheDocument()
  })

  it('is accessible with proper form labels', () => {
    render(<BlogClient {...defaultProps} />)
    
    expect(screen.getByLabelText('Search Articles')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByLabelText('Topic')).toBeInTheDocument()
  })

  it('provides proper ARIA labels for interactive elements', () => {
    render(<BlogClient {...defaultProps} />)
    
    const searchInput = screen.getByPlaceholderText(/Search by title, content, or tags/)
    
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'test' } })
    })
    
    expect(screen.getByLabelText('Remove search filter')).toBeInTheDocument()
  })

  it('displays read more links', () => {
    render(<BlogClient {...defaultProps} />)
    
    const readMoreLinks = screen.getAllByText('Read full article')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('limits displayed tags per post', () => {
    const postWithManyTags: BlogPost = {
      ...mockBlogPosts[0],
      id: '4',
      tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
    }
    
    render(<BlogClient {...{ ...defaultProps, blogPosts: [postWithManyTags] }} />)
    
    // Should only show first 3 tags
    expect(screen.getByText('tag1')).toBeInTheDocument()
    expect(screen.getByText('tag2')).toBeInTheDocument()
    expect(screen.getByText('tag3')).toBeInTheDocument()
    expect(screen.queryByText('tag4')).not.toBeInTheDocument()
  })
})
