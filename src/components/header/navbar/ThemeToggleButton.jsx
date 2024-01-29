import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className={`${isDarkMode ? 'bi-sun' : 'bi-moon'} bi px-1 rounded theme-toggle`}
      onClick={toggleTheme}
    ></button>
  );
}

export default ThemeToggleButton;
