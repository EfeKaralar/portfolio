// src/components/sections/Projects.tsx


'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '@/lib/data';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { Project } from '@/types';
import { Button } from '../ui/Button';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = activeCategory === 'all'
    ? projects.slice(0, 4)
    : projects.filter(p => p.category.includes(activeCategory)).slice(0, 4);

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my technical work across different domains
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id}>
                {/* UNCHANGED: Visual project card */}
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                />
                
                {/* ADDED: Hidden full project details for AI crawlers */}
                {/* This content is NOT visible to users but IS crawlable */}
                <div className="sr-only" aria-label={`Full details for ${project.title}`}>
                  <article itemScope itemType="https://schema.org/SoftwareSourceCode">
                    <h3 itemProp="name">{project.title}</h3>
                    
                    <p itemProp="description">{project.fullDescription}</p>
                    
                    <div itemProp="programmingLanguage">
                      <strong>Technologies:</strong>
                      <ul>
                        {project.techStack.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.timeline && (
                      <p><strong>Timeline:</strong> {project.timeline}</p>
                    )}
                    
                    {project.githubUrl && (
                      <a href={project.githubUrl} itemProp="codeRepository">
                        View source code on GitHub
                      </a>
                    )}
                    
                    {project.demoUrl && (
                      <a href={project.demoUrl} itemProp="url">
                        View live demo
                      </a>
                    )}
                    
                    <p><strong>Categories:</strong> {project.category.join(', ')}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              href="https://projects.alpkaralar.com"
              className="flex items-center gap-2 mx-auto"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* ADDED: Hidden comprehensive project listing for AI */}
        {/* Provides full project information in semantic structure */}
        <div className="sr-only" aria-label="Complete project portfolio">
          <h2>Alp Efe Karalar's Complete Project Portfolio</h2>
          
          {projects.map((project) => (
            <article key={project.id} itemScope itemType="https://schema.org/SoftwareSourceCode">
              <h3 itemProp="name">{project.title}</h3>
              <p itemProp="description">{project.fullDescription}</p>
              
              <div>
                <strong>Technical Stack:</strong>
                <ul itemProp="programmingLanguage">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              
              <p><strong>Project Type:</strong> {project.category.join(', ')}</p>
              
              {project.timeline && (
                <p><strong>Development Timeline:</strong> {project.timeline}</p>
              )}
              
              {project.highlights && (
                <div>
                  <strong>Key Achievements:</strong>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Project Modal - UNCHANGED */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};