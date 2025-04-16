import React from "react";
import Song from "../Song";

import "./styles.css";

const Library = ({ library }) => {
  return (
    <section>
      <h2>📚 Mi Biblioteca</h2>
      <div className="library-list">
        {library.length > 0 ? (
          library.map((album) => (
            <Song
              key={album.idAlbum}
              title={album.strAlbum}
              artist={album.strArtist}
              duration={album.intYearReleased}
              album={album}
            />
          ))
        ) : (
          <p>Tu biblioteca está vacía.</p>
        )}
      </div>
    </section>
  );
};

export default Library;
