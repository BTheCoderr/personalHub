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
    url: 'https://github.com/baheemferrell',
    icon: Github,
    color: 'hover:bg-gray-700 hover:text-white',
    description: 'Open source projects & code'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@baheemferrell',
    icon: Youtube,
    color: 'hover:bg-red-600 hover:text-white',
    description: 'Videos & tutorials'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/baheemferrell',
    icon: Twitter,
    color: 'hover:bg-blue-500 hover:text-white',
    description: 'Thoughts & quick updates'
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/baheemferrell',
    icon: Twitch,
    color: 'hover:bg-purple-600 hover:text-white',
    description: 'Live streaming & gaming'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@baheemferrell',
    icon: TikTokIcon,
    color: 'hover:bg-black hover:text-white',
    description: 'Short form content & creativity'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/baheemferrell',
    icon: Linkedin,
    color: 'hover:bg-blue-700 hover:text-white',
    description: 'Professional networking'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/baheemferrell',
    icon: Instagram,
    color: 'hover:bg-pink-600 hover:text-white',
    description: 'Behind the scenes & lifestyle'
  }
];

const projects = [
  {
    title: 'Project One',
    description: 'Description of your awesome project that showcases your skills.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/your-username/project-one',
    demo: 'https://project-one-demo.com'
  },
  {
    title: 'Project Two',
    description: 'Another amazing project that demonstrates your expertise.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/your-username/project-two',
    demo: 'https://project-two-demo.com'
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                {/* Replace with your actual image */}
                BF
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Baheem Ferrell
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Content Creator & Digital Explorer
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Creating from anywhere</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe size={16} />
                <span>Always exploring</span>
              </div>
            </div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Hey, I'm Baheem! 👋 Multi-passionate creator sharing my journey through tech, gaming, and life. 
              Always down to try new things and connect with awesome people. Come hang out and let's explore 
              new adventures together!
            </p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants}>
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
          <SkillsSection />

          {/* Featured Projects */}
          <motion.div variants={itemVariants}>
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
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech and creativity.
            </p>
            <motion.a
              href="mailto:baheem@example.com"
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
