import React, { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from '../../../../utils/helpers';

const Tab = ({ selectedState, title, dynamicNum = false }) => {
  const { setSelectedTab, selectedColor } = selectedState;
  const [openTooltip, setOpenTooltip] = useState(false);
  const onClick = () => {
    setSelectedTab(title);
  };
  let iconClass = title === 'home' ? 's-home' : '';
  if (title === 'friends') {
    iconClass = '-group';
  } else if (title === 'marketplace') {
    iconClass = '-store';
  } else if (title === 'watch') {
    iconClass = '-movie-play';
  } else if (title === 'news') {
    iconClass = '-layout';
  }

  return (
    <button
      data-tip={capitalize(title)}
      type="button"
      onClick={onClick}
      onMouseEnter={() => {
        setOpenTooltip(true);
      }}
      onMouseLeave={() => {
        setOpenTooltip(false);
      }}
      className={`${selectedColor(
        title
      )} w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block ${
        dynamicNum && 'relative'
      } tooltip ${openTooltip && 'tooltip-open '} tooltip-bottom`}
    >
      <i className={`bx bx${iconClass}`} />
      {dynamicNum !== 0 && (
        <span className="text-xs absolute top-1 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
          {dynamicNum}
        </span>
      )}
    </button>
  );
};
Tab.propTypes = {
  selectedState: PropTypes.shape({
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
  title: PropTypes.string.isRequired,
  dynamicNum: PropTypes.number,
};
Tab.defaultProps = {
  dynamicNum: 0,
};
export default Tab;
