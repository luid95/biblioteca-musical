import React from "react";
import Song from "../Song";

import "./styles.css";

const SearchResults = (props) => {
  const { songs, onAdd } = props;
  return (
    <section>
      <h2>🎶 Resultados de búsqueda</h2>
      <div className="songs-list">
        {songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            onAdd={() => onAdd(song)}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
