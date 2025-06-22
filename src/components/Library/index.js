import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice";
import Song from "../Song";
import { LibraryWrapper, LibraryList, RemoveButton } from "./Library.styles";

const Library = () => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library);

  const handleRemove = (songId) => {
    dispatch(removeSong(songId)); // dispatch para la acción removeSong pasando el ID de la canción
  };

  return (
    <LibraryWrapper>
      <h2>📚 Mi Biblioteca</h2>
      <LibraryList>
        {library.length > 0 ? (
          library.map((album) => (
            <div key={album.id}>
              <Song
                title={album.title}
                artist={album.artist}
                duration={album.duration}
                album={album}
              />
              <RemoveButton onClick={() => handleRemove(album.id)}>
                Eliminar
              </RemoveButton>
            </div>
          ))
        ) : (
          <p>Tu biblioteca está vacía.</p>
        )}
      </LibraryList>
    </LibraryWrapper>
  );
};

export default Library;
