import type { Metadata } from 'next';
import './globals.css';
const title = 'Baheem Ferrell | Full-Stack Software Engineer';
const description = 'Software engineer in Providence, Rhode Island. Explore React, Next.js, TypeScript, and PostgreSQL projects, engineering experience, and résumé.';
export const metadata: Metadata = {
  metadataBase: new URL('https://bthedream.netlify.app'),
  title, description, authors: [{ name: 'Baheem Ferrell' }],
  alternates: { canonical: '/' },
  openGraph: { title, description, type: 'website', url: '/', siteName: 'Baheem Ferrell', locale: 'en_US', images: [{ url: '/profile-photo.JPG', alt: 'Baheem Ferrell' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/profile-photo.JPG'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
