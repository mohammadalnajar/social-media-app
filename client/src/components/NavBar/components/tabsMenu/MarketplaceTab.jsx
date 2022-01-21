import React from 'react';
import PropTypes from 'prop-types';

const Marketplace = ({ selectedState }) => {
  const { setSelectedTab, selectedColor } = selectedState;

  const onClick = () => {
    setSelectedTab('marketplace');
  };
  return (
    <button
      type="button"
      onClick={onClick}
      href="#"
      className={`w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded ${selectedColor(
        'marketplace'
      )} relative`}
    >
      <i className="bx bx-store" />
    </button>
  );
};
Marketplace.propTypes = {
  selectedState: PropTypes.shape({
    selectedTab: PropTypes.string,
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
};
export default Marketplace;
