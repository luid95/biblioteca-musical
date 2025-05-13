import { combineReducers } from "redux";
import libraryReducer from "./libraryReducer";

const rootReducer = combineReducers({
  library: libraryReducer, // este es el estado de la biblioteca musical
});

export default rootReducer;
