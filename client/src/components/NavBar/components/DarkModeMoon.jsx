import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from '../../../hooks/useDarkMode';
import useLocalStorage from '../../../hooks/useLocalStorage';

const DarkModeMoon = ({ extraClasses }) => {
  const [storedValue, setValue] = useLocalStorage('darkMode');
  const [colorTheme, setTheme] = useDarkMode(storedValue);

  const darkModeToggle = () => {
    setValue(storedValue === 'dark' ? 'light' : 'dark');
    setTheme(colorTheme);
  };

  return (
    <button
      type="button"
      onClick={darkModeToggle}
      className={`${extraClasses} text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt`}
      id="dark-mode-toggle-mb"
    >
      <i className="bx bxs-moon" />
    </button>
  );
};
DarkModeMoon.propTypes = {
  extraClasses: PropTypes.string.isRequired,
};
export default DarkModeMoon;
