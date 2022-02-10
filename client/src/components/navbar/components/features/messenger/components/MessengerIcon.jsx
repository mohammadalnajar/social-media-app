import React from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../../../../hooks/useToggle';

const MessengerIcon = ({ toggleModal, isModalOpen }) => {
  const [isOpenTooltip, toggleTooltip] = useToggle({});

  return (
    <button
      data-tip="Messenger"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      type="button"
      onClick={toggleModal}
      className={`tooltip ${isOpenTooltip && 'tooltip-open'} ${
        isModalOpen
          ? 'dark:bg-dark-bg-modal-open dark:text-dark-text-modal-open bg-bg-modal-open text-text-modal-open'
          : 'dark:bg-dark-third dark:text-dark-txt'
      } tooltip-bottom text-2xl grid place-items-center bg-gray-200 rounded-full w-10 h-10 cursor-pointer  dark:hover:bg-gray-600 hover:bg-gray-300`}
    >
      <i className="bx bxl-messenger" />
      <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
        4
      </span>
    </button>
  );
};
MessengerIcon.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
export default MessengerIcon;
