import React from 'react';
import PropTypes from 'prop-types';

const NavAvatar = ({ children }) => {
  return (
    <button
      type="button"
      href="#"
      className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1 hover:opacity-80 hover:cursor-pointer"
    >
      {children}
    </button>
  );
};
NavAvatar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NavAvatar;
