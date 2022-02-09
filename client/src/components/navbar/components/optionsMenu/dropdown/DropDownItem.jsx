import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({ title, onClick, children }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="dark:hover:bg-dark-hover rounded-box"
        type="button"
      >
        <div className="mr-3">{children}</div>
        <div>{title}</div>
      </button>
    </li>
  );
};

DropDownItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
DropDownItem.defaultProps = {
  onClick: () => {},
};

export default DropDownItem;
