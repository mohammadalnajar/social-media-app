import PropTypes from 'prop-types';
import React from 'react';

const PostContent = ({ text }) => {
  return <div className="text-justify px-4 py-2">{text}</div>;
};

PostContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PostContent;
