"use client";
import Image from 'next/image';
import Head from "next/head";
import React, { useState } from 'react';
import { presentations } from '@/data/presentations';
import { PDFViewer } from '@/components/PDFViewer';

export default function Experience() {
  const experiences = [
    // MOIA - Product Manager
    {
      // MOIA - Product Manager
      title: 'Product Manager',
      company: 'MOIA - Volkswagen Group',
      period: '2022 - Present',
      description: 'Leading engineering projects and developing innovative solutions.',
      skills: ['Product Management', 'Stakeholder Management', 'Roadmap Planning'],
      image: '/aguilerapjc-portfolio-site/images/experience/MOIA_Logo.png', 
      details: (
        <div className="space-y-4">
          <div>
            <strong>About the Product</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Making reality efficient and intelligent ride pooling transportation by enabling the interfaces of the onboard vehicle systems and communicating them to the cloud routing and control center systems.</li>
              <li>Enable the fleet operator to receive information from the vehicle and interact with it.</li>
              <li>Shape vision of product for Incident Handler, Telemetry, among others.</li>
            </ul>
          </div>
          <div>
            <strong>Product Management</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Led a stream-aligned product team of nine engineers implementing weekly code sprints, agile methodologies, and code/requirement reviews.</li>
              <li>Defined backlog and objectives for a cross-functional team with Embedded Eng, Backend Eng, Systems Eng, and Quality Specialist.</li>
              <li>Worked to include system engineering practices in agile development.</li>
              <li>Worked and aligned with external stakeholders (OEMs, Consulting, Tier 1) and internal stakeholders for the integration and testing of the product.</li>
            </ul>
          </div>
        </div>
      )
    },
    // John Deere - Product Manager - Deliver Lead
    {
      // John Deere - Product Manager - Deliver Lead
      title: 'Product Manager - Deliver Lead',
      company: 'John Deere',
      period: 'March 2020 - Sept 2021',
      description: 'Led a team to develop and integrate autonomy module.',
      skills: ['Stakeholder Management', 'Product Verification & Validation', 'Testing'],
      image: '/aguilerapjc-portfolio-site/images/experience/jd-logo.avif',
      details: (
        <div className="space-y-4">
          <div>
            <strong>Autonomy Control Unit</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Led a team of 6 engineers to deliver an R&D module to provide autonomy capabilities to vehicles.</li>        
              <li>Defined, designed, implemented, and tested the automation control unit to manage incoming data from the sensors and take secure motion decisions in real-time.</li>
              <li>Communicated and coordinated with other team leads to track the progress of the overall program and adjust activities.</li>
              <li>Coordinated, planned, and distributed tasks and responsibilities for the development team.</li>
              <li>Enabled integration of software by defining interfaces with perception, sensor fusion, and motion control teams.</li>
            </ul>
          </div>
        </div>
      )
    },
    // John Deere - Engineer
    {
      // John Deere - Engineer
      title: 'Embedded Test Engineer',
      company: 'John Deere',
      period: 'Jan 2018 - Sept 2021',
      description: 'Ensured product quality for Safety-Relevant Embedded Software.',
      skills: ['Embedded Software', 'Product Verification & Validation', 'Testing'],
      image: '/aguilerapjc-portfolio-site/images/experience/jd-logo.avif',
      details: (
        <div className="space-y-4">
          <div>
            <strong>Key Contributions</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Designed, developed, executed and maintained SiL (Software in the loop) and HiL (Hardware in the loop) automated test cases and vehicle field test plans, achieving an average of 95% functional and safety requirement coverage.</li>
              <li>Lead documentation efforts of Mexico’s Electrical product verification and validation team creating first SiL and HiL training as well as the Testing handbooks reducing initial onboarding process from 2 months to 2 weeks.</li>
              <li>Reduced by 10x the time spent in testing by designing a test automation tool and leading 2 interns in its implementation.</li>
              <li>Designed and led 2 engineers on the development of an in-house test automation Python plugin for Infotainment testing which was later used as a reference for the company infotainment test automation tool</li>
            </ul>
          </div>
        </div>
      )
    },
    // Softtek - R&D Jr Developer
    {
      title: 'R&D Jr Developer',
      company: 'Softtek',
      period: '2017 - 2018',
      description: 'Working on deep learning and artificial intelligence projects, for process automation.',
      skills: ['Computer Vision', 'Deep Learning', 'Artificial Intelligence'],
      image: '/aguilerapjc-portfolio-site/images/experience/softtek_logo.png',
      details: (
        <div className="space-y-4">
          <div>
            <strong>Projects & Achievements</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Developed computer vision models for process automation.</li>
              <li>Implemented deep learning solutions to optimize business workflows.</li>
              <li>Contributed to research and prototyping of AI-driven tools for internal use.</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const education = [
    // IE Business School - MBA
    {
      degree: 'Master in Business Administration',
      school: 'IE Business School',
      period: '2021 - 2022',
      description: 'Specialized in Data Analytics and Digital Transformation.',
      image: '/aguilerapjc-portfolio-site/images/experience/IE_Business_School_Logo.png'
    },
    // Tecnológico de Monterrey - Bachelor
    {
      degree: 'Bachelor of Science in Engineering',
      school: 'Tecnológico de Monterrey',
      period: '2012 - 2017',
      description: 'Major in Robotics Engineering with a focus on Artifical Intelligence.',
      image: '/aguilerapjc-portfolio-site/images/experience/Tec-de-Monterrey-logo.webp'
    }
  ];

  // JSON-LD structured data for experiences and education
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juan C. Aguilera",
    "jobTitle": "Product Manager",
    "worksFor": {
      "@type": "Organization",
      "name": "MOIA - Volkswagen Group"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "IE Business School",
        "degree": "Master in Business Administration",
        "startDate": "2021",
        "endDate": "2022"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Tecnológico de Monterrey",
        "degree": "Bachelor of Science in Engineering",
        "startDate": "2012",
        "endDate": "2017"
      }
    ],
    "hasOccupation": experiences.map(exp => ({
      "@type": "Occupation",
      "name": exp.title,
      "description": exp.description,
      "skills": exp.skills.join(", "),
      "hiringOrganization": {
        "@type": "Organization",
        "name": exp.company
      },
      "startDate": exp.period.split('-')[0].trim(),
      "endDate": exp.period.includes('-') ? exp.period.split('-')[1].trim() : undefined
    }))
  };

  // This state keeps track of which experience is expanded (null means none)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Juan C. Aguilera | Product Manager – Autonomous Vehicles & Mobility</title>
        <meta name="description" content="Juan C. Aguilera is a Product Manager specializing in autonomous vehicles, mobility, and remote operations. Explore his projects, skills, and experience." />
        <meta property="og:title" content="Juan C. Aguilera | Product Manager" />
        <meta property="og:description" content="Specialist in autonomous vehicles, mobility, and remote operations." />
        <meta property="og:image" content="https://aguilerap-jc.github.io/aguilerapjc-portfolio-site/images/profile.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aguilerap-jc.github.io/aguilerapjc-portfolio-site/experience" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Professional Experience</h1>
        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-blue-700">Work Experience</h2>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
                  grid grid-cols-1 md:grid-cols-3 gap-8 items-center 
                  p-0 md:p-6 rounded-2xl shadow-md cursor-pointer
                  transition-transform duration-200 hover:scale-[1.02]
                  ${index % 2 === 0 ? "bg-gradient-to-r from-blue-50 to-white" : "bg-white"}
                  border border-gray-100
                `}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                
                {/* Alternate image/text order on even/odd */}
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-48 w-full flex items-center justify-center md:col-span-1">
                      <Image
                        src={exp.image || "/aguilerapjc-portfolio-site/images/hero-bg.png"}
                        alt={exp.company}
                        fill
                        className="object-contain rounded-xl bg-white p-4"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="md:col-span-2 flex flex-col py-6 px-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-blue-900">{exp.title}</h3>
                          <p className="text-lg text-blue-700 mb-1">{exp.company}</p>
                          <p className="text-gray-500 mb-3">{exp.period}</p>
                        </div>
                        {/* Chevron Icon */}
                        <span
                          className={`transition-transform duration-200 ml-4 text-gray-400 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {openIndex === index && (
                        <div className="mt-4 text-gray-700 space-y-4 border-t border-blue-100 pt-4">
                          {exp.details}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-2 flex flex-col py-6 px-4 order-2 md:order-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-blue-900">{exp.title}</h3>
                          <p className="text-lg text-blue-700 mb-1">{exp.company}</p>
                          <p className="text-gray-500 mb-3">{exp.period}</p>
                        </div>
                        {/* Chevron Icon */}
                        <span
                          className={`transition-transform duration-200 ml-4 text-gray-400 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {openIndex === index && (
                        <div className="mt-4 text-gray-700 space-y-4 border-t border-blue-100 pt-4">
                          {exp.details}
                        </div>
                      )}
                    </div>
                    <div className="relative h-48 w-full flex items-center justify-center md:col-span-1 order-1 md:order-2">
                      <Image
                        src={exp.image || "/aguilerapjc-portfolio-site/images/profile.jpg"}
                        alt={exp.company}
                        fill
                        className="object-contain rounded-xl bg-white p-4"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-blue-700">Education</h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`
                  grid grid-cols-1 md:grid-cols-3 gap-8 items-center
                  p-0 md:p-6 rounded-2xl shadow-md
                  transition-transform duration-200 hover:scale-[1.02]
                  ${index % 2 === 0 ? "bg-gradient-to-r from-blue-50 to-white" : "bg-white"}
                  border border-gray-100
                `}
              >
                {/* Alternate image/text order on even/odd */}
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-48 w-full flex items-center justify-center md:col-span-1">
                      <Image
                        src={edu.image}
                        alt={edu.school}
                        fill
                        className={`rounded-lg ${(edu.school === "IE Business School" || edu.school === "Tecnológico de Monterrey") ? "object-contain p-6 bg-white" : "object-cover"}`}
                        style={{ backgroundColor: "#fff" }}
                      />
                    </div>
                    <div className="md:col-span-2 flex flex-col py-6 px-4">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-900">{edu.degree}</h3>
                      <p className="text-xl text-blue-700 mb-2">{edu.school}</p>
                      <p className="text-gray-500 mb-4">{edu.period}</p>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-2 flex flex-col py-6 px-4 order-2 md:order-1">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-900">{edu.degree}</h3>
                      <p className="text-xl text-blue-700 mb-2">{edu.school}</p>
                      <p className="text-gray-500 mb-4">{edu.period}</p>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                    <div className="relative h-48 w-full flex items-center justify-center md:col-span-1 order-1 md:order-2">
                      <Image
                        src={edu.image}
                        alt={edu.school}
                        fill
                        className={`rounded-lg ${(edu.school === "IE Business School" || edu.school === "Tecnológico de Monterrey") ? "object-contain p-6 bg-white" : "object-cover"}`}
                        style={{ backgroundColor: "#fff" }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Speaking & Presentations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Speaking & Presentations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sharing insights on autonomous vehicles, product management, and mobility innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {presentations.map((presentation) => (
                <div
                  key={presentation.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {presentation.image && (
                    <div className="relative h-48">
                      <Image
                        src={presentation.image}
                        alt={presentation.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-medium shadow">
                          {presentation.type.charAt(0).toUpperCase() + presentation.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{presentation.title}</h3>
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">{presentation.event}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(presentation.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        📍 {presentation.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{presentation.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {presentation.topics.slice(0, 3).map((topic, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                        {presentation.topics.length > 3 && (
                          <span className="text-gray-500 text-xs">
                            +{presentation.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {presentation.slideDeckUrl && (
                        <PDFViewer
                          pdfUrl={presentation.slideDeckUrl}
                          title={presentation.title}
                          allowDownload={presentation.allowDownload}
                          presentationId={presentation.id}
                        />
                      )}
                      {presentation.videoUrl && (
                        <a
                          href={presentation.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border-2 border-gray-900 text-gray-900 text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          🎥 Watch
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {presentations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">More presentations coming soon...</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}