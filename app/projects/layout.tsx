import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore what Human Learning Lab is building — from Luna, the podcast player designed for learning, to our broader research and product initiatives.",
  openGraph: {
    title: "Projects | Human Learning Lab",
    description:
      "Explore what Human Learning Lab is building — from Luna, the podcast player designed for learning, to our broader research and product initiatives.",
    url: "https://humanlearninglab.com/projects/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/projects/",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
