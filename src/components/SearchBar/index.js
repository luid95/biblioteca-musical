import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";
import { SearchForm, SearchInput, SearchButton } from "./SearchBar.styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(fetchSongs(searchTerm));
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Buscar artista..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton type="submit" className="searchbar-button">
        Buscar
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
