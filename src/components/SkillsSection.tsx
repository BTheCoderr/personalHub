'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo']
  },
  {
    title: 'Tools & DevOps',
    icon: Code,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions']
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase']
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Prototyping']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
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

export default function SkillsSection() {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Technical Skills
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.bgColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} className={category.color} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
            </div>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')}`} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 