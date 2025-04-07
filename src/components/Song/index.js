import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

const Song = ({ title, artist, duration, onAdd, album }) => {
  return (
    <div className="song-card">
      <Link to={`/song/${album.idAlbum}`} state={{ album }}>
        <h4>{title}</h4>
        <p>{artist}</p>
        <p>{duration}</p>
      </Link>
      {onAdd && <button onClick={onAdd}>Agregar a mi biblioteca</button>}
    </div>
  );
};

export default Song;
