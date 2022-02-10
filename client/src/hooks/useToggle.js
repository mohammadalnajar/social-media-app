import { useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

const useToggle = ({ initialState = false, ref = false }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (ref) {
    useOnClickOutside(ref, () => {
      setIsOpen(false);
    });
  }
  return [isOpen, toggle];
};

export default useToggle;
