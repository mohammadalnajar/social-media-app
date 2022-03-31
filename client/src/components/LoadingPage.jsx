import React from 'react';

const LoadingPage = () => {
  return (
    <div className="w-full h-full fixed flex justify-center top-0 left-0 bg-white opacity-75 z-50">
      <span
        className="text-green-500 opacity-75 top-1/2 my-0 relative w-100 h-100"
        style={{ top: '50%' }}
      >
        <i className="fas fa-circle-notch fa-spin fa-5x" />
      </span>
    </div>
  );
};

export default LoadingPage;
