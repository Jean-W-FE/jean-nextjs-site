'use client'
import { useTranslations } from 'next-intl';
import { socialLinks, sizeLinks } from '@/config/site';
import { Footer as FooterUtils } from "jean-react-utils";

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
          { href: `mailto:${sizeLinks.email}?subject=&body=Hi, I’d like to know more about your services.`, title: t('nav.contact') }
        ]
      },
      socialLinks
    },
    texts: {
      copyright: t('footer.copyright'),
      privacy: t('footer.privacy'),
      terms: t('footer.terms'),
      social: t('footer.social')
    },
    theme: {
      background: 'bg-muted/50',
      text: 'text-muted-foreground',
      link: 'hover:text-primary transition-colors',
      border: 'border-border',
      title: 'text-foreground font-medium',
      social: {
        icon: 'text-muted-foreground hover:text-primary transition-colors',
        text: 'text-sm text-muted-foreground'
      }
    }
  };

  return (
    <FooterUtils {...footerConfig} />
  );
}

export default Footer;