import PropTypes from 'prop-types';
import React from 'react';
import getFullDateAndTime from '../../../../../utils/convertTimestamp';
import timeElapsed from '../../../../../utils/timeElapsed';
import EditedAt from './EditedAt';

const PostAuthor = ({ createdAt, updatedAt, authorData, children }) => {
  const { userId, firstName, lastName, profileImageUrl } = authorData;
  const fullName = `${firstName} ${lastName}`;
  const timeAgo = timeElapsed(new Date(createdAt).getTime());
  const editedAt = getFullDateAndTime(updatedAt);

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
          <div className="flex">
            <span className="text-sm text-gray-500 mr-1">{timeAgo}</span>
            {updatedAt && <EditedAt editedAt={editedAt} />}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

PostAuthor.propTypes = {
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  children: PropTypes.node.isRequired,
  authorData: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
PostAuthor.defaultProps = {
  updatedAt: '',
};

export default PostAuthor;
