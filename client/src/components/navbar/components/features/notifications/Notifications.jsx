import React, { useRef } from 'react';
import NotificationsIcon from './components/NotificationsIcon';
import NotificationsMenu from './components/NotificationsMenu';
import useToggleOpen from '../../../../../hooks/useToggleOpen';

const Notifications = () => {
  const ref = useRef();
  const { isOpen: showModal, toggle: setShowModal } = useToggleOpen({
    initialState: false,
    ref,
  });

  return (
    <div>
      <NotificationsIcon setShowModal={setShowModal} />
      {showModal && <NotificationsMenu myRef={ref} />}
    </div>
  );
};

export default Notifications;
