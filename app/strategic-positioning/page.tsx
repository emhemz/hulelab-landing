"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function StrategicPositioningPage() {
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
            className="inline-flex items-center gap-2 text-[0.875rem] mb-16 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md text-[#1a1918] hover:bg-[#cbb37c]/20 transition-all duration-300 font-medium border border-[#1a1918]/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>

          {/* Coming Soon Content */}
          <div className="max-w-[700px] mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">
                  Strategic Positioning
                </span>
              </div>
              
              <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-serif tracking-tight leading-[1.05] text-[#1a1918]">
                Coming Soon
              </h1>
              
              <p className="text-[1.125rem] leading-[1.8] text-[#6b6966] max-w-[500px] mx-auto">
                We're working on something interesting here. More details will be shared soon.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-[0.9375rem] text-[#cbb37c] font-medium">
                Thanks for your interest — we appreciate it.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-40 pt-10 border-t border-black/5 max-w-[1400px] mx-auto">
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
