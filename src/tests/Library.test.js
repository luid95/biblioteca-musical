import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Library from "../components/Library";

describe("Library component", () => {
  const mockSongs = [
    { id: "1", title: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: "2", title: "Song 2", artist: "Artist 2", album: "Album 2" },
  ];

  test("muestra la lista de canciones correctamente", () => {
    render(<Library songs={mockSongs} onRemove={jest.fn()} />);

    // Verificar que los títulos de las canciones estén en el documento
    mockSongs.forEach((song) => {
      expect(screen.getByText(song.title)).toBeInTheDocument();
      expect(screen.getByText(song.artist)).toBeInTheDocument();
    });
  });

  test("llama a la función onRemove al hacer clic en eliminar", () => {
    const onRemoveMock = jest.fn();
    render(<Library songs={mockSongs} onRemove={onRemoveMock} />);

    const firstRemoveButton = screen.getAllByRole("button", {
      name: /eliminar/i,
    })[0];
    fireEvent.click(firstRemoveButton);

    expect(onRemoveMock).toHaveBeenCalledTimes(1);
    expect(onRemoveMock).toHaveBeenCalledWith(mockSongs[0].id);
  });

  test("muestra mensaje cuando la biblioteca está vacía", () => {
    render(<Library songs={[]} onRemove={jest.fn()} />);

    expect(
      screen.getByText(/no hay canciones en tu biblioteca/i)
    ).toBeInTheDocument();
  });
});
