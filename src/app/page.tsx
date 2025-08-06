import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { prof_projects } from '@/data/projects';
import { getFeaturedPosts } from '@/data/blog';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();
  
  return (
    <ErrorBoundary>
    <>
    <Head>
  <title>Juan C. Aguilera | Product Manager – Autonomous Vehicles & Mobility</title>
  <meta name="description" content="Juan C. Aguilera is a Product Manager specializing in autonomous vehicles, mobility, and remote operations. Explore his projects, skills, and experience." />
  <meta property="og:title" content="Juan C. Aguilera | Product Manager" />
  <meta property="og:description" content="Specialist in autonomous vehicles, mobility, and remote operations." />
  <meta property="og:image" content="https://aguilerap-jc.github.io/aguilerapjc-portfolio-site/images/profile.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://aguilerap-jc.github.io/aguilerapjc-portfolio-site/" />
</Head>
    <div className="space-y-20">
      {/* Hero + About Section Combined */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
  <div className="flex-1 flex flex-col items-start justify-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900">Juan C. Aguilera</h1>
    <div className="h-1 w-20 bg-blue-600 rounded mb-6" />
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-700">
      Product Manager
      <br />
      <span className="text-base md:text-lg text-gray-500 font-normal">
      | Autonomous Vehicles &amp; Mobility
  </span>
    </h2>
    <p className="text-lg text-gray-700 mb-4 max-w-lg">
      Passionate about building innovative mobility solutions. With 6+ years of experience in the automotive and technology industries, I specialize in autonomous vehicles, mobility, and remote operations.
    </p>
    <ul className="list-disc list-inside text-gray-500 mb-6 max-w-lg space-y-1">
      <li>Technical excellence & creative problem-solving</li>
      <li>Stakeholder management & cross-functional leadership</li>
      <li>Delivering impactful, user-centered products</li>
    </ul>
    <div className="flex gap-4 mt-2">
      <Link
        href="/contact"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
      >
        Get in Touch
      </Link>
      <Link
        href="/experience"
        className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
      >
        Learn More
      </Link>
    </div>
  </div>
  <div className="flex-1 flex justify-center">
    <div className="relative h-100 w-100 max-w-full">
      <Image
        src={"/aguilerapjc-portfolio-site/images/profile.jpg"}
        alt="Juan Carlos Aguilera Profile"
        fill
        className="object-cover rounded-lg shadow-lg"
        priority
      />
    </div>
  </div>
</section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prof_projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Image credit section at the bottom with transparency */}
                  {project.credit && (
                    <div
                      className="absolute left-0 bottom-0 w-full bg-white bg-opacity-60 text-[10px] px-2 py-1 rounded-b-lg flex items-center justify-center italic font-light truncate"
                      style={{ pointerEvents: 'auto', lineHeight: 1.2 }}
                      title={`Photo by ${project.credit.author}${project.credit.platform ? ` ${project.credit.platform}` : ''}${project.credit.license ? ` (${project.credit.license})` : ''}`}
                    >
                      Photo by{' '}
                      <a
                        href={project.credit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline ml-1"
                        tabIndex={-1}
                      >
                        {project.credit.author}
                      </a>
                      {project.credit.platform && <span>&nbsp;{project.credit.platform}</span>}
                      {project.credit.license && <> ({project.credit.license})</>}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/projects#${project.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughts on product management, digital transformation, and technology leadership
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {post.readTime} min read
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Product Management', 'Stakeholder Management', 'Product Strategy', 'Roadmapping'].map((skill) => (
            <div
              key={skill}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-center mt-16 mb-12">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Remote Operations', 'Artificial Intelligence', 'Automotive', 'Robotics'].map((skill) => (
            <div
              key={skill}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
    </ErrorBoundary>
  );
}
