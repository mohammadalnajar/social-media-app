import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage('darkMode');
  const [theme, setTheme] = useState(() => {
    if (!storedValue) setValue('dark'); // give default value if undefined
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
