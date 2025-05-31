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
  keywords: ["content creator", "digital hustler", "tech", "gaming", "coding", "Providence RI", "baheem ferrell"],
  authors: [{ name: "Baheem Ferrell" }],
  openGraph: {
    title: "Baheem Ferrell - Content Creator & Digital Hustler",
    description: "Multi-passionate creator sharing my journey through tech, gaming, and building cool stuff.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baheem Ferrell - Content Creator & Digital Hustler",
    description: "Multi-passionate creator sharing my journey through tech, gaming, and building cool stuff.",
    creator: "@bthecoderr",
  },
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
