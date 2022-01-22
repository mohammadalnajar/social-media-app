import React from 'react';
import PropTypes from 'prop-types';

const FriendsTab = ({ selectedState }) => {
  const { setSelectedTab, selectedColor } = selectedState;
  const onClick = () => {
    setSelectedTab('friends');
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded ${selectedColor(
        'friends'
      )} relative`}
    >
      <i className="bx bx-group" />
    </button>
  );
};
FriendsTab.propTypes = {
  selectedState: PropTypes.shape({
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
};
export default FriendsTab;
