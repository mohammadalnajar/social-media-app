import React, { useState } from 'react';
import NotificationsIcon from './components/NotificationsIcon';
import NotificationsMenu from './components/NotificationsMenu';

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <div
      data-tip="Notifications"
      onMouseEnter={() => {
        setOpenTooltip(true);
      }}
      onMouseLeave={() => {
        setOpenTooltip(false);
      }}
      className={` tooltip ${openTooltip && 'tooltip-open '} tooltip-bottom`}
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
