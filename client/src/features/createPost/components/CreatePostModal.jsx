import PropTypes from 'prop-types';
import React from 'react';

const CreatePostModal = ({ isOpen, toggleModal }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <p>
            Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
            adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
            quasi eligendi. Saepe velit autem minima.
          </p>
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
};

export default CreatePostModal;
