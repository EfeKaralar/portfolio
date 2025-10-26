// src/components/sections/Skills.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b-2 border-blue-600">
                {skillCategory.category}
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg font-medium shadow-sm hover:shadow-md transition-all cursor-default border border-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
