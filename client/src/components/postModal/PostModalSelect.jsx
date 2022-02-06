import PropTypes from 'prop-types';
import React from 'react';

const PostModalSelect = ({ select, setSelect }) => {
  return (
    <select
      value={select}
      onChange={(e) => {
        setSelect(e.target.value);
      }}
      className="select select-bordered select-xs w-full max-w-xs text-gray-900 dark:text-dark-txt bg-gray-200 dark:bg-dark-third border-none mt-1"
    >
      <option value="select visibility" disabled="disabled">
        Select visibility
      </option>
      <option value="public">Public</option>
      <option value="friends">Friends</option>
      <option value="only me">Only me</option>
    </select>
  );
};

PostModalSelect.propTypes = {
  select: PropTypes.string.isRequired,
  setSelect: PropTypes.func.isRequired,
};

export default PostModalSelect;
