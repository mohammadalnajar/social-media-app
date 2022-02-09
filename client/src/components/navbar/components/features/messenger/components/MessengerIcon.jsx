import React from 'react';
import PropTypes from 'prop-types';
import useToggleOpen from '../../../../../../hooks/useToggleOpen';

const MessengerIcon = ({ toggleModal }) => {
  const { isOpen: isOpenTooltip, toggle: toggleTooltip } = useToggleOpen({
    initialState: false,
  });

  return (
    <button
      data-tip="Messenger"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      type="button"
      onClick={toggleModal}
      className={`tooltip ${
        isOpenTooltip && 'tooltip-open'
      } tooltip-bottom text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt`}
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
};
export default MessengerIcon;
