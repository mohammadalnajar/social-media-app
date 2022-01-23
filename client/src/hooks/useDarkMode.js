import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [storedValue] = useLocalStorage('darkMode');
  const [theme, setTheme] = useState(() => {
    return storedValue;
  });
  const colorTheme = theme === 'light' ? 'dark' : 'light';
  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    },
    [theme],
    colorTheme
  );

  return [colorTheme, setTheme];
};

export default useDarkMode;
