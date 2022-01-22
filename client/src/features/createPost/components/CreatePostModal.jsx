import PropTypes from 'prop-types';
import React from 'react';

const CreatePostModal = ({ isOpen, toggleModal, firstName }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className="modal-box dark:bg-dark-second">
          <div className="card">
            <div className="form-control">
              <textarea
                className="textarea h-24 textarea-ghost p-0 dark:bg-dark-second dark:focus:text-gray-200"
                placeholder={`Whats on your mind, ${firstName}.`}
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={toggleModal}
              type="button"
              htmlFor="my-modal-2"
              className="btn bg-btn-primary hover:bg-btn-primary-hover"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CreatePostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default CreatePostModal;
