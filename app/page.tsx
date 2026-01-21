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
      {/* Large soft shadow circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: "600px",
          maxHeight: "600px",
          right: "-15%",
          top: `${5 - progress * 25}%`,
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
          transition: "top 0.15s ease-out",
        }}
      />
      
      {/* Small accent circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: "120px",
          height: "120px",
          left: "3%",
          top: `${55 + progress * 25}%`,
          background: "radial-gradient(circle, rgba(74, 107, 74, 0.08) 0%, transparent 70%)",
          transition: "top 0.15s ease-out",
        }}
      />
      
      {/* Vertical shadow line */}
      <div
        className="absolute"
        style={{
          width: "1px",
          height: "300px",
          right: "18%",
          top: `${20 - progress * 40}%`,
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.06), transparent)",
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
  icon 
}: { 
  title: string; 
  text: string; 
  index: number;
  icon: React.ReactNode;
}) {
  return (
    <article 
      className="group relative p-6 -mx-6 transition-all duration-500 ease-out"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Hover background with shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
      
      {/* Accent line on left */}
      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#cbb37c]/0 via-[#cbb37c]/60 to-[#cbb37c]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-center scale-y-0 group-hover:scale-y-100" />
      
      <div className="relative flex gap-5">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#cbb37c]/50 group-hover:text-[#cbb37c] transition-colors duration-500">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-[0.8125rem] font-medium tracking-[0.06em] uppercase text-[#6b6966] group-hover:text-[#1a1918] transition-colors duration-500 mb-2">
            {title}
          </h3>
          <p className="text-[#6b6966] leading-[1.75] group-hover:text-[#1a1918] transition-colors duration-500">
            {text}
          </p>
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
    <section id="projects" className="reveal mb-32 md:mb-44">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text content */}
        <div>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 mb-5">
            First product
          </p>
          <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-5">
            Luna
          </h2>
          <p className="text-[#6b6966] leading-[1.8] mb-6">
            A podcast player built for learning. Designed to help you remember, 
            revisit, and build on what you hear.
          </p>
          <a
            href="https://www.lunacast.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover inline-flex items-center gap-2 text-[0.875rem]"
          >
            <span>lunacast.ai</span>
            <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-50">
              <path d="M2.5 1h6.5v6.5M9 1L1 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div ref={containerRef} className="max-w-[780px] mx-auto px-8 sm:px-10 pt-32 md:pt-44 pb-32">
          
          {/* Hero */}
          <header id="about" className="min-h-[70vh] flex flex-col justify-center mb-32 md:mb-44">
            {/* Logo with title */}
            <div className="flex items-start gap-5 mb-12 md:mb-16">
              <Logo size={48} className="mt-2 opacity-90" />
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] leading-[1] tracking-[-0.04em]">
                Human<br />
                Learning Lab
              </h1>
            </div>
            
            <div className="space-y-5 max-w-[500px]">
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966]">
                We explore how people learn. We build tools based on what we find.
              </p>
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-[#6b6966]">
                Most software treats learning as information transfer. We think it's 
                something deeper—a slow process of change that deserves more patience 
                and better tools.
              </p>
            </div>
          </header>

          {/* What We Work On */}
          <section className="reveal mb-32 md:mb-44">
            <h2 className="text-[1.125rem] sm:text-[1.25rem] mb-10 md:mb-12">
              What we work on
            </h2>
            
            <div className="space-y-2">
              <WorkCard
                title="Learning"
                text="How people acquire knowledge and skill. What helps retention. What leads to real understanding."
                index={0}
                icon={icons.learning}
              />
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

          {/* Time */}
          <section className="reveal mb-40 md:mb-56">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-5">
              Time
            </h2>
            <p className="text-[#6b6966] leading-[1.8] max-w-[460px]">
              Good tools come from years of observation and iteration. We're not 
              optimizing for speed. We're trying to understand something real, 
              and to build things that reflect that understanding.
            </p>
          </section>

          {/* Contact section */}
          <section id="contact" className="reveal mb-32 md:mb-44">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-5">
              Get in touch
            </h2>
            <p className="text-[#6b6966] leading-[1.8] mb-6 max-w-[460px]">
              We're always interested in conversations about learning, tools, and the future of education.
            </p>
            <a
              href="mailto:hello@humanlearninglab.com"
              className="link-hover inline-flex items-center gap-2 text-[0.875rem]"
            >
              <span>hello@humanlearninglab.com</span>
            </a>
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
