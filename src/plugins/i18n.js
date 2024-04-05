import { createI18n } from "vue-i18n"
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    ar,
    en
  },
})