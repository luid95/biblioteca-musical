import styled from "styled-components";

export const ResultsSection = styled.section`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
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
  color: ${({ error }) => (error ? "#b00020" : "#1a237e")};
  background-color: ${({ error }) => (error ? "#ffe5e5" : "#e8eaf6")};
  border: 1px solid ${({ error }) => (error ? "#ff8a80" : "#c5cae9")};
  border-radius: 6px;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const RetryButton = styled.button`
  margin-top: 0.8rem;
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #159e44;
  }
`;
