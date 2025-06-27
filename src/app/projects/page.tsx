import Image from 'next/image';
import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      id: 'ID-Buzz-AD ',
      title: 'ID Buzz AD - VW First Production Autonomous Vehicle',
      category: 'Product Management',
      year: '2022-Present',
      description: 'Lead product development for telemetry and incident management systems for the ID Buzz AD. This project focuses on enhancing remote operations and incident response capabilities.',
      technologies: ['AWS', 'Homologation Relevant Software', 'Cloud Technologies', 'Embedded Systems'],
      image: '/images/projects/MOIA/MOIA_ID_BUZZ_AD.jpg',
      features: [
        'Telemetry Information: Enable Fleet Operator to monitor vehicle status and performance in real-time',
        'Incident Management: Provide critical information to Fleet Operator in case of incidents or failures',
        'Remote Functions: Enable remote control, for pre-ride and hub operations', 
        'Verification Testing Tool: Enables development teams to test and verify mobility as a service (MaaS) features and functionalities',
      ]
    },
    {
      id: 'JD-Fairway-Mower',
      title: 'John Deere Autonomous Fairway Mower',
      category: 'Research',
      year: '2019-2021',
      description: 'Led the development of an autonomous mowing control unit for John Deere\'s Fairway Mower.',
      technologies: ['Product Verification & Validation', 'Leadership', 'Advance Engineering', 'Autonomous Vehicles'],
      image: '/images/projects/John Deere/john-deere-autonomous-mower.jpg',
      features: [
        'Autonomy Control Unit: Enable control system to operate steering, throttle, and brake for autonomous mowing',
      ]
    },
    {
      id: 'JD-6J',
      title: 'JD 6J Tractor for LATAM and EMEA',
      category: 'Development',
      year: '2018-2021',
      description: 'Verification and validation of the JD 6J tractor for Latin America and European Markets. This project involved extensive testing and validation to ensure compliance with regional standards and customer needs.',
      technologies: ['Product Verification & Validation', 'Embedded Systems', 'Automotive Engineering'],
      image: '/images/projects/John Deere/6150_J.avif',
      features: [
        'Differential Lock: SiL, HiL, and vehicle testing for Differential Lock systems',
        'Mechanical Front Wheel Drive: SiL, HiL, and vehicle testing for MFWD systems',
        'Power Take Off: SiL, HiL, and vehicle testing for PTO systems',
      ]
    }
  ];

  const personalProjects = [
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      year: '2024',
      description: 'Designed and developed a personal branding website using Next.js and Tailwind CSS to showcase professional experience and projects.',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
      image: '/images/projects/personal/portfolio.jpg',
      features: [
        'Responsive design for all devices',
        'SEO optimized with structured data',
        'Dynamic project and experience sections',
      ]
    },
    {
      id: 'other-projetct',
      title: 'Other project',
      category: 'Web Development',
      year: '2024',
      description: 'Designed and developed a personal branding website using Next.js and Tailwind CSS to showcase professional experience and projects.',
      technologies: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
      image: '/images/projects/personal/portfolio.jpg',
      features: [
        'Responsive design for all devices',
        'SEO optimized with structured data',
        'Dynamic project and experience sections',
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Juan C. Aguilera</title>
        <meta name="description" content="Professional and personal projects of Juan C. Aguilera in product management, engineering, and technology." />
        <meta property="og:title" content="Projects | Juan C. Aguilera" />
        <meta property="og:description" content="Professional and personal projects of Juan C. Aguilera in product management, engineering, and technology." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Projects Header */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-blue-900 tracking-tight drop-shadow-lg">
          Projects Portfolio
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Explore a selection of my professional and personal work in technology, product management, and engineering.
        </p>
        <div className="flex justify-center mb-16">
          <a
            href="#personal-projects"
            className="inline-flex items-center gap-2 bg-blue-800 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-900 transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 13l-5 5m0 0l-5-5m5 5V6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Jump to Personal Projects
          </a>
        </div>

        {/* Professional Projects Section with improved UI */}
        <section
          id="professional-projects"
          className="relative z-20 bg-blue-50 rounded-3xl shadow-xl px-2 py-16 md:py-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 flex items-center gap-3">
            <span className="inline-block w-2 h-8 bg-blue-600 rounded-full mr-2"></span>
            Professional Projects
          </h2>
          <div className="grid gap-16 md:grid-cols-2">
            {projects.map((project) => (
              <section
                key={project.id}
                id={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 flex flex-col transition-transform hover:scale-[1.02] focus-within:scale-[1.02]"
                tabIndex={0}
              >
                <div className="relative h-64">
                  {project.id === 'personal-portfolio' ? (
                    <iframe
                      // To add domain once I have deployed the portfolio
                      src="/"
                      title="Personal Portfolio Live Preview"
                      className="w-full h-full rounded-t-2xl border-0"
                      style={{ background: 'white' }}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {project.year}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <p className="text-gray-700 text-base mb-4 flex-1">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">Skills & Knowledge</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Smooth transition divider */}
        <div className="my-24 flex items-center justify-center">
          <div className="h-1 w-1/4 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800 rounded-full opacity-60"></div>
          <span className="mx-6 text-blue-800 font-bold text-lg tracking-wider uppercase">Personal Projects</span>
          <div className="h-1 w-1/4 bg-gradient-to-l from-blue-200 via-blue-400 to-blue-800 rounded-full opacity-60"></div>
        </div>

        {/* Personal Projects Section with cohesive palette */}
        <section
          id="personal-projects"
          className="relative z-20 bg-blue-50 rounded-3xl shadow-xl px-2 py-16 md:py-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-800 flex items-center gap-3">
            <span className="inline-block w-2 h-8 bg-blue-600 rounded-full mr-2"></span>
            Personal Projects
          </h2>
          <div className="grid gap-16 md:grid-cols-2">
            {personalProjects.map((project) => (
              <section
                key={project.id}
                id={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 flex flex-col transition-transform hover:scale-[1.02] focus-within:scale-[1.02]"
                tabIndex={0}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {project.year}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <p className="text-gray-700 text-base mb-4 flex-1">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-700">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}