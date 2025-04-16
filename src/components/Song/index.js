import React from "react";
import { SongCard, StyledLink, AddButton } from "./Song.styles";

const Song = ({ title, artist, duration, onAdd, album }) => {
  return (
    <SongCard>
      <StyledLink to={`/song/${album.idAlbum}`} state={{ album }}>
        <h4>{title}</h4>
        <p>{artist}</p>
        <p>{duration}</p>
      </StyledLink>
      {onAdd && <AddButton onClick={onAdd}>Agregar a mi biblioteca</AddButton>}
    </SongCard>
  );
};

export default Song;
