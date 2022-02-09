import { useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

const useToggleOpen = ({ initialState, ref = false }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (ref) {
    useOnClickOutside(ref, () => {
      setIsOpen(false);
    });
  }
  return { isOpen, toggle };
};

export default useToggleOpen;
