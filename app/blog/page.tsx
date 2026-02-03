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
    slug: "intelligence-and-action-space",
    date: "January 2026",
    title: "Intelligence and Action Space",
    excerpt: "An intelligent system is one that, given its time horizon, moves toward actions that expand its future action space.",
  },
  {
    slug: "the-forgetting-curve",
    date: "January 2026",
    title: "The Forgetting Curve",
    excerpt: "We forget almost everything we learn. Understanding why is the first step to building better tools for retention.",
  },
  {
    slug: "active-recall",
    date: "January 2026",
    title: "Active Recall",
    excerpt: "The most effective learning strategy isn't re-reading or highlighting. It's forcing yourself to retrieve information.",
  },
  {
    slug: "consumption-vs-learning",
    date: "January 2026",
    title: "Consumption vs. Learning",
    excerpt: "We consume more content than ever before. But it's easy to forget the difference between consuming and learning.",
  },
  {
    slug: "the-spacing-effect",
    date: "January 2026",
    title: "The Spacing Effect",
    excerpt: "Learning the same amount of material spread over time is far more effective than cramming. Here's why.",
  },
  {
    slug: "context-and-memory",
    date: "January 2026",
    title: "Context and Memory",
    excerpt: "Where you learn something affects how well you remember it. Context is more powerful than we think.",
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
      className="group reveal block h-full"
    >
      <article className="relative h-full py-6">
        {/* Number badge */}
        <div className="absolute top-6 right-0 text-[3rem] font-serif leading-none text-[#1a1918]/5 dark:text-white/5 transition-colors duration-500 select-none">
          0{index + 1}
        </div>
        
        <div className="relative">
          {/* Date */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 font-medium">
              {post.date}
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#cbb37c]/20 via-[#cbb37c]/40 to-transparent" />
          </div>

          {/* Title */}
          <h2 className="text-[1.75rem] sm:text-[2rem] mb-5 leading-[1.15] tracking-tight dark:text-fg">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-[#6b6966] dark:text-fg/70 text-[1.0625rem] leading-[1.8] mb-8">
            {post.excerpt}
          </p>

          {/* Read more link */}
          <div className="inline-flex items-center gap-2 text-[0.9375rem] text-[#cbb37c] dark:text-accent font-medium">
            <span>Read article</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              className="opacity-60"
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
