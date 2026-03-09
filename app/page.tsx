"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

// Get scroll progress and scrollY
function useScroll() {
  const [state, setState] = useState({ progress: 0, scrollY: 0, scrolled: false });

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      setState({
        progress: max > 0 ? scrollY / max : 0,
        scrollY,
        scrolled: scrollY > 50,
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return state;
}

// Reveal sections on scroll - faster trigger
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

// Parallax rotation and scale effect based on scroll position
function useParallaxRotateScale(ref: React.RefObject<HTMLElement | null>) {
  const [transform, setTransform] = useState({ rotate: 0, scale: 1, translateY: 0 });

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element is (-1 to 1)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const rawOffset = (elementCenter - viewportCenter) / viewportHeight;
      
      // Create a "dead zone" in the center where nothing changes
      // Only start animating when offset is beyond ±0.15
      const deadZone = 0.2;
      const offset = Math.abs(rawOffset) < deadZone 
        ? 0 
        : (rawOffset > 0 ? rawOffset - deadZone : rawOffset + deadZone);
      
      // Rotation: gentle swing, only outside dead zone
      const rotate = offset * -6;
      
      // Scale: stays at 1.0 in center, shrinks gently outside
      // Uses easeOutQuad for smoother falloff
      const normalizedOffset = Math.abs(offset) / (0.5 - deadZone);
      const eased = normalizedOffset * normalizedOffset; // quadratic easing
      const scale = 1.05 - eased * 0.12;
      
      // Parallax vertical movement - gentle
      const translateY = offset * -25;
      
      setTransform({ rotate, scale: Math.max(0.93, Math.min(1.05, scale)), translateY });
    };
    
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return transform;
}

// Scroll-driven atmosphere with shadows
function ScrollAtmosphere({ progress }: { progress: number }) {
  return (
    <>
      {/* Warm gradient that shifts */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse 100% 60% at 50% ${20 + progress * 50}%, 
            rgba(210, 200, 180, 0.35) 0%, 
            transparent 50%)`
        }}
      />
      {/* Cool shadow at bottom */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 120% 40% at 50% ${100 - progress * 20}%, 
            rgba(100, 110, 120, 0.08) 0%, 
            transparent 50%)`
        }}
      />
    </>
  );
}

