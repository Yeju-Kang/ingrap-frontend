import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

const useTranslate = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const translations = useSelector((state) => state.language.translations) || {};

  const translate = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (let k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }

    return value;
  };

  const toggleLanguage = () => {
    const newLanguage = language === "ko" ? "en" : "ko";
    localStorage.setItem("language", newLanguage); // ✅ localStorage에 저장
    dispatch(setLanguage(newLanguage)); // ✅ Redux 상태 업데이트
  };

  return { translate, language, toggleLanguage };
};

export default useTranslate;