import { useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

const useToggle = ({ initialState = false, ref = false }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = (boolean) => {
    if (boolean === 'show') return setIsOpen(true);
    if (boolean === 'hide') return setIsOpen(false);
    return setIsOpen(!isOpen);
  };

  if (ref) {
    useOnClickOutside(ref, () => {
      if (isOpen) {
        setIsOpen(!isOpen);
      }
    });
  }
  return [isOpen, toggle];
};

export default useToggle;
