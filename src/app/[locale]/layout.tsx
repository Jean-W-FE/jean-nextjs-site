import "@/styles/globals.css"
import { NextIntlClientProvider, hasLocale} from 'next-intl'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { Providers } from '@/providers'
import { Icon } from '@/components/icons';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CursorFollow } from '@/components/shared';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'A modern portfolio website built with Next.js',
}

async function getMessages(locale: string) {
  try {
    return (await import(`@/i18n/messages/${locale}`)).default
  } catch (error) {
    notFound()
  }
}

// 在 window 對象上註冊全局組件
// if (typeof window !== 'undefined') {
//   // @ts-ignore
//   window.Icon = Icon;
// }

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className }>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Providers>
                {children}
                <SpeedInsights />
                <CursorFollow enabled={true} size="medium" color="primary" />
            </Providers>
          </NextIntlClientProvider>
      </body>
    </html>
  )
}


