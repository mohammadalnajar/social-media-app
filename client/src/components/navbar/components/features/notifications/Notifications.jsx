import React, { useState } from 'react';
import NotificationsIcon from './components/NotificationsIcon';
import NotificationsMenu from './components/NotificationsMenu';
import useToggleOpen from '../../../../../hooks/useToggleOpen';

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);
  const { isOpen: isOpenTooltip, toggle: toggleTooltip } = useToggleOpen({
    initialState: false,
  });

  return (
    <div
      data-tip="Notifications"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      className={` tooltip ${isOpenTooltip && 'tooltip-open '} tooltip-bottom`}
    >
      <NotificationsIcon setShowModal={setShowModal} />
      {showModal && (
        <div className="absolute top-20 text-white right-6">
          <NotificationsMenu />
        </div>
      )}
    </div>
  );
};

export default Notifications;
