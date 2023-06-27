import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("ligth");

  const switchTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className={`${theme} theme`}>{children}</div>
    </ThemeContext.Provider>
  );
};
