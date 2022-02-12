import React from 'react';
import PropTypes from 'prop-types';

const PostAction = ({ children }) => {
  // const res = useQuery([`getLikes-${postId}`, { postId }], getLikes, {
  //   staleTime: 10 * 60 * 1000,
  //   refetchInterval: 10 * 60 * 1000,
  // });
  // console.log(res.data);
  return (
    <div className="py-2 px-4">
      <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
        <div className="flex space-x-2">{children}</div>
      </div>
    </div>
  );
};
PostAction.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PostAction;
