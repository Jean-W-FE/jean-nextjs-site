import "@/styles/globals.css"
import { NextIntlClientProvider, hasLocale} from 'next-intl'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { SmoothScrollProvider } from '@/providers/smooth-scroll-provider'
import { Analytics } from "@vercel/analytics/react"
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
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothScrollProvider>
            {children}
            <Analytics />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
