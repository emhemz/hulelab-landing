"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function ProductTechnologyPage() {
  return (
    <main className="relative min-h-screen bg-[#f5f3f0]">
      
      {/* Grain texture */}
      <div className="grain" />
      
      <Header />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div id="product-content" className="max-w-[800px] mx-auto px-10 sm:px-12">
          {/* Back button */}
          <Link
            href="/#what-we-work-on"
            className="inline-flex items-center gap-2 text-[0.875rem] mb-12 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#1a1918] hover:bg-[#cbb37c]/20 transition-all duration-300 font-medium shadow-lg"
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
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-[1.1] mb-12">
            Product & Technology
          </h1>

          {/* Content */}
          <div className="space-y-8 text-center max-w-[600px] mx-auto pt-12">
            <div className="space-y-4">
              <h2 className="text-[2rem] sm:text-[2.5rem] font-serif tracking-tight leading-[1.1] text-[#1a1918]">
                Coming Soon
              </h2>
              <p className="text-[1.125rem] leading-[1.8] text-[#6b6966]">
                We're working on something interesting here. More details will be shared soon.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-[0.9375rem] text-[#cbb37c] font-medium">
                Thanks for your interest — we appreciate it.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-32 pt-10 border-t border-black/5">
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
      </div>
    </main>
  );
}
