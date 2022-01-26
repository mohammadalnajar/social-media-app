import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen p-5 sm:p-0">
      <div className="flex flex-nowrap">
        <span className="text-5xl text-btn-primary font-bold">404</span>
        <div className="divider divider-vertical dark:before:bg-dark-third dark:after:bg-dark-third" />
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-dark-main dark:text-dark-txt">
            Page not found
          </span>
          <span className="hidden xs:inline-block text-lg text-gray-600 mt-3">
            Please check the URL in the address bar and try again
          </span>
          <div className="mt-4">
            <button
              onClick={() => {
                navigate('/feed');
              }}
              className="btn btm-sm bg-btn-primary hover:bg-blue-700"
              type="button"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
