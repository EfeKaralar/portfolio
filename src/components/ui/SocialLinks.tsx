// src/components/ui/SocialLinks.tsx

'use client';

import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialLink } from '@/types';

interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link, index) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-label={link.name}
          >
            <Icon className={sizeClasses[size]} />
          </motion.a>
        );
      })}
    </div>
  );
};
