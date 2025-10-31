export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Heading */}
        <h2 className="handwritten text-5xl md:text-6xl text-charcoal mb-8">
          Who I Am
        </h2>

        {/* Biography Content */}
        <div className="space-y-6 text-lg text-medium-gray leading-relaxed">
          <p>
            I'm a results-driven operations leader with over a decade of experience in the FinTech industry.
            My career has been defined by a passion for building scalable systems, leading high-performing teams,
            and delivering exceptional client experiences.
          </p>

          <p>
            Throughout my journey, I've specialized in transforming operational challenges into strategic
            opportunities. Whether it's scaling platforms to support exponential growth, optimizing complex
            workflows, or building teams from the ground up, I thrive on solving the hard problems that
            drive business success.
          </p>

          <p>
            My approach combines strategic thinking with hands-on execution. I believe in creating systems
            that don't just work today, but are built to scale and adapt for tomorrow. This mindset has
            enabled me to consistently deliver measurable results while fostering cultures of operational
            excellence.
          </p>

          <p>
            When I'm not optimizing operations, you can find me mentoring emerging leaders, sharing insights
            on building effective teams, and exploring new ways to drive efficiency in high-growth environments.
          </p>
        </div>
      </div>
    </section>
  );
}
