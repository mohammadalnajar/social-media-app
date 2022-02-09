import React, { useRef, useState } from 'react';
import useLogout from '../../../../../hooks/useLogout';
import useOnClickOutside from '../../../../../hooks/useOnClickOutside';
import DropDownItem from './DropDownItem';

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState('');
  const { logoutUserOnClick } = useLogout();
  const ref = useRef();

  const dropDownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  useOnClickOutside(ref, () => {
    setOpenDropdown(false);
  });

  return (
    <div className="flex items-center" ref={ref}>
      <button
        type="button"
        onClick={dropDownToggle}
        className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-2.5 cursor-pointer hover:bg-gray-300 relative"
      >
        <i
          className={`fas fa-chevron-down ${openDropdown && 'animate-rotateUP'} 
          ${openDropdown !== '' && !openDropdown && 'animate-rotateDown'} `}
        />
      </button>
      <div
        className={`dropdown dropdown-end ${openDropdown && 'dropdown-open'}`}
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
