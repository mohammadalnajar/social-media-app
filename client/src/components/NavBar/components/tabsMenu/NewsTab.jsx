import React from 'react';
import PropTypes from 'prop-types';

const NewsTab = ({ selectedState }) => {
  const { setSelectedTab, selectedColor } = selectedState;
  const onClick = () => {
    setSelectedTab('news');
  };
  return (
    <button
      type="button"
      onClick={onClick}
      href="#"
      className={`w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded ${selectedColor(
        'news'
      )} relative`}
    >
      <i className="bx bx-layout" />
      <span className="text-xs absolute top-1 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
        9+
      </span>
    </button>
  );
};
NewsTab.propTypes = {
  selectedState: PropTypes.shape({
    selectedTab: PropTypes.string,
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
};
export default NewsTab;
