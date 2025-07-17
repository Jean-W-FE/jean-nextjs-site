import { useTranslations } from 'next-intl'
// import { motion } from 'framer-motion'

export default function Process() {
  const t = useTranslations('home.process')
  const steps = t.raw('steps')

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          {t('title')}
        </motion.h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: any, index: number) => (
            <div key={index}>{step.title}</div>
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 20 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true }}
            //   transition={{ delay: index * 0.2 }}
            //   className="text-center"
            // >
            //   <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold">
            //     {index + 1}
            //   </div>
            //   <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            //   <p className="hover-text-foreground">{step.description}</p>
            // </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 