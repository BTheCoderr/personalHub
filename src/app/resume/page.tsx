import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Résumé | Baheem Ferrell', alternates: { canonical: '/resume' } };

export default function Resume() {
  return <main className="resume wrap">
    <nav className="resume-toolbar" aria-label="Résumé navigation"><Link href="/">← Back to portfolio</Link><span>Print or save as PDF using your browser</span></nav>
    <h1>Baheem Ferrell</h1>
    <p>Full-Stack Software Engineer<br/>Providence, RI · <a href="mailto:bferrell514@gmail.com">bferrell514@gmail.com</a><br/><a href="https://github.com/BTheCoderr">GitHub</a> · <a href="https://www.linkedin.com/in/baheem-ferrell-866122101/">LinkedIn</a> · <a href="https://bthedream.netlify.app">Portfolio</a></p>
    <h2>Summary</h2>
    <p>Software engineer building responsive web applications with React, Next.js, TypeScript, and PostgreSQL. Experience spans product workflows, API integrations, authentication, deployment, and enterprise software support.</p>
    <h2>Technical skills</h2>
    <p>React · Next.js · TypeScript · JavaScript · Tailwind CSS · Node.js · REST APIs · Supabase · PostgreSQL · Git · GitHub · Netlify</p>
    <h2>Experience</h2>
    <article><h3>SmartProBono · Founder / Product Engineering</h3><p>Jan 2025–present</p><ul><li>Build Legal + IP preparation workflows for guided intake, readiness profiles, document preparation, account workspaces, and professional handoff.</li><li>Own application interfaces, API integrations, debugging, QA, and releases.</li></ul></article>
    <article><h3>Independent Full-Stack Developer · Freelance / Client Projects</h3><p>2021–present</p><ul><li>Build and deploy responsive web applications and client websites from requirements through production.</li><li>Implement forms, service pages, application workflows, and integrations using React, Next.js, TypeScript, and modern CSS.</li></ul></article>
    <article><h3>MEDITECH · Software Support Specialist</h3><p>Mar 2022–Jul 2025</p><ul><li>Investigated production issues in enterprise healthcare software, reproduced failures, and documented findings.</li><li>Coordinated resolutions with customers and engineering teams across concurrent support cases.</li></ul></article>
    <article><h3>MojoTech · Software Development Intern</h3><p>May 2019–Dec 2021</p><ul><li>Contributed to web application features, debugging, testing, source control, QA, and team development workflows.</li></ul></article>
    <h2>Selected projects</h2>
    <p><a href="https://smartprobono.org">SmartProBono</a>: Legal + IP preparation workflows, structured intake, document exports, and professional handoff.<br/><a href="https://usepraxisot.com">Praxis OT</a>: School-based occupational therapy evaluation workspace using Next.js, Supabase authentication, PostgreSQL, private storage, and report exports.<br/><a href="https://show-your-hand.netlify.app">Show Your Hand</a>: Original card game with solo play and online 1v1 multiplayer, server-controlled state, hidden hands, scoring, and explicit attack/defense resolution.</p>
    <h2>Education</h2>
    <p>University of Rhode Island<br/>B.A., Computer & Data Science · Minor in Business</p>
  </main>;
}
