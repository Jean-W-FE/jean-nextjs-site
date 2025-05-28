'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('home');
  const info = {
    github: 'https://github.com/Zola-W',
    email: 'zola.wangz@gmail.com',
    phone: '+852 6110 0000',
    address: 'Beijing, China',
    wechat: 'zola_wangz',
    weibo: 'zola_wangz',
  }
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600">
              {t('about.description')}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Email:</span>
                <a href="mailto:zola.wangz@gmail.com" className="text-blue-600 hover:text-blue-800">
                  zola.wangz@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">GitHub:</span>
                <a href="https://github.com/Zola-W" className="text-blue-600 hover:text-blue-800">
                https://github.com/Zola-W
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 