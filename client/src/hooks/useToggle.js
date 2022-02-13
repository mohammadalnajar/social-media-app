import { useState } from 'react';
import useOnClickOutside from './useOnClickOutside';

const useToggle = ({ initialState = false, ref = false }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => {
    console.log('toggle');
    setIsOpen(!isOpen);
  };

  if (ref) {
    useOnClickOutside(ref, () => {
      if (isOpen) {
        console.log('ref');
        setIsOpen(!isOpen);
      }
    });
  }
  return [isOpen, toggle];
};

export default useToggle;
