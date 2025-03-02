import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import useTranslatae from "./hooks/useTranslate"

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "ko", // ✅ 초기 언어 설정
    fallbackLng: "ko", // ✅ 지원하지 않는 언어일 경우 기본값
    interpolation: { escapeValue: false },
  });

export default i18n;