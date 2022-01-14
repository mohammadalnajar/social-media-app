import React from 'react';

const FormButton = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      <button
        type="button"
        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or sign up
      </button>
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    </div>
  );
};

export default FormButton;
