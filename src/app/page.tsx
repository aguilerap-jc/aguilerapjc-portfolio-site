import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero + About Section Combined */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
  <div className="flex-1 flex flex-col items-start justify-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900">Juan Carlos Aguilera</h1>
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
    <div className="relative h-96 w-96 max-w-full">
      <Image
        src="/images/profile.jpg"
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
