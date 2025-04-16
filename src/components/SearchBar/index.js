import React, { useState } from "react";
import { SearchForm, SearchInput, SearchButton } from "./SearchBar.styles";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); // Llama a la función que maneja la búsqueda
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
