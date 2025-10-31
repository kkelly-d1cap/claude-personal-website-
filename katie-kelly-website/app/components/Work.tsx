import Link from 'next/link';
import { projects } from '@/content/projects';

export default function Work() {
  return (
    <section id="work" className="bg-light-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Heading */}
        <h2 className="handwritten text-5xl md:text-6xl text-charcoal mb-12">
          Featured Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              {/* Project Title */}
              <h3 className="handwritten text-3xl text-charcoal mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-medium-gray mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-light-gray text-charcoal text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              <Link
                href={project.link}
                className="text-orange hover:text-charcoal font-semibold transition-colors duration-200 inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
