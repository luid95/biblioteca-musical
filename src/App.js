import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";

const App = () => {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState(""); // Termino de busqueda
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  //Funcion que captura termino a buscar(artista)
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Header title="🎵 Biblioteca Musical 🎵" />
      {!location.pathname.startsWith("/song/") && (
        <div className="content-search">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <SearchResults
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                setLoading={setLoading}
                setError={setError}
              />
              <Library />
            </div>
          }
        />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </div>
  );
};

export default App;
