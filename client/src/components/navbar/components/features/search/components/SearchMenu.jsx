import React from 'react';
import PropTypes from 'prop-types';

const SearchMenu = ({ searchText }) => {
  return (
    <div>
      <div className="modal-open modal ">
        <div className="modal-box max-w-xs absolute top-16 left-5 dark:bg-dark-second dark:text-dark-txt">
          <div>Searching coming soon ...{searchText}</div>
        </div>
      </div>
    </div>
  );
};
SearchMenu.propTypes = {
  searchText: PropTypes.string.isRequired,
};
export default SearchMenu;
