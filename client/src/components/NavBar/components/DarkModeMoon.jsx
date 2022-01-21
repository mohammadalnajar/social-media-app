import React from 'react';
import PropTypes from 'prop-types';

const DarkModeMoon = ({ extraClasses }) => {
  return (
    <div
      className={`${extraClasses} text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt`}
      id="dark-mode-toggle-mb"
    >
      <i className="bx bxs-moon" />
    </div>
  );
};
DarkModeMoon.propTypes = {
  extraClasses: PropTypes.string.isRequired,
};
export default DarkModeMoon;
