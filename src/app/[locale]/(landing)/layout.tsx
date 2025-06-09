import * as React from "react";
import { useTranslations } from 'next-intl';
import { Header } from '@/components/nav/header';
import Footer from '@/components/nav/footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const t = useTranslations('common');

  const footerConfig = {
    site: {
      name: 'Jean',
      description: t('footer.description')
    },
    navigation: {
      quickLinks: {
        title: t('footer.quickLinks'),
        items: [
          { href: '/about', title: t('nav.about') },
          { href: '/experience', title: t('nav.experience') },
          { href: '/contact', title: t('nav.contact') }
        ]
      },
      socialLinks: [
        { href: 'https://github.com/your-github', title: 'GitHub' },
        { href: 'https://twitter.com/your-twitter', title: 'Twitter' },
        { href: 'https://linkedin.com/in/your-linkedin', title: 'LinkedIn' }
      ]
    },
    texts: {
      copyright: t('footer.copyright'),
      privacy: t('footer.privacy'),
      terms: t('footer.terms'),
      social: t('footer.social')
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}