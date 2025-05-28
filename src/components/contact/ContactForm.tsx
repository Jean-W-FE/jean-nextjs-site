'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const t = useTranslations('contact');
  const formItemsLabel = ['name', 'email'];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 實現表單提交邏輯
    setStatus('success');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t('title')}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {
                formItemsLabel.map((item) => (
                    <div key={item}>
                        <label className="block text-sm font-medium mb-2">{t(`form.${item}`)}</label>
                        <input
                            type="text"
                            value={formData[item as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [item]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                ))
            }
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('form.subject')}</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('form.message')}</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {t('form.submit')}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 mb-8"
          >
            {t('status.success')}
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-600 mb-8"
          >
            {t('status.error')}
          </motion.div>
        )}

      </motion.div>
    </>
  );
} 