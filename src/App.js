import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";

import "./styles.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [library, setLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Termino de busqueda
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  //Funcion que captura termino a buscar(artista)
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addToLibrary = (song) => {
    setLibrary((prevLibrary) => [...prevLibrary, song]);
  };

  useEffect(() => {
    console.log("📢 La biblioteca se ha actualizado:", library);
  }, [library]);

  return (
    <div className="app">
      <Header title="🎵 Biblioteca Musical 🎵" />
      <div className="content-search">
        <SearchBar onSearch={handleSearch} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <SearchResults
                searchTerm={searchTerm}
                onAdd={addToLibrary}
                loading={loading}
                error={error}
                setLoading={setLoading}
                setError={setError}
              />
              <Library library={library} />
            </div>
          }
        />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </div>
  );
};

export default App;
