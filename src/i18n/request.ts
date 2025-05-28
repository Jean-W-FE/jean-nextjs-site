import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from './config'

export default getRequestConfig(async({ locale }) => {
  if (!locale || !locales.includes(locale as any)) {
    return {
      messages: (await import(`./messages/${defaultLocale}`)).default,
      locale: defaultLocale,
      timeZone: 'Asia/Taipei'
    }
  }

  try {
    const messages = (await import(`./messages/${locale}`)).default
    return {
      messages,
      locale,
      timeZone: 'Asia/Taipei'
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error)
    const defaultMessages = (await import(`./messages/${defaultLocale}`)).default
    return {
      messages: defaultMessages,
      locale: defaultLocale,
      timeZone: 'Asia/Taipei'
    }
  }
})