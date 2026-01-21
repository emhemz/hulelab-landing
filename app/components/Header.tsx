"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 pt-6 pointer-events-none">
      <nav className="max-w-[1400px] mx-auto flex items-start justify-between pointer-events-auto">
        {/* Logo - Left Corner */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-500 hover:px-6 overflow-hidden"
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
            alt="Human Learning Lab" 
            width={20} 
            height={20}
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
          />
          <span className="font-serif text-[0.9375rem] tracking-tight text-[#1a1918] whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            Human Learning Lab
          </span>
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

          {/* Dropdown Menu - macOS Dock style */}
          <div 
            className={`absolute top-full right-0 pt-3 flex flex-col gap-2 transition-all duration-500 ease-out origin-top-right ${
              menuOpen 
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
          >
            {/* Invisible bridge */}
            <div className="h-3 w-full" />
            
            {/* Menu links - floating like Dock */}
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative"
                  style={{
                    transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <div 
                    className={`px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-between gap-8 ${
                      isActive ? 'pr-3' : ''
                    }`}
                    style={{
                      background: scrolled || isActive
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.92) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.45) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      border: isActive ? '1px solid rgba(203,179,124,0.3)' : '1px solid rgba(255,255,255,0.6)',
                      boxShadow: isActive 
                        ? '0 8px 32px -8px rgba(203,179,124,0.4), inset 0 1px 0 rgba(255,255,255,0.9)'
                        : '0 4px 16px -4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}
                  >
                    <span className={`text-[0.9375rem] font-medium transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-[#cbb37c]' : 'text-[#1a1918]/70 group-hover:text-[#cbb37c]'
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#cbb37c] animate-pulse" />
                    )}
                  </div>
                  
                  {/* Hover accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#cbb37c] via-[#cbb37c]/60 to-transparent rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
