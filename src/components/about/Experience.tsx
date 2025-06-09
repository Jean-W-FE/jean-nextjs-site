/**
 * 工作經驗卡片列表
 * @returns 工作經驗卡片列表
 */
'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SectionTitle, CardTitle, SubTitle } from 'jean-utils';
import SvgIcon from '@/components/icons/SvgIcon';
import { ExperienceItem, EXPERIENCE_TYPES } from '@/types';

const { CHEETAH, ALIBABA, FENG_TENG, ELEPHANT } = EXPERIENCE_TYPES;

const experiences: ExperienceItem[] = [
    {
      company: `${CHEETAH}.title`,
      period: '2019.5 - 2024.12',
      role: `${CHEETAH}.role`,
      description: `${CHEETAH}.description`,
      achievements: [`${CHEETAH}.achievements1`, `${CHEETAH}.achievements2`, `${CHEETAH}.achievements3`, `${CHEETAH}.achievements4`],
      logo: '/images/experience/cheetah.png',
      tech: ['React', 'TypeScript', 'Next.js', 'Node.js'],
      logoColor: '#f0641e'
    },
    {
      company: `${ALIBABA}.title`,
      period: '2016.8 - 2019.4',
      role: `${ALIBABA}.role`,
      description: `${ALIBABA}.description`,
      achievements: [`${ALIBABA}.achievements1`, `${ALIBABA}.achievements2`, `${ALIBABA}.achievements3`],
      logo: '/images/experience/youku.svg',
      tech: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Element UI'],
      logoColor: '#f5f2f5'
    },
    {
      company: `${FENG_TENG}.title`,
      period: '2015.5 - 2016.8',
      role: `${FENG_TENG}.role`,
      description: `${FENG_TENG}.description`,
      achievements: [`${FENG_TENG}.achievements1`, `${FENG_TENG}.achievements2`, `${FENG_TENG}.achievements3`],
      logo: '/images/experience/codemore.svg',
      tech: ['Angular', 'JavaScript', 'Git'],
      logoColor: '#f2f2f0'
    },
    {
      company: `${ELEPHANT}.title`,
      period: '2014.4 - 2015.5',
      role: `${ELEPHANT}.role`,
      description: `${ELEPHANT}.description`,
      achievements: [`${ELEPHANT}.achievements1`, `${ELEPHANT}.achievements2`,`${ELEPHANT}.achievements2`],
      logo: '/images/experience/elephant.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
      logoColor: '#212529'
    }
];
export default function ExperienceCardList(){
  const t = useTranslations('about');

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6" style={{ backgroundColor: exp?.logoColor || 'transparent' }}>
                      <Image
                          src={exp.logo}
                          alt={t(exp.company)}
                          width={40}
                          height={40}
                      />
                  </div>
                  <div>
                    <CardTitle>{t(exp.company)}</CardTitle>
                    <p className="text-purple-600 font-medium">{t(exp.role)}</p>
                  </div>
                </div>
                <span className="text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{t(exp.description)}</p>
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <SubTitle className="flex items-center">
                  <span className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                    <SvgIcon name="check" />
                  </span>
                  {t('experience.achievements')}
                </SubTitle>
                <ul className="list-none space-y-3 text-gray-600">
                  {/* 成果 */}
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <SvgIcon name="check" className="h-3 w-3 text-purple-600" />
                      </span>
                      <span className="flex-1">{t(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 技术栈 */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}