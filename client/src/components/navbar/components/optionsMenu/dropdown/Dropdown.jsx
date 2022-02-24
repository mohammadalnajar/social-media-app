import React, { useRef } from 'react';
import useLogout from '../../../../../hooks/useLogout';
import useToggle from '../../../../../hooks/useToggle';
import DropDownItem from './DropDownItem';

const Dropdown = () => {
  const ref = useRef();
  const [isDropdownOpen, dropDownToggle] = useToggle({
    ref,
    initialState: '',
  });
  const { logoutUserOnClick } = useLogout();

  return (
    <div className="flex items-center" ref={ref}>
      <button
        type="button"
        onClick={dropDownToggle}
        className={`${
          isDropdownOpen
            ? 'dark:bg-dark-bg-modal-open dark:text-dark-text-modal-open bg-bg-modal-open text-text-modal-open'
            : 'dark:bg-dark-third dark:text-dark-txt'
        } text-xl xl:grid place-items-center bg-gray-200 rounded-full mx-1 p-2.5 dark:hover:bg-gray-600 cursor-pointer hover:bg-gray-300 relative h-10 w-10 flex justify-center items-center`}
      >
        <i
          className={`fas fa-chevron-down ${
            isDropdownOpen && 'animate-rotateUP'
          } 
          ${isDropdownOpen !== '' && !isDropdownOpen && 'animate-rotateDown'} `}
        />
      </button>
      <div
        className={`dropdown dropdown-end ${isDropdownOpen && 'dropdown-open'}`}
      >
        <ul className="p-2 shadow menu top-5 dropdown-content dark:border-dark-third border dark:bg-dark-second bg-base-100 dark:text-dark-txt rounded-box w-52">
          <DropDownItem icon="" title="Setting">
            <i className="fa-solid fa-gear" />
          </DropDownItem>
          <DropDownItem icon="" title="Log Out" onClick={logoutUserOnClick}>
            <i className="fa-solid fa-arrow-right-from-bracket" />
          </DropDownItem>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
