import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import theme from "../Themes";

describe("Header component", () => {
  const title = "🎵 Biblioteca Musical 🎵";

  const renderWithTheme = (ui) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  test("renderiza el título correctamente", () => {
    renderWithTheme(<Header title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("no renderiza contenido adicional", () => {
    renderWithTheme(<Header title={title} />);
    const headerElement = screen.getByRole("heading", { name: title });
    expect(headerElement).toBeInTheDocument();
    expect(screen.queryByText(/.+/i, { selector: "p" })).toBeNull();
  });
});
