import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;
