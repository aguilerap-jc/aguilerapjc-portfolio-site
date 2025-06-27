import Image from 'next/image';
import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      id: 'project-1',
      title: 'Project Title 1',
      category: 'Engineering',
      year: '2023',
      description: 'A detailed description of the project, its goals, and achievements. This project demonstrates expertise in specific areas and showcases problem-solving abilities.',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
      image: '/images/project-1.jpg',
      features: [
        'Feature 1: Description of the feature and its impact',
        'Feature 2: Description of the feature and its impact',
        'Feature 3: Description of the feature and its impact'
      ]
    },
    {
      id: 'project-2',
      title: 'Project Title 2',
      category: 'Research',
      year: '2022',
      description: 'A detailed description of the project, its goals, and achievements. This project demonstrates expertise in specific areas and showcases problem-solving abilities.',
      technologies: ['Technology 4', 'Technology 5', 'Technology 6'],
      image: '/images/project-2.jpg',
      features: [
        'Feature 1: Description of the feature and its impact',
        'Feature 2: Description of the feature and its impact',
        'Feature 3: Description of the feature and its impact'
      ]
    },
    {
      id: 'project-3',
      title: 'Project Title 3',
      category: 'Development',
      year: '2021',
      description: 'A detailed description of the project, its goals, and achievements. This project demonstrates expertise in specific areas and showcases problem-solving abilities.',
      technologies: ['Technology 7', 'Technology 8', 'Technology 9'],
      image: '/images/project-3.jpg',
      features: [
        'Feature 1: Description of the feature and its impact',
        'Feature 2: Description of the feature and its impact',
        'Feature 3: Description of the feature and its impact'
      ]
    }
  ];

  // JSON-LD structured data for projects
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, idx) => ({
      "@type": "CreativeWork",
      "position": idx + 1,
      "name": project.title,
      "description": project.description,
      "image": project.image,
      "keywords": project.technologies.join(", "),
      "dateCreated": project.year,
      "url": `https://yourdomain.com/projects#${project.id}`
    }))
  };

  return (
    <>
      <Head>
        <title>Projects | Juan C. Aguilera</title>
        <meta name="description" content="Professional projects of Juan C. Aguilera in product management, engineering, and autonomous vehicles." />
        <meta property="og:title" content="Projects | Juan C. Aguilera" />
        <meta property="og:description" content="Professional projects of Juan C. Aguilera in product management, engineering, and autonomous vehicles." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:type" content="website" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

        <div className="space-y-20">
          {projects.map((project) => (
            <section
              key={project.id}
              id={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{project.category}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{project.year}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-6">{project.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
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
      </div>
    </>
  );
}