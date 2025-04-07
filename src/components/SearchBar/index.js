import React, { useState } from "react";
import "./styles.css";

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
    <form className="searchbar-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar-input"
        placeholder="Buscar artista..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="searchbar-button">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
