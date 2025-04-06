import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";

import "./styles.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [songs] = useState([
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
    { id: 3, title: "Shape of You", artist: "Ed Sheeran", duration: "4:02" },
  ]);

  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    setLibrary((prevLibrary) => [...prevLibrary, song]);
  };

  useEffect(() => {
    console.log("📢 La biblioteca se ha actualizado:", library);
  }, [library]);

  return (
    <div className="app">
      <Header title="🎵 Biblioteca Musical 🎵" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <SearchResults songs={songs} onAdd={addToLibrary} />
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
