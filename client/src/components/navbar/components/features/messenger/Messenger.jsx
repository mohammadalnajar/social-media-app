import React, { useRef } from 'react';
import useToggleOpen from '../../../../../hooks/useToggleOpen';
import MessengerIcon from './components/MessengerIcon';
import MessengerModal from './components/MessengerModal';

const Messenger = () => {
  const ref = useRef();
  const { isOpen: showModal, toggle: toggleModal } = useToggleOpen({
    initialState: false,
    ref,
  });

  return (
    <div>
      <MessengerIcon toggleModal={toggleModal} />
      {showModal && <MessengerModal myRef={ref} />}
    </div>
  );
};

export default Messenger;
