import Link from "next/link";
import Header from "../components/Header";

export default function ProjectsPage() {
  return (
    <>
      <div className="grain" />
      <Header />
      <main className="relative z-10 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-10 sm:px-16 pt-32 md:pt-44 pb-32">
          <header className="mb-16 md:mb-20">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] leading-[1] tracking-[-0.04em] mb-4">
              Projects
            </h1>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966] max-w-[600px]">
              Tools we're building to help people learn better.
            </p>
          </header>

          {/* Luna Project */}
          <section className="mb-24 md:mb-32">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#cbb37c]/10 border border-[#cbb37c]/20">
                  <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-[#cbb37c] font-medium">
                    Active Project
                  </span>
                </div>
                <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
                  Luna
                </h2>
                <p className="text-[#6b6966] leading-[1.8] text-[1.0625rem]">
                  The podcast player built for active learning. Highlight moments, read AI transcripts, share discoveries, and let Luna AI guide your learning journey. Built on neurobiology to turn passive listening into lasting knowledge.
                </p>
                <div className="space-y-4">
                  <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#1a1918] mt-8 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-3 text-[#6b6966] leading-[1.7]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">→</span>
                      <span>Highlight key moments with automatic timestamps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">→</span>
                      <span>AI transcriptions for 1M+ podcasts — read while you listen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">→</span>
                      <span>Luna AI Assistant — your personal learning guide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">→</span>
                      <span>40% better retention with dual-coding learning</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <a 
                    href="https://luna-landing-opal.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#cbb37c]/10 hover:bg-[#cbb37c]/20 border border-[#cbb37c]/20 hover:border-[#cbb37c]/40 transition-all duration-300 group"
                  >
                    <span className="text-[0.9375rem] font-medium text-[#1a1918]">Learn more about Luna</span>
                    <svg 
                      width="16" 
                      height="16" 
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
                  </a>
                </div>
              </div>
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <img 
                  src="/LUNA logo (5).png" 
                  alt="Luna logo" 
                  className="w-56 h-56 object-contain"
                />
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-24 md:mb-32 relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#cbb37c]/5 to-transparent backdrop-blur-sm border border-[#cbb37c]/10 shadow-xl">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-6">
              Our Approach
            </h2>
            <div className="space-y-6 text-[#6b6966] leading-[1.8] text-[1.0625rem] max-w-[700px]">
              <p>
                We build deliberately. Each project starts with observation and research. We test with real users, iterate based on feedback, and only launch when we're confident the tool genuinely helps people learn.
              </p>
              <p>
                We're not interested in quick features or flashy demos. We're building tools designed to work over months and years of real use.
              </p>
            </div>
          </section>

          <footer className="pt-10 border-t border-black/5 flex justify-between items-center">
            <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
              Human Learning Lab
            </span>
            <Link href="/" className="text-[0.875rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300">
              Home
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
