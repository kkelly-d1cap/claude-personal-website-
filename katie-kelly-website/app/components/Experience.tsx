import { experience } from '@/content/experience';
import { HiDownload } from 'react-icons/hi';

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
            Experience
          </h2>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-charcoal font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200"
          >
            <HiDownload size={20} />
            Download Resume
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-light-gray">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange rounded-full"></div>

              {/* Job Content */}
              <div className="pb-8">
                {/* Date */}
                <p className="text-sm text-medium-gray mb-2">{job.date}</p>

                {/* Job Title with Highlight */}
                <h3 className="text-2xl font-bold text-charcoal mb-1">
                  <span className="highlight-orange">{job.title}</span>
                </h3>

                {/* Company */}
                <p className="text-lg text-medium-gray mb-4">{job.company}</p>

                {/* Description Points */}
                <ul className="space-y-2">
                  {job.description.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-medium-gray flex items-start gap-2"
                    >
                      <span className="text-orange mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
