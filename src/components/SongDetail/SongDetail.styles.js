import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;

export const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorMsg = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: #b00020;
  background-color: #ffe5e5;
  border-radius: 5px;
  text-align: center;
  max-width: 600px;
  margin: 2rem auto;
`;
