import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./languages/en.json";
import ar from "./languages/ar.json";
import enAuth from "./languages/en/auth.json";
import arAuth from "./languages/ar/auth.json";
import enHome from "./languages/en/home.json";
import arHome from "./languages/ar/home.json";

const resources = {
  en: {
    translation: en,
    auth: enAuth,
    home: enHome,
  },
  ar: {
    translation: ar,
    auth: arAuth,
    home: arHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    supportedLngs: ["en", "ar"],
    ns: ["translation", "auth", "home"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
