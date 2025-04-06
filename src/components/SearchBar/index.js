import React, { useState } from "react";
import "./styles.css";

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Busca un artista..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
