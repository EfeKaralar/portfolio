// src/components/ui/ProjectModal.tsx

'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Clock } from 'lucide-react';
import { Project } from '@/types';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>

                {/* Image Header */}
                <div className="relative h-64 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-8xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h2>

                  {/* Timeline */}
                  {project.timeline && (
                    <div className="flex items-center gap-2 text-slate-600 mb-6">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{project.timeline}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200">
                    {project.demoUrl && (
                      <Button
                        variant="primary"
                        href={project.demoUrl}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        href={project.githubUrl}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    )}
                    <Button
                      variant="secondary"
                      href="https://projects.alpkaralar.com"
                      className="flex items-center gap-2 ml-auto"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
