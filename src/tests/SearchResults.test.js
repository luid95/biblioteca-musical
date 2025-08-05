import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Importa tu slice real o crea uno mock si quieres
import searchReducer from "../../redux/slices/searchSlice";
import libraryReducer from "../../redux/slices/librarySlice";

import SearchResults from "../components/SearchResults";

// Mock react-router-dom si Song lo usa
jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

function renderWithRedux(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: { search: searchReducer, library: libraryReducer },
      preloadedState: initialState,
    }),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe("SearchResults component", () => {
  test("renderiza lista de álbumes con botón agregar que funciona", () => {
    const initialState = {
      search: {
        results: [
          {
            idAlbum: "1",
            strAlbum: "Album 1",
            strArtist: "Artist 1",
            intYearReleased: 2020,
          },
        ],
        loading: false,
        error: null,
      },
      library: { songs: [] },
    };

    const { store } = renderWithRedux(<SearchResults />, { initialState });

    expect(screen.getByText(/álbumes encontrados/i)).toBeInTheDocument();
    expect(screen.getByText("Album 1")).toBeInTheDocument();
    expect(screen.getByText("Artist 1")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /agregar/i });
    expect(button).toBeInTheDocument();

    // Simula click en botón "Agregar"
    fireEvent.click(button);

    // Verifica que el estado cambió (se agregó canción)
    const state = store.getState();
    expect(state.library.songs.length).toBe(1);
    expect(state.library.songs[0].title).toBe("Album 1");
  });

  // Puedes agregar tests para loading, error, no resultados igual que antes
});
