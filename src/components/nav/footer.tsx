'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer(): JSX.Element {
  const t = useTranslations('common');
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">{t('footer.copyright')}</p>
        </div>
        <div>
          <Link href="https://github.com/your-username" className="text-sm hover:underline">GitHub</Link>
        </div>
      </div>
    </footer>
  )
}