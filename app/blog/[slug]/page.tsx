"use client";

import Link from "next/link";
import { useEffect, useRef, use } from "react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

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

// Blog post data (same as before, but with full content)
const posts = {
  "intelligence-and-action-space": {
    slug: "intelligence-and-action-space",
    date: "January 2026",
    title: "Intelligence and Action Space",
    content: `An intelligent system is one that, given its time horizon, moves toward actions that expand its future action space.

This is a definition that differs from how we usually think about intelligence. We often measure IQ, problem-solving, or memory. But maybe intelligence is more about keeping doors open.

A system that only optimizes for short-term goals often closes off future possibilities. It does what gives the most return now, without thinking about what it costs later. An intelligent system does the opposite: it keeps the possibility space open as long as possible.

This applies to both humans and machines. Learning something new, building relationships, staying in good physical shape—all of these things expand your action space. They give you more choices later.

Maybe this is a better way to think about learning too. Not as accumulation of facts, but as expansion of action space. The more you learn, the more choices you have. The better you get at thinking, the more problems you can solve.

Intelligence is freedom in the future.`,
  },
  "consumption-vs-learning": {
    slug: "consumption-vs-learning",
    date: "January 2026",
    title: "Consumption vs. Learning",
    content: `We consume more content than ever before. Short videos, reels, stories, threads. Everything is designed to hold our attention for seconds, not minutes.

It's not necessarily bad. Some of these formats are really good at communicating ideas quickly. But it's easy to forget the difference between consuming and learning.

When you watch a 30-second video about a complex topic, it feels like you're learning. But learning requires more than exposure. It requires reflection, repetition, and integration with what you already know.

What we need is not less content, but better tools for transforming content into learning. Ways to take what we see and turn it into something we actually remember and can use.

That's why we're building Luna. A podcast player that takes learning seriously. That helps you go from passive listening to active understanding.

Content isn't the problem. The problem is that we treat all content the same, when some of it actually deserves more attention.`,
  },
  "ai-in-ten-years": {
    slug: "ai-in-ten-years",
    date: "January 2026",
    title: "AI in Ten Years",
    content: `In 10 years, AI will be less visible but more integrated.

Today we talk about AI as a tool. Something you open, ask questions to, and get answers from. But that's not how technology usually ends up. The best tools disappear into the background.

In 10 years, AI won't be a chatbot. It will be a layer beneath everything you do. A context engine that understands what you're trying to achieve and helps you get there.

It won't feel magical. It will feel obvious. Just like autocorrect feels obvious now, even though it would have been science fiction 30 years ago.

But what won't be obvious is how this affects learning. If AI can always give you the answer, why learn anything?

The answer is that learning isn't about having answers. It's about building mental models that let you navigate the world. AI can give you facts, but it can't give you understanding.

Those who actively learn—who build deep models of how things work—will have a big advantage. Not because they know more than AI, but because they know how to use it.

In 10 years, the best learning tools won't be the ones that give you answers. They'll be the ones that help you ask better questions.`,
  },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const containerRef = useReveal();
  const { slug } = use(params);
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Subtle grain */}
      <div className="grain" />

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        <div ref={containerRef} className="max-w-[720px] mx-auto px-8 sm:px-10 pt-32 md:pt-44 pb-32">
          <article className="reveal">
            {/* Meta */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70">
                {post.date}
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-[#1a1918]/20 to-transparent" />
            </div>

            {/* Title */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] mb-12 md:mb-16 leading-[1.05] tracking-[-0.03em]">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-custom max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[#6b6966] leading-[1.8] mb-6 text-[1.0625rem]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Navigation */}
          <footer className="reveal mt-20 md:mt-28 pt-10 border-t border-black/5">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="link-hover text-[0.875rem]">
                ← All posts
              </Link>
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
