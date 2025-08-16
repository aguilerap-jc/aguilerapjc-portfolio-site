import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { prof_projects } from '@/data/projects';
import { getBlogPosts } from '@/data/blog';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default async function Home() {
  const allPosts = await getBlogPosts();
  const recentPosts = allPosts.slice(0, 3); // Get the 3 most recent posts
  
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
              Certifications
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

      {/* Latest Insights - Minimal Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Latest Insights</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Thoughts on autonomous vehicles, product strategy, and mobility innovation
          </p>
        </div>
        
        {recentPosts && recentPosts.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {recentPosts.slice(0, 3).map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/aguilerapjc-portfolio-site/blog/${post.slug}`} className="block">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {post.category}
                          </span>
                          <time className="text-xs text-gray-500" dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/aguilerapjc-portfolio-site/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All Articles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">New insights coming soon</p>
          </div>
        )}
      </section>

      {/* Core Competencies Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic product management expertise with deep technical knowledge in autonomous systems
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Product Strategy & Leadership */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m-6 0a2 2 0 002 2h2a2 2 0 002-2m6 0a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Strategy & Leadership</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Product Strategy & Roadmapping
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Stakeholder Management
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Cross-functional Team Leadership
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Agile & SAFe Methodologies
                </div>
              </div>
            </div>

            {/* Technical & Domain Expertise */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical & Domain Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Autonomous Vehicle Systems
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Remote Operations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Mobility as a Service (MaaS)
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Testing & Quality Assurance
                </div>
              </div>
            </div>

            {/* Tools & Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Analytics</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Data Analytics
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Product Management Tools
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Technical Documentation
                </div>
              </div>
            </div>

          </div>

          {/* Key Technologies Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-center text-gray-700 mb-8">Key Technologies & Platforms</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'AWS', 'Jira', 'Confluence', 'C++', 'Python', 'SQL','Git', 'Tableau'
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    </ErrorBoundary>
  );
}
