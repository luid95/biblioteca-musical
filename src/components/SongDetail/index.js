import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Info,
  BackButton,
  ImageContainer,
  ErrorMsg,
} from "./SongDetail.styles";

const SongDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const album = location.state?.album;

  if (!album) {
    return <ErrorMsg>No hay información disponible del álbum.</ErrorMsg>;
  }

  return (
    <Container>
      <Info>
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
        <BackButton onClick={() => navigate(-1)}>🔙 Volver</BackButton>
      </Info>

      <ImageContainer>
        {album.strAlbumThumb ? (
          <img src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} />
        ) : (
          <p>Sin imagen disponible</p>
        )}
      </ImageContainer>
    </Container>
  );
};

export default SongDetail;
