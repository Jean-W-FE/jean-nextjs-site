'use client';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectItem } from "@/types/about/experience";

export default function ProjectList() {
    const t = useTranslations('about');
    const projects: ProjectItem[] = [
        {
          name: t('projects.personal.title'),
          description: t('projects.personal.description'),
          role: t('projects.personal.role'),
          tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
          highlights: t.raw('projects.personal.highlights'),
          image: '/images/projects/personal-site.png'
        },
        {
          name: t('projects.dashboard.title'),
          description: t('projects.dashboard.description'),
          role: t('projects.dashboard.role'),
          tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
          highlights: t.raw('projects.dashboard.highlights'),
          image: '/images/projects/dashboard.png'
        }
    ];
    return (
        <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
                {/* <SectionTitle title={t('projects.title')} /> */}
                <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="bg-white rounded-2xl theme-shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                    <div className="relative h-48 group">
                        <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {project.name}
                        </h3>
                        <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                            {project.role}
                        </span>
                        </div>
                        <p className="hover-text-foreground mb-6">{project.description}</p>
                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            </span>
                            {t('projects.highlights')}
                        </h4>
                        <ul className="list-none space-y-3 hover-text-foreground">
                            {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                                <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className="flex-1">{highlight}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                            key={tech}
                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm hover:bg-purple-200 transition-colors"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}