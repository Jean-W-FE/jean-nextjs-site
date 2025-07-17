'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function CommonQA() {
    const t = useTranslations('contact.faq');
    const items = ['contact', 'projects', 'consultations', 'response'];

    return (
        <section className='mt-16'>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent'
            >
                {t('title')}
            </motion.h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {items.map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className='group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300 theme-shadow-lg hover:theme-shadow-xl'
                    >
                        <h3 className='text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300'>
                            {t(`items.${item}.title`)}
                        </h3>
                        <p className='text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed'>
                            {t(`items.${item}.content`)}
                        </p>
                        
                        {/* 裝飾性元素 */}
                        <div className='absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors duration-300' />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}