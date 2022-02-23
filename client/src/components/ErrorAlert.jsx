import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ErrorAlert = ({ errorMessage, duration, errorStatus }) => {
  const [alert, setAlert] = useState(errorMessage);
  const navigate = useNavigate();
  const handleClose = () => {
    setAlert(false);
  };

  useEffect(() => {
    const renderDuration = setTimeout(() => {
      if (errorStatus === 'not authenticated') {
        navigate('/');
      }
      setAlert(false);
    }, duration);
    return () => {
      clearTimeout(renderDuration);
    };
  }, [alert]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {alert && (
        <div className="w-full text-white bg-red-500 mt-6">
          <div className="container flex items-center justify-between px-2 py-2 mx-auto">
            <div className="flex">
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>

              <p className="mx-3">{errorMessage}</p>
            </div>
            <button
              onClick={handleClose}
              type="button"
              className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  errorStatus: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default ErrorAlert;
