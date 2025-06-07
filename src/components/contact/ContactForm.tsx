'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('name.label')}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('name.placeholder')}
            className="mt-1 w-full px-4 py-3 bg-white/50 border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('email.label')}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t('email.placeholder')}
            className="mt-1 w-full px-4 py-3 bg-white/50 border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            {t('subject.label')}
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="mt-1 w-full px-4 py-3 bg-white/50 border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
            required
          >
            <option value="">{t('subject.placeholder')}</option>
            <option value="collaboration">{t('subject.options.collaboration')}</option>
            <option value="job">{t('subject.options.job')}</option>
            <option value="technical">{t('subject.options.technical')}</option>
            <option value="other">{t('subject.options.other')}</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t('message.label')}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t('message.placeholder')}
            rows={5}
            className="mt-1 w-full px-4 py-3 bg-white/50 border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-xl transition-shadow"
        >
          {t('submit')}
        </motion.button>
      </div>
    </motion.form>
  );
}; 