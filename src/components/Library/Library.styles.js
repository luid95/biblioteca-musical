import styled from "styled-components";

export const LibraryWrapper = styled.section`
  h2 {
    margin-bottom: 1rem;
  }
`;

export const LibraryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  max-height: 600px; /* Altura máxima aprox. para 6 ítems */
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Scroll bonito */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
