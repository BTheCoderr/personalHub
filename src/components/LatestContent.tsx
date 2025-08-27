'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, BookOpen, Code } from 'lucide-react';

const contentItems = [
  {
    type: 'project',
    title: 'Lozada Languages',
    description: 'Professional interpreting and translation services website for Rhode Island and Massachusetts. NCSC-certified interpreters for court, medical, and community settings.',
    date: '1 week ago',
    thumbnail: '/api/placeholder/300/200',
    link: 'https://lozadalanguages.netlify.app/',
    icon: Code,
    platform: 'Professional Services'
  },
  {
    type: 'project',
    title: 'APC LLC - Delivery Services Platform',
    description: 'All Purpose Contractors cargo van delivery and moving services website with nationwide coverage and 24/7 booking system.',
    date: '3 weeks ago',
    thumbnail: '/api/placeholder/300/200',
    link: 'https://apcllc.co/',
    icon: Code,
    platform: 'Logistics'
  },
  {
    type: 'project',
    title: 'VesalVisuals Creative Portfolio',
    description: 'Creative visual design and multimedia platform showcasing professional design work and visual storytelling services.',
    date: '1 month ago',
    thumbnail: '/api/placeholder/300/200',
    link: 'https://vesalvisuals.com/',
    icon: BookOpen,
    platform: 'Design'
  }
];

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

export default function LatestContent() {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Latest Content
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentItems.map((item) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl opacity-20">
                <item.icon size={64} />
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                {item.platform}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.platform}</span>
                </div>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
} 