/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component to wrap your App component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dracula"); // ✅ Default theme set to "dracula"

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to access the theme context
function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme, ThemeProvider };
