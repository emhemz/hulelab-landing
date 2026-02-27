"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function StrategicPositioningPage() {
  return (
    <main className="relative min-h-screen bg-[#f5f3f0]">
      
      {/* Grain texture */}
      <div className="grain" />
      
      <Header />

      {/* Content */}
      <article className="relative bg-[#f5f3f0]">
        <div className="max-w-[1400px] mx-auto px-10 sm:px-16 pt-32 md:pt-36 pb-32">
          {/* Back button */}
          <Link
            href="/#what-we-work-on"
            className="inline-flex items-center gap-2 text-[0.875rem] mb-12 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md text-[#1a1918] hover:bg-[#cbb37c]/20 transition-all duration-300 font-medium border border-[#1a1918]/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>

          {/* Page Header */}
          <div className="mb-12 md:mb-16 max-w-[900px]">
            <div className="mb-6">
              <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">
                Strategic Capacity
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-serif tracking-tight leading-[1.05] text-[#1a1918] mb-6">
              Strategic Capacity
            </h1>
            <h2 className="text-[1.375rem] sm:text-[1.625rem] font-medium tracking-tight text-[#1a1918] mb-6 max-w-[700px]">
              Building adaptive strength in individuals and institutions.
            </h2>
            <div className="space-y-4 text-[1.0625rem] leading-[1.8] text-[#6b6966] max-w-[700px]">
              <p>
                In a world where change accelerates every year, the ability to learn, adapt, and decide well is no longer optional — it is strategic.
              </p>
              <p>
                We design and implement the structures, habits, and systems that turn learning into long-term strategic advantage.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-32 md:mb-40 h-[400px] md:h-[500px] overflow-hidden rounded-3xl">
            <img 
              src="/ChatGPT Image Jan 14, 2026, 04_08_30 PM.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1918]/30 via-transparent to-[#cbb37c]/20" />
          </div>

          {/* For Individuals */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1">
                <img 
                  src="/ChatGPT Image Jan 14, 2026, 04_08_38 PM.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#cbb37c]/20 to-transparent" />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-[0.8125rem] tracking-[0.08em] uppercase text-[#cbb37c] font-medium mb-6 block">
                  For Individuals
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-6">
                  Personal Strategic Development
                </h2>
                <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    We work with ambitious individuals — leaders, founders, professionals, and high performers — to strengthen their learning capacity and decision-making power.
                  </p>
                  <p>
                    Through 1:1 coaching, meta-learning frameworks, and structured cognitive development, we help you build systems that increase clarity, velocity, and long-term growth.
                  </p>
                </div>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                >
                  <span className="text-[#cbb37c]">→</span>
                  <span>Explore EDGE Sessions</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  >
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* For Organizations */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="text-[0.8125rem] tracking-[0.08em] uppercase text-[#cbb37c] font-medium mb-6 block">
                  For Organizations
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-6">
                  Building the Learning Organization
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  We help companies turn learning into infrastructure.
                </p>
                <div className="mb-8">
                  <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-4 font-medium">This includes:</p>
                  <ul className="space-y-3 text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Developing learning culture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Increasing learning velocity across teams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Implementing meta-learning frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Structuring institutional knowledge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Laying the foundation for organizational intelligence</span>
                    </li>
                  </ul>
                </div>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  From executive advisory to full implementation, we design systems that make capability compound.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                  >
                    <span className="text-[#cbb37c]">→</span>
                    <span>Visit EDGE</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                  >
                    <span className="text-[#cbb37c]">→</span>
                    <span>Explore enterprise programs</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/ChatGPT Image Jan 14, 2026, 04_01_38 PM.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f3f0]/40" />
              </div>
            </div>
          </section>

          {/* For Schools */}
          <section className="mb-32 md:mb-40 relative overflow-hidden rounded-3xl border border-[#1a1918]/10">
            {/* Background with image overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
              <img 
                src="/ChatGPT Image Jan 14, 2026, 04_08_41 PM.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative p-10 md:p-16 bg-white/85 backdrop-blur-md">
              <div className="max-w-[800px]">
                <span className="text-[0.8125rem] tracking-[0.08em] uppercase text-[#cbb37c] font-medium mb-6 block">
                  For Schools
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-6">
                  Advancing Learning in Education
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  We collaborate with universities, researchers, and international organizations working at the forefront of learning science.
                </p>
                <div className="mb-8">
                  <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-4 font-medium">Our work focuses on:</p>
                  <ul className="space-y-3 text-[1rem] leading-[1.75] text-[#6b6966]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>The science of learning and meta-learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Motivation and learning psychology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Structures that increase learning effectiveness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Teacher development grounded in research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Exploration of next-generation learning models</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    We support both students and educators in building deeper learning capacity — not through isolated inspiration, but through structured, research-informed implementation.
                  </p>
                  <p>
                    Our ambition is to help create more effective, motivated, and future-ready learning environments.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                  >
                    <span className="text-[#cbb37c]">→</span>
                    <span>Explore Education Initiatives</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                  >
                    <span className="text-[#cbb37c]">→</span>
                    <span>Explore EDGE for Schools</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Learning as Strategic Leverage - Split layout */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl p-10 md:p-12 bg-gradient-to-br from-[#cbb37c]/8 to-white/80 backdrop-blur-sm border border-[#cbb37c]/20">
                <h2 className="text-[2rem] sm:text-[2.5rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-8">
                  Learning as Strategic Leverage
                </h2>
                <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                  <p className="text-[1.25rem] text-[#1a1918] font-medium">Information is everywhere.</p>
                  <p className="text-[1.25rem] text-[#1a1918] font-medium">Advantage is not.</p>
                  <p className="pt-4 font-medium">Strategic capacity means:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Understanding faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Adapting earlier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Deciding with clarity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Building knowledge that compounds over time</span>
                    </li>
                  </ul>
                  <p className="pt-4 text-[1.125rem] text-[#1a1918]">This is not about more content.</p>
                  <p className="text-[1.125rem] text-[#1a1918] font-medium">It is about building capability.</p>
                </div>
              </div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src="/ChatGPT Image Jan 14, 2026, 04_08_43 PM.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#cbb37c]/30 to-transparent" />
              </div>
            </div>
          </section>

          {/* Built for Long-Term Advantage - Full Width Feature */}
          <section className="relative mb-20 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/ChatGPT Image Jan 14, 2026, 04_08_36 PM.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1918]/90 via-[#1a1918]/85 to-[#1a1918]/70" />
            </div>
            
            {/* Content */}
            <div className="relative max-w-[800px] px-10 md:px-16 py-20 md:py-28">
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] text-white mb-10">
                Built for Long-Term Advantage
              </h2>
              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-white/90 mb-12 max-w-[600px]">
                <p>We do not deliver one-off inspiration.</p>
                <p className="font-medium">We build structures that last.</p>
                <p>
                  Strategic capacity is developed through deliberate systems, measurable progress, and environments that support continuous growth.
                </p>
                <p className="pt-4 text-[1.25rem] text-white">
                  If you are ready to strengthen your strategic position, we are ready to build with you.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-[#cbb37c]/20 hover:backdrop-blur-md border border-white hover:border-[#cbb37c] transition-all duration-300 group hover:scale-105"
              >
                <span className="text-[1.0625rem] font-medium text-[#1a1918]">Book a conversation</span>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 16 16" 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path 
                    d="M6 4l4 4-4 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-[#cbb37c]"
                  />
                </svg>
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-40 pt-10 border-t border-black/5 max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
                Human Learning Lab
              </span>
              <Link href="/" className="text-[0.875rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300">
                Home
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
