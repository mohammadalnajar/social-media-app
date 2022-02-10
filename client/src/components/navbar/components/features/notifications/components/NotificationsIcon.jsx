import React from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../../../../hooks/useToggle';

const NotificationsIcon = ({ toggleModal, isModalOpen }) => {
  const [isOpenTooltip, toggleTooltip] = useToggle({});

  return (
    <button
      data-tip="Notifications"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      type="button"
      onClick={toggleModal}
      className={` ${isOpenTooltip && 'tooltip-open '} ${
        isModalOpen
          ? 'dark:bg-dark-bg-modal-open dark:text-dark-text-modal-open bg-bg-modal-open text-text-modal-open'
          : 'dark:bg-dark-third dark:text-dark-txt'
      }  tooltip-bottom text-xl grid place-items-center bg-gray-200  rounded-full mx-1 p-2.5 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-300 relative tooltip`}
    >
      <i className="bx bxs-bell" />
      <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
        9
      </span>
    </button>
  );
};
NotificationsIcon.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
export default NotificationsIcon;
