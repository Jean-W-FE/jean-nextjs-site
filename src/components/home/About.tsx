'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { SectionTitle, SubTitle } from 'jean-react-utils';
import { sizeLinks } from '@/config/site';
export default function About() {
  const t = useTranslations('home');
  const [showQRCode, setShowQRCode] = useState(false);
  
  const info = {
    github: sizeLinks.github,
    email: sizeLinks.email,
    wechat: 'Jean_W90',
    address: 'Beijing, China',
  }

  const contactItems = [
    {
      icon: "/images/about/github.svg",
      label: 'GitHub',
      value: info.github,
      link: info.github
    },
    {
      icon: "/images/about/email.svg",
      label: 'Email',
      value: info.email,
      link: `mailto:${info.email}`
    },
    {
      icon: "/images/about/wechat.svg",
      label: 'WeChat',
      value: info.wechat,
      hasQR: true
    },
    {
      icon: "/images/about/address.svg",
      label: 'Location',
      value: info.address
    }
  ];

  return (
    <section className="section-wrapper">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <SectionTitle title={t('about.title')} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed text-muted-foreground"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {contactItems.map((item, index) => (
            // theme-shadow-lg 
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center p-6 bg-card rounded-2xl theme-shadow-lg transition-shadow`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl">
                <Image src={item.icon} alt={item.label} width={24} height={24} />
              </div>
              <div className="ml-4">
                <SubTitle className='text-sm' title={item.label} />
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-base font-semibold text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div 
                    className={`relative ${item.hasQR ? 'cursor-pointer' : ''}`}
                    onClick={() => item.hasQR && setShowQRCode(!showQRCode)}
                  >
                    <p className="text-base font-semibold text-gray-900">
                      {item.value}
                      {item.hasQR && (
                        <span className="ml-2 text-sm text-purple-600">
                          ({t('about.showQRCode')})
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setShowQRCode(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-[95vw] h-[95vh] md:w-[85vw] md:h-[85vh] relative flex flex-col items-center justify-center p-4 md:p-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full flex-1 max-h-[75vh]">
                <Image
                  src="/images/about/wechat-qr.jpg"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 95vw, 85vw"
                  priority
                  quality={100}
                />
              </div>
              {/* <div className="text-center mt-6 mb-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">{t('about.addWeChat')}</h3>
                <p className="text-lg md:text-xl text-gray-600">{info.wechat}</p>
              </div> */}
            </div>
            <button 
              onClick={() => setShowQRCode(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

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
        className="absolute top-20 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"
      />
    </section>
  );
} 