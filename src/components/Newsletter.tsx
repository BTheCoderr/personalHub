'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Star, Gift } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  'Weekly development tips and tricks',
  'Early access to new content',
  'Exclusive project resources',
  'Behind-the-scenes insights'
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

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <Star size={24} className="animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Gift size={20} className="animate-bounce" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <Mail size={16} className="animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
            <Mail size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Stay in the Loop!
          </h2>
          <p className="text-blue-100 max-w-md mx-auto">
            Join my newsletter for the latest updates, tutorials, and exclusive content delivered straight to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center">
              <Gift size={18} className="mr-2" />
              What you&apos;ll get:
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-sm text-blue-100"
                >
                  <Star size={14} className="mr-2 text-yellow-300" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-2">
                  <Send size={24} />
                </div>
                <p className="font-semibold">Thanks for subscribing!</p>
                <p className="text-sm text-blue-100">Check your email for confirmation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <motion.button
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} />
                    <span>Subscribe</span>
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-blue-200">
            No spam, unsubscribe at any time. Your email is safe with me.
          </p>
        </div>
      </div>
    </motion.div>
  );
} 