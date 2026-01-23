import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const basePath = process.env.NODE_ENV === 'production' ? '/hulelab-landing' : '';

export const metadata: Metadata = {
  title: "Human Learning Lab",
  description: "We explore how people learn. We build tools based on what we find.",
  icons: {
    icon: [
      { url: `${basePath}/logo.svg`, type: 'image/svg+xml' },
    ],
    apple: `${basePath}/logo.svg`,
    shortcut: `${basePath}/logo.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSerif.variable} ${inter.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
