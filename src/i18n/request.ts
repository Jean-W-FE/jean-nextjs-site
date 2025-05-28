import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from './config'

export default getRequestConfig(async ({ locale }) => {
  // 驗證 locale 是否有效
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale
  try {
    const messages = (await import(`./messages/${validLocale}`)).default
    return {
      messages,
      locale: validLocale,
      timeZone: 'Asia/Taipei'
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${validLocale}`, error)
    // 如果無法加載指定語言，回退到默認語言
    const defaultMessages = (await import(`./messages/${defaultLocale}`)).default
    return {
      messages: defaultMessages,
      locale: defaultLocale,
      timeZone: 'Asia/Taipei'
    }
  }
})