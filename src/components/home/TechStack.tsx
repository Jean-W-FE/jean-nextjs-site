'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type TechCategory = {
  title: string;
  items: Array<{
    name: string;
    icon: string;
    bgColor?: string;
  }>;
};

type TechCategories = {
  frameworks: TechCategory;
  ecosystem: TechCategory;
  buildTools: TechCategory;
  styling: TechCategory;
};

const technologies: TechCategories = {
  frameworks: {
    title: '核心框架',
    items: [
      { name: 'Vue.js', icon: '/images/tech/vue.svg' },
      { name: 'React', icon: '/images/tech/react.svg', bgColor: '#20232a' },
      { name: 'Next.js', icon: '/images/tech/next.svg'},
      { name: 'Nuxt.js', icon: '/images/tech/nuxt.svg', bgColor: '#020618' },
    ]
  },
  ecosystem: {
    title: '技術生態',
    items: [
      { name: 'TypeScript', icon: '/images/tech/ts.svg', bgColor: '#3179c6' },
      { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
      { name: 'Pinia', icon: '/images/tech/pinia.svg', bgColor: '#111827' },
      { name: 'Redux', icon: '/images/tech/redux.svg'},
    ]
  },
  buildTools: {
    title: '構建工具',
    items: [
      { name: 'Vite', icon: '/images/tech/vite.svg', bgColor: '#101010' },
      { name: 'Webpack', icon: '/images/tech/webpack.svg', bgColor: '#2b3a43' },
      { name: 'Babel', icon: '/images/tech/babel.svg', bgColor: '#323330' },
      { name: 'ESLint', icon: '/images/tech/eslint.svg', bgColor: '#8080F2' },
    ]
  },
  styling: {
    title: '樣式解決方案',
    items: [
      { name: 'Tailwind', icon: '/images/tech/tailwind.svg' },
      { name: 'Sass', icon: '/images/tech/sass.svg' },
      { name: 'Less', icon: '/images/tech/less.svg', bgColor: '#1d365d' },
      { name: 'PostCSS', icon: '/images/tech/postcss.svg', bgColor: '#0006' },
    ]
  }
};

export default function TechStack() {
  const t = useTranslations('home');

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-100 to-purple-50">
      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {t('techStack.title')}
          </h2>
        </motion.div>

        <div className="space-y-20">
          {Object.entries(technologies).map(([key, category]) => (
            <div key={key} className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold text-gray-700 text-center"
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="relative group"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl p-4 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20 ${
                      tech.bgColor ? 'bg-opacity-90' : 'bg-white'
                    }`}
                    style={{
                      backgroundColor: tech.bgColor || 'white'
                    }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          className={`object-contain transition-all duration-300 ${
                            tech.bgColor ? 'brightness-200' : 'group-hover:brightness-110'
                          }`}
                        />
                      </div>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-gray-600 mt-3 font-medium text-center"
                    >
                      {tech.name}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"
      />
    </section>
  );
} 