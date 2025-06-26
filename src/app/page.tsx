import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Juan Carlos Aguilera
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Product Manager | Specialized in Autonomous Vehicle and Mobility
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              I am a passionate Product Manager with expertise in Autonomous Vehicles and Mobility. 
              With 6+ years of experience in the Automotive and Technology industries, I specialize in autonomois vehicles, mobility and remote operatios.
            </p>
            <p className="text-gray-600 mb-6">
              My approach combines technical excellence with creative problem-solving, 
              delivering innovative solutions that make a real impact.
            </p>
            <Link
              href="/experience"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/images/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project and its impact.
                  </p>
                  <Link
                    href={`/projects#project-${project}`}
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
  );
}
