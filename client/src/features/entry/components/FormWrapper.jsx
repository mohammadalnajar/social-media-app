import PropTypes from 'prop-types';
import React from 'react';

const FormWrapper = ({ children }) => {
  return (
    <div className="flex max-h-[474px] w-full mx-auto overflow-hidden bg-white p-6 lg:p-0 lg:drop-shadow-2xl dark:bg-gray-800 lg:max-w-4xl">
      <div
        className="hidden bg-cover md:block md:w-2/3"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
          backgroundPosition: 'center',
        }}
      />
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 my-auto">
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white mb-6">
          The Social App
        </h2>
        {children}
      </div>
    </div>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormWrapper;
