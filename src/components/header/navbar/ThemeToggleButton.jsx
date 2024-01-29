import React, { useEffect, useState } from 'react';

function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  });

  return (
    <button
      className={`${isDarkMode ? 'bi-sun' : 'bi-moon'} bi px-1 rounded theme-toggle`}
      onClick={toggleTheme}
    ></button>
  );
}

export default ThemeToggleButton;
