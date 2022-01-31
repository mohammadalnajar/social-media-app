import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from '../../../hooks/useDarkMode';
import useLocalStorage from '../../../hooks/useLocalStorage';
import '../../../index.css';

const DarkModeMoon = ({ extraClasses }) => {
  const [storedValue, setValue] = useLocalStorage('darkMode');
  const [colorTheme, setTheme] = useDarkMode();

  const darkModeToggle = () => {
    setValue(storedValue === 'dark' ? 'light' : 'dark');
    setTheme(colorTheme);
  };

  return (
    <main id="main night">
      <div className="container">
        <div className="switcher-wrapper">
          <p className="mode light">Light</p>
          <div id="switcher">
            <div className="star star1" />
            <div className="star star2" />
            <div className="star star3" />
            <div className="round-btn" role="button">
              <div className="moon-mode" />
            </div>
          </div>
          <p className="mode dark">Dark</p>
        </div>
      </div>
    </main>
    // <button
    //   type="button"
    //   onClick={darkModeToggle}
    //   className={`${extraClasses} text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt`}
    //   id="dark-mode-toggle-mb"
    // >
    //   <i className="bx bxs-moon" />
    // </button>
  );
};
DarkModeMoon.propTypes = {
  extraClasses: PropTypes.string.isRequired,
};
export default DarkModeMoon;
