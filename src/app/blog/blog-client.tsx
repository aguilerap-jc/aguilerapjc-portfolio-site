'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogClientProps {
  blogPosts: BlogPost[];
  categories: string[];
  tags: string[];
}

export default function BlogClient({ blogPosts, categories, tags }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag, blogPosts]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTag('All');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Management Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Thoughts on product strategy, digital transformation, and technology leadership 
              from years of building innovative products and leading high-performing teams.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {blogPosts.length} Articles
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 7h.01M7 3h5c.512 0 .925.388.994.883L13 4v16l-5-3-5 3V4c0-.512.388-.925.883-.994L4 3h3z" />
                </svg>
                {categories.length} Categories
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                {tags.length} Topics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Find Your Next Read</h2>
            <p className="text-gray-600">Search through our collection of product management insights</p>
          </div>

          {/* Search and Filters Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Search */}
              <div className="lg:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-800 mb-3">
                  Search Articles
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by title, content, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-800 mb-3">
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 appearance-none cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tag Filter */}
              <div>
                <label htmlFor="tag" className="block text-sm font-semibold text-gray-800 mb-3">
                  Topic
                </label>
                <div className="relative">
                  <select
                    id="tag"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="block w-full px-4 py-4 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 appearance-none cursor-pointer"
                  >
                    <option value="All">All Topics</option>
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'All' || selectedTag !== 'All') && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-200">
                  Search: &quot;{searchTerm}&quot;
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-blue-500 hover:bg-blue-200 hover:text-blue-700 transition-colors"
                    aria-label="Remove search filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-green-100 text-green-800 border border-green-200">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-green-500 hover:bg-green-200 hover:text-green-700 transition-colors"
                    aria-label="Remove category filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTag !== 'All' && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-purple-100 text-purple-800 border border-purple-200">
                  Topic: {selectedTag}
                  <button
                    onClick={() => setSelectedTag('All')}
                    className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-purple-500 hover:bg-purple-200 hover:text-purple-700 transition-colors"
                    aria-label="Remove topic filter"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline decoration-dotted underline-offset-4 font-medium transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Category */}
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </div>

                    {/* Title and Excerpt */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                    >
                      Read full article
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Results Summary */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} articles
                {(searchTerm || selectedCategory !== 'All' || selectedTag !== 'All') && (
                  <span className="ml-2">
                    matching your filters
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
