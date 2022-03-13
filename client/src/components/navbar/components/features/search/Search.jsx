import React, { useEffect } from 'react';
import SearchField from './components/SearchField';
import useToggle from '../../../../../hooks/useToggle';
import SearchMenu from './components/SearchMenu';
import useForm from '../../../../../hooks/useForm';

const Search = () => {
  const [isModalOpen, toggleModal] = useToggle({});
  const { formData, handleInputChange } = useForm({ search: '' });

  useEffect(() => {
    // fetch users onKey press comes here
  }, [formData.search]);

  return (
    <>
      <SearchField
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        handleInputChange={handleInputChange}
      />
      {isModalOpen && <SearchMenu searchText={formData.search} />}
    </>
  );
};

export default Search;
