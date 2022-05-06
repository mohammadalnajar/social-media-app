import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SidebarButton = ({ option, selected, setSelected, children }) => {
  const navigate = useNavigate();
  const selectedCheck = selected === option;

  const handleClick = () => {
    setSelected(option);
    navigate(`/${option}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center space-x-2 w-full my-3 ${
        selectedCheck ? 'bg-gray-200' : 'hover:bg-gray-200'
      }  rounded-xl transition-all dark:text-dark-txt dark:hover:bg-dark-third`}
    >
      <div
        className={`p-2 w-11 rounded-xl ${
          selectedCheck ? 'bg-green-400 text-white' : 'text-green-400'
        } `}
      >
        {children}
      </div>
      <span className="font-semibold capitalize">{option}</span>
    </button>
  );
};

SidebarButton.propTypes = {
  option: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarButton;
