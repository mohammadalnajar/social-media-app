import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessengerIcon from './components/MessengerIcon';
import MessengerModal from './components/MessengerModal';
import capitalize from '../../../../../utils/helpers';

const Messenger = ({ extraClasses }) => {
  const [showModal, setShowModal] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);
  return (
    <div>
      <div
        data-tip="Messenger"
        onMouseEnter={() => {
          setOpenTooltip(true);
        }}
        onMouseLeave={() => {
          setOpenTooltip(false);
        }}
        className={`${extraClasses} tooltip ${
          openTooltip && 'tooltip-open '
        } tooltip-bottom text-2xl grid place-items-center bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt`}
      >
        <MessengerIcon setShowModal={setShowModal} />
      </div>
      {showModal && (
        <div className="absolute top-20 right-6">
          <MessengerModal />
        </div>
      )}
    </div>
  );
};
Messenger.propTypes = {
  extraClasses: PropTypes.string.isRequired,
};
export default Messenger;
