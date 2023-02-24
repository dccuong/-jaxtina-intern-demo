import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translation.json'
import translationVN from './vn/translation.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationVN,
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'vn',
  resources,
  interpolation: {
    escapeValue: false 
  },
  react: {
    useSuspense:false,
 }
});