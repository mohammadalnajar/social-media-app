import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from '../context/authContext';
import useDarkMode from '../hooks/useDarkMode';
import queryClient from '../utils/queryClientOptions';

const ErrorFallback = () => {
  <div
    className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
    <button
      type="button"
      className="mt-4"
      onClick={() => {
        window.location.assign(window.location.origin);
      }}
    >
      Refresh
    </button>
  </div>;
};

const AppProvider = ({ children }) => {
  useDarkMode();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
