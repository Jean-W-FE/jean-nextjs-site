'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

const hobbies = [
    {
      title: 'hobbies.drawing.title',
      icon: '/images/about/drawing.svg',
      description: 'hobbies.drawing.description',
      photo: '/images/about/life/drawing.jpg',
      color: 'bg-pink-100'
    },
    {
      title: 'hobbies.photography.title',
      icon: '/images/about/photography.svg',
      description: 'hobbies.photography.description',
      photo: '/images/about/life/photography.jpg',
      color: 'bg-blue-100'
    },
    {
      title: 'hobbies.reading.title',
      icon: '/images/about/reading.svg',
      description: 'hobbies.reading.description',
      photo: '/images/about/life/reading.jpg',
      color: 'bg-amber-100'
    },
    {
      title: 'hobbies.music.title',
      icon: '/images/about/music.svg',
      description: 'hobbies.music.description',
      photo: '/images/about/life/music.jpg',
      color: 'bg-indigo-100'
    },
    {
      title: 'hobbies.billiards.title',
      icon: '/images/about/billiards.svg',
      description: 'hobbies.billiards.description',
      photo: '/images/about/life/billiards.jpg',
      color: 'bg-green-100'
    },
    {
      title: 'hobbies.badminton.title',
      icon: '/images/about/badminton.svg',
      description: 'hobbies.badminton.description',
      photo: '/images/about/life/badminton.jpg',
      color: 'bg-yellow-100'
    },
    {
      title: 'hobbies.coding.title',
      icon: '/images/about/coding.svg',
      description: 'hobbies.coding.description',
      photo: '/images/about/life/coding.jpg',
      color: 'bg-purple-100'
    },
    {
      title: 'hobbies.lego.title',
      icon: '/images/about/lego.svg',
      description: 'hobbies.lego.description',
      photo: '/images/about/life/lego.jpg',
      color: 'bg-orange-100'
    }
];
export default function HabbiesSection() {
    const t = useTranslations('about')
  return <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
    <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('hobbies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`group p-6 rounded-2xl theme-shadow-lg ${hobby.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={hobby.photo}
                    alt={t(hobby.title)}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 90vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl p-2">
                    <Image
                      src={hobby.icon}
                      alt={t(hobby.title)}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{t(hobby.title)}</h3>
                <p className="hover-text-foreground text-center">{t(hobby.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
  </section>;
}