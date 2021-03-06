import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import capitalize from '../../../../utils/helpers';
import useWindowSize from '../../../../hooks/useWindowSize';

const Tab = ({ selectedState, title, dynamicNum = false, navigateTo }) => {
  const { setSelectedTab, selectedColor } = selectedState;
  const screenSize = useWindowSize();
  const lgScreen = screenSize.width >= 1024 && true;

  const handleClick = () => {
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
    <Link to={navigateTo}>
      <button
        data-tip={capitalize(title)}
        type="button"
        onClick={handleClick}
        className={`${selectedColor(
          title
        )} w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block 
        
      } ${lgScreen && 'tooltip tooltip-bottom'} `}
      >
        <i className={`bx bx${iconClass} ${dynamicNum && 'relative'}`}>
          {dynamicNum !== 0 && (
            <span className="text-xs absolute -top-1 -right-2 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
              {dynamicNum}
            </span>
          )}
        </i>
      </button>
    </Link>
  );
};
Tab.propTypes = {
  selectedState: PropTypes.shape({
    setSelectedTab: PropTypes.func,
    selectedColor: PropTypes.func,
  }).isRequired,
  title: PropTypes.string.isRequired,
  dynamicNum: PropTypes.number,
  navigateTo: PropTypes.string.isRequired,
};
Tab.defaultProps = {
  dynamicNum: 0,
};
export default Tab;
