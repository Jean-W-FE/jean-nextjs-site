'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionTitle } from "@jean-utils/ui";

import Image from 'next/image';
import { SkillSoftItem } from '@/types/about/experience';

const skills: {soft: SkillSoftItem[]} = {
    soft: [
        {
          name: 'skills.soft.teamwork.title',
          description: 'skills.soft.teamwork.description',
          icon: '/icons/skills/teamwork.svg'
        },
        {
          name: 'skills.soft.problemSolving.title',
          description: 'skills.soft.problemSolving.description',
          icon: '/icons/skills/problem-solving.svg'
        },
        {
          name: 'skills.soft.communication.title',
          description: 'skills.soft.communication.description',
          icon: '/icons/skills/communication.svg'
        },
        {
          name: 'skills.soft.learning.title',
          description: 'skills.soft.learning.description',
          icon: '/icons/skills/learning.svg'
        }
    ]
}
// todo fixed icon

export default function ProfessionalQuality() {
    const t = useTranslations('about');
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <SectionTitle title={t('skills.soft.title')} />
                <div className="grid md:grid-cols-4 gap-8">
                    {skills.soft.map((skill, index) => (
                        <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-8 text-center"
                      >
                        <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl p-3">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                          {t(skill.name)}
                        </h3>
                        <p className="text-gray-600">
                          {t(skill.description)}
                        </p>
                      </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}