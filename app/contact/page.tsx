import Link from "next/link";
import Header from "../components/Header";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

export default function ContactPage() {
  return (
    <>
      <div className="grain" />
      <Header />
      <main className="relative z-10 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-10 sm:px-16 pt-32 md:pt-44 pb-32">
          <header className="mb-16 md:mb-20">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] leading-[1] tracking-[-0.04em] mb-4">
              Get in Touch
            </h1>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966] max-w-[600px]">
              We're always interested in conversations about learning, tools, and the future of education.
            </p>
          </header>

          <section className="mb-24 md:mb-32">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#6b6966] mb-4">
                    Email
                  </h2>
                  <a 
                    href="mailto:hello@humanlearninglab.com"
                    className="group inline-flex items-center gap-3 text-[1.5rem] sm:text-[1.75rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300"
                  >
                    <span>hello@humanlearninglab.com</span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 16 16" 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
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

                <div>
                  <h2 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#6b6966] mb-4">
                    Location
                  </h2>
                  <p className="text-[1.125rem] text-[#1a1918]">
                    Oslo, Norway
                  </p>
                </div>
              </div>

              {/* What to reach out about */}
              <div className="space-y-8">
                <h2 className="text-[1.25rem] sm:text-[1.5rem] font-medium text-[#1a1918]">
                  What to reach out about
                </h2>
                <ul className="space-y-4 text-[#6b6966] leading-[1.7] text-[1.0625rem]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">→</span>
                    <span>Feedback on Luna or our other projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">→</span>
                    <span>Research collaborations on learning and cognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">→</span>
                    <span>Partnership opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">→</span>
                    <span>Questions about our approach or methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">→</span>
                    <span>General inquiries about Human Learning Lab</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Response time */}
          <section className="mb-24 md:mb-32 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#cbb37c]/5 to-transparent border border-[#cbb37c]/10">
            <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#6b6966] mb-3">
              Response Time
            </h3>
            <p className="text-[#6b6966] leading-[1.8] max-w-[600px]">
              We typically respond within 2-3 business days. We read every message personally, but we're a small team, so please be patient.
            </p>
          </section>

          {/* Image section */}
          <section className="mb-24 md:mb-32">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${BASE_PATH}/ChatGPT Image Jan 14, 2026, 04_08_43 PM.png`} 
                alt="Abstract architectural space" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-[1.125rem] leading-[1.7] max-w-[500px]">
                  We're building tools for how people actually learn. If that resonates with you, we'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          <footer className="pt-10 border-t border-black/5 flex justify-between items-center">
            <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
              Human Learning Lab
            </span>
            <Link href="/" className="link-hover text-[0.875rem]">
              Home
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
