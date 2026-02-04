"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "../components/Header";

// Reveal sections on scroll (same as main page)
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

// Blog post previews
const posts = [
  {
    slug: "when-speed-outruns-understanding",
    date: "December 29, 2025",
    title: "When Speed Outruns Understanding",
    excerpt: "We live in a time where technology is developing faster than our ability to understand its consequences. Artificial intelligence intensifies this gap.",
    author: "Christian Løken",
    image: "/when-speed-outruns-understanding.png",
  },
  {
    slug: "when-intelligence-scales-faster-than-judgment",
    date: "December 1, 2025",
    title: "When Intelligence Scales Faster Than Judgment",
    excerpt: "Artificial intelligence is now outperforming humans on tasks we once associated with intelligence. But intelligence, measured this way, is only part of the story.",
    author: "Christian Løken",
    image: "/ChatGPT Image Feb 3, 2026, 01_18_13 PM.png",
  },
];

// Post preview card component
function PostPreview({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group reveal block h-full"
    >
      <article className="blog-card relative h-full overflow-hidden transition-all duration-500 ease-out rounded-2xl border border-[#1a1918]/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-[#cbb37c]/30 dark:hover:border-[#cbb37c]/30 hover:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.25)] dark:hover:shadow-[0_20px_60px_-20px_rgba(203,179,124,0.2)] hover:-translate-y-1">
        {/* Featured Image */}
        {'image' in post && post.image && (
          <div className="relative h-36 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3f0] dark:from-[#0f0f0f] via-transparent to-transparent opacity-60 dark:opacity-30 dark:group-hover:opacity-70 transition-opacity duration-500" />
          </div>
        )}
        
        <div className="relative p-6 md:p-7">
          {/* Date */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 group-hover:text-[#cbb37c] transition-colors duration-500 font-medium">
              {post.date}
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#cbb37c]/20 via-[#cbb37c]/40 to-transparent group-hover:from-[#cbb37c]/40 transition-colors duration-500" />
          </div>

          {/* Title */}
          <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-4 leading-[1.2] tracking-tight text-[#1a1918] dark:text-fg transition-colors duration-500">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-[#6b6966] dark:text-fg/70 text-[0.9375rem] leading-[1.7] mb-6 transition-colors duration-500">
            {post.excerpt}
          </p>

          {/* Author if exists */}
          {'author' in post && post.author && (
            <p className="text-[0.8125rem] text-[#6b6966] dark:text-fg/60 mb-6">
              {post.author}
            </p>
          )}

          {/* Read more link */}
          <div className="inline-flex items-center gap-2 text-[0.875rem] text-[#1a1918] dark:text-fg group-hover:text-[#cbb37c] dark:group-hover:text-[#cbb37c] transition-colors duration-500 font-medium">
            <span>Read article</span>
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
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const containerRef = useReveal();

  return (
    <>
      {/* Subtle grain */}
      <div className="grain" />

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        <div ref={containerRef} className="max-w-[1400px] mx-auto px-10 sm:px-16 pt-32 md:pt-44 pb-32">
          {/* Page title */}
          <header className="mb-16 md:mb-24">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-[1] tracking-[-0.04em] mb-5 dark:text-fg">
              Blog
            </h1>
            <p className="text-[#6b6966] dark:text-fg/70 text-[1.0625rem] leading-[1.8] max-w-[540px]">
              Thoughts on learning, tools, and the future.
            </p>
          </header>

          {/* Blog post previews - Grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <PostPreview key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Footer */}
          <footer className="reveal mt-32 md:mt-40 pt-10 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40 dark:text-fg/40">
                Human Learning Lab
              </span>
              <Link href="/" className="link-hover text-[0.875rem]">
                Home
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
