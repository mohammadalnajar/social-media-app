import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dark:hover:bg-dark-hover rounded-box"
      type="button"
    >
      {title}
    </button>
  );
};

DropDownItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
DropDownItem.defaultProps = {
  onClick: () => {},
};

export default DropDownItem;
