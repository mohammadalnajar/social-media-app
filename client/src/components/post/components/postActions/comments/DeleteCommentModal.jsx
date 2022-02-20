import React from 'react';
import PropTypes from 'prop-types';

const DeleteCommentModal = ({
  handleRemoveCommentClick,
  isLoading,
  myRef,
  toggleModal,
}) => {
  console.log(isLoading);
  return (
    <div>
      <div className="modal-open modal ">
        <div
          ref={myRef}
          className="modal-box dark:bg-dark-second dark:text-dark-txt"
        >
          <div className="flex flex-col ">
            <div className="col text-xl flex justify-between border-b-2 dark:border-dark-third pb-2 mb-2">
              <div>Delete Comment?</div>
              <button
                type="button"
                onClick={toggleModal}
                className="btn btn-circle btn-sm bg-gray-300 dark:bg-dark-third hover:bg-gray-400 dark:hover:bg-dark-hover border-none"
              >
                <i className="bx bx-x text-2xl text-gray-500 dark:text-dark-txt" />
              </button>
            </div>
            {/* <hr className="border dark:border-dark-txt m-3" /> */}
            <div>Are you sure you want to delete this comment?</div>
            <div className="col flex justify-end">
              <button type="button" className="btn mr-2" onClick={toggleModal}>
                No
              </button>
              <button
                type="button"
                className={`${
                  isLoading && 'loading'
                } btn  bg-blue-600 hover:bg-blue-500`}
                onClick={() => {
                  handleRemoveCommentClick();
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

DeleteCommentModal.propTypes = {
  myRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleRemoveCommentClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default DeleteCommentModal;
