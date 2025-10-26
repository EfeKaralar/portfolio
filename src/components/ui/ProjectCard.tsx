// src/components/ui/ProjectCard.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        {/* Placeholder gradient since we don't have actual images yet */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400 opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold opacity-20">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View icon */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5 text-slate-700" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
