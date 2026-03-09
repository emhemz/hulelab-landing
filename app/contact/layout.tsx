import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Human Learning Lab. We're open to conversations about learning, technology, and how humans grow.",
  openGraph: {
    title: "Contact | Human Learning Lab",
    description:
      "Get in touch with Human Learning Lab. We're open to conversations about learning, technology, and how humans grow.",
    url: "https://humanlearninglab.com/contact/",
  },
  alternates: {
    canonical: "https://humanlearninglab.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
