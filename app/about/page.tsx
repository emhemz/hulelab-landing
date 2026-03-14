"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
          
          {/* Hero */}
          <header className="mb-24 md:mb-32 reveal">
            <div className="max-w-[820px]">
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-[0.95] tracking-[-0.04em] mb-8">
                About Us
              </h1>
              <div className="space-y-5">
                <p className="text-[1.125rem] leading-[1.8] text-[#6b6966]">
                  People learn fastest when new knowledge builds on what they already understand — when it connects to experience and the distance between where they are and what they need to learn is just right. We build tools that get to know the learner and adapt accordingly.
                </p>
                <p className="text-[1.125rem] leading-[1.8] text-[#6b6966]">
                  Human Learning Lab exists to create better learning experiences at scale, and to position the Nordic region as a place that takes learning seriously.
                </p>
              </div>
            </div>
          </header>

          {/* Team expertise - Grid */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-14 md:mb-16 tracking-tight">
              Our Background
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Neuroscience */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">01</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="16" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Neuroscience
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  We build on a deep understanding of how the brain learns, adapts, and retains knowledge. This shapes how we design systems, not as theory, but as practice.
                </p>
              </div>

              {/* Entrepreneurship */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">02</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M12 3L4 8L12 13L20 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M4 12L12 17L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M4 16L12 21L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Entrepreneurship
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  Serial founders who have built, scaled, and learned from both successes and failures. We know how to move from idea to reality.
                </p>
              </div>

              {/* Design */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">03</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="6" y1="6" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="18" y1="6" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="6" y1="18" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="18" y1="18" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Design
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  Great tools feel obvious in retrospect. Getting there requires obsessive attention to detail and a willingness to start over when something doesn't work.
                </p>
              </div>

              {/* Engineering */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">04</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 16L12 20L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Engineering
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  Deep technical expertise in building systems that work reliably at scale. We actively track advances in AI and machine learning, and apply them when they improve outcomes.
                </p>
              </div>

              {/* Elite Performance */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">05</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M12 4L15 10L21 11L16.5 15.5L18 21L12 18L6 21L7.5 15.5L3 11L9 10L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Elite Performance
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  Experience at the highest levels of competitive sport. We know what it takes to improve through deliberate practice, feedback, and sustained effort over years.
                </p>
              </div>

              {/* Learning */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8] hover:from-[#f5f0e8] hover:to-[#ede7d9] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <span className="absolute top-4 right-6 text-[4rem] font-light text-[#cbb37c]/10 leading-none select-none group-hover:text-[#cbb37c]/18 transition-colors duration-500">06</span>
                <div className="mb-6 relative">
                  <div className="w-11 h-11 rounded-xl bg-[#cbb37c]/12 flex items-center justify-center group-hover:bg-[#cbb37c]/22 transition-colors duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#cbb37c]">
                      <path d="M12 2a10 10 0 0 1 7.07 17.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M12 2a10 10 0 0 0-7.07 17.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-[1.125rem] font-medium tracking-tight text-[#1a1918] mb-3">
                  Learning
                </h3>
                <p className="text-[#6b6966] leading-[1.7] text-[0.9375rem]">
                  Learning defines us. We work systematically to become a faster-learning team because learning speed shapes understanding, and understanding shapes better decisions over time.
                </p>
              </div>
            </div>
          </section>

          {/* Team section */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-14 md:mb-16 tracking-tight">
              The Team
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
              {[
                { name: "Christian Løken", role: "CEO", image: "/team/christian.webp" },
                { name: "Anders Sverdrup-Dahl", role: "CFO", image: "/team/anders.webp" },
                { name: "Rasmus Køstner", role: "Professional Sailor", image: "/team/rasmus.webp" },
                { name: "Benjamin Nærø", role: "Fullstack Developer", image: "/team/benjamin.webp" },
                { name: "Emilie Hemsett", role: "Serial Entrepreneur", image: "/team/emilie.webp" },
                { name: "Denise Martin", role: "Fullstack Developer", image: "/team/denise.webp" },
              ].map((member, i) => (
                <div
                  key={member.name}
                  className="group flex flex-col"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5] bg-[#edeae4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1918]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] sm:text-[0.9375rem] font-medium text-[#1a1918] tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[0.75rem] text-[#cbb37c]/80 mt-1 uppercase font-medium" style={{ letterSpacing: "0.08em" }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advisors section */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-3 tracking-tight">
              Advisors
            </h2>
            <p className="text-[1.0625rem] text-[#6b6966] mb-14 md:mb-16">
              Experts who help us think better.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
              {[
                {
                  name: "Hedda Berntsen",
                  role: "Associate Professor",
                  affiliation: "University of South-Eastern Norway",
                  image: "/team/advisors/hedda.webp",
                },
                {
                  name: "Nima J. Shahinian",
                  role: "Industrial Designer",
                  affiliation: "Norway's first astronaut candidate",
                  image: "/team/advisors/nima.webp",
                },
              ].map((advisor, i) => (
                <div
                  key={advisor.name}
                  className="group flex flex-col"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5] bg-[#edeae4]">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1918]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h3 className="text-[0.875rem] sm:text-[0.9375rem] font-medium text-[#1a1918] tracking-tight leading-snug">
                      {advisor.name}
                    </h3>
                    <p className="text-[0.75rem] text-[#cbb37c]/80 mt-1 uppercase font-medium" style={{ letterSpacing: "0.08em" }}>
                      {advisor.role}
                    </p>
                    <p className="text-[0.6875rem] text-[#6b6966]/60 mt-0.5">
                      {advisor.affiliation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why this matters */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[2rem] sm:text-[2.5rem] mb-12 tracking-tight max-w-[600px]">
              Why This Combination Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                The pace of change is accelerating. What worked well last year may no longer be enough today. As technology evolves, new possibilities emerge for how we learn, adapt, and make decisions.
              </p>
              <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                Learning cannot be static. It must be continuously updated, tested, and rethought. Building effective learning tools requires a deep understanding of how the human mind works and how to design experiences that remain relevant as the world shifts.
              </p>
              <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                It also requires discipline — the ability to move with change without chasing every trend. To build carefully, test rigorously, and accept that real understanding still takes time.
              </p>
              <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                We are not trying to preserve what once worked. We are building the capacity to learn, again and again, as the world continues to change.
              </p>
            </div>
          </section>

          {/* What we're building - Featured section with image */}
          <section className="reveal mb-32 md:mb-40 relative overflow-hidden rounded-2xl border border-[#1a1918]/8 min-h-[420px]" style={{ backgroundColor: '#f5f1eb' }}>
            {/* Background image revealed on right */}
            <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
              <img
                src="/ChatGPT Image Jan 14, 2026, 04_01_34 PM.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1eb] via-[#f5f1eb]/85 to-[#f5f1eb]/10 md:via-[#f5f1eb]/60 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f1eb]/40 to-transparent md:hidden" />
            </div>

            <div className="relative p-10 md:p-16">
              <div className="max-w-[520px]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#cbb37c]/10 border border-[#cbb37c]/20 mb-6">
                  <span className="text-[0.6875rem] tracking-[0.12em] uppercase text-[#cbb37c] font-medium">
                    Our Mission
                  </span>
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8 tracking-tight leading-[1.1]">
                  What We're Building
                </h2>
                <div className="space-y-5">
                  <p className="text-[1.125rem] leading-[1.8] text-[#6b6966]">
                    Tools that help people learn better. Starting with podcasts, expanding to other forms of long-form content, and eventually to any situation where sustained learning matters.
                  </p>
                  <p className="text-[1.125rem] leading-[1.8] text-[#6b6966]">
                    Our first product is Luna — a podcast player designed around how learning actually works. It's the beginning of a longer journey.
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

        </div>
      </main>
      <Footer />
    </>
  );
}
