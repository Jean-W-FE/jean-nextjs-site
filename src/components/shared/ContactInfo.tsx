'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

interface ContactInfoProps {
  variant?: 'minimal' | 'full';
  className?: string;
}

export default function ContactInfo({ variant = 'full', className = '' }: ContactInfoProps) {
  const t = useTranslations('common');
  const [showQRCode, setShowQRCode] = useState(false);
  
  const info = {
    github: 'https://github.com/Zola-W',
    email: 'zola.wangz@gmail.com',
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

  if (variant === 'minimal') {
    return (
      <div className={`flex gap-4 ${className}`}>
        {contactItems.map((item) => (
          item.link ? (
            <a
              key={item.label}
              href={item.link}
              className="hover-text-foreground hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            </a>
          ) : null
        ))}
      </div>
    );
  }

  return (
    <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
      {contactItems.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center p-6 bg-white rounded-2xl theme-shadow-lg hover:shadow-xl transition-shadow relative group"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl">
            <Image src={item.icon} alt={item.label} width={24} height={24} />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">{item.label}</h3>
            {item.link ? (
              <a
                href={item.link}
                className="text-base font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
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
                      ({t('showQRCode')})
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}

      {/* QR Code Modal */}
      {showQRCode && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowQRCode(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-[95vw] h-[95vh] md:w-[85vw] md:h-[85vh] relative flex flex-col items-center justify-center p-4"
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
            </div>
            <button 
              onClick={() => setShowQRCode(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover-text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 