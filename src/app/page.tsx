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

      {/* Certification Credentials Bar - GitLab Style */}
      <div className="bg-gray-50 border-t border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-600 mb-4 sm:mb-6 tracking-wide uppercase">
              Certified by
            </h4>
            
            {/* Mobile: Grid Layout, Desktop: Row Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              
              {/* Google Project Management Certificate */}
              <a 
                href="https://www.credly.com/badges/d7fe42c6-982a-4416-99d3-de1548cb7819" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/GCC_badge_PGM.png"
                    alt="Google Career Certificate"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">Google</div>
                  <div className="text-gray-500 text-xs">Project Management</div>
                </div>
              </a>

              {/* SAFe Product Owner/Product Manager */}
              <a 
                href="https://www.credly.com/badges/505d3b75-cd9c-48f9-8b1f-5fe0b56b1309" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/safe_popm.png"
                    alt="SAFe Product Owner Product Manager"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">Scaled Agile</div>
                  <div className="text-gray-500 text-xs">SAFe® 6 POPM</div>
                </div>
              </a>

              {/* AWS Solutions Architect */}
              <a 
                href="https://www.credly.com/badges/b92b5a26-84c4-421d-893c-fd23bcdcf6aa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
                    alt="AWS Certified Solutions Architect Associate"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">Amazon Web Services</div>
                  <div className="text-gray-500 text-xs">Solutions Architect</div>
                </div>
              </a>
              
              {/* ISTQB Test Management */}
              <a 
                href="https://atsqa.org/certified-testers/profile/8bdb8b76f83f4bf38e519b9663ac716e" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/ISTQB_CTAL_TM.png"
                    alt="ISTQB Certified Tester Advanced Level Test Management"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">ISTQB</div>
                  <div className="text-gray-500 text-xs">Advanced Test Mgmt</div>
                </div>
              </a>

              {/* University of Toronto - Self-Driving Cars */}
              <a 
                href="https://www.coursera.org/account/accomplishments/specialization/68TFF6XMWJAC" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/UofToronto.webp"
                    alt="University of Toronto"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">University of Toronto</div>
                  <div className="text-gray-500 text-xs">Self-Driving Cars</div>
                </div>
              </a>

              {/* University of Virginia - Digital Product Management */}
              <a 
                href="https://www.coursera.org/account/accomplishments/specialization/A9VKMLNNEDU7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-white/50"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-200 flex items-center justify-center p-1 flex-shrink-0">
                  <Image
                    src="/aguilerapjc-portfolio-site/images/certificates/UnivofVirginia.jpg"
                    alt="University of Virginia"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-900 font-semibold text-xs sm:text-xs">University of Virginia</div>
                  <div className="text-gray-500 text-xs">Digital Product Mgmt</div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>

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

      {/* Certifications Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuously developing expertise through industry-recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Google Project Management Certificate */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://www.credly.com/badges/d7fe42c6-982a-4416-99d3-de1548cb7819" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-blue-700 transition-colors"
                >
                  GCC
                </a>
                <div className="text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Google Project Management Certificate
              </h4>
              <p className="text-gray-600 mb-3">Google Career Certificates</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2024
              </div>
              <p className="text-sm text-gray-600">
                Project planning, agile methodologies, risk management, and stakeholder communication in modern project environments.
              </p>
            </div>

            {/* SAFe Product Owner/Product Manager */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://www.credly.com/badges/505d3b75-cd9c-48f9-8b1f-5fe0b56b1309" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-green-700 transition-colors"
                >
                  SAFe
                </a>
                <div className="text-green-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Certified SAFe® 6 Product Owner/Product Manager
              </h4>
              <p className="text-gray-600 mb-3">Scaled Agile</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2024 • Valid through: 2025
              </div>
              <p className="text-sm text-gray-600">
                Scaled Agile framework expertise, portfolio alignment, and product strategy in enterprise environments.
              </p>
            </div>

            {/* AWS Solutions Architect */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://www.credly.com/badges/b92b5a26-84c4-421d-893c-fd23bcdcf6aa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-orange-700 transition-colors"
                >
                  AWS
                </a>
                <div className="text-orange-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                AWS Certified Solutions Architect – Associate
              </h4>
              <p className="text-gray-600 mb-3">Amazon Web Services</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2024 • Valid through: 2027
              </div>
              <p className="text-sm text-gray-600">
                Cloud architecture design, cost optimization, security best practices, and scalable solutions on AWS.
              </p>
            </div>

            {/* ISTQB Test Management */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://atsqa.org/certified-testers/profile/8bdb8b76f83f4bf38e519b9663ac716e" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-purple-700 transition-colors"
                >
                  ISTQB
                </a>
                <div className="text-purple-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                ISTQB Certified Tester Advanced Level Test Management
              </h4>
              <p className="text-gray-600 mb-3">International Software Testing Qualifications Board</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2022
              </div>
              <p className="text-sm text-gray-600">
                Advanced test management, quality assurance strategies, and testing process optimization.
              </p>
            </div>

            {/* University of Toronto Self-Driving Cars */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/68TFF6XMWJAC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-red-700 transition-colors"
                >
                  UoT
                </a>
                <div className="text-red-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Self-Driving Cars Specialization
              </h4>
              <p className="text-gray-600 mb-3">University of Toronto</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2020
              </div>
              <p className="text-sm text-gray-600">
                Autonomous vehicle technology, computer vision, sensor fusion, and motion planning algorithms.
              </p>
            </div>

            {/* University of Virginia Digital Product Management */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200/50 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/A9VKMLNNEDU7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-indigo-700 transition-colors"
                >
                  UVA
                </a>
                <div className="text-indigo-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Digital Product Management
              </h4>
              <p className="text-gray-600 mb-3">University of Virginia</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Issued: 2021
              </div>
              <p className="text-sm text-gray-600">
                Digital strategy, user experience design, data analytics, and product lifecycle management.
              </p>
            </div>
          </div>
          
          {/* Verification Notice */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              All certifications can be verified through their respective issuing organizations
            </p>
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
