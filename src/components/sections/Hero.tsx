// src/components/sections/Hero.ts

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { personalInfo, socialLinks } from '@/lib/data';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl text-slate-600 mb-6"
          >
            {personalInfo.title}
          </motion.p>

          {/* UPDATED: AEO-optimized bio - 40-60 word answer chunk */}
          {/* This is extractable by AI while remaining natural for humans */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.objective}
          </motion.p>

          {/* ADDED: Hidden semantic content for AI crawlers - NOT visible to users */}
          {/* This provides additional context without affecting visual design */}
          <div className="sr-only" aria-label="Additional professional information">
            <p>
              Alp Efe Karalar graduated from Pennsylvania State University in December 2024 
              with a Bachelor of Science in Computer Engineering. He currently works as a 
              Research Assistant at Penn State building Python data pipelines for analyzing 
              over 1 billion job postings using advanced entity resolution and pattern 
              extraction techniques.
            </p>
            <p>
              Simultaneously, he serves as a Software Engineer at DementiAnalytics, where he 
              engineered a full-stack mobile application using React and Expo, integrating 
              a 5-stage machine learning pipeline for dementia risk assessment.
            </p>
            <p>
              His technical expertise includes Python, C/C++, JavaScript/TypeScript, Java, 
              React, PyTorch, TensorFlow, and cloud infrastructure. Key projects include 
              an AI-powered LKML Dashboard using Google Gemini API, a Rust-based load 
              balancer, and neural network implementations in PyTorch.
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <SocialLinks links={socialLinks} size="lg" className="justify-center" />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              Get Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="https://medium.com/@karalar.alpefe"
              className="flex items-center gap-2"
            >
              My Blog
              <ExternalLink className="w-5 h-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};