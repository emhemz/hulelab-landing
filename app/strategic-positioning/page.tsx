"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function StrategicPositioningPage() {
  return (
    <main className="relative min-h-screen bg-[#f5f3f0] dark:bg-[#0f0f0f]">
      {/* Grain texture */}
      <div className="grain" />
      
      <Header />

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/ChatGPT Image Jan 14, 2026, 04_08_30 PM.png"
          alt="Strategic Positioning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f0] dark:from-[#0f0f0f] via-transparent to-transparent" />
        
        {/* Back button */}
        <Link
          href="/#what-we-work-on"
          className="absolute top-8 left-8 sm:left-12 inline-flex items-center gap-2 text-[0.875rem] px-5 py-2.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md text-[#1a1918] dark:text-white hover:bg-[#cbb37c]/20 dark:hover:bg-[#cbb37c]/20 transition-all duration-300 font-medium shadow-lg z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Content */}
      <article className="relative bg-[#f5f3f0] dark:bg-[#0f0f0f] text-[#1a1918] dark:text-fg">
        <div className="max-w-[800px] mx-auto px-10 sm:px-12 py-16 md:py-20">
          {/* Badge */}
          <div className="mb-8">
            <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">
              Focus Area
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] mb-12">
            Strategic Positioning
          </h1>

          {/* Content */}
          <div className="space-y-6 text-[1.0625rem] leading-[1.8]">
            <p className="text-[#6b6966] dark:text-white/80">
              Learning as a strategic capability. An expanded opportunity space.
            </p>
            
            <p className="text-[#6b6966] dark:text-white/70">
              [Add your content here - this is a placeholder page]
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
