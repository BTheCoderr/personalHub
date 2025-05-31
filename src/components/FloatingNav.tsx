'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, User, Briefcase, Mail, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '#top' },
  { icon: User, label: 'About', href: '#social' },
  { icon: Star, label: 'Skills', href: '#skills' },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('top');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'social', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'top' ? '' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      style={{ y }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className={`block w-12 h-12 rounded-full flex items-center justify-center mb-2 last:mb-0 transition-all duration-300 group relative ${
              activeSection === item.href.slice(1) || (item.href === '#top' && activeSection === 'top')
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon size={18} />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap pointer-events-none"
            >
              {item.label}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
} 