import styled from "styled-components";

export const ResultsSection = styled.section`
  margin-top: 2rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SongsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatusMessage = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: ${({ error }) => (error ? "#b00020" : "#555")};
  background-color: ${({ error }) => (error ? "#ffe5e5" : "#f0f0f0")};
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const RetryButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
