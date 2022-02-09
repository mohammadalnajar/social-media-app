import React from 'react';
import PropTypes from 'prop-types';

const NotificationsMenu = ({ myRef }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal-open modal ">
        <div
          ref={myRef}
          className="modal-box max-w-xs absolute top-16 right-5 dark:bg-dark-second dark:text-dark-txt"
        >
          <div>Notification coming soon ...</div>
        </div>
      </div>
    </div>
  );
};

NotificationsMenu.propTypes = {
  myRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
export default NotificationsMenu;
