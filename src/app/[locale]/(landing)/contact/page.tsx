'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { PageTitle, SectionTitle } from 'jean-react-utils';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="contact-page min-h-screen py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <PageTitle title={t('title')} />
          <SectionTitle title={t('subtitle')} className="text-xl md:text-2xl font-medium mb-6"/>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg hover-text-foreground"
          >
            {t('description')}
          </motion.p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
} 