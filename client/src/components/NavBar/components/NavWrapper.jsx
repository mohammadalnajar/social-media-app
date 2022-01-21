import React from 'react';
import PropTypes from 'prop-types';

const NavWrapper = ({ children }) => {
  return (
    <nav className="bg-white dark:bg-dark-second h-max my-auto md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
      {children}
    </nav>
  );
};
NavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NavWrapper;
