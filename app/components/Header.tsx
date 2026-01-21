"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 pt-6 pointer-events-none">
      <nav className="max-w-[1400px] mx-auto flex items-start justify-between pointer-events-auto">
        {/* Logo - Left Corner */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300"
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
          <img 
            src={`${BASE_PATH}/logo.svg`}
            alt="HLL" 
            width={20} 
            height={20}
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="text-[0.8125rem] font-medium tracking-tight text-[#1a1918] hidden sm:block">HLL</span>
        </Link>
        
        {/* Hamburger Menu - Right Corner */}
        <div 
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* Hamburger Button */}
          <button
            className="flex flex-col items-end gap-1.5 px-4 py-3 rounded-xl transition-all duration-300 group"
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
            <div 
              className={`h-0.5 bg-[#1a1918]/60 group-hover:bg-[#cbb37c] transition-all duration-300 ${menuOpen ? 'w-6 bg-[#cbb37c]' : 'w-6'}`}
            />
            <div 
              className={`h-0.5 bg-[#1a1918]/60 group-hover:bg-[#cbb37c] transition-all duration-300 ${menuOpen ? 'w-6 bg-[#cbb37c]' : 'w-4'}`}
            />
            <div 
              className={`h-0.5 bg-[#1a1918]/60 group-hover:bg-[#cbb37c] transition-all duration-300 ${menuOpen ? 'w-6 bg-[#cbb37c]' : 'w-5'}`}
            />
          </button>

          {/* Dropdown Menu */}
          <div 
            className={`absolute top-full right-0 pt-2 transition-all duration-500 ease-out origin-top-right ${
              menuOpen 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            {/* Invisible bridge */}
            <div className="h-2 w-full" />
            
            {/* Actual menu */}
            <div 
              className="w-56 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.92) 100%)',
                backdropFilter: 'blur(32px) saturate(200%)',
                WebkitBackdropFilter: 'blur(32px) saturate(200%)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 20px 60px -12px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
              }}
            >
              {/* Accent line at top */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#cbb37c] to-transparent" />
            
            <div className="p-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#cbb37c]/10 transition-all duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[0.9375rem] font-medium text-[#1a1918]/70 group-hover:text-[#cbb37c] transition-colors duration-300">
                    {link.label}
                  </span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
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
              ))}
            </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
