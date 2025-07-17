/**
 * 工作經驗卡片列表
 * @returns 工作經驗卡片列表
 */
'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SectionTitle, CardTitle, SubTitle } from 'jean-react-utils';
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
            // className="bg-card rounded-2xl theme-shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="group relative bg-card/40 backdrop-blur-md 
                border border-border/30 
                rounded-2xl p-8
                theme-shadow-lg
                hover:bg-card/60 hover:border-primary/40
                hover:shadow-xl hover:shadow-primary/10
                hover:scale-[1.02] 
                transition-all duration-300"
            >
              {/* 內部光暈效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* 公司信息區域 */}
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div className="flex items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm border border-primary/20"
                      style={{ backgroundColor: exp?.logoColor ? `${exp.logoColor}20` : 'transparent' }}
                    >
                      <Image
                        src={exp.logo}
                        alt={t(exp.company)}
                        width={40}
                        height={40}
                        className="filter drop-shadow-sm"
                      />
                    </motion.div>
                    <div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(exp.company)}
                      </CardTitle>
                      <p className="text-primary/80 font-medium group-hover:text-primary transition-colors duration-300">
                        {t(exp.role)}
                      </p>
                    </div>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* 描述文字 */}
                <p className="text-muted-foreground group-hover:text-foreground mb-6 leading-relaxed transition-colors duration-300">
                  {t(exp.description)}
                </p>

                 {/* 成就區域 */}
                <div className="bg-gradient-to-r from-primary/10 via-purple-500/5 to-primary/10 rounded-xl p-6 mb-6 border border-primary/20 backdrop-blur-sm">
                  <SubTitle className="flex items-center text-foreground">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-lg flex items-center justify-center mr-2 backdrop-blur-sm">
                      <SvgIcon name="check" className="h-3 w-3 text-primary" />
                    </span>
                    {t('experience.achievements')}
                  </SubTitle>
                  <ul className="list-none space-y-3 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start group/item"
                      >
                        <span className="w-5 h-5 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-full flex items-center justify-center mr-3 mt-1 backdrop-blur-sm group-hover/item:scale-110 transition-transform duration-200">
                          <SvgIcon name="check" className="h-3 w-3 text-primary" />
                        </span>
                        <span className="flex-1 text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {t(achievement)}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 技術棧 */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary rounded-full text-sm font-medium 
                        backdrop-blur-sm border border-primary/30
                        hover:from-primary/30 hover:to-purple-500/30 
                        hover:border-primary/50 hover:text-primary
                        transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}