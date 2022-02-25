import React from 'react';
import PropTypes from 'prop-types';

const EnsureModal = ({
  handleConfirmClick,
  isLoading,
  myRef,
  toggleEnsureModal,
  title,
  question,
}) => {
  return (
    <div>
      <div className="modal-open modal ">
        <div
          ref={myRef}
          className="modal-box dark:bg-dark-second dark:text-dark-txt"
        >
          <div className="flex flex-col ">
            <div className="col text-xl flex justify-between border-b-2 dark:border-dark-third pb-2 mb-2">
              <div>{title}</div>
              <button
                type="button"
                onClick={toggleEnsureModal}
                className="btn btn-circle btn-sm bg-gray-300 dark:bg-dark-third hover:bg-gray-400 dark:hover:bg-dark-hover border-none"
              >
                <i className="bx bx-x text-2xl text-gray-500 dark:text-dark-txt" />
              </button>
            </div>
            <div>{question}</div>
            <div className="col flex justify-end">
              <button
                type="button"
                className="btn mr-2"
                onClick={toggleEnsureModal}
              >
                No
              </button>
              <button
                type="button"
                className={`${
                  isLoading && 'loading'
                } btn  bg-blue-600 hover:bg-blue-500`}
                onClick={() => {
                  handleConfirmClick();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EnsureModal.propTypes = {
  myRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  toggleEnsureModal: PropTypes.func.isRequired,
  handleConfirmClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
export default EnsureModal;
