import React, { useEffect } from "react";
import Song from "../Song";
import useFetch from "../../hooks/useFetch";
import {
  ResultsSection,
  Title,
  SongsGrid,
  StatusMessage,
  RetryButton,
} from "./SearchResults.styles";

const SearchResults = ({ searchTerm, onAdd, setLoading, setError }) => {
  const url = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        searchTerm
      )}`
    : null;

  const { data, loading, error, refetch } = useFetch(url);

  useEffect(() => {
    setLoading(loading);
    setError(error);
  }, [loading, error, setLoading, setError]);

  const fetchedAlbums = data?.album || [];

  return (
    <ResultsSection>
      <Title>📀 Álbumes encontrados en TheAudioDB</Title>

      {loading && <StatusMessage>⏳ Cargando álbumes...</StatusMessage>}

      {error && (
        <StatusMessage error>
          ❌ Hubo un problema al cargar los datos: {error}
          <br />
          <RetryButton onClick={refetch}>🔄 Reintentar</RetryButton>
        </StatusMessage>
      )}

      {!loading && !error && fetchedAlbums.length === 0 && searchTerm && (
        <StatusMessage>
          No se encontraron álbumes para "{searchTerm}"
        </StatusMessage>
      )}

      {!loading && !error && fetchedAlbums.length > 0 ? (
        <SongsGrid>
          {fetchedAlbums.map((song) => (
            <Song
              key={song.idAlbum}
              title={song.strAlbum}
              artist={song.strArtist}
              duration={song.intYearReleased}
              album={song}
              onAdd={() => onAdd(song)}
            />
          ))}
        </SongsGrid>
      ) : (
        <StatusMessage>
          !!No se encontraron álbumes para "{searchTerm}"
        </StatusMessage>
      )}
    </ResultsSection>
  );
};

export default SearchResults;
