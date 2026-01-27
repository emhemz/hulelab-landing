"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Button from "../components/Button";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

// Reveal sections on scroll
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

export default function AboutPage() {
  const containerRef = useReveal();

  return (
    <>
      {/* Subtle grain */}
      <div className="grain" />

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        <div ref={containerRef} className="max-w-[1400px] mx-auto px-10 sm:px-16 pt-32 md:pt-44 pb-32">
          
          {/* Hero with image */}
          <header className="mb-24 md:mb-32 reveal">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-[0.95] tracking-[-0.04em] mb-8 dark:text-fg">
                  About Us
                </h1>
                <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] dark:text-fg/70 mb-6">
                  Learning is often treated as a problem of content delivery. We think that's backwards. The challenge isn't access to information—it's turning information into understanding, and understanding into capability.
                </p>
                <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] dark:text-fg/70">
                  That requires a different approach. One that draws on neuroscience, design, engineering, and the lived experience of high performance.
                </p>
              </div>
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={`${BASE_PATH}/ChatGPT Image Jan 14, 2026, 04_08_41 PM.png`} 
                  alt="Abstract architectural space" 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-70 dark:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/60 dark:to-black/20" />
              </div>
            </div>
          </header>

          {/* Team expertise - Grid */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-14 md:mb-16 tracking-tight dark:text-fg">
              Our Background
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Neuroscience */}
              <div className="group p-8 rounded-2xl border border-[#cbb37c]/30 dark:border-[#cbb37c]/25 bg-white/50 dark:bg-gradient-to-br dark:from-[#cbb37c]/10 dark:to-transparent backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] dark:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#cbb37c]/30 flex items-center justify-center group-hover:border-[#cbb37c] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="16" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] dark:text-fg mb-4">
                  Neuroscience
                </h3>
                <p className="text-[#6b6966] dark:text-fg/70 leading-[1.7] text-[0.9375rem]">
                  We understand how the brain encodes, consolidates, and retrieves information. This isn't theoretical—it shapes every decision we make about how our tools work.
                </p>
              </div>

              {/* Entrepreneurship */}
              <div className="group p-8 rounded-2xl border border-[#cbb37c]/30 dark:border-[#cbb37c]/25 bg-white/50 dark:bg-gradient-to-br dark:from-[#cbb37c]/10 dark:to-transparent backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] dark:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#cbb37c]/30 flex items-center justify-center group-hover:border-[#cbb37c] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M12 3L4 8L12 13L20 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M4 12L12 17L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M4 16L12 21L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] dark:text-fg mb-4">
                  Entrepreneurship
                </h3>
                <p className="text-[#6b6966] dark:text-fg/70 leading-[1.7] text-[0.9375rem]">
                  Serial founders who have built, scaled, and learned from both successes and failures. We know how to move from idea to reality.
                </p>
              </div>

              {/* Design */}
              <div className="group p-8 rounded-2xl border border-[#cbb37c]/30 dark:border-[#cbb37c]/25 bg-white/50 dark:bg-gradient-to-br dark:from-[#cbb37c]/10 dark:to-transparent backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] dark:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#cbb37c]/30 flex items-center justify-center group-hover:border-[#cbb37c] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="6" y1="6" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="18" y1="6" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="6" y1="18" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="18" y1="18" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] dark:text-fg mb-4">
                  Design
                </h3>
                <p className="text-[#6b6966] dark:text-fg/70 leading-[1.7] text-[0.9375rem]">
                  Great tools feel obvious in retrospect. Getting there requires obsessive attention to detail and a willingness to start over when something doesn't work.
                </p>
              </div>

              {/* Engineering */}
              <div className="group p-8 rounded-2xl border border-[#cbb37c]/30 dark:border-[#cbb37c]/25 bg-white/50 dark:bg-gradient-to-br dark:from-[#cbb37c]/10 dark:to-transparent backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] dark:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#cbb37c]/30 flex items-center justify-center group-hover:border-[#cbb37c] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 16L12 20L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] dark:text-fg mb-4">
                  Engineering
                </h3>
                <p className="text-[#6b6966] dark:text-fg/70 leading-[1.7] text-[0.9375rem]">
                  Deep technical expertise in building systems that work reliably at scale. We care about performance, not just features.
                </p>
              </div>

              {/* Elite Performance */}
              <div className="group p-8 rounded-2xl border border-[#cbb37c]/30 dark:border-[#cbb37c]/25 bg-white/50 dark:bg-gradient-to-br dark:from-[#cbb37c]/10 dark:to-transparent backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] dark:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full border-2 border-[#cbb37c]/30 flex items-center justify-center group-hover:border-[#cbb37c] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M12 4L15 10L21 11L16.5 15.5L18 21L12 18L6 21L7.5 15.5L3 11L9 10L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] dark:text-fg mb-4">
                  Elite Performance
                </h3>
                <p className="text-[#6b6966] dark:text-fg/70 leading-[1.7] text-[0.9375rem]">
                  Experience at the highest levels of competitive sport. We know what it takes to improve through deliberate practice, feedback, and sustained effort over years.
                </p>
              </div>
            </div>
          </section>

          {/* Why this matters - Two column */}
          <section className="reveal mb-24 md:mb-32">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-[2rem] sm:text-[2.5rem] mb-8 tracking-tight dark:text-fg">
                  Why This Combination Matters
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] dark:text-fg/70">
                  Building effective learning tools requires understanding how the mind works, what motivates behavior change, and how to craft experiences that feel natural rather than forced.
                </p>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] dark:text-fg/70">
                  It also requires the discipline to build slowly, test rigorously, and accept that real insight takes time. We're not looking for quick wins. We're building for the long term.
                </p>
              </div>
            </div>
          </section>

          {/* What we're building - Featured section with image */}
          <section className="reveal mb-32 md:mb-40 relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/5">
            {/* Background image */}
            <div className="absolute inset-0">
              <img 
                src={`${BASE_PATH}/ChatGPT Image Jan 14, 2026, 04_08_36 PM.png`} 
                alt="Abstract space" 
                className="w-full h-full object-cover opacity-10 dark:opacity-5"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/80 dark:from-[#0f0f0f] dark:via-[#0f0f0f]/95 dark:to-[#0f0f0f]/80" />
            </div>
            
            <div className="relative p-10 md:p-16">
              <div className="max-w-[700px]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#cbb37c]/10 border border-[#cbb37c]/20 mb-6">
                  <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-[#cbb37c] font-medium">
                    Our Mission
                  </span>
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8 tracking-tight leading-[1.1] dark:text-fg">
                  What We're Building
                </h2>
                <div className="space-y-6">
                  <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] dark:text-fg/70">
                    Tools that help people learn better. Starting with podcasts, expanding to other forms of long-form content, and eventually to any situation where sustained learning matters.
                  </p>
                  <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] dark:text-fg/70">
                    Our first product is Luna—a podcast player designed around how learning actually works. It's the beginning of a longer journey.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/projects">
                    See our projects
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="reveal pt-10 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
            <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40 dark:text-fg/40">
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
