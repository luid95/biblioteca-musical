// Define y exporta las constantes de tipo
export const ADD_SONG = "ADD_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

// Acciones
export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const removeSong = (songId) => {
  return {
    type: REMOVE_SONG,
    payload: songId,
  };
};
