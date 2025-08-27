'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Youtube, 
  Twitter, 
  Twitch, 
  ExternalLink,
  Linkedin,
  Instagram
} from 'lucide-react';
import StatsSection from '../components/StatsSection';
import LatestContent from '../components/LatestContent';
import SkillsSection from '../components/SkillsSection';
import Newsletter from '../components/Newsletter';
import HeroSection from '../components/HeroSection';
import FloatingNav from '../components/FloatingNav';
import ContactForm from '../components/ContactForm';
import ThemeToggle from '../components/ThemeToggle';

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/BTheCoderr',
    icon: Github,
    color: 'hover:bg-gray-700 hover:text-white',
    description: 'Open source projects & code'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCxSIx1jHikm4Z3q9aSxdyvw',
    icon: Youtube,
    color: 'hover:bg-red-600 hover:text-white',
    description: 'Videos & tutorials'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/bthecoderr',
    icon: Twitter,
    color: 'hover:bg-blue-500 hover:text-white',
    description: 'Thoughts & quick updates'
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/bthecoderr',
    icon: Twitch,
    color: 'hover:bg-purple-600 hover:text-white',
    description: 'Live streaming & gaming'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@bthedream_',
    icon: TikTokIcon,
    color: 'hover:bg-black hover:text-white',
    description: 'Short form content & creativity'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/baheem-ferrell-866122101/',
    icon: Linkedin,
    color: 'hover:bg-blue-700 hover:text-white',
    description: 'Professional networking'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bthedream_',
    icon: Instagram,
    color: 'hover:bg-pink-600 hover:text-white',
    description: 'Behind the scenes & lifestyle'
  }
];

const projects = [
  {
    title: 'Lagos Auto PVD',
    description: 'Professional automotive dealership platform with inventory management, service booking, and customer portal. Streamlining the car buying experience in Providence.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Automotive'],
    link: 'https://github.com/BTheCoderr/lagos-auto-pvd',
    demo: 'https://lagosauto.netlify.app'
  },
  {
    title: 'SmartProBono',
    description: 'Revolutionary platform connecting legal professionals with pro bono opportunities, streamlining access to justice for underserved communities.',
    tech: ['Next.js', 'TypeScript', 'Legal Tech', 'API Integration'],
    link: 'https://github.com/BTheCoderr/smartprobono',
    demo: 'https://smartprobono.org'
  },
  {
    title: 'MeetopiaApp',
    description: 'Modern social networking and meeting platform designed to bring people together through shared interests and meaningful connections.',
    tech: ['React Native', 'Mobile', 'Social Platform', 'Real-time'],
    link: 'https://github.com/BTheCoderr/meetopiaapp',
    demo: 'https://meetopia.vercel.app'
  },
  {
    title: 'Ownership T-Shirt Website',
    description: 'Custom e-commerce platform for premium streetwear and branded apparel, featuring modern design and seamless shopping experience.',
    tech: ['E-commerce', 'Web Design', 'JavaScript', 'Shopify/WooCommerce'],
    link: 'https://github.com/BTheCoderr/ownership-tshirt-website',
    demo: 'https://ownershiptshirt.netlify.app'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <ThemeToggle />
      <FloatingNav />
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Social Media Links */}
          <motion.section variants={itemVariants} id="social" aria-labelledby="social-heading">
            <h2 id="social-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Connect With Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 ${link.color} group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit ${link.name} - ${link.description}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-transparent transition-colors">
                      <link.icon size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-current" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-current">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-current">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-current" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <StatsSection />

          {/* Latest Content */}
          <LatestContent />

          {/* Skills Section */}
          <div id="skills">
            <SkillsSection />
          </div>

          {/* Featured Projects */}
          <motion.section variants={itemVariants} id="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <Newsletter />

          {/* Contact Section */}
          <motion.section variants={itemVariants} id="contact" aria-labelledby="contact-heading">
            <ContactForm />
          </motion.section>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center py-8"
          >
            <p className="text-gray-500 dark:text-gray-400">
              Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
