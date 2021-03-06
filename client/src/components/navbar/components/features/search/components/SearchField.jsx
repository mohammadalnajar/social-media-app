import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../../../../hooks/useToggle';
import useWindowSize from '../../../../../../hooks/useWindowSize';

const SearchField = ({ isModalOpen, toggleModal, handleInputChange }) => {
  const screenSize = useWindowSize();
  const ref = useRef();
  const [isFieldOpen, toggleField] = useToggle({
    ref,
    initialState: '',
  });

  const mdScreen = screenSize.width <= 1200 && true;

  return (
    <div
      ref={ref}
      className={`w-10 h-10 bg-gray-100 dark:bg-dark-third px-2 py-2 ${
        mdScreen && isFieldOpen !== '' && !isFieldOpen
          ? 'animate-widthRed max-w-[170px]'
          : 'xl:w-0'
      } ${
        mdScreen && isFieldOpen && 'animate-widthEx max-w-[170px]'
      } xl:w-64 h-10 md:h-10 xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-75 `}
    >
      <button type="button" className="w-full h-full" onClick={toggleField}>
        <i
          className={`bx  bx-search-alt-2 text-xl  ${
            mdScreen && isFieldOpen && 'mr-2'
          }  dark:text-dark-txt ${isModalOpen && 'hidden'}`}
        />
      </button>
      <input
        type="text"
        name="search"
        autoComplete="off"
        onFocus={toggleModal}
        onBlur={toggleModal}
        onChange={handleInputChange}
        placeholder="Search Facebook"
        className={`outline-none bg-transparent dark:text-white ${
          mdScreen && isFieldOpen !== '' && !isFieldOpen
            ? 'animate-widthRedBar max-w-[130px]'
            : 'w-0'
        } ${
          mdScreen && isFieldOpen && 'animate-widthExBar max-w-[130px] '
        }   xl:w-64`}
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
