import styled from "styled-components";

export const LibraryWrapper = styled.section`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

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

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }

  &:focus {
    outline: none;
  }
`;
