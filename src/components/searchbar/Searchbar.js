import React, { useState } from 'react';
import { SearchForm, SearchFormButton, SearchFormInput, SearchBar } from './Searchbar.styled';
import { ReactComponent as SearchSvg } from '../../icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const inputForSearch = e.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      setShowPlaceholder(true);
      return;
    }
    onSubmit(e);
    setShowPlaceholder(false);
  };

  return (
    <SearchBar className="Searchbar">
      <SearchForm className="SearchForm" onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="SearchForm-button">
          <SearchSvg width="25" height="25" />
        </SearchFormButton>

        <SearchFormInput
          name="inputForSearch"
          className="SearchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={showPlaceholder ? "Please enter key words for search" : "Search images and photos"}
          onFocus={() => setShowPlaceholder(false)}
        />
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;


