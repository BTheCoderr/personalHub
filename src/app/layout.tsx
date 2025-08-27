import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baheem Ferrell - Content Creator & Digital Hustler",
  description: "Multi-passionate creator from Providence, RI, sharing my journey through tech, gaming, and building cool stuff. Connect with me across all platforms!",
  keywords: ["content creator", "digital hustler", "tech", "gaming", "coding", "Providence RI", "baheem ferrell", "web developer", "react", "nextjs", "typescript"],
  authors: [{ name: "Baheem Ferrell" }],
  creator: "Baheem Ferrell",
  publisher: "Baheem Ferrell",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Baheem Ferrell - Content Creator & Digital Hustler",
    description: "Multi-passionate creator sharing my journey through tech, gaming, and building cool stuff.",
    type: "website",
    locale: "en_US",
    siteName: "Baheem Ferrell Portfolio",
    url: "https://baheemferrell.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baheem Ferrell - Content Creator & Digital Hustler",
    description: "Multi-passionate creator sharing my journey through tech, gaming, and building cool stuff.",
    creator: "@bthecoderr",
    site: "@bthecoderr",
  },
  alternates: {
    canonical: "https://baheemferrell.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
