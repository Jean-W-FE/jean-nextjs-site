'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PageTitle } from 'jean-react-utils';
import { sizeLinks } from '@/config/site';

const email = sizeLinks.email;
const Hero = () => {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Left content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          {/* Personal photo for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden mb-8 relative mx-auto"
          >
            <div className="w-40 h-40 relative mx-auto hover-card-lift">
              <Image
                src="/images/avatar.jpg"
                alt="Jean"
                fill
                className="object-cover rounded-full theme-shadow-xl"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-background theme-text-primary rounded-full p-2 theme-shadow-lg">
                <span className="wave text-2xl">👋</span>
              </div>
            </div>
          </motion.div>
          <PageTitle>
            {t('hero.greeting')}
            <span className="title-gradient block mt-2 hover-text-scale">
              {t('hero.role')}
            </span>
          </PageTitle>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed hover-text-foreground">
            {t('hero.description')}
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <Link 
              href="/projects"
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-medium rounded-full hover:bg-primary/90 transition-colors theme-shadow-lg hover-card-lift"
            >
              {t('hero.viewProjects')}
            </Link>
            <Link 
              href={`mailto:${email}?subject=&body=Hi, I’d like to know more about your services.`}
              className="px-8 py-4 border-2 border-primary/20 theme-text-primary text-lg font-medium rounded-full hover:bg-primary/10 transition-colors hover-card-lift"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content - Personal photo for desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block flex-1 relative"
        >
          <div className="relative max-w-lg mx-auto hover-card-lift">
            {/* Background decoration */}
            <div className="absolute inset-0 -ml-6 -mb-6">
              <div className="w-full h-full bg-theme-accent-gradient rounded-3xl transform rotate-3" />
            </div>
            
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden theme-shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Jean"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 bottom-1/3 bg-card rounded-2xl p-4 theme-shadow-xl hover-card hover-card-lift"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground hover-text-foreground">{t('hero.badge.title')}</p>
                  <p className="text-sm font-semibold hover-text-bright text-gray-500 hover:text-purple-600 transition-colors">{t('hero.badge.experience')}</p>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
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
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
    </div>
  );
}

export default Hero;