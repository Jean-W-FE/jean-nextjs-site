'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function CommonQA() {
    const t = useTranslations('contact.faq');
    const items = ['contact', 'projects', 'consultations', 'response'];

    return (
        <section className='mt-16'>
            <h2 className='text-3xl font-bold text-center mb-12'>{t('title')}</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {items.map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        className='p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all'
                    >
                        <h3 className='text-xl font-semibold mb-4'>
                            {t(`items.${item}.title`)}
                        </h3>
                        <p className='text-gray-600'>
                            {t(`items.${item}.content`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}