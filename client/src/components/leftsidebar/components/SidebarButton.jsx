import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SidebarButton = ({ srcImage, option, selected, setSelected }) => {
  const navigate = useNavigate();
  const selectedCheck = selected === option;

  const handleClick = () => {
    console.log(selectedCheck, 'selectedCheck');
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
        className={`p-2 rounded-xl ${
          selectedCheck && 'bg-gray-300'
        } text-green-400`}
      >
        <img src={srcImage} alt={option} className="w-10 h-10" />
      </div>
      <span className="font-semibold capitalize">{option}</span>
    </button>
  );
};

SidebarButton.propTypes = {
  srcImage: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default SidebarButton;
