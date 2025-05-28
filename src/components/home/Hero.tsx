'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('hero.greeting')}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              {t('hero.description')}
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
              >
                {t('hero.cta')}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px]">
              <Image
                src="/images/avatar.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 