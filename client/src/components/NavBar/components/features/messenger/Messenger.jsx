import React, { useState } from 'react';
import MessengerIcon from './components/MessengerIcon';
import MessengerModal from './components/MessengerModal';

const Messenger = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt">
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

export default Messenger;
