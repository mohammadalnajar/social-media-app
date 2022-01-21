import React from 'react';
import PropTypes from 'prop-types';

const HomeTab = ({ selectedState }) => {
  const { setSelectedTab, selectedColor } = selectedState;
  const onClick = () => {
    setSelectedTab('home');
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${selectedColor(
        'home'
      )} w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block `}
    >
      <i className="bx bxs-home" />
    </button>
  );
};
HomeTab.propTypes = {
  selectedState: PropTypes.shape({
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
};
export default HomeTab;
