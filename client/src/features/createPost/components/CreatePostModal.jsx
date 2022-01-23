import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useForm from '../../../hooks/useForm';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import capitalize from '../../../utils/helpers';
import CreatePostSelect from './CreatePostSelect';

const CreatePostModal = ({ isOpen, toggleModal, firstName, children }) => {
  const { formData, handleInputChange } = useForm({
    text: '',
  });
  const ref = useRef();
  useOnClickOutside(ref, toggleModal);

  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div ref={ref} className="modal-box dark:bg-dark-second">
          <div className="card">
            {children}
            <div className="divider dark:before:bg-dark-third dark:after:bg-dark-third" />
            <div className="flex">
              <div className="avatar">
                <div className="mb-8 rounded-full w-14 h-14">
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="text-gray-900 dark:text-dark-txt font-semibold capitalize">
                  {firstName}
                </h1>
                <CreatePostSelect />
              </div>
            </div>
            <div className="form-control">
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                className="textarea h-24 textarea-ghost p-0 text-xl text-gray-900 dark:text-dark-txt placeholder:text-gray-800 focus:placeholder:text-gray-400 dark:bg-dark-second dark:focus:text-gray-200 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-500"
                placeholder={`Whats on your mind, ${capitalize(firstName)}?`}
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              htmlFor="my-modal-2"
              className="btn btn-block disabled:dark:text-gray-500 text-semibold capitalize text-base disabled:dark:bg-dark-third bg-btn-primary hover:bg-btn-primary-hover border-none"
              disabled={!formData.text && true}
            >
              Post
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
  children: PropTypes.node.isRequired,
};

export default CreatePostModal;
