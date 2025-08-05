import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../components/SearchBar";
import { ThemeProvider } from "styled-components";
import theme from "../Themes";

// ✅ Mock de fetchSongs para evitar que Jest intente importar axios
jest.mock("../redux/slices/searchSlice", () => ({
  fetchSongs: (term) => ({
    type: "MOCK_FETCH_SONGS",
    payload: term,
  }),
}));

// ✅ Mock de useDispatch para capturar llamadas al dispatch
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const renderWithTheme = (ui) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("SearchBar component", () => {
  beforeEach(() => {
    mockDispatch.mockClear(); // limpiar dispatch antes de cada test
  });

  test("renderiza el input de búsqueda correctamente", () => {
    renderWithTheme(<SearchBar />);
    const input = screen.getByPlaceholderText(/buscar artista/i);
    expect(input).toBeInTheDocument();
  });

  test("el usuario puede escribir en el input", () => {
    renderWithTheme(<SearchBar />);
    const input = screen.getByPlaceholderText(/buscar artista/i);
    fireEvent.change(input, { target: { value: "Coldplay" } });
    expect(input.value).toBe("Coldplay");
  });

  test("ejecuta la búsqueda al hacer clic en el botón", () => {
    renderWithTheme(<SearchBar />);
    const input = screen.getByPlaceholderText(/buscar artista/i);
    const button = screen.getByRole("button", { name: /buscar/i });

    fireEvent.change(input, { target: { value: "Adele" } });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "MOCK_FETCH_SONGS",
      payload: "Adele",
    });
  });
});
