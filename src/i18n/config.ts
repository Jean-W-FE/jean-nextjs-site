export const defaultLocale = 'en'
export const locales = ['en', 'zh-TW', 'zh-CN'] as const
export type ValidLocale = (typeof locales)[number]

export const localeNames: Record<ValidLocale, string> = {
  'en': 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
}

export type Messages = typeof import('./messages/en').default
export type MessageKeys = keyof Messages 

// import { notFound } from 'next/navigation'
// import { getRequestConfig } from 'next-intl/server'
// import { locales, defaultLocale } from './i18n/config'

// export default getRequestConfig(async ({ locale }) => {
//   // 驗證 locale 是否有效
//   if (!locales.includes(locale as any)) {
//     notFound()
//   }

//   return {
//     messages: (await import(`./i18n/messages/${locale}`)).default,
//     locale,
//     timeZone: 'Asia/Taipei'
//   }
// }) 