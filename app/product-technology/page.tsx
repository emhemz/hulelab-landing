"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function ProductTechnologyPage() {
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
                Technology & Infrastructure
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-serif tracking-tight leading-[1.05] text-[#1a1918] mb-6">
              Technology & Infrastructure
            </h1>
            <h2 className="text-[1.375rem] sm:text-[1.625rem] font-medium tracking-tight text-[#1a1918] mb-6 max-w-[700px]">
              Systems built for the intelligent age.
            </h2>
            <div className="space-y-4 text-[1.0625rem] leading-[1.8] text-[#6b6966] max-w-[750px]">
              <p>
                We develop proprietary learning technology and institutional AI infrastructure designed to expand human capability and strengthen organizational intelligence.
              </p>
              <p>
                Our ecosystem combines tools for individual learning, structured implementation frameworks, AI-driven assistance, and secure local infrastructure.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-start">
            <div className="relative w-32 h-px bg-gradient-to-r from-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Luna Section */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/luna.png" 
                  alt="Luna app" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-white/80 to-white/50"
                />
              </div>
              <div>
                <h2 className="text-[2.5rem] sm:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-4">
                  Luna
                </h2>
                <h3 className="text-[1.25rem] font-medium text-[#1a1918] mb-6">
                  Structured listening. Deeper understanding.
                </h3>
                <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    Luna transforms passive listening into structured learning.
                  </p>
                  <p>
                    It helps individuals reflect, connect ideas, and integrate knowledge more effectively — turning insight into retained understanding.
                  </p>
                </div>
                <Link 
                  href="https://luna-landing-opal.vercel.app/" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                >
                  <span className="text-[#cbb37c]">→</span>
                  <span>Explore Luna</span>
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

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-center">
            <div className="relative w-32 h-px bg-gradient-to-r from-transparent via-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Edge Section */}
          <section className="mb-32 md:mb-40">
            <div className="relative overflow-hidden rounded-3xl border border-[#1a1918]/10 bg-white/60 backdrop-blur-sm p-10 md:p-16">
              <div className="max-w-[800px]">
                <h2 className="text-[2.5rem] sm:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-4">
                  Edge
                </h2>
                <h3 className="text-[1.25rem] font-medium text-[#1a1918] mb-6">
                  Learning implemented at scale.
                </h3>
                <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    EDGE is our structured implementation platform for individuals, teams, and institutions.
                  </p>
                  <p>
                    Through lectures, workshops, and long-term programs, we help organizations and schools build learning culture, activate meta-learning, and strengthen strategic direction.
                  </p>
                  <p className="font-medium text-[#1a1918]">
                    EDGE bridges inspiration and infrastructure.
                  </p>
                </div>
                <a 
                  href="https://www.learnedge.co/" 
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-end">
            <div className="relative w-32 h-px bg-gradient-to-l from-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Aura Section */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-[2.5rem] sm:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-4">
                  Aura
                </h2>
                <h3 className="text-[1.25rem] font-medium text-[#1a1918] mb-6">
                  An adaptive AI learning assistant.
                </h3>
                <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    Aura is our AI-powered learning companion.
                  </p>
                  <p>
                    It supports individuals across learning contexts — helping structure knowledge, personalize development pathways, strengthen retention, and accelerate understanding.
                  </p>
                  <p className="font-medium text-[#1a1918]">
                    Aura is embedded across our systems and evolves with the learner.
                  </p>
                </div>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-[#1a1918] hover:text-[#cbb37c] transition-colors duration-300 font-medium group"
                >
                  <span className="text-[#cbb37c]">→</span>
                  <span>Learn about Aura</span>
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
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
                <img 
                  src="/ChatGPT Image Feb 3, 2026, 01_18_13 PM.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-[#cbb37c]/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-center">
            <div className="relative w-32 h-px bg-gradient-to-r from-transparent via-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Root Section - Featured */}
          <section className="relative mb-20 overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/ChatGPT Image Jan 14, 2026, 04_01_34 PM.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1918]/92 via-[#1a1918]/88 to-[#1a1918]/75" />
            </div>
            
            {/* Content */}
            <div className="relative max-w-[900px] px-10 md:px-16 py-20 md:py-28">
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] text-white mb-6">
                Root
              </h2>
              <h3 className="text-[1.5rem] font-medium text-white/90 mb-10">
                Institutional Intelligence Infrastructure
              </h3>
              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-white/85 max-w-[700px] mb-12">
                <p>
                  Root enables organizations to build their own evolving intelligence system.
                </p>
                <p>
                  Instead of knowledge being scattered across emails, documents, and individuals, Root structures experience into shared, secure, and continuously improving intelligence.
                </p>
              </div>
              
              {/* Two column feature list */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-[750px]">
                <div>
                  <p className="text-[1rem] text-white/90 mb-4 font-medium">With Root, organizations can:</p>
                  <ul className="space-y-3 text-[1rem] leading-[1.75] text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Run secure, locally controlled AI systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Train domain-specific language models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Retain full data ownership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Continuously update institutional knowledge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Deploy intelligent agents across workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Create shared memory accessible to everyone</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-[1rem] text-white/90 mb-4 font-medium">When knowledge is structured:</p>
                  <ul className="space-y-3 text-[1rem] leading-[1.75] text-white/80">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Understand what your people know</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Identify capability gaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Measure learning progress</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] mt-1">–</span>
                      <span>Align development with strategic direction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-white/85 max-w-[700px] mb-10">
                <p className="font-medium">But Root is more than infrastructure.</p>
                <p>It enables a shift:</p>
                <p className="text-[1.25rem] font-medium text-white pl-6 border-l-2 border-[#cbb37c]">
                  From information storage<br/>to organizational learning.
                </p>
                <p className="pt-4">
                  Root makes institutional intelligence visible, measurable, and continuously evolving.
                </p>
              </div>
              
              <Link 
                href="#" 
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-[#cbb37c]/20 hover:backdrop-blur-md border border-white hover:border-[#cbb37c] transition-all duration-300 group hover:scale-105"
              >
                <span className="text-[1.0625rem] font-medium text-[#1a1918]">Explore Root</span>
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
          <footer className="pt-10 border-t border-black/5">
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
