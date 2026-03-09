import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const BASE = "https://humanlearninglab.com";
const DEFAULT_TITLE = "Human Learning Lab";
const DEFAULT_DESCRIPTION =
  "We explore how people learn. We build tools based on what we find. Based in Sandvika, Norway.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Human Learning Lab",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Human Learning Lab",
    locale: "en_US",
    url: `${BASE}/`,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/luna.png",
        width: 1200,
        height: 630,
        alt: "Human Learning Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/luna.png"],
  },
  alternates: {
    canonical: `${BASE}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Human Learning Lab",
  url: BASE,
  logo: `${BASE}/logo.svg`,
  description: DEFAULT_DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    addressLocality: "Sandvika",
    addressCountry: "NO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "christian@hulelab.com",
    contactType: "general",
  },
  sameAs: [
    "https://www.linkedin.com/company/humanlearninglab/",
  ],
  member: [
    { "@type": "Person", name: "Christian Løken", jobTitle: "CEO" },
    { "@type": "Person", name: "Anders Sverdrup-Dahl", jobTitle: "CFO" },
    { "@type": "Person", name: "Rasmus Køstner", jobTitle: "Neurobiologist" },
    { "@type": "Person", name: "Benjamin Nærø", jobTitle: "Fullstack Developer" },
    { "@type": "Person", name: "Emilie Hemsett", jobTitle: "UX Designer" },
  ],
  knowsAbout: [
    "Human learning",
    "Neuroscience of learning",
    "Learning technology",
    "Organizational learning",
    "Artificial intelligence in education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${sourceSerif.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
