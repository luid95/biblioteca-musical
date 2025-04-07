import React, { useEffect } from "react";
import Song from "../Song";
import useFetch from "../../hooks/useFetch";

import "./styles.css";

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
    <section className="search-results">
      <h3>📀 Álbumes encontrados en TheAudioDB</h3>

      {loading && <p className="status-msg">⏳ Cargando álbumes...</p>}

      {error && (
        <div className="status-msg error">
          <p>❌ Hubo un problema al cargar los datos: {error}</p>
          <button onClick={refetch}>🔄 Reintentar</button>
        </div>
      )}

      {!loading && !error && fetchedAlbums.length === 0 && searchTerm && (
        <p className="status-msg">
          No se encontraron álbumes para "{searchTerm}"
        </p>
      )}

      {!loading && !error && fetchedAlbums.length > 0 ? (
        <div className="songs-list">
          {fetchedAlbums.map((song) => (
            <Song
              key={song.idAlbum}
              title={song.strAlbum}
              artist={song.strArtist}
              duration={song.intYearReleased}
              onAdd={() => onAdd(song)}
            />
          ))}
        </div>
      ) : (
        <p className="status-msg">
          !!No se encontraron álbumes para "{searchTerm}"
        </p>
      )}
    </section>
  );
};

export default SearchResults;
