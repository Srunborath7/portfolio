import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/appTranslations";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state: dark by default, persists in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  // Language state: 'en' by default, persists in localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
    document.documentElement.lang = language;
    if (language === "kh") {
      document.body.classList.add("font-khmer");
    } else {
      document.body.classList.remove("font-khmer");
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setLang = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage: setLang,
        t,
        isKhmer: language === "kh",
        isDark: theme === "dark",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
export default AppContext;
