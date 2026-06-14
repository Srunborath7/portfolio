import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] =
    useState("en");

  useEffect(() => {

    const savedLanguage =
      localStorage.getItem(
        "language"
      );

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "language",
      language
    );

  }, [language]);

  const toggleLanguage = () => {

    setLanguage(prev =>
      prev === "en"
        ? "kh"
        : "en"
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () =>
  useContext(LanguageContext);