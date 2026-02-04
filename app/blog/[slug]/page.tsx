import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

// Blog post data (same as before, but with full content)
const posts = {
  "when-intelligence-scales-faster-than-judgment": {
    slug: "when-intelligence-scales-faster-than-judgment",
    date: "December 1, 2025",
    title: "When Intelligence Scales Faster Than Judgment",
    author: "Christian Løken",
    role: "CEO - Human Learning Lab",
    image: "/ChatGPT Image Feb 3, 2026, 01_18_13 PM.png",
    content: `Artificial intelligence is now outperforming humans on tasks we once associated with intelligence. It reasons, summarizes, plans, and solves problems at a scale and speed no individual can match. This has led to a growing fascination with scores, benchmarks, and comparisons. But intelligence, measured this way, is only part of the story.

What is scaling rapidly is not wisdom, judgment, or responsibility. It is pattern recognition and optimization. Machines are becoming extraordinarily capable at producing answers, but they do not bear the consequences of acting on them. Humans still do.

This creates a quiet but profound shift. When intelligence becomes abundant, the limiting factor moves elsewhere. The constraint is no longer cognitive horsepower, but the human capacity to interpret, contextualize, and decide. Knowing what to do with an answer becomes more important than producing it.

Learning, in this context, is not about becoming more intelligent in the traditional sense. It is about developing judgment under conditions of abundance. It is the ability to question outputs, to recognize when confidence is misplaced, and to slow down when systems encourage speed.

High intelligence without learning leads to automation of error. High intelligence without judgment leads to scale without direction. This is why learning cannot be treated as a personal improvement project or a training initiative. It becomes a collective capability that determines how technology is actually used.

At Human Learning Lab, we work from a simple premise: intelligence can be outsourced, but judgment cannot. The future will not belong to those with the smartest systems, but to those who learn how to use intelligence without surrendering responsibility.`,
  },
  "when-speed-outruns-understanding": {
    slug: "when-speed-outruns-understanding",
    date: "December 29, 2025",
    title: "When Speed Outruns Understanding",
    author: "Christian Løken",
    role: "CEO, Human Learning Lab",
    image: "/when-speed-outruns-understanding.png",
    content: `We live in a time where technology is developing faster than our ability to understand its consequences. Artificial intelligence intensifies this gap. Not because the technology is uncontrollable, but because the pace of change now exceeds the pace of human learning and reflection. This is not primarily a technological problem. It is a human and organizational one.

Humans are good at understanding relationships, weighing consequences, and exercising judgment. But these abilities require time. Time to orient, time to think, time to learn. Modern technological systems operate without such constraints. They update continuously, learn faster than we can follow, and produce outputs at a speed that turns reflection into a scarce resource. When organizations adopt such systems without adjusting how people learn, collaborate, and make decisions, a structural imbalance emerges. The systems accelerate. The humans lag behind.

The problem today is rarely a lack of information. We have access to analyses, predictions, and recommendations in real time. Yet many leaders and teams experience growing uncertainty. This is not because we know too little, but because information is fragmented, connections are unclear, and decisions must be made before understanding is fully formed. Artificial intelligence can provide answers and suggest actions, but understanding cannot be outsourced.

AI systems learn continuously through data and feedback. They optimize and improve without pause. Humans learn differently. We need context, meaning, reflection, and dialogue. When this difference is ignored, something fundamental happens. Decisions are made on an increasingly narrow human foundation, even when supported by advanced systems. The result can be efficiency without insight, speed without direction, and decisions that are technically correct but humanly weak.

Traditionally, learning has been treated as something that happens before or after work, through courses, training, and competence programs. In an exponential reality, this is too late. Learning must happen alongside action, close to decisions, and as an integrated part of everyday work. This is especially true for leaders and teams operating in complex environments. Not because they must understand every technology in detail, but because they must be able to orient quickly, ask better questions, and understand what is at stake.

As speed increases, so do the consequences of error. Small misunderstandings can be amplified rapidly. Assumptions can be built into systems and repeated at scale. The ability to learn quickly and accurately has therefore become a core capability. Not only for individuals, but for entire organizations. Learning is no longer only about development. It is about robustness, judgment, and responsibility.

Artificial intelligence opens up enormous possibilities. But these possibilities are realized only if humans are able to understand, use, and govern the technology responsibly. That requires new ways of thinking about learning. Not as an add-on, but as a foundational structure that enables sound action in a rapidly changing world. The question is not how fast technology becomes. The question is whether humans and organizations learn fast enough to keep up.

Human Learning Lab works with precisely this challenge: how people, teams, and organizations can develop orientation, judgment, and learning capacity in the face of accelerating technology. Not to slow development, but to ensure that humans remain capable of understanding it.`,
  },
};

