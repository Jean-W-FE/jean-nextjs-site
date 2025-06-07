'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import ContactInfo from '@/components/shared/ContactInfo';

const skillIcons = [
  {
    name: 'React',
    icon: '/images/skills/react.svg',
    style: 'top-1/4 -left-8 rotate-[-12deg]'
  },
  {
    name: 'Vue',
    icon: '/images/skills/vue.svg',
    style: 'top-1/3 -right-8 rotate-[15deg]'
  },
  {
    name: 'TypeScript',
    icon: '/images/skills/typescript.svg',
    style: 'bottom-1/4 -left-10 rotate-[8deg]'
  },
  {
    name: 'Node.js',
    icon: '/images/skills/nodejs.svg',
    style: 'bottom-1/3 -right-10 rotate-[-10deg]'
  }
];

const technologies = [
  { name: 'React', level: 'Expert' },
  { name: 'Vue.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'TailwindCSS', level: 'Expert' }
];

export default function HeroSection() {
  const t = useTranslations('home');

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-pink-50 opacity-50" />
      
      {/* 主要內容區域 */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：照片區域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            {/* 主照片 */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/skills/yoga.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              {/* 照片濾鏡效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* 懸浮的技能圖標 */}
            {skillIcons.map((skill) => (
              <motion.div
                key={skill.name}
                className={`absolute w-12 h-12 ${skill.style}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: Math.random() }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
              >
                <div className="relative w-full h-full bg-white rounded-xl shadow-lg p-2 backdrop-blur-sm bg-opacity-80">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </motion.div>
            ))}

            {/* 裝飾性元素 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl rounded-full" />

            {/* 簡潔的聯繫方式 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ContactInfo variant="minimal" className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg" />
            </motion.div>
          </motion.div>

          {/* 右側：文字內容 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {t('hero.greeting')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* 技術標籤 */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 shadow-md flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span>{tech.name}</span>
                  <span className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                    {tech.level}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            {/* CTA 按鈕 */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/about" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md text-purple-600 hover:text-white">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  {t('hero.moreAboutMe')}
                </span>
                <span className="relative invisible">{t('hero.moreAboutMe')}</span>
              </Link>
              <Link href="/blog" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-md group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">{t('hero.readBlog')}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 