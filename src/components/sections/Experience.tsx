// src/components/sections/Experience.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { experiences } from '@/lib/data';

export const Experience = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-")
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-purple-600 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon */}
                <div className="absolute left-0 md:left-6 w-8 h-8 md:w-12 md:h-12 -translate-x-1/2 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  ) : (
                    <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                  )}
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-lg text-blue-600 font-semibold mb-1">
                      {exp.organization}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-slate-700 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-600 before:font-bold"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
