import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, resetResults } from "./redux/slices/searchSlice";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Leer estados de búsqueda desde Redux
  const { results, loading, error } = useSelector((state) => state.search);

  // Función para buscar
  const handleSearch = (term) => {
    if (term.trim() === "") {
      dispatch(resetResults());
      return;
    }
    dispatch(fetchSongs(term));
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
                searchTerm={null}
                loading={loading}
                error={error}
                results={results}
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
