"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function LarpaPage() {
  return (
    <main className="relative min-h-screen bg-[#f5f3f0] dark:bg-[#0f0f0f]">
      {/* Grain texture */}
      <div className="grain" />
      
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-[800px] mx-auto px-10 sm:px-12">
          {/* Back button */}
          <Link
            href="/#what-we-work-on"
            className="inline-flex items-center gap-2 text-[0.875rem] mb-12 px-5 py-2.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md text-[#1a1918] dark:text-white hover:bg-[#cbb37c]/20 dark:hover:bg-[#cbb37c]/20 transition-all duration-300 font-medium shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>

          {/* Badge */}
          <div className="mb-8">
            <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">
              Focus Area
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] mb-12 text-[#1a1918] dark:text-white">
            LARPA
          </h1>

          {/* Content */}
          <div className="space-y-6 text-[1.0625rem] leading-[1.8]">
            <p className="text-[#6b6966] dark:text-white/80">
              A place to bring a learning idea. Team, capital, and responsibility to build it all the way through.
            </p>
            
            <p className="text-[#6b6966] dark:text-white/70">
              [Add your content here - this is a placeholder page]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
