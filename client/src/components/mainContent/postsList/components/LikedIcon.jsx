import React from 'react';
import PropTypes from 'prop-types';

const LikedIcon = ({ toggleShowTooltip }) => {
  return (
    <div onMouseEnter={toggleShowTooltip} onMouseLeave={toggleShowTooltip}>
      <i className="bx bxs-like cursor-pointer text-white bg-blue-500 rounded-full border-solid border-4 dark:border-dark-third border-gray-100 p-1" />
    </div>
  );
};

LikedIcon.propTypes = {
  toggleShowTooltip: PropTypes.func,
};

LikedIcon.defaultProps = {
  toggleShowTooltip: () => {},
};

export default LikedIcon;
