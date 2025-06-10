'use client'
import { useTranslations } from 'next-intl';
import { socialLinks } from '@/config/site';
import {  Footer as FooterUtils } from "jean-react-utils";

export function Footer(): JSX.Element {
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
          { href: '/projects', title: t('nav.projects') },
          { href: '/contact', title: t('nav.contact') }
        ]
      },
      socialLinks
    },
    texts: {
      copyright: t('footer.copyright'),
      privacy: t('footer.privacy'),
      terms: t('footer.terms'),
      social: t('footer.social')
    }
  };
  return (
      <FooterUtils {...footerConfig} />
  );
}

export default Footer;