import React, { useRef } from 'react';
import NotificationsIcon from './components/NotificationsIcon';
import NotificationsMenu from './components/NotificationsMenu';
import useToggleOpen from '../../../../../hooks/useToggleOpen';

const Notifications = () => {
  const ref = useRef();
  const { isOpen: isModalOpen, toggle: toggleModal } = useToggleOpen({
    initialState: false,
    ref,
  });

  return (
    <div>
      <NotificationsIcon isModalOpen={isModalOpen} toggleModal={toggleModal} />
      {isModalOpen && <NotificationsMenu myRef={ref} />}
    </div>
  );
};

export default Notifications;
