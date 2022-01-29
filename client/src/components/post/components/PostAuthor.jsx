import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchUser } from '../../../utils/api';
import timeElapsed from '../../../utils/timeElapsed';

const PostAuthor = ({ createdAt }) => {
  const {
    data: { data },
  } = useQuery('fetchUser', fetchUser, {
    retry: 0,
  });
  const fullName = `${data.firstName} ${data.lastName}`;
  const timeAgo = timeElapsed(new Date(createdAt).getTime());

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex space-x-2 items-center">
        <div className="relative">
          <img
            src={data.profileImageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-dark-hover"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
        </div>
        <div className="flex flex-col leading-tight justify-center">
          <div className="font-semibold">{fullName}</div>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>
      </div>
      <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
        <i className="bx bx-dots-horizontal-rounded" />
      </div>
    </div>
  );
};

PostAuthor.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default PostAuthor;
