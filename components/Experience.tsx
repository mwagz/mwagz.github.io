import Image from "next/image";

interface TechStack {
  name: string;
  icon: string;
}

interface Job {
  company: string;
  logo: string;
  period: string;
  description: string;
  technologies: TechStack[];
}

const jobs: Job[] = [
  {
    company: "Tangoe",
    logo: "/images/tangoe.png",
    period: "November 2017 - Present",
    description:
      "At Tangoe, I am a Software Engineering Team Lead and I manage 6 Software Engineers. Part of my responsibilities include helping each individual on my team grow professionally and personally. I aim to help each of my team members to reach their full professional potential. Prior to being a Team Lead at Tangoe, I was a Senior Front End Engineer. As a Senior Front End Engineer I began the process of moving the software from an AngularJS environment to an Angular 7+ environment. I have continued those efforts as a Team Lead by directing team members in that effort.",
    technologies: [
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Angular/AngularJS", icon: "/images/angular.png" },
      { name: "Ruby on Rails", icon: "/images/rails.png" },
      { name: "HTML 5", icon: "/images/html5.png" },
      { name: "CSS 3", icon: "/images/css3.png" },
    ],
  },
  {
    company: "Octiv",
    logo: "/images/octiv.png",
    period: "October 2016 - November 2017",
    description:
      "At Octiv, I was a Front End Engineer in an EmberJS, ReactJS and Ruby on Rails stack. I focused on Front End interactions for the company's product, but some of my work required that I be at least comfortable in a Rails environment. Octiv uses Agile development practices to move the product forward and Git for version control.",
    technologies: [
      { name: "EmberJS", icon: "/images/emberjs.png" },
      { name: "ReactJS", icon: "/images/reactjs.png" },
      { name: "Ruby on Rails", icon: "/images/rails.png" },
      { name: "HTML 5", icon: "/images/html5.png" },
      { name: "CSS 3", icon: "/images/css3.png" },
    ],
  },
  {
    company: "The Basement",
    logo: "/images/basement.png",
    period: "August 2012 - October 2016",
    description:
      "At The Basement, I converted design files and wireframes to fully functional interactive websites and web applications using HTML, CSS, JavaScript, EmberJS and occasionally Wordpress. I helped to shape the Q/A processes, programming style and primary frameworks that the development team uses.",
    technologies: [
      { name: "JavaScript", icon: "/images/javascript.png" },
      { name: "HTML 5", icon: "/images/html5.png" },
      { name: "CSS 3", icon: "/images/css3.png" },
    ],
  },
  {
    company: "Professional Development Group II, Inc.",
    logo: "/images/pdg.png",
    period: "January 2012 - August 2012",
    description:
      "At Professional Development Group, I was their primary developer and managed websites for a number of Higher Education Financial Conferences. Other responsibilities included print design and basic web design.",
    technologies: [
      { name: "JavaScript", icon: "/images/javascript.png" },
      { name: "HTML 5", icon: "/images/html5.png" },
      { name: "CSS 3", icon: "/images/css3.png" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-dark to-gray-300"></div>

          {/* Jobs */}
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={job.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className="card p-8 bg-white">
                    {/* Company Header */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={job.logo}
                          alt={job.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-dark-gray mb-1">
                          {job.company}
                        </h3>
                        <span className="text-sm font-medium text-primary">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {job.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative"
                            title={tech.name}
                          >
                            <div className="relative w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
