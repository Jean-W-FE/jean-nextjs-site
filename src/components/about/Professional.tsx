'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PageTitle } from 'jean-utils';
import Image from 'next/image';
export default function Professional() {
    const t = useTranslations('about');
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}className="space-y-6">
                         <PageTitle title={t('title')}></PageTitle>
                         <p className="text-xl text-gray-600 leading-relaxed">
                            {t('professional.summary')}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Vue.js', 'TypeScript', 'Node.js'].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square w-full max-w-md mx-auto">
                            <Image
                            src="/images/profile-pro.jpg"
                            alt="Professional Profile"
                            fill
                            className="object-cover rounded-3xl shadow-2xl"
                            sizes="(max-width: 768px) 90vw, 45vw"
                            priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}