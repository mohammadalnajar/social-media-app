import { useEffect, useState } from 'react';

const useDarkMode = (initialState) => {
  const [theme, setTheme] = useState(initialState);
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
