import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// Mocks simplificados para evitar problemas con Redux, Axios, etc.
// Si usas Redux, puedes mockear el Provider o usar un store de prueba.

describe("App component", () => {
  test("renderiza Header, SearchBar, SearchResults y Library", () => {
    render(<App />);

    expect(screen.getByText(/álbumes encontrados/i)).toBeInTheDocument(); // Por SearchResults
    expect(screen.getByPlaceholderText(/buscar artista/i)).toBeInTheDocument(); // Por SearchBar
    expect(screen.getByText(/biblioteca/i)).toBeInTheDocument(); // Asumiendo que Library tiene texto "Biblioteca"
    expect(screen.getByText(/🎵|header|logo|título/i)).toBeInTheDocument(); // Ajusta para Header
  });

  test("simula búsqueda y muestra resultados", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/buscar artista/i);
    fireEvent.change(input, { target: { value: "Coldplay" } });

    const button = screen.getByRole("button", { name: /buscar/i });
    fireEvent.click(button);

    // Aquí dependiendo de la implementación, espera que los resultados aparezcan
    // Si SearchResults usa Redux o llamada async, se puede mockear o usar waitFor
    // Ejemplo sencillo:
    // expect(screen.getByText(/coldplay/i)).toBeInTheDocument();
  });

  test("agrega una canción a la biblioteca y se muestra en Library", () => {
    render(<App />);

    // Simular agregar manualmente al estado o con interacciones
    // Ejemplo: tras buscar y agregar
    // Aquí deberías usar mocks o un store configurado para que el test funcione

    // Este test depende mucho de cómo tengas implementado el estado global (Redux o Context)

    // Por ejemplo, simular clic en botón "Agregar" en SearchResults
    // const addButton = screen.getByRole("button", { name: /agregar/i });
    // fireEvent.click(addButton);

    // Luego verificar que la canción aparece en Library
    // expect(screen.getByText(/título canción/i)).toBeInTheDocument();
  });
});
