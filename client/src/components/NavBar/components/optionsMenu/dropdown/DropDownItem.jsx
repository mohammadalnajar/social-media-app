import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({ title }) => {
  return (
    <button className="dark:hover:bg-dark-hover rounded-box" type="button">
      {title}
    </button>
  );
};

DropDownItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DropDownItem;
