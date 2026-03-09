import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Positioning",
  description:
    "Building adaptive strength in individuals and institutions. Human Learning Lab helps people, teams, and organizations develop the structures, habits, and systems that turn learning into long-term strategic advantage.",
  openGraph: {
    title: "Strategic Positioning | Human Learning Lab",
    description:
      "Building adaptive strength in individuals and institutions. Human Learning Lab helps people, teams, and organizations develop the structures, habits, and systems that turn learning into long-term strategic advantage.",
    url: "https://humanlearninglab.com/strategic-positioning/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/strategic-positioning/",
  },
};

export default function StrategicPositioningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
