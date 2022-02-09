import React from 'react';
import PropTypes from 'prop-types';

const NotificationsIcon = ({ setShowModal }) => {
  const toggleModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };
  return (
    <button
      type="button"
      onClick={toggleModal}
      className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
    >
      <i className="bx bxs-bell" />
      <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
        9
      </span>
    </button>
  );
};
NotificationsIcon.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
export default NotificationsIcon;
