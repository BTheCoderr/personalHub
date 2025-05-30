'use client';

import { motion } from 'framer-motion';
import { Users, Eye, Heart, Star } from 'lucide-react';

const stats = [
  {
    label: 'Total Followers',
    value: '10K+',
    icon: Users,
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    label: 'Content Views',
    value: '500K+',
    icon: Eye,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    label: 'Projects Built',
    value: '25+',
    icon: Star,
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    label: 'Community Love',
    value: '50K+',
    icon: Heart,
    color: 'text-red-600 dark:text-red-400'
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

export default function StatsSection() {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Impact & Reach
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 