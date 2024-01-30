import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkMode } from '@/redux/themeSlice';

function ThemeToggleButton() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  useEffect(() => {
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <button
      className={`${isDarkMode ? 'bi-sun' : 'bi-moon'} bi px-1 rounded theme-toggle`}
      onClick={toggleTheme}
    ></button>
  );
}

export default ThemeToggleButton;
