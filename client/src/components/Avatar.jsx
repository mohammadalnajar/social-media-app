import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ imageUrl, firstName, lastName, status }) => {
  const statusColor = status === 'active' ? 'bg-green-500' : 'bg-gray-500';
  return (
    <div className="flex items-center">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full hover:opacity-80 hover:cursor-pointer border-2 border-gray-300 dark:border-dark-hover"
        />
        {status && (
          <span
            className={`${statusColor} w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2`}
          />
        )}
      </div>
      {firstName && (
        <span className="mx-2 font-semibold dark:text-dark-txt">
          {firstName} {lastName}
        </span>
      )}
    </div>
  );
};
Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  status: PropTypes.string,
};

Avatar.defaultProps = {
  firstName: null,
  lastName: null,
  status: null,
};
export default Avatar;
