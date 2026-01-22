"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

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
      {/* Large gradient orb - top right */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "600px",
          height: "600px",
          right: "-10%",
          top: `${-10 - progress * 30}%`,
          background: "radial-gradient(circle, rgba(203,179,124,0.08) 0%, transparent 65%)",
          transition: "top 0.15s ease-out",
        }}
      />
      
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
      
      {/* Vertical accent line */}
      <div
        className="absolute"
        style={{
          width: "2px",
          height: "400px",
          right: "25%",
          top: `${15 - progress * 45}%`,
          background: "linear-gradient(to bottom, transparent, rgba(203,179,124,0.15), transparent)",
          transition: "top 0.15s ease-out",
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
  imageSrc
}: { 
  title: string; 
  text: string; 
  index: number;
  icon: React.ReactNode;
  imageSrc?: string;
}) {
  return (
    <article 
      className="group relative overflow-hidden rounded-xl border border-[#1a1918]/5 transition-all duration-700 ease-out hover:border-[#cbb37c]/30 hover:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.3)] hover:-translate-y-1"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Image at top if provided */}
      {imageSrc && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={`${BASE_PATH}${imageSrc}`}
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f0] via-[#f5f3f0]/30 to-transparent" />
          <div className="absolute bottom-4 right-6 text-[4rem] font-serif leading-none text-white/20 select-none">0{index + 1}</div>
        </div>
      )}
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cbb37c]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-tl from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Accent line - animated from left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#cbb37c] via-[#cbb37c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
      
      {/* Number indicator - only show if no image */}
      {!imageSrc && (
        <div className="absolute top-6 right-6 text-[5rem] font-serif leading-none text-[#cbb37c]/4 group-hover:text-[#cbb37c]/8 transition-all duration-700 select-none">
          0{index + 1}
        </div>
      )}
      
      {/* Content */}
      <div className={`relative ${imageSrc ? 'p-5' : 'p-8'} ${imageSrc ? 'flex items-start gap-4' : 'flex flex-col items-center text-center'}`}>
        {/* Icon with animated background - larger when no image */}
        <div className={`relative ${imageSrc ? 'flex-shrink-0 mt-1' : 'mb-8'}`}>
          <div className="absolute inset-0 bg-[#cbb37c]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150" />
          <div className={`relative text-[#cbb37c]/40 group-hover:text-[#cbb37c] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
            imageSrc ? '' : 'scale-[2.5]'
          }`}>
            {icon}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className={`font-medium text-[#1a1918] group-hover:text-[#cbb37c] transition-colors duration-500 tracking-tight ${
            imageSrc ? 'text-[1rem] sm:text-[1.125rem] mb-2' : 'text-[1.125rem] sm:text-[1.25rem] mb-3'
          }`}>
            {title}
          </h3>
          <p className={`text-[#6b6966] group-hover:text-[#1a1918] transition-colors duration-500 ${
            imageSrc ? 'leading-[1.6] text-[0.875rem]' : 'leading-[1.75] text-[0.9375rem]'
          }`}>
            {text}
          </p>
          
          {/* Hover indicator */}
          <div className={`flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${
            imageSrc ? 'mt-3' : 'mt-5'
          } ${imageSrc ? '' : 'justify-center'}`}>
            <div className="h-px w-8 bg-gradient-to-r from-[#cbb37c]/60 to-transparent" />
            <span className="text-[0.75rem] text-[#cbb37c] tracking-wide">Explore</span>
          </div>
        </div>
      </div>
    </article>
  );
}

// Icons for work items
const icons = {
  learning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  products: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M3 9h6" />
    </svg>
  ),
  practice: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

