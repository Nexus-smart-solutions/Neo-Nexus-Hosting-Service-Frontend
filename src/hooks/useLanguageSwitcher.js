import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const updateHtmlAttributes = useCallback((lng) => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const normalizedLng = lng.split("-")[0]; // handle en-US, ar-SA
    const dir = normalizedLng === "ar" ? "rtl" : "ltr";

    html.setAttribute("lang", lng);
    html.setAttribute("dir", dir);

    // Also update localStorage to ensure consistency
    localStorage.setItem("i18nextLng", lng);
  }, []);

  const setLanguage = useCallback(
    async (lng) => {
      if (!lng) return i18n.language;

      // Check if we are already on this language (ignoring case and variants)
      if (lng.split("-")[0] === i18n.language.split("-")[0]) {
        updateHtmlAttributes(i18n.language);
        return i18n.language;
      }

      await i18n.changeLanguage(lng);
      updateHtmlAttributes(lng);
      return lng;
    },
    [i18n, updateHtmlAttributes],
  );

  const toggleLanguage = useCallback(() => {
    const currentBase = i18n.language.split("-")[0];
    const nextLang = currentBase === "ar" ? "en" : "ar";
    return setLanguage(nextLang);
  }, [i18n.language, setLanguage]);

  useEffect(() => {
    updateHtmlAttributes(i18n.language);
  }, [i18n.language, updateHtmlAttributes]);

  return {
    currentLanguage: i18n.language,
    setLanguage,
    toggleLanguage,
  };
};

export default useLanguageSwitcher;
