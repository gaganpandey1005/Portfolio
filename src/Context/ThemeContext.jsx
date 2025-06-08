import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    settheme(storedTheme);

   
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("clicked");
    
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
