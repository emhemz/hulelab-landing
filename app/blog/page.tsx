"use client";

import Link from "next/link";
import Image from "next/image";
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
    slug: "intelligence-and-action-space",
    date: "January 2026",
    title: "Intelligence and Action Space",
    excerpt: "An intelligent system is one that, given its time horizon, moves toward actions that expand its future action space.",
  },
  {
    slug: "consumption-vs-learning",
    date: "January 2026",
    title: "Consumption vs. Learning",
    excerpt: "We consume more content than ever before. But it's easy to forget the difference between consuming and learning.",
  },
  {
    slug: "ai-in-ten-years",
    date: "January 2026",
    title: "AI in Ten Years",
    excerpt: "In 10 years, AI will be less visible but more integrated. The best tools disappear into the background.",
  },
];

// Post preview card component
function PostPreview({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group reveal block"
    >
      <article className="relative p-8 -mx-8 transition-all duration-500 ease-out">
        {/* Hover background with shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
        <div className="absolute inset-0 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
        
        {/* Accent line on left - appears on hover */}
        <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#cbb37c]/0 via-[#cbb37c]/60 to-[#cbb37c]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-center scale-y-0 group-hover:scale-y-100" />
        
        <div className="relative">
          {/* Date */}
          <div className="mb-4 flex items-center gap-4">
            <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 group-hover:text-[#cbb37c] transition-colors duration-500">
              {post.date}
            </span>
            <div className="h-px w-6 bg-gradient-to-r from-[#1a1918]/15 to-transparent group-hover:from-[#cbb37c]/40 transition-colors duration-500" />
          </div>

          {/* Title */}
          <h2 className="text-[1.5rem] sm:text-[1.75rem] mb-4 leading-[1.15] group-hover:text-[#cbb37c] transition-colors duration-500">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-[#6b6966] leading-[1.8] mb-5 group-hover:text-[#1a1918] transition-colors duration-500">
            {post.excerpt}
          </p>

          {/* Read more link */}
          <div className="inline-flex items-center gap-2 text-[0.875rem] text-[#1a1918] group-hover:text-[#cbb37c] transition-colors duration-500">
            <span>Read more</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              className="opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1"
            >
              <path 
                d="M1 6h10M7 2l4 4-4 4" 
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
        <div ref={containerRef} className="max-w-[720px] mx-auto px-8 sm:px-10 pt-32 md:pt-44 pb-32">
          {/* Page title */}
          <header className="mb-16 md:mb-20">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] leading-[1] tracking-[-0.04em] mb-5">
              Blog
            </h1>
            <p className="text-[#6b6966] leading-[1.8] max-w-[480px]">
              Thoughts on learning, tools, and the future.
            </p>
          </header>

          {/* Blog post previews */}
          <div className="space-y-2">
            {posts.map((post, index) => (
              <PostPreview key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Footer */}
          <footer className="reveal mt-32 md:mt-40 pt-10 border-t border-black/5">
            <div className="flex items-center justify-between">
              <span className="text-[0.6875rem] tracking-[0.08em] uppercase text-[#6b6966]/40">
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
