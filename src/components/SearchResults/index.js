import React, { useEffect } from "react";
import Song from "../Song";
import useFetch from "../../hooks/useFetch";

import "./styles.css";

const SearchResults = (props) => {
  const { searchTerm, onAdd, loading, error, setLoading, setError } = props;

  const url = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        searchTerm
      )}`
    : null;

  const { data, loading: apiLoading, error: apiError } = useFetch(url);

  useEffect(() => {
    setLoading(apiLoading);
    setError(apiError);
  }, [apiLoading, apiError, setLoading, setError]);

  console.log("data", data);
  if (loading) return <p>Cargando álbumes...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (!data?.album) return <p>No se encontraron álbumes para "{searchTerm}"</p>;

  const fetchedAlbums = data?.album || [];

  return (
    <section>
      <h3>📀 Álbumes encontrados en TheAudioDB</h3>

      {/* 🎧 Álbumes reales desde la API */}
      {fetchedAlbums.length > 0 ? (
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
        <p>Tu busqueda está vacía.</p>
      )}
    </section>
  );
};

export default SearchResults;
