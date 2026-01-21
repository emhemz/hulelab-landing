"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 pt-4 transition-all duration-300">
      <nav 
        className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-400 ease-out"
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.82) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.38) 100%)',
          backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'blur(16px) saturate(160%)',
          border: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.5)',
          boxShadow: scrolled 
            ? '0 4px 24px -4px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)'
            : '0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={`${BASE_PATH}/logo.svg`}
            alt="HLL" 
            width={22} 
            height={22}
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="text-[0.9375rem] font-medium tracking-tight text-[#1a1918] hidden sm:block">Human Learning Lab</span>
        </Link>
        
        {/* Nav links */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-[0.875rem] font-medium text-[#1a1918]/60 hover:text-[#1a1918] transition-colors duration-250 rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#cbb37c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-lg" />
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
