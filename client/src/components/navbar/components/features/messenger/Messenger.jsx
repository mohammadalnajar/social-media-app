import React, { useRef } from 'react';
import useToggleOpen from '../../../../../hooks/useToggleOpen';
import MessengerIcon from './components/MessengerIcon';
import MessengerModal from './components/MessengerModal';

const Messenger = () => {
  const ref = useRef();
  const { isOpen: isModalOpen, toggle: toggleModal } = useToggleOpen({
    initialState: false,
    ref,
  });

  return (
    <div>
      <MessengerIcon isModalOpen={isModalOpen} toggleModal={toggleModal} />
      {isModalOpen && <MessengerModal myRef={ref} />}
    </div>
  );
};

export default Messenger;

// https://stackoverflow.com/questions/47719113/react-passing-refs-as-a-prop
