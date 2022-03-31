import React from 'react';
import PropTypes from 'prop-types';

const ComingSoon = ({ children }) => {
  return (
    <div className="relative bg-slate-400">
      {children} <span className="absolute top-1/2 left-1/2">Coming Soon</span>
    </div>
  );
};

ComingSoon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComingSoon;
