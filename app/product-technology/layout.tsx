import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product & Technology",
  description:
    "Products and systems designed for the intelligent age. Human Learning Lab builds adaptive learning tools and organizational AI infrastructure that transform knowledge into structured, usable intelligence.",
  openGraph: {
    title: "Product & Technology | Human Learning Lab",
    description:
      "Products and systems designed for the intelligent age. Human Learning Lab builds adaptive learning tools and organizational AI infrastructure that transform knowledge into structured, usable intelligence.",
    url: "https://humanlearninglab.com/product-technology/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/product-technology/",
  },
};

export default function ProductTechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