// Logo component
function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <img 
      src={`${BASE_PATH}/logo.svg`}
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
          
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] mb-6 font-serif tracking-tight leading-none">
            Luna
          </h2>
          <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8 max-w-[460px]">
            A podcast player built for learning. Designed to help you remember, 
            revisit, and build on what you hear.
          </p>
          <a
            href="https://www.lunacast.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#cbb37c]/10 to-transparent border border-[#cbb37c]/20 rounded-lg hover:border-[#cbb37c]/40 hover:shadow-[0_8px_30px_-8px_rgba(203,179,124,0.3)] transition-all duration-300"
          >
            <span className="text-[0.9375rem] text-[#1a1918] group-hover:text-[#cbb37c] transition-colors">Visit lunacast.ai</span>
            <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <path d="M3 2h9v9M12 2L2 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
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
              src={`${BASE_PATH}/luna.png`}
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
                {/* Large decorative number */}
                <div className="absolute -left-4 sm:-left-8 top-0 text-[12rem] sm:text-[16rem] font-serif leading-none text-[#cbb37c]/5 dark:opacity-0 select-none pointer-events-none">
                  01
                </div>
                
                {/* Background image - architectural space - only in light mode */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[60%] opacity-[0.08] dark:opacity-0 pointer-events-none overflow-hidden rounded-l-3xl blur-sm transition-opacity duration-500">
                  <img 
                    src={`${BASE_PATH}/ChatGPT Image Jan 14, 2026, 04_01_38 PM.png`}
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3f0] via-[#f5f3f0]/70 to-transparent" />
                </div>
                
                {/* Logo with title - more dramatic */}
                <div className="relative z-10 mb-16 md:mb-20">
                  <div className="flex items-start gap-6 mb-3">
                    <Logo size={56} className="mt-3 opacity-90 hover:opacity-100 transition-opacity" />
                    <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[0.95] tracking-[-0.05em] font-serif">
                      Human<br />
                      Learning Lab
                    </h1>
                  </div>
                  
                  {/* Subtitle badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 bg-gradient-to-r from-[#cbb37c]/10 to-transparent border-l-2 border-[#cbb37c]/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cbb37c] animate-pulse" />
                    <span className="text-[0.75rem] tracking-[0.15em] uppercase text-[#cbb37c]/80 font-medium">
                      Research • Tools • Practice
                    </span>
                  </div>
                </div>
                
                {/* Description with better layout */}
                <div className="space-y-6 max-w-[560px] relative z-10">
                  <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.7] text-[#1a1918] font-medium">
                    We explore how people learn. We build tools based on what we find.
                  </p>
                  <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966]">
                    Most software treats learning as information transfer. We think it's 
                    something deeper—a slow process of change that deserves more patience 
                    and better tools.
                  </p>
                  
                  {/* CTA hint */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="h-px w-12 bg-gradient-to-r from-[#cbb37c]/60 to-transparent" />
                    <span className="text-[0.8125rem] text-[#6b6966]/60 tracking-wide">Scroll to explore</span>
                  </div>
                </div>
              </header>

              {/* What We Work On */}
          <section className="reveal mb-40 md:mb-56 relative">
            {/* Section header with decorative element */}
            <div className="flex items-center gap-6 mb-14 md:mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">Focus Areas</span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-serif tracking-tight leading-none">
                  What we work on
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Learning card - full height */}
              <WorkCard
                title="Learning"
                text="How people acquire knowledge and skill. What helps retention. What leads to real understanding."
                index={0}
                icon={icons.learning}
                imageSrc="/ChatGPT Image Jan 14, 2026, 04_08_30 PM.png"
              />
              
              {/* Products and Practice stacked vertically */}
              <div className="flex flex-col gap-6">
                <WorkCard
                  title="Products"
                  text="Software that reflects how learning actually works. Built slowly, tested carefully."
                  index={1}
                  icon={icons.products}
                />
                <WorkCard
                  title="Practice"
                  text="The conditions for genuine improvement. Deliberate repetition, feedback, and time."
                  index={2}
                  icon={icons.practice}
                />
              </div>
            </div>
          </section>

          {/* Divider with shadow */}
          <div className="reveal mb-32 md:mb-44 flex justify-start">
            <div className="relative w-32">
              <div className="h-px bg-gradient-to-r from-[#1a1918]/20 to-transparent" />
              <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[#cbb37c]/40 to-transparent blur-sm" />
            </div>
          </div>

          {/* Luna */}
          <LunaSection />

          {/* Time - more visual with image */}
          <section className="reveal mb-40 md:mb-56 relative overflow-hidden rounded-2xl border border-[#1a1918]/5">
            {/* Hero image */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={`${BASE_PATH}/ChatGPT Image Jan 14, 2026, 04_08_38 PM.png`}
                alt="Time" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f0] via-[#f5f3f0]/70 to-[#f5f3f0]/30" />
            </div>
            
            {/* Content */}
            <div className="relative p-10 md:p-14 bg-gradient-to-br from-[#cbb37c]/5 via-transparent to-transparent">
              {/* Decorative element */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#cbb37c]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gradient-to-r from-[#cbb37c] to-transparent" />
                  <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">Philosophy</span>
                </div>
                
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-6 font-serif tracking-tight leading-tight max-w-[600px]">
                  Time
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] max-w-[540px]">
                  Good tools come from years of observation and iteration. We're not 
                  optimizing for speed. We're trying to understand something real, 
                  and to build things that reflect that understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Contact section - more engaging */}
          <section className="reveal mb-40 md:mb-56 relative">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium mb-6 block">Connect</span>
                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-6 font-serif tracking-tight leading-tight">
                  Get in touch
                </h2>
                <p className="text-[1.0625rem] leading-[1.8] text-[#6b6966] mb-8">
                  We're always interested in conversations about learning, tools, and the future of education.
                </p>
                <a
                  href="mailto:hello@humanlearninglab.com"
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#cbb37c]/10 to-transparent border border-[#cbb37c]/20 rounded-lg hover:border-[#cbb37c]/40 hover:shadow-[0_8px_30px_-8px_rgba(203,179,124,0.3)] transition-all duration-300"
                >
                  <span className="text-[0.9375rem] text-[#1a1918] group-hover:text-[#cbb37c] transition-colors font-medium">hello@humanlearninglab.com</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <path d="M1 8h14M11 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              
              {/* Visual element */}
              <div className="hidden md:flex items-center justify-center relative">
                <div className="w-72 h-72 bg-gradient-to-br from-[#cbb37c]/10 via-[#cbb37c]/5 to-transparent rounded-full blur-2xl" />
                <div className="absolute w-48 h-48 border-2 border-[#cbb37c]/20 rounded-full" />
                <div className="absolute w-32 h-32 border border-[#cbb37c]/10 rounded-full" />
              </div>
            </div>
          </section>

          {/* Footer with logo */}
          <footer className="reveal pt-10 border-t border-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo size={20} className="opacity-50" />
                <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
                  Human Learning Lab
                </span>
              </div>
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
