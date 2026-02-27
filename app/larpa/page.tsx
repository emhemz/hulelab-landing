"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function LarpaPage() {
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
                LARPA
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-serif tracking-tight leading-[1.05] text-[#1a1918] mb-6">
              LARPA
            </h1>
            <h2 className="text-[1.375rem] sm:text-[1.625rem] font-medium tracking-tight text-[#1a1918] mb-6">
              Learning Advanced Research Project Agency
            </h2>
            <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] mb-6 max-w-[750px]">
              An open engine for breakthrough learning innovation.
            </p>
            <div className="space-y-4 text-[1.0625rem] leading-[1.8] text-[#6b6966] max-w-[750px]">
              <p>
                LARPA exists to identify, fund, and build ambitious learning technologies and research initiatives that can redefine how individuals and institutions develop capability.
              </p>
              <p className="font-medium text-[#1a1918]">
                We believe the future of learning requires bold experimentation — not incremental improvement.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-32 md:mb-40 h-[400px] md:h-[500px] overflow-hidden rounded-3xl">
            <img 
              src="/larpa/Hero-bilde-larpa.png" 
              alt="" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1918]/40 via-transparent to-[#cbb37c]/30" />
          </div>

          {/* The Mission */}
          <section className="mb-32 md:mb-40">
            <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-br from-[#cbb37c]/8 to-white/80 backdrop-blur-sm border border-[#cbb37c]/20">
              <div className="max-w-[1000px]">
                <h2 className="text-[2rem] sm:text-[2.5rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-4">
                  The Mission
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-10">
                  LARPA focuses on advancing:
                </p>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2C8 2 11 3.5 11 7c0 2-1 3.5-3 4.5M8 2C8 2 5 3.5 5 7c0 2 1 3.5 3 4.5M8 2v9.5m0 0v2.5" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Human learning capacity</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M5 8h6M8 5v6" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Organizational intelligence</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M8 5v3l2 2" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">AI-driven learning systems</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 4h10M4 7h8M5 10h6M6 13h4" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Institutional learning infrastructure</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 11l3-3 3 3 6-6M14 5v3m0-3h-3" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">New models for measuring capability</span>
                  </div>
                </div>
                <p className="text-[1.0625rem] leading-[1.8] text-[#1a1918] font-medium">
                  We work at the intersection of neuroscience, artificial intelligence, and institutional design.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-start">
            <div className="relative w-32 h-px bg-gradient-to-r from-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Bring Us Your Idea */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/larpa/Bring Us Your Idea-larpa.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1918]/50 to-transparent" />
              </div>
              
              <div>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-8">
                  Bring Us Your Idea
                </h2>
                <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-10">
                  <p>
                    If you have an ambitious learning idea — technological, institutional, or scientific — we want to hear from you.
                  </p>
                  <p>
                    Before pitching, you should be able to answer six key questions.
                  </p>
                  <p className="font-medium text-[#1a1918]">
                    If you can confidently answer "yes" to all six, you may be invited to meet with a LARPA project lead.
                  </p>
                </div>

                {/* The Six Questions */}
                <div className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-[#cbb37c]/8 to-white/80 border border-[#cbb37c]/20">
                  <h3 className="text-[1.25rem] font-medium text-[#1a1918] mb-6">
                    The Six Questions
                  </h3>
                  <ol className="space-y-4 text-[1rem] leading-[1.75] text-[#6b6966]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">1.</span>
                      <span>Does your idea address a fundamental learning challenge?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">2.</span>
                      <span>Does it move beyond incremental improvement?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">3.</span>
                      <span>Can it create measurable improvement in learning capacity or intelligence?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">4.</span>
                      <span>Is the approach technically and scientifically plausible?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">5.</span>
                      <span>Can it scale beyond a single organization or context?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#cbb37c] font-medium flex-shrink-0">6.</span>
                      <span>Are you willing to build it with us — rigorously and transparently?</span>
                    </li>
                  </ol>
                  <p className="text-[1.0625rem] leading-[1.8] text-[#1a1918] font-medium mt-6">
                    If the answer is yes across the board, we want to talk.
                  </p>
                </div>

                <a 
                  href="mailto:christian@hulelab.no" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#cbb37c] hover:bg-[#cbb37c]/90 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <span className="text-[1.0625rem]">Submit Your Idea</span>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 16 16" 
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-center">
            <div className="relative w-32 h-px bg-gradient-to-r from-transparent via-[#cbb37c]/40 to-transparent" />
          </div>

          {/* What We Offer */}
          <section className="mb-32 md:mb-40">
            <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-br from-white/80 to-[#cbb37c]/8 backdrop-blur-sm border border-[#cbb37c]/20">
              <div className="max-w-[1000px]">
                <h2 className="text-[2rem] sm:text-[2.5rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-4">
                  What We Offer
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-10">
                  Selected initiatives may receive:
                </p>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M8 5v3M8 11h.01" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Financial backing</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3h4M5 6h6M4 9h8M3 12h10" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Technical support</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M2 6h12M6 2v12" stroke="#cbb37c" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Access to infrastructure</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="4" cy="8" r="2" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <circle cx="12" cy="8" r="2" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M6 8h4" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Research collaboration</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="#cbb37c" strokeWidth="1.5" fill="none"/>
                        <path d="M8 8L12 4M8 8l-4 4M8 8l4 4M8 8L4 4" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Integration into our technology ecosystem</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L3 6v6l5 3 5-3V6l-5-4z" stroke="#cbb37c" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                        <path d="M8 8v5M3 6l5 2 5-2" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[1rem] leading-[1.7] text-[#6b6966] pt-0.5">Strategic guidance and execution support</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">We do not fund ideas passively.</p>
                  <p className="text-[1.125rem] font-medium text-[#1a1918] pt-2">We build them.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-end">
            <div className="relative w-32 h-px bg-gradient-to-l from-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Challenges & Prize Programs */}
          <section className="mb-32 md:mb-40">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-6">
                  Challenges & Prize Programs
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  LARPA will also launch open learning challenges — focused on solving specific learning problems.
                </p>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-6">
                  These may include:
                </p>
                <ul className="space-y-3 text-[1rem] leading-[1.75] text-[#6b6966] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Prize funds for breakthrough solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Cross-disciplinary research collaborations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Open calls for technological innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Institutional pilot programs</span>
                  </li>
                </ul>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                  Our ambition is to create a platform where the hardest learning problems are tackled publicly and rigorously.
                </p>
              </div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src="/larpa/Challenges & Prize Programs-larpa.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#cbb37c]/30 to-transparent" />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mb-32 md:mb-40 flex justify-center">
            <div className="relative w-32 h-px bg-gradient-to-r from-transparent via-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Research & Institutional Development */}
          <section className="mb-32 md:mb-40 relative overflow-hidden rounded-3xl border border-[#1a1918]/10">
            <div className="absolute inset-0 opacity-[0.05]">
              <img 
                src="/larpa/Research & Institutional Development-larpa.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative p-10 md:p-16 bg-white/85 backdrop-blur-md">
              <div className="max-w-[850px]">
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-[1.1] text-[#1a1918] mb-8">
                  Research & Institutional Development
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  Beyond product innovation, LARPA contributes to the development of a formal learning institute.
                </p>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-6">
                  We are actively seeking collaboration with:
                </p>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 text-[1rem] leading-[1.75] text-[#6b6966] mb-10">
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Universities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Research groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>AI laboratories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Educational institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#cbb37c] mt-1">–</span>
                    <span>Forward-thinking companies</span>
                  </li>
                </ul>
                <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  <p>
                    Our goal is to deepen the understanding of learning — across both human and artificial systems.
                  </p>
                  <p className="font-medium text-[#1a1918]">
                    We are particularly interested in advancing the intersection of:
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-lg bg-[#cbb37c]/15 text-[0.9375rem] font-medium text-[#1a1918] border border-[#cbb37c]/30">
                    Human cognition
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-[#cbb37c]/15 text-[0.9375rem] font-medium text-[#1a1918] border border-[#cbb37c]/30">
                    Artificial intelligence
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-[#cbb37c]/15 text-[0.9375rem] font-medium text-[#1a1918] border border-[#cbb37c]/30">
                    Institutional intelligence
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Why LARPA Exists - CTA */}
          <section className="relative mb-20 overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img 
                src="/larpa/Why LARPA Exists-larpa.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1918]/93 via-[#1a1918]/88 to-[#1a1918]/80" />
            </div>
            
            <div className="relative max-w-[800px] px-10 md:px-16 py-20 md:py-28">
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] text-white mb-10">
                Why LARPA Exists
              </h2>
              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-white/85 max-w-[650px] mb-12">
                <p className="text-[1.25rem] text-white">Progress in learning has been too slow.</p>
                <p>
                  We believe bold, structured experimentation is necessary to unlock the next wave of human and institutional capability.
                </p>
                <p className="text-[1.25rem] font-medium text-white pt-4">
                  LARPA is our commitment to that future.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="mailto:christian@hulelab.no" 
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white hover:bg-[#cbb37c]/20 hover:backdrop-blur-md border border-white hover:border-[#cbb37c] transition-all duration-300 group hover:scale-105"
                >
                  <span className="text-[1.0625rem] font-medium text-[#1a1918]">Partner With LARPA</span>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 16 16" 
                    className="transition-transform duration-300 group-hover:translate-x-1 text-[#cbb37c]"
                  >
                    <path 
                      d="M6 4l4 4-4 4" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
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
