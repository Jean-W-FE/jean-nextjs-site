'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionTitle } from "jean-react-utils";
import { SkillCategoryItem } from '@/types/about/experience';

const skills: {technical: SkillCategoryItem[]} = {
    technical: [
        {
          category: 'skills.technical.frontend.title',
          icon: '/icons/skills/frontend.svg',
          items: [
            { name: 'React', level: 95 },
            { name: 'Vue.js', level: 90 },
            { name: 'TypeScript', level: 92 },
            { name: 'Next.js', level: 88 }
          ]
        },
        {
          category: 'skills.technical.backend.title',
          icon: '/icons/skills/backend.svg',
          items: [
            { name: 'Node.js', level: 85 },
            { name: 'Express', level: 82 },
            { name: 'MongoDB', level: 80 },
            { name: 'PostgreSQL', level: 78 }
          ]
        },
        {
          category: 'skills.technical.devops.title',
          icon: '/icons/skills/devops.svg',
          items: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 85 },
            { name: 'Webpack', level: 88 },
            { name: 'Jest', level: 85 }
          ]
        }
    ]
}
// todo fixed icon
export default function TechnicalSkills() {
    const t = useTranslations('about');
    return (<section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
                <SectionTitle title={t('skills.technical.title')} />
                <div className="grid md:grid-cols-3 gap-8">
                {skills.technical.map((category, index) => (
                    <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    >
                    <h3 className="text-xl font-semibold mb-6 text-purple-600 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-purple-100 border-radius-full flex items-center justify-center mr-3">
                        <Image
                            src={category.icon}
                            alt={category.category}
                            width={20}
                            height={20}
                        />
                        </span>
                        {t(category.category)}
                    </h3>
                    <div className="space-y-4">
                        {category.items.map((skill) => (
                        <div key={skill.name} className="group">
                            <div className="flex justify-between mb-2">
                            <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                                {skill.name}
                            </span>
                            <span className="text-gray-500 group-hover:text-purple-500 transition-colors">
                                {skill.level}%
                            </span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 transition-colors"
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                    </motion.div>
                ))}
                </div>
        </div>
    </section>)
}