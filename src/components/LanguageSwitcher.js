import React from "react";
import { Button } from "@mui/material";

function LanguageSwitcher({ language, setLanguage }) {
  const toggleLanguage = () => {
    const newLang = language === "ko" ? "en" : "ko";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);

    if (typeof window.updateTitle === "function") {
      window.updateTitle(newLang);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={toggleLanguage}
      style={{ marginTop: "20px" }}
    >
      {language === "ko" ? "English로 변경" : "한국어로 변경"}
    </Button>
  );
}

export default LanguageSwitcher;
