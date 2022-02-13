import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../../../../hooks/useToggle';

const SearchField = ({ isModalOpen, toggleModal, handleInputChange }) => {
  const [removeEl, setRemoveEl] = useState('');
  const ref = useRef();
  const [isFieldOpen, toggleField] = useToggle({
    ref,
  });
  const removeElement = () => {
    setTimeout(() => {
      setRemoveEl('hidden');
    }, 500);
    return removeEl;
  };

  return (
    <div
      className={`relative bg-gray-100 dark:bg-dark-third px-2 py-2 ${
        !isFieldOpen && 'w-10 md:w-10'
      }  h-10  md:h-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer`}
    >
      <button type="button" onClick={toggleField}>
        <i
          className={`bx bx-search-alt-2 text-xl ${
            isFieldOpen && 'mr-2'
          } xl:mr-2 dark:text-dark-txt ${isModalOpen && removeElement()}`}
        />
      </button>
      <input
        ref={ref}
        type="text"
        name="search"
        autoComplete="off"
        onFocus={toggleModal}
        onBlur={toggleModal}
        onChange={handleInputChange}
        placeholder="Search Facebook"
        className={`outline-none bg-transparent dark:text-white ${
          !isFieldOpen && 'hidden'
        }  xl:inline-block`}
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