// Floating shapes with parallax
function ParallaxShapes({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Medium orb - left side */}
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          width: "400px",
          height: "400px",
          left: "-15%",
          top: `${40 + progress * 20}%`,
          background: "radial-gradient(circle, rgba(203,179,124,0.06) 0%, rgba(74, 107, 74, 0.04) 50%, transparent 70%)",
          transition: "top 0.15s ease-out",
        }}
      />
      
      {/* Small accent circle - animated */}
      <div
        className="absolute rounded-full"
        style={{
          width: "200px",
          height: "200px",
          right: "15%",
          top: `${60 - progress * 35}%`,
          background: "radial-gradient(circle, rgba(203,179,124,0.1) 0%, transparent 70%)",
          transition: "top 0.15s ease-out",
          opacity: 0.6,
        }}
      />
      
      {/* Geometric grid pattern */}
      <div
        className="absolute"
        style={{
          width: "300px",
          height: "300px",
          left: "10%",
          bottom: `${10 + progress * 15}%`,
          backgroundImage: `
            linear-gradient(rgba(203,179,124,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(203,179,124,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          transition: "bottom 0.15s ease-out",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

// Work item card with hover effects
function WorkCard({ 
  title, 
  text, 
  index,
  icon,
  imageSrc,
  href
}: { 
  title: string; 
  text: string; 
  index: number;
  icon: React.ReactNode;
  imageSrc?: string;
  href?: string;
}) {
  const content = (
    <article 
      className="group relative overflow-hidden rounded-xl border border-[#1a1918]/10 bg-white/80 transition-all duration-700 ease-out hover:border-[#cbb37c]/30 hover:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.3)] hover:-translate-y-1 h-full"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Image at top if provided */}
      {imageSrc && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={imageSrc}
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f0] via-[#f5f3f0]/30 to-transparent" />
        </div>
      )}
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cbb37c]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-tl from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Accent line - animated from left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#cbb37c] via-[#cbb37c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
      
      {/* Content */}
      <div className={`relative ${imageSrc ? 'p-5' : 'p-8'}`}>
        {/* Icon with animated background */}
        <div className="relative w-fit mb-6">
          <div className="absolute inset-0 bg-[#cbb37c]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative text-[#cbb37c]/60 group-hover:text-[#cbb37c] transition-all duration-500">
            {icon}
          </div>
        </div>
        
        <div>
          <h3 className={`font-medium text-[#1a1918] transition-colors duration-500 tracking-tight ${
            imageSrc ? 'text-[1.125rem] sm:text-[1.25rem] mb-3' : 'text-[1.25rem] sm:text-[1.375rem] mb-4'
          }`}>
            {title}
          </h3>
          <p className={`text-[#6b6966] transition-colors duration-500 ${
            imageSrc ? 'leading-[1.65] text-[0.9375rem]' : 'leading-[1.75] text-[0.9375rem]'
          } mb-5`}>
            {text}
          </p>
          {href && (
            <div className="inline-flex items-center gap-2 text-[0.875rem] text-[#cbb37c]/70 group-hover:text-[#cbb37c] transition-all duration-300 font-medium">
              <span>Read more</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                className="opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1"
              >
                <path 
                  d="M1 7h12M9 2l5 5-5 5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

// Icons for work items
const icons = {
  learning: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l4-4m0 0L3 13l4 4zm0 0l4-4m-4 4l4 4" />
      <path d="M16 3l1.5 1.5M20 3l-1.5 1.5M18.5 4.5v3" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
      <path d="M5 5l2 2m10-2l-2 2m0 10l2 2M7 17l-2 2" />
    </svg>
  ),
  products: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  method: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

// Logo component
function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <img 
      src="/logo.svg"
      alt="Human Learning Lab" 
      width={size} 
      height={size} 
      className={className}
    />
  );
}

// Luna section with scroll-driven rotation and scale
function LunaSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const transform = useParallaxRotateScale(imageRef);
  
  return (
    <section className="reveal mb-40 md:mb-56 relative">
      {/* Background decoration */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#cbb37c]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Text content */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#cbb37c]/10 to-transparent border-l-2 border-[#cbb37c]/40">
            <div className="w-1.5 h-1.5 rounded-full bg-[#cbb37c] animate-pulse" />
            <span className="text-[0.7rem] tracking-[0.15em] uppercase text-[#cbb37c]/80 font-medium">
              First Product
            </span>
          </div>
          
          {/* Luna heading with logo */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <img
                src="/luna_app_logo (2).png"
                alt="Luna app icon"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl"
              />
              <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-serif tracking-tight leading-none">
                Luna
              </h2>
            </div>
            <p className="text-[0.95rem] text-[#cbb37c]/80 mt-2 ml-[3.75rem] sm:ml-[4.25rem]">
              :learn from podcasts
            </p>
          </div>
          <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8 max-w-[460px]">
            A podcast player built for learning. Designed to help you remember, 
            revisit, and build on what you hear.
          </p>
          <Button href="https://www.lunacast.ai/" external icon="external">
            Visit lunacast.ai
          </Button>
        </div>
        
        {/* Phone mockup with scroll-driven rotation and scale */}
        <div 
          ref={imageRef}
          className="relative group"
        >
          {/* Subtle ambient glow */}
          <div 
            className="absolute inset-0 -inset-x-8 -inset-y-4 transition-all duration-300 ease-out"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(203,179,124,0.15) 0%, transparent 65%)',
              opacity: 0.3 + (transform.scale - 0.93) * 2,
              transform: `scale(${1 + (transform.scale - 1) * 0.5})`,
            }}
          />
          
          {/* Main image with scroll-driven rotation and scale */}
          <div 
            className="relative transition-all duration-200 ease-out"
            style={{
              transform: `
                rotate(${transform.rotate}deg) 
                scale(${transform.scale}) 
                translateY(${transform.translateY}px)
              `,
            }}
          >
            {/* Soft shadow */}
            <div 
              className="absolute inset-0 blur-2xl transition-all duration-200"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%)',
                opacity: 0.2 + (transform.scale - 0.93) * 1.5,
                transform: `translateY(20px) scale(0.85)`,
              }}
            />
            
            {/* Image */}
            <img
              src="/luna.png"
              alt="Luna app - podcast player for learning"
              width={500}
              height={600}
              className="relative w-full h-auto max-w-[380px] mx-auto md:mx-0 md:ml-auto"
            />
          </div>
          
          {/* Subtle glow at bottom when scaled up */}
          <div 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-10 blur-xl transition-all duration-300"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(203,179,124,0.25) 0%, transparent 70%)',
              opacity: Math.max(0, (transform.scale - 1) * 8),
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { progress } = useScroll();
  const containerRef = useReveal();

  return (
    <>
      {/* Fix hero text colors */}
      <style>{`
        .hero-text-primary {
          color: #1a1918 !important;
        }
        .hero-text-secondary {
          color: #6b6966 !important;
        }
      `}</style>
      
      {/* Background layers */}
      <ScrollAtmosphere progress={progress} />
      <ParallaxShapes progress={progress} />
      
      {/* Subtle grain */}
      <div className="grain" />
      
      {/* Progress bar */}
      <div className="progress-bar" style={{ transform: `scaleX(${progress})` }} />

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        <div ref={containerRef} className="max-w-[1400px] mx-auto px-10 sm:px-12 md:px-16 pt-32 md:pt-44 pb-32">
          
              {/* Hero */}
              <header id="about" className="min-h-[85vh] flex flex-col justify-center mb-40 md:mb-56 relative">
                {/* Decorative elements */}
                <div className="absolute right-0 top-0 w-96 h-96 bg-[#cbb37c]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-[#cbb37c]/3 rounded-full blur-3xl pointer-events-none" />
                
                {/* Logo with title */}
                <div className="relative z-10 mb-16 md:mb-20">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#cbb37c]/10 rounded-2xl blur-xl" />
                      <Logo size={64} className="relative opacity-95 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#cbb37c]/30 to-transparent" />
                    <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[0.9] tracking-[-0.04em] font-serif text-[#1a1918]">
                      Human<br />
                      Learning Lab
                    </h1>
                  </div>
                  
                  {/* Subtitle badge */}
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-[#cbb37c]/20 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cbb37c] animate-pulse" />
                    <span className="text-[0.8125rem] tracking-[0.12em] uppercase text-[#cbb37c] font-medium">
                      Research • Tools • Practice
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-6 max-w-[620px] relative z-10">
                  <p className="hero-text-primary text-[1.25rem] sm:text-[1.375rem] leading-[1.6] font-medium text-[#1a1918]">
                    The future belongs not to those who know the most, but to those who learn best.
                  </p>
                  <p className="hero-text-secondary text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966]">
                    Human Learning Lab builds learning systems that give people and organizations a stronger strategic position over time.
                  </p>
                  
                  {/* CTA hint */}
                  <div className="flex items-center gap-3 pt-6">
                    <div className="h-px w-16 bg-gradient-to-r from-[#cbb37c]/60 to-transparent" />
                    <span className="text-[0.8125rem] text-[#6b6966]/60 tracking-wide">Scroll to explore</span>
                  </div>
                </div>
              </header>

              {/* What We Work On */}
          <section id="what-we-work-on" className="reveal mb-24 md:mb-32 relative">
            {/* Section header with decorative element */}
            <div className="flex items-center gap-6 mb-14 md:mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">Focus Areas</span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-none">
                  How We Build Strategic Advantage
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WorkCard
                title="Strategic Capacity"
                text="Building adaptive strength in individuals and institutions. We help individuals, teams, and schools develop the structures, habits, and systems that turn learning into long-term strategic advantage."
                index={0}
                icon={icons.learning}
                href="/strategic-positioning"
              />
              <WorkCard
                title="Technology & Infrastructure"
                text="Products and systems designed for the intelligent age. We build adaptive learning tools and organizational AI infrastructure that transform knowledge into structured, usable intelligence — evolving with the people and institutions that use them."
                index={1}
                icon={icons.products}
                href="/product-technology"
              />
              <WorkCard
                title="LARPA"
                text="An open engine for breakthrough learning innovation. We launch challenges, support bold ideas, and invest in new approaches that redefine how individuals and institutions build capability."
                index={2}
                icon={icons.method}
                href="/larpa"
              />
            </div>
          </section>

          {/* Divider with shadow */}
          <div className="reveal mb-16 md:mb-24 flex justify-start">
            <div className="relative w-32">
              <div className="h-px bg-gradient-to-r from-[#1a1918]/20 to-transparent" />
              <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[#cbb37c]/40 to-transparent blur-sm" />
            </div>
          </div>

          {/* Luna */}
          <LunaSection />

          {/* Our Philosophy - Full Width Card with Icons */}
          <section className="reveal mb-40 md:mb-56">
            <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-br from-[#cbb37c]/8 to-white/80 backdrop-blur-sm border border-[#cbb37c]/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-[#cbb37c] to-transparent" />
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">Philosophy</span>
              </div>
              
              <div className="max-w-[900px] mb-12">
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8 font-serif tracking-tight leading-[1.1] text-[#1a1918]">
                  Our Philosophy
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                  We build on the science of how the human brain learns. Our systems are shaped by research, observation, and real use. We adopt new technology when it expands human capability, not when it distracts from it. We believe learning is a strategic advantage. Those who learn well strengthen their position over time.
                </p>
              </div>

              {/* Key Principles with Icons */}
              <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-[#cbb37c]/20">
                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
                      <path d="M4.2 4.2l4.2 4.2m7.2 0l4.2-4.2m-4.2 11.6l4.2 4.2m-15.6 0l4.2-4.2" />
                    </svg>
                  </div>
                  <span className="text-[0.9375rem] font-medium text-[#1a1918]">Science-based</span>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-[0.9375rem] font-medium text-[#1a1918]">Research-informed</span>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <span className="text-[0.9375rem] font-medium text-[#1a1918]">Technology-enabled</span>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20l4-4m0 0L2 12l4 4zm0 0l4-4m-4 4l4 4" />
                      <path d="M18 4l-1.5 1.5M14 4l1.5 1.5M15.5 5.5v3" />
                      <polyline points="12 2 12 6 8 10 8 14 16 14 16 10 12 6" />
                    </svg>
                  </div>
                  <span className="text-[0.9375rem] font-medium text-[#1a1918]">Strategic advantage</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact section - Simple Layout */}
          <section className="reveal mb-40 md:mb-56 relative">
            <div className="relative">
              <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
                <div>
                  <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium mb-6 block">Connect</span>
                  <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] mb-8 font-serif tracking-tight leading-[1.05] text-[#1a1918]">
                    Get in touch
                  </h2>
                  <div className="space-y-5 mb-10 max-w-[520px]">
                    <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966]">
                      We're always open to conversations about learning, technology, and how humans grow.
                    </p>
                    <p className="text-[1.0625rem] leading-[1.8] font-medium text-[#1a1918]">
                      If you're building, researching, or thinking in this space — we'd love to hear from you.
                    </p>
                  </div>
                  <a 
                    href="mailto:christian@hulelab.com" 
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-br from-[#cbb37c]/8 to-[#cbb37c]/5 hover:from-[#cbb37c]/12 hover:to-[#cbb37c]/8 border border-[#cbb37c] hover:border-[#cbb37c]/80 transition-all duration-300 font-medium group text-[#1a1918]"
                  >
                    <span className="text-[1.0625rem]">christian@hulelab.com</span>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 16 16" 
                      className="transition-transform duration-300 group-hover:translate-x-1 text-[#cbb37c]"
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                
                {/* Icon Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-[#cbb37c]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span className="text-[0.875rem] font-medium text-[#1a1918]">Collaborate</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-[#cbb37c]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <span className="text-[0.875rem] font-medium text-[#1a1918]">Ask Questions</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-[#cbb37c]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <span className="text-[0.875rem] font-medium text-[#1a1918]">Pitch Ideas</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-[#cbb37c]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#cbb37c]/15 flex items-center justify-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb37c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <span className="text-[0.875rem] font-medium text-[#1a1918]">Join Us</span>
                  </div>
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
