import React from "react";
//import "./styles.css";
import { HeaderWrapper, Title } from "./Header.styles";

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;