// Generate static paths for all blog posts
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Subtle grain */}
      <div className="grain" />

      {/* Force solid text colors and prevent dark styling in light mode */}
      <style>{`
        html:not(.dark) #blog-article {
          background-color: #ffffff !important;
          color: #1a1918 !important;
        }
        html.dark #blog-article {
          background-color: #0f0f0f !important;
          color: #e8e6e2 !important;
        }
        #blog-article * {
          opacity: 1 !important;
          transform: none !important;
        }
        #blog-article p,
        #blog-article h1,
        #blog-article span,
        #blog-article div {
          color: inherit !important;
        }
        
        /* Force footer and back button colors in light mode */
        html:not(.dark) .blog-back-button {
          color: #1a1918 !important;
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(16px) !important;
        }
        html:not(.dark) .blog-back-button:hover {
          color: #cbb37c !important;
        }
        html:not(.dark) .blog-back-button svg {
          color: #1a1918 !important;
        }
        html:not(.dark) .blog-back-button:hover svg {
          color: #cbb37c !important;
        }
        html:not(.dark) .blog-footer-link {
          color: #6b6966 !important;
        }
        html:not(.dark) .blog-footer-link:hover {
          color: #cbb37c !important;
        }
        html:not(.dark) .blog-footer-text {
          color: rgba(107, 105, 102, 0.4) !important;
        }
        html:not(.dark) #blog-footer {
          background-color: #ffffff !important;
        }
        html:not(.dark) .blog-footer-link svg {
          color: #6b6966 !important;
        }
        html:not(.dark) .blog-footer-link:hover svg {
          color: #cbb37c !important;
        }
      `}</style>

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        {/* Hero Section with fullscreen image */}
        <div className="relative">
          {/* Back button - floating over hero */}
          <div className="absolute top-8 left-0 right-0 z-20 pt-24 md:pt-32">
            <div className="max-w-[1400px] mx-auto px-10 sm:px-16">
              <Link 
                href="/blog"
                className="blog-back-button inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 dark:bg-black/70 backdrop-blur-md border border-[#1a1918]/10 dark:border-white/20 text-[0.875rem] dark:text-fg hover:border-[#cbb37c]/30 transition-all duration-300 group shadow-lg font-medium"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 12L6 8l4-4" />
                </svg>
                <span>All posts</span>
              </Link>
            </div>
          </div>

          {/* Featured Image Hero - Fullscreen */}
          {'image' in post && post.image && (
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <article id="blog-article" className="relative bg-white dark:bg-[#0f0f0f]">
          <div className="max-w-[800px] mx-auto px-10 sm:px-12 pt-16 pb-16">
            {/* Meta and Title */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c] dark:text-[#d4be8a] font-medium">
                  {post.date}
                </span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#cbb37c]/40 to-transparent" />
              </div>

              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] mb-0 leading-[1.05] tracking-[-0.03em] font-serif">
                {post.title}
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-16">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p 
                  key={i} 
                  className="leading-[1.85] text-[1.0625rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Card */}
            {'author' in post && post.author && (
              <div className="bg-gradient-to-br from-[#cbb37c]/5 to-transparent dark:from-[#cbb37c]/10 dark:to-transparent rounded-2xl p-8 border border-[#cbb37c]/20 dark:border-[#cbb37c]/20 mb-16">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#cbb37c]/30 to-[#cbb37c]/10 flex items-center justify-center">
                    <span className="text-2xl font-serif text-[#cbb37c]">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-medium text-[#1a1918] dark:text-fg mb-1">
                      {post.author}
                    </p>
                    {'role' in post && post.role && (
                      <p className="text-[0.9375rem] text-[#6b6966] dark:text-fg/70">
                        {post.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </article>

        {/* Footer */}
        <footer id="blog-footer" className="bg-white dark:bg-[#0f0f0f] border-t border-[#1a1918]/10 dark:border-white/10">
          <div className="max-w-[800px] mx-auto px-10 sm:px-12 py-12">
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/blog" 
                className="blog-footer-link inline-flex items-center gap-2 text-[0.875rem] dark:text-fg/70 dark:hover:text-accent transition-colors duration-300 font-medium group"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 12L6 8l4-4" />
                </svg>
                All posts
              </Link>
              <Link 
                href="/" 
                className="blog-footer-link text-[0.875rem] dark:text-fg/70 dark:hover:text-accent transition-colors duration-300 font-medium"
              >
                Home
              </Link>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-[#1a1918]/5 dark:border-white/5">
              <span className="blog-footer-text text-[0.6875rem] tracking-[0.08em] uppercase dark:text-fg/40">
                Human Learning Lab
              </span>
              <span className="blog-footer-text text-[0.6875rem] tracking-[0.08em] uppercase dark:text-fg/40">
                Oslo
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
