import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-dark-gray/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Matthew Wagner
          </h1>

          {/* Subtitle with animated underline */}
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light tracking-wide">
              Front End Engineer
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-75" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-8">
            Crafting exceptional digital experiences with modern web technologies
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="#about"
              className="btn btn-primary text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 hover:scale-105"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
