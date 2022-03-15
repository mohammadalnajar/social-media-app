import React from 'react';
import PropTypes from 'prop-types';

const LikeIcon = ({ toggleShowTooltip }) => {
  return (
    <div onMouseEnter={toggleShowTooltip} onMouseLeave={toggleShowTooltip}>
      <i className="bx bxs-like cursor-pointer text-white bg-blue-500 rounded-full border-solid p-1" />
    </div>
  );
};

LikeIcon.propTypes = {
  toggleShowTooltip: PropTypes.func,
};

LikeIcon.defaultProps = {
  toggleShowTooltip: () => {},
};

export default LikeIcon;
