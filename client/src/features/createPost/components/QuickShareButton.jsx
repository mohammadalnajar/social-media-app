import PropTypes from 'prop-types';
import React from 'react';

const QuickShareButton = ({ title, iconType, color }) => {
  return (
    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
      <i className={`bx ${iconType} ${color}`} />
      <span className="hidden xs:inline text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
        {title}
      </span>
    </div>
  );
};

QuickShareButton.propTypes = {
  title: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default QuickShareButton;
