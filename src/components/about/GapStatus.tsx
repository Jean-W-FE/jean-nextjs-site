'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function GapStatusSection() {
    const t = useTranslations('about')
    return <section className="py-16 px-4 bg-gradient-to-t from-purple-100 to-transparent">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl theme-shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('status.title')}</h2>
        <p className="text-xl hover-text-foreground mb-4">
          {t('status.job')}
        </p>
        <p className="text-xl text-purple-600 font-semibold">
          {t('status.project')}
        </p>
      </motion.div>
    </div>
  </section>
}