import React from 'react';
import PropTypes from 'prop-types';

const MessengerModal = ({ myRef }) => {
  return (
    <div>
      <div className="modal-open modal ">
        <div
          ref={myRef}
          className="modal-box max-w-xs absolute top-16 right-5 dark:bg-dark-second dark:text-dark-txt"
        >
          <div>Messenger coming soon ...</div>
        </div>
      </div>
    </div>
  );
};

MessengerModal.propTypes = {
  myRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
export default MessengerModal;
