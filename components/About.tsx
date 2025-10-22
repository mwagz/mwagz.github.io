import Image from "next/image";

interface TechStack {
  name: string;
  icon: string;
}

interface Skill {
  title: string;
  icon: string;
  description: string;
  technologies: TechStack[];
}

const skills: Skill[] = [
  {
    title: "JavaScript",
    icon: "/images/javascript-large.png",
    description:
      "I started really writing JavaScript during my tenure with The Basement. I wrote a lot of vanilla JavaScript, but started down the EmberJS path there as well. At Octiv, I was tasked with working within an EmberJS and ReactJS environment. Moving on to Tangoe (previously MOBI), I worked primarily in an AngularJS environment and worked to move them into a more modern Angular 7+ JavaScript environment.",
    technologies: [
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Angular/AngularJS", icon: "/images/angular.png" },
      { name: "EmberJS", icon: "/images/emberjs.png" },
      { name: "ReactJS", icon: "/images/reactjs.png" },
    ],
  },
  {
    title: "Ruby",
    icon: "/images/ruby.png",
    description:
      "I have a secret enjoyment in Ruby, but have never set out to really master it. I wrote some Ruby at Octiv and write some Ruby at Tangoe, but I'm still pretty junior in this area. I have a couple of side projects that I am developing with Ruby on Rails to help me gain a better understanding of it.",
    technologies: [{ name: "Ruby on Rails", icon: "/images/rails.png" }],
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        {/* About Me Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I&apos;m a Software Engineering Team Lead at{" "}
            <a
              href="https://tangoe.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary-dark font-semibold underline decoration-2 underline-offset-2 transition-colors"
            >
              Tangoe
            </a>{" "}
            for their Mobile product. Tangoe gives me the opportunity to learn
            every day and help other individuals grow into their roles. I am
            responsible for the personal growth and productivity of 6 Software
            Engineers who work in a Ruby on Rails and Angular/AngularJS
            technology stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="card p-8 bg-white border-t-4 border-primary"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark-gray">
                  {skill.title}
                </h3>
              </div>

              {/* Skill Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-4">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative"
                      title={tech.name}
                    >
                      <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
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
          ))}
        </div>
      </div>
    </section>
  );
}
