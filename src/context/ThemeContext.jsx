import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [dark, setDark] = useState(true);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme !== null) {
      setDark(JSON.parse(savedTheme));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "theme",
      JSON.stringify(dark)
    );

  }, [dark]);

  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
  useContext(ThemeContext);