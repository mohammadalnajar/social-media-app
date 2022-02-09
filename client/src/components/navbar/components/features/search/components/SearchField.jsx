import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ isModalOpen, toggleModal, handleInputChange }) => {
  const [removeEl, setRemoveEl] = useState('');

  const removeElement = () => {
    setTimeout(() => {
      setRemoveEl('hidden');
    }, 500);
    return removeEl;
  };

  return (
    <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 md:w-11 md:h-11 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
      <i
        className={`bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt ${
          isModalOpen && removeElement()
        }`}
      />
      <input
        type="text"
        name="search"
        onFocus={toggleModal}
        onBlur={toggleModal}
        onChange={handleInputChange}
        placeholder="Search Facebook"
        className="outline-none bg-transparent dark:text-white hidden xl:inline-block"
      />
    </div>
  );
};
SearchField.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
export default SearchField;
