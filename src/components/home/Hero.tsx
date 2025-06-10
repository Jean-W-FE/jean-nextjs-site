'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PageTitle } from 'jean-react-utils';

const Hero = () => {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-rose-50 to-sky-100">
      {/* Left content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          {/* Personal photo for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden mb-8 relative mx-auto"
          >
            <div className="w-40 h-40 relative mx-auto">
              <Image
                src="/images/avatar.jpg"
                alt="Jean"
                fill
                className="object-cover rounded-full shadow-xl"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-white text-purple-600 rounded-full p-2 shadow-lg">
                <span className="wave text-2xl">👋</span>
              </div>
            </div>
          </motion.div>
          <PageTitle>
            {t('hero.greeting')}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block mt-2">
            {t('hero.role')}
            </span>
          </PageTitle>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <Link 
              href="/projects"
              className="px-8 py-4 bg-purple-600 text-white text-lg font-medium rounded-full hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
            >
              {t('hero.viewProjects')}
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-purple-200 text-purple-600 text-lg font-medium rounded-full hover:bg-purple-50 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content - Personal photo for desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block flex-1 relative"
        >
          <div className="relative max-w-lg mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 -ml-6 -mb-6">
              <div className="w-full h-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl transform rotate-3" />
            </div>
            
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Jean"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 bottom-1/3 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('hero.badge.title')}</p>
                  <p className="text-sm font-semibold text-gray-800">{t('hero.badge.experience')}</p>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
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
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-100/50 to-transparent -z-10" />
    </div>
  );
}

export default Hero;