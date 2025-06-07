import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Projects = () => {
  const projects = [
    {
      title: "Brand Identity",
      description: "Artworks that tell engaging stories visually",
      image: "/images/project1.jpg",
      category: "Branding",
      link: "/work/brand-identity"
    },
    {
      title: "Marketing Vision",
      description: "Demonstrating impactful marketing campaigns",
      image: "/images/project2.jpg",
      category: "Marketing",
      link: "/work/marketing-vision"
    },
    {
      title: "Digital Experience",
      description: "Simplified data dashboards for informed decision-making",
      image: "/images/project3.jpg",
      category: "Development",
      link: "/work/digital-experience"
    }
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-4"
          >
            MY NOTEWORTHY PROJECTS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Crafting Digital Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Explore a collection of my most impactful projects that showcase the intersection of design and functionality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[28rem] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10" />
    </section>
  )
} 