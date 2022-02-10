import React, { useRef } from 'react';
import NotificationsIcon from './components/NotificationsIcon';
import NotificationsMenu from './components/NotificationsMenu';
import useToggle from '../../../../../hooks/useToggle';

const Notifications = () => {
  const ref = useRef();
  const [isModalOpen, toggleModal] = useToggle({
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
