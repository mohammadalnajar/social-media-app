import React, { useEffect } from 'react';
import SearchField from './components/SearchField';
import useToggleOpen from '../../../../../hooks/useToggleOpen';
import SearchMenu from './components/SearchMenu';
import useForm from '../../../../../hooks/useForm';

const Search = () => {
  const { isOpen: isModalOpen, toggle: toggleModal } = useToggleOpen({
    initialState: false,
  });
  const { formData, handleInputChange, reset } = useForm({ search: '' });

  useEffect(() => {
    // fetch users onKey press comes here
    console.log(formData.search);
  }, [formData.search]);

  return (
    <>
      <SearchField
        toggleModal={toggleModal}
        handleInputChange={handleInputChange}
      />
      {isModalOpen && <SearchMenu searchText={formData.search} />}
    </>
  );
};

export default Search;
