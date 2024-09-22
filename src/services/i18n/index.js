import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUA from "lang/translationUA.json";
import translationRU from "lang/translationRU.json";
import translationEN from "lang/translationEN.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
