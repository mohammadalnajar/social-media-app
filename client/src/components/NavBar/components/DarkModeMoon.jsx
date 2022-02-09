import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useDarkMode from '../../../hooks/useDarkMode';
import useLocalStorage from '../../../hooks/useLocalStorage';
import '../../../index.css';

const DarkModeMoon = ({ extraClasses }) => {
  const [storedValue, setValue] = useLocalStorage('darkMode');
  const [checked, setChecked] = useState(() => {
    if (storedValue === 'dark') {
      return false;
    }
    return true;
  });
  const [colorTheme, setTheme] = useDarkMode();
  const darkModeToggle = () => {
    setChecked(!checked);
    setValue(storedValue === 'dark' ? 'light' : 'dark');
    setTheme(colorTheme);
  };

  return (
    <div className={`${extraClasses} container m-2`}>
      <button
        type="button"
        id="switch"
        onClick={() => {
          darkModeToggle();
        }}
        className="switch"
      >
        <input
          type="checkbox"
          onChange={() => {}}
          checked={checked}
          id="slider"
        />
        <span className="slider round" />
      </button>
    </div>
  );
};
DarkModeMoon.propTypes = {
  extraClasses: PropTypes.string.isRequired,
};
export default DarkModeMoon;
