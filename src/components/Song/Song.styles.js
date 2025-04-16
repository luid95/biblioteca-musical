import styled from "styled-components";
import { Link } from "react-router-dom";

export const SongCard = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  h4 {
    margin: 0 0 0.25rem 0;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }
`;

export const AddButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #169b44;
  }
`;
