// src/components/layout/Footer.tsx

'use client';

import React from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { socialLinks } from '@/lib/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <SocialLinks
            links={socialLinks}
            className="[&_a]:text-slate-400 [&_a:hover]:text-white"
          />

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>© {currentYear} Alp Karalar. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
