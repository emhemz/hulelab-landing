"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";

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
          
          {/* Page title */}
          <header className="mb-20 md:mb-28 reveal">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] leading-[1] tracking-[-0.04em] mb-6">
              About Us
            </h1>
            <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966] max-w-[560px]">
              We're a multidisciplinary team building tools for how people actually learn.
            </p>
          </header>

          {/* Main story */}
          <section className="reveal mb-24 md:mb-32">
            <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-6">
              Learning is often treated as a problem of content delivery. We think that's backwards. 
              The challenge isn't access to information—it's turning information into understanding, 
              and understanding into capability.
            </p>
            <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-6">
              That requires a different approach. One that draws on neuroscience, design, engineering, 
              and the lived experience of high performance.
            </p>
          </section>

          {/* Team expertise */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-12 md:mb-14">
              Our Background
            </h2>
            
            <div className="space-y-10">
              {/* Neuroscience */}
              <div className="group">
                <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#cbb37c] mb-3">
                  Neuroscience
                </h3>
                <p className="text-[#6b6966] leading-[1.8]">
                  We understand how the brain encodes, consolidates, and retrieves information. 
                  This isn't theoretical—it shapes every decision we make about how our tools work.
                </p>
              </div>

              {/* Entrepreneurship */}
              <div className="group">
                <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#cbb37c] mb-3">
                  Entrepreneurship
                </h3>
                <p className="text-[#6b6966] leading-[1.8]">
                  Serial founders who have built, scaled, and learned from both successes and failures. 
                  We know how to move from idea to reality.
                </p>
              </div>

              {/* Design */}
              <div className="group">
                <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#cbb37c] mb-3">
                  Design
                </h3>
                <p className="text-[#6b6966] leading-[1.8]">
                  Great tools feel obvious in retrospect. Getting there requires obsessive attention 
                  to detail and a willingness to start over when something doesn't work.
                </p>
              </div>

              {/* Engineering */}
              <div className="group">
                <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#cbb37c] mb-3">
                  Engineering
                </h3>
                <p className="text-[#6b6966] leading-[1.8]">
                  Deep technical expertise in building systems that work reliably at scale. 
                  We care about performance, not just features.
                </p>
              </div>

              {/* Elite Performance */}
              <div className="group">
                <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#cbb37c] mb-3">
                  Elite Performance
                </h3>
                <p className="text-[#6b6966] leading-[1.8]">
                  Experience at the highest levels of competitive sport. We know what it takes to 
                  improve through deliberate practice, feedback, and sustained effort over years.
                </p>
              </div>
            </div>
          </section>

          {/* Why this matters */}
          <section className="reveal mb-24 md:mb-32">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-6">
              Why This Combination Matters
            </h2>
            <p className="text-[#6b6966] leading-[1.8] mb-6 max-w-[560px]">
              Building effective learning tools requires understanding how the mind works, 
              what motivates behavior change, and how to craft experiences that feel natural 
              rather than forced.
            </p>
            <p className="text-[#6b6966] leading-[1.8] max-w-[560px]">
              It also requires the discipline to build slowly, test rigorously, and accept 
              that real insight takes time. We're not looking for quick wins. We're building 
              for the long term.
            </p>
          </section>

          {/* Divider */}
          <div className="reveal mb-24 md:mb-32 flex justify-start">
            <div className="relative w-32">
              <div className="h-px bg-gradient-to-r from-[#1a1918]/20 to-transparent" />
              <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[#cbb37c]/40 to-transparent blur-sm" />
            </div>
          </div>

          {/* What we're building */}
          <section className="reveal mb-32 md:mb-40">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-6">
              What We're Building
            </h2>
            <p className="text-[#6b6966] leading-[1.8] mb-6 max-w-[560px]">
              Tools that help people learn better. Starting with podcasts, expanding to other 
              forms of long-form content, and eventually to any situation where sustained learning 
              matters.
            </p>
            <p className="text-[#6b6966] leading-[1.8] max-w-[560px]">
              Our first product is Luna—a podcast player designed around how learning actually works. 
              It's the beginning of a longer journey.
            </p>
          </section>

          {/* Footer */}
          <footer className="reveal pt-10 border-t border-black/5">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
                Human Learning Lab
              </span>
              <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
                Oslo
              </span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
