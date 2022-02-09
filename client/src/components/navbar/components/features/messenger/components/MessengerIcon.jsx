import React from 'react';
import PropTypes from 'prop-types';

const MessengerIcon = ({ setShowModal }) => {
  const toggleMessengerModal = () => {
    setShowModal((current) => {
      return !current;
    });
  };
  return (
    <button type="button" onClick={toggleMessengerModal}>
      <i className="bx bxl-messenger" />
    </button>
  );
};
MessengerIcon.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
export default MessengerIcon;
