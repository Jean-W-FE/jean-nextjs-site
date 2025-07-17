'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle } from 'jean-react-utils';
import { Icon } from '@/components/icons';
import { PROJECTS } from '@/config/project.const';


export default function Portfolio() {
  const t = useTranslations('home');
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <SectionTitle title={t('portfolio.title')} />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-card theme-shadow-lg hover:theme-shadow-xl transition-all duration-300"
            >
              <Link href={project.link || '#'} className="block">
                {/* <div className="relative h-20 bg-primary/5 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/images/grain.webp')] opacity-20" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl">
                      <Icon
                          name={project.icon}
                          source="svgs"
                          className="w-6 h-6 text-primary"
                        />
                    </div>
                    <div className="flex gap-2">
                      {project.techStack?.slice(0, 3).map((tech, idx) => (
                        <div key={tech} className="bg-background/50 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <span className="text-xs font-medium text-primary">
                            {tech}
                            {tech.split(',')[0].slice(0, 2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
                <div className="p-6 relative">
                  {/* 标题和亮点 */}
                  <div className="mb-4">
                    <div className='flex items-center gap-3 mb-2 border-b border-primary/10 pb-2'>
                      <Icon
                        name={project.icon}
                        source="svgs"
                        className="w-6 h-6 text-primary mr-2"
                      />
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                      </h3>
                    </div>
                    {project.highlight && (
                      <div className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                        <p className="text-sm font-medium text-primary">
                          ✨ {project.highlight}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 项目描述 */}
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* 技术栈标签 */}
                  {project.techStack && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs bg-primary/5 text-primary rounded-full border border-primary/10 hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 详细信息列表 */}
                  {project.details && (
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 group/item hover:text-foreground transition-colors">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* 查看更多按钮 */}
                  {project.link && (
                    <div className="flex items-center text-sm font-medium text-primary mt-4 group-hover:translate-x-2 transition-transform duration-300">
                      {t('hero.viewProjects')}
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
      />
    </section>
  );
} 