import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBrTranslations from "../locale/pt_br.json"
import enTranslations from "../locale/en.json"
import frTranslations from "../locale/fr.json"
import esTranslations from "../locale/es.json"

const navigatorLanguage = navigator.language.slice(0, 2).toLowerCase();
const supportedLanguages = ['pt_br', 'en', 'fr', 'es'];
export const defaultLanguage = supportedLanguages.find(lng => lng.slice(0, 2) === navigatorLanguage) || 'pt_br';

i18n.use(initReactI18next).init({
  resources: {
    pt_br: { ...ptBrTranslations },
    en: { ...enTranslations },
    fr: { ...frTranslations },
    es: { ...esTranslations }
  },
  lng: localStorage.getItem('language') || defaultLanguage
})