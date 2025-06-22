import React from "react";
import Song from "../Song";

import {
  ResultsSection,
  Title,
  SongsGrid,
  StatusMessage,
} from "./SearchResults.styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  const handleAdd = (album) => {
    const songData = {
      id: album.idAlbum,
      title: album.strAlbum,
      artist: album.strArtist,
      album: album.strAlbum,
      duration: album.intYearReleased,
    };
    dispatch(addSong(songData));
  };

  return (
    <ResultsSection>
      <Title>📀 Álbumes encontrados en TheAudioDB</Title>
      {loading && <StatusMessage>⏳ Cargando álbumes...</StatusMessage>}

      {error && (
        <StatusMessage error>
          ❌ Hubo un problema al cargar los datos: {error}
        </StatusMessage>
      )}

      {!loading && !error && results.length === 0 && (
        <StatusMessage>No se encontraron álbumes.</StatusMessage>
      )}

      {!loading && !error && results.length > 0 && (
        <SongsGrid>
          {results.map((album) => (
            <Song
              key={album.idAlbum}
              title={album.strAlbum}
              artist={album.strArtist}
              duration={album.intYearReleased}
              album={album}
              onAdd={() => handleAdd(album)}
            />
          ))}
        </SongsGrid>
      )}
    </ResultsSection>
  );
};

export default SearchResults;
