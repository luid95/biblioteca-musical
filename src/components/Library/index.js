import React from "react";
import Song from "../Song";
import { LibraryWrapper, LibraryList } from "./Library.styles";

const Library = ({ library }) => {
  return (
    <LibraryWrapper>
      <h2>📚 Mi Biblioteca</h2>
      <LibraryList>
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
      </LibraryList>
    </LibraryWrapper>
  );
};

export default Library;
