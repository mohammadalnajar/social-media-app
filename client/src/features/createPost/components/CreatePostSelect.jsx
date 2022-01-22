import React from 'react';

const CreatePostSelect = () => {
  return (
    <select className="select select-bordered select-xs w-full max-w-xs text-gray-900 dark:text-dark-txt bg-gray-200 dark:bg-dark-third border-none mt-1">
      <option disabled="disabled" selected="selected">
        Select visibility
      </option>
      <option>Public</option>
      <option>Friends</option>
      <option>Only me</option>
    </select>
  );
};

export default CreatePostSelect;
