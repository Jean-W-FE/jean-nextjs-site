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
