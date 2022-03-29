import React from 'react';
import PropTypes from 'prop-types';

const DislikeIcon = ({ toggleShowTooltip }) => {
  return (
    <div onMouseEnter={toggleShowTooltip} onMouseLeave={toggleShowTooltip}>
      <i className="bx bxs-dislike cursor-pointer text-white bg-red-500 rounded-full p-1" />
    </div>
  );
};

DislikeIcon.propTypes = {
  toggleShowTooltip: PropTypes.func,
};

DislikeIcon.defaultProps = {
  toggleShowTooltip: () => {},
};

export default DislikeIcon;
