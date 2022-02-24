import PropTypes from 'prop-types';
import React from 'react';
import timeElapsed from '../../../utils/timeElapsed';

const PostAuthor = ({ createdAt, authorData, children }) => {
  const { userId, firstName, lastName, profileImageUrl } = authorData;
  const fullName = `${firstName} ${lastName}`;
  const timeAgo = timeElapsed(new Date(createdAt).getTime());

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex space-x-2 items-center">
        <div className="relative">
          <span hidden>{userId}</span>
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-dark-hover"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="flex flex-col leading-tight justify-center">
          <div className="font-semibold capitalize">{fullName}</div>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

PostAuthor.propTypes = {
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  authorData: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostAuthor;
