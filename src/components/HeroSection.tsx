'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Code, Zap } from 'lucide-react';
import Image from 'next/image';

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="inline-block"
  >
    {text}
  </motion.span>
);

interface IconProps {
  size?: number;
  className?: string;
}

const FloatingIcon = ({ icon: Icon, className }: { icon: React.ComponentType<IconProps>; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon size={20} className="text-blue-300 opacity-30" />
  </motion.div>
);

export default function HeroSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden"
    >
      {/* Floating Background Icons */}
      <FloatingIcon icon={Code} className="top-4 right-4" />
      <FloatingIcon icon={Zap} className="bottom-4 left-4" />
      <FloatingIcon icon={Globe} className="top-1/2 right-8" />

      {/* Profile Picture with Gradient Border */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full animate-pulse"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden m-1">
          <Image
            src="/profile-photo.JPG"
            alt="Baheem Ferrell - Content Creator & Digital Hustler"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Animated Name */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
        <AnimatedText text="Baheem" delay={0.2} />
        <span> </span>
        <AnimatedText text="Ferrell" delay={0.4} />
      </h1>

      {/* Animated Title with Gradient */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4"
      >
        Content Creator & Digital Hustler
      </motion.p>

      {/* Location & Status */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6"
      >
        <div className="flex items-center space-x-1">
          <MapPin size={16} />
          <span>Providence, RI</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Always exploring</span>
        </div>
      </motion.div>

      {/* Bio with Typewriter Effect */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Hey, I&apos;m Baheem! 👋 <span className="font-semibold text-purple-600 dark:text-purple-400">I am no coder, I&apos;m a hustler.</span> It just so happens I know how to code... 
        Multi-passionate creator from Providence, RI, sharing my journey through tech, gaming, and building cool stuff. 
        Always down to try new things and connect with awesome people. Let&apos;s build something amazing! 🚀
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Connect
        </motion.a>
      </motion.div>
    </motion.div>
  );
} 