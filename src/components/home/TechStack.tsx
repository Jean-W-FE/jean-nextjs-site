'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const technologies = [
  { name: 'Vue.js', icon: '/images/tech/vue.svg' },
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'TypeScript', icon: '/images/tech/ts.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'HTML5', icon: '/images/tech/html5.svg' },
  { name: 'CSS3', icon: '/images/tech/css3.svg' },
];

export default function TechStack() {
  const t = useTranslations('home');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('techStack.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-12 h-12 relative grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 