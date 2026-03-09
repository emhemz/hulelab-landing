import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on learning, technology, and human judgment — from the team at Human Learning Lab.",
  openGraph: {
    title: "Blog | Human Learning Lab",
    description:
      "Thoughts on learning, technology, and human judgment — from the team at Human Learning Lab.",
    url: "https://humanlearninglab.com/blog/",
    type: "website",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/blog/",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
