import React from 'react';

const CreatePostSelect = () => {
  return (
    <select
      defaultValue={0}
      className="select select-bordered select-xs w-full max-w-xs text-gray-900 dark:text-dark-txt bg-gray-200 dark:bg-dark-third border-none mt-1"
    >
      <option value={0} disabled="disabled">
        Select visibility
      </option>
      <option value={1}>Public</option>
      <option value={2}>Friends</option>
      <option value={3}>Only me</option>
    </select>
  );
};

export default CreatePostSelect;
