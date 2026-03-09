import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Human Learning Lab — a research and product company based in Sandvika, Norway, building learning systems grounded in neuroscience and AI.",
  openGraph: {
    title: "About | Human Learning Lab",
    description:
      "Meet the team behind Human Learning Lab — a research and product company based in Sandvika, Norway, building learning systems grounded in neuroscience and AI.",
    url: "https://humanlearninglab.com/about/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
