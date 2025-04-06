import React from "react";
import Song from "../Song";
import useFetch from "../../hooks/useFetch";

import "./styles.css";

const SearchResults = (props) => {
  const { onAdd } = props;
  const artist = "Oasis";
  console.log("artist", artist);
  const url = artist
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        artist
      )}`
    : null;

  const { data, loading, error } = useFetch(url);

  console.log("data", data);
  if (loading) return <p>Cargando álbumes...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (!data?.album) return <p>No se encontraron álbumes para "{artist}"</p>;

  const fetchedAlbums = data?.album || [];

  return (
    <section>
      <h3>📀 Álbumes encontrados en TheAudioDB</h3>

      {loading && <p>Cargando álbumes reales...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

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
