import Link from 'next/link';

export default function NotFound() {
  return <main className="resume wrap">
    <p className="eyebrow">404 / NOT FOUND</p>
    <h1>This page isn’t here.</h1>
    <p>The portfolio is still available.</p>
    <Link className="button primary" href="/">Back to portfolio</Link>
  </main>;
}
