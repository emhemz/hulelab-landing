import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LARPA",
  description:
    "LARPA — Learning Advanced Research Project Agency. An open engine for breakthrough learning innovation. We identify, fund, and build ambitious learning technologies.",
  openGraph: {
    title: "LARPA | Human Learning Lab",
    description:
      "LARPA — Learning Advanced Research Project Agency. An open engine for breakthrough learning innovation. We identify, fund, and build ambitious learning technologies.",
    url: "https://humanlearninglab.com/larpa/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/larpa/",
  },
};

export default function LarpaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
