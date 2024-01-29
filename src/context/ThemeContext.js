'use client';

import { createContext, useContext, useState } from 'react';

// References
// (1) https://www.youtube.com/watch?v=N0-__jFOW64
// (2) https://www.w3schools.com/react/react_usecontext.asp

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// from reference 1: custom hook to use the data from context
export const useTheme = () => useContext(ThemeContext);
