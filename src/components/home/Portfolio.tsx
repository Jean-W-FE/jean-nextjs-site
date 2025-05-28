'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const projects = [
  {
    id: 'live-management',
    title: 'Live Management Console',
    description: 'A Vue.js and TypeScript-based live streaming admin platform',
    link: '/projects/live-management'
  },
  {
    id: 'blog',
    title: 'My Blog',
    description: 'A personal blog built with Next.js and Tailwind CSS',
    link: '/projects/blog'
  }
];

export default function Portfolio() {
  const t = useTranslations('home');

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('portfolio.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <Link href={project.link} className="block p-6">
                <div className="h-40 bg-gray-100 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-gray-600">
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 