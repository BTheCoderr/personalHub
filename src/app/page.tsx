'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Youtube, 
  Twitter, 
  Twitch, 
  ExternalLink,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Instagram
} from 'lucide-react';
import Image from 'next/image';
import StatsSection from '../components/StatsSection';
import LatestContent from '../components/LatestContent';
import SkillsSection from '../components/SkillsSection';
import Newsletter from '../components/Newsletter';
import HeroSection from '../components/HeroSection';
import FloatingNav from '../components/FloatingNav';

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
    title: 'The Rounders',
    description: 'Professional-grade sports betting analytics platform with real-time odds tracking, sharp movement detection, and advanced statistical analysis.',
    tech: ['Python', 'Analytics', 'Real-time Data'],
    link: 'https://github.com/BTheCoderr/theRounders',
    demo: 'https://github.com/BTheCoderr/theRounders'
  },
  {
    title: 'ChessUniverseApp',
    description: 'Feature-rich multiplayer chess platform with real-time gameplay, AI opponents, puzzle solving, and game analysis built with modern web technologies.',
    tech: ['JavaScript', 'Node.js', 'Socket.IO', 'MongoDB'],
    link: 'https://github.com/BTheCoderr/chessUniverseApp',
    demo: 'https://github.com/BTheCoderr/chessUniverseApp'
  },
  {
    title: 'Extra Set Of Mitts',
    description: 'Comprehensive Flutter application for managing residential cleaning services with job scheduling, task management, and earnings monitoring.',
    tech: ['Flutter', 'Dart', 'Mobile App'],
    link: 'https://github.com/BTheCoderr/extra_set_of_mitts',
    demo: 'https://github.com/BTheCoderr/extra_set_of_mitts'
  },
  {
    title: 'okay(K)',
    description: 'Modern artist website built with Next.js 14 and Tailwind CSS, featuring music playback, gallery, and social integration.',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/BTheCoderr/okay-k',
    demo: 'https://okay-k.netlify.app'
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
      <FloatingNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Social Media Links */}
          <motion.div variants={itemVariants} id="social">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Connect With Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 ${link.color} group`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
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
          <motion.div variants={itemVariants} id="projects">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
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
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
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
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
            id="contact"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech and creativity.
            </p>
            <motion.a
              href="mailto:contact@baheemferrell.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

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
      </div>
    </div>
  );
}
