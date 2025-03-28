import React from "react";
import Song from "../Song";

import "./styles.css";

const Library = (props) => {
  const { library } = props;
  return (
    <section>
      <h2>📚 Mi Biblioteca</h2>
      <div className="library-list">
        {library.length > 0 ? (
          library.map((song) => (
            <Song
              key={song.id}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
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
