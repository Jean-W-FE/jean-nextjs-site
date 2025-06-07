'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const lifeStyle = [
    {
      title: 'lifestyle.work.title',
      content: 'lifestyle.work.content'
    },
    { 
      title: 'lifestyle.learning.title',
      content: 'lifestyle.learning.content'
    },
    {
      title: 'lifestyle.philosophy.title',
      content: 'lifestyle.philosophy.content'
    }
];
export default function LifeStyleSection() {
    const t = useTranslations('about')
    return <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('lifestyle.title')}</h2>
            <div className="space-y-8">
            {lifeStyle.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">{t(item.title)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(item.content)}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>;
}