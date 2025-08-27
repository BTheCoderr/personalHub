'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // EmailJS configuration - Replace with your actual values from EmailJS dashboard
      const serviceId = 'service_fcb4hs4'; // PASTE YOUR SERVICE ID HERE (from Email Services)
      const templateId = 'template_ojxxmkm'; // PASTE YOUR TEMPLATE ID HERE (from Email Templates)
      const publicKey = 'cBkM5RSjmNp8xBVpE'; // ✅ Already set with your actual public key

      const templateParams = {
        name: formData.name, // Matches {{name}} in your template
        email: formData.email, // Sender's email
        message: formData.message, // Matches {{message}} in your template
        time: new Date().toLocaleString(), // Matches {{time}} in your template - current timestamp
        to_email: 'bferrell514@gmail.com', // Your email where you want to receive messages
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again or email me directly at bferrell514@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Message Sent! 🎉
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Let&apos;s Connect! 🤝
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Got a project idea, collaboration opportunity, or just want to chat? 
          Drop me a line and let&apos;s make something awesome together!
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
          <textarea
            name="message"
            placeholder="Tell me about your project, idea, or just say hi! 👋"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
            rows={5}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-all duration-300 resize-none disabled:opacity-50"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={isLoading ? {} : { scale: 1.02, y: -2 }}
          whileTap={isLoading ? {} : { scale: 0.98 }}
        >
          <Send size={20} />
          <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Or email me directly at{' '}
          <a href="mailto:bferrell514@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            bferrell514@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
} 