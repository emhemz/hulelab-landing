import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";

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
  "the-forgetting-curve": {
    slug: "the-forgetting-curve",
    date: "January 2026",
    title: "The Forgetting Curve",
    content: `In 1885, Hermann Ebbinghaus discovered something important: we forget almost everything we learn.

He tested himself by memorizing nonsense syllables and measuring how much he remembered over time. The curve was steep. Within 24 hours, he'd forgotten about 70% of what he learned. Within a week, almost everything was gone.

This isn't a flaw. It's a feature. Our brains evolved to filter information, not store everything. If you remembered every conversation, every face, every moment, you'd drown in noise.

But the forgetting curve shows something else: forgetting isn't linear. The rate of decay slows down over time. What you remember after a month will stay with you much longer than what you remember after a day.

This means the best time to review something isn't right after you learn it. It's right before you forget it. If you wait too long, it's gone. If you review too soon, you're wasting effort.

That's why spaced repetition works. It fights the forgetting curve at the optimal moment—when the memory is fading but still retrievable.

Most learning tools ignore this. They present information once and assume it sticks. But if we're serious about retention, we need systems that work with the curve, not against it.`,
  },
  "active-recall": {
    slug: "active-recall",
    date: "January 2026",
    title: "Active Recall",
    content: `The most effective learning strategy isn't re-reading, highlighting, or summarizing. It's active recall: forcing yourself to retrieve information from memory.

The research is overwhelming. Students who test themselves remember far more than students who just review their notes. The gap isn't small. It's massive—often 50% better retention or more.

Why does it work? Because retrieval is practice. Every time you pull something from memory, you strengthen that connection. It's like a muscle. The more you use it, the stronger it gets.

But most people avoid recall because it feels harder. Re-reading is comfortable. Testing yourself is uncomfortable. You have to confront what you don't know.

That discomfort is the point. It's called "desirable difficulty." The harder your brain has to work to retrieve something, the better it sticks.

This is why passive learning doesn't work. Watching a video, reading an article, listening to a podcast—it feels like learning, but most of it evaporates. Without retrieval, there's no reinforcement.

The best tools for learning should make recall easy to do and hard to avoid. They should interrupt you with questions. Challenge you to explain what you just heard. Force you to engage.

If you're not retrieving, you're not really learning.`,
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
  "the-spacing-effect": {
    slug: "the-spacing-effect",
    date: "January 2026",
    title: "The Spacing Effect",
    content: `If you have 6 hours to learn something, should you do it all at once or spread it across multiple days?

The research is clear: spacing wins. Learning the same amount of material over time is far more effective than cramming. It's called the spacing effect, and it's one of the most robust findings in cognitive psychology.

Why does it work? Because memory is strengthened by retrieval. When you return to material after a delay, you have to work to recall it. That effort reinforces the memory.

When you cram, you're not retrieving—you're just reviewing. The information is still fresh, so recall is easy. But easy recall doesn't build strong memories.

Spacing also allows for consolidation. Sleep plays a critical role in memory formation. When you spread learning across days, you give your brain time to process and integrate new information.

But cramming still dominates education. Students study the night before exams. Professionals binge courses right before deadlines. It works for passing tests, but it doesn't work for retention.

The problem is that spacing requires planning. You can't start the day before. You need systems that distribute learning over time and bring material back at the right moments.

That's the kind of tool we want to build. One that respects how memory actually works and makes spacing effortless.`,
  },
  "context-and-memory": {
    slug: "context-and-memory",
    date: "January 2026",
    title: "Context and Memory",
    content: `In 1975, researchers did an unusual study. They had scuba divers memorize lists of words—some on land, some underwater. Later, they tested recall in both environments.

The result: divers who learned underwater remembered better underwater. Divers who learned on land remembered better on land. Context mattered.

This isn't unique to extreme environments. It happens everywhere. The room you study in, the music you listen to, even your mood—all of these things become part of the memory.

When you try to recall something, your brain uses context as a cue. If the context matches, retrieval is easier. If it doesn't, the memory feels distant.

This is why students struggle on exams. They study at home, with music, relaxed. The exam room is silent, sterile, high-pressure. The mismatch makes recall harder.

It's also why place-based learning is so effective. When you link information to a specific location, you give yourself extra cues. Memory palaces work because they anchor abstract ideas to vivid spatial contexts.

But here's the flip side: if you always learn in the same context, your memory becomes dependent on it. To build robust knowledge, you need varied contexts. Study in different places. Review at different times. Test yourself in different moods.

The goal is to make your knowledge context-independent—accessible no matter where you are or what state you're in.

Good learning tools should vary the context, not reinforce a single one.`,
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

      {/* Global Header */}
      <Header />

      <main className="relative z-10 min-h-screen">
        <div className="max-w-[900px] mx-auto px-10 sm:px-16 pt-32 md:pt-44 pb-32">
          {/* Back to blog button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 mb-10 text-[0.875rem] text-[#6b6966] hover:text-[#cbb37c] transition-colors duration-300 group"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path 
                d="M10 12L6 8l4-4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to all posts</span>
          </Link>

          <article>
            {/* Meta */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-[#cbb37c]/70 dark:text-[#d4be8a]/70">
                {post.date}
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-[#1a1918]/20 to-transparent dark:from-[#d4be8a]/20" />
            </div>

            {/* Title */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] mb-12 md:mb-16 leading-[1.05] tracking-[-0.03em] dark:text-fg">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-custom max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[#6b6966] dark:text-fg/70 leading-[1.8] mb-6 text-[1.0625rem]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Navigation */}
          <footer className="mt-20 md:mt-28 pt-10 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="text-[0.875rem] text-[#6b6966] hover:text-[#cbb37c] dark:text-fg/70 dark:hover:text-accent transition-colors duration-300">
                ← All posts
              </Link>
              <Link href="/" className="text-[0.875rem] text-[#6b6966] hover:text-[#cbb37c] dark:text-fg/70 dark:hover:text-accent transition-colors duration-300">
                Home
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
