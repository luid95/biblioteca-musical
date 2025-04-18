import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }

  .app {
    padding: 0 20px;
  }
  
  /* HEADER */
  header {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    text-align: center;
    border-radius: 0 0 10px 10px;
  }

  /* MAIN LAYOUT */
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }
  
  /* Contenedor para el SearchBar */
  .content-search {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* Contenedor para resultados y biblioteca */
  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  /* Responsividad */
  @media (min-width: 768px) {
    .main-content {
      flex-direction: row;
      justify-content: space-between;
    }

    .content-search {
      flex: 1;
      max-width: 100%;
    }

    .content-wrapper {
      flex: 2;
      flex-direction: row;
      gap: 2rem;
    }

    .search-results,
    .library {
      flex: 1;
      width: 48%;
    }
  }
`;

export default GlobalStyles;
