import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const SongDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const album = location.state?.album;
  console.log("album");
  console.log(album);

  if (!album) {
    return (
      <p className="error-msg">No hay información disponible del álbum.</p>
    );
  }

  return (
    <div className="song-detail-container">
      <div className="song-detail-info">
        <h2>🎵 Detalles del Álbum</h2>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Nombre:</strong> {album.strAlbum}
        </p>
        <p>
          <strong>Artista:</strong> {album.strArtist}
        </p>
        <p>
          <strong>Año:</strong> {album.intYearReleased}
        </p>
        <p>
          <strong>Género:</strong> {album.strGenre}
        </p>
        <p>
          <strong>Descripcion:</strong> {album.strDescriptionPT}
        </p>
        <button onClick={() => navigate(-1)} className="back-button">
          🔙 Volver
        </button>
      </div>

      <div className="song-detail-image">
        {album.strAlbumThumb ? (
          <img src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} />
        ) : (
          <p>Sin imagen disponible</p>
        )}
      </div>
    </div>
  );
};

export default SongDetail;
