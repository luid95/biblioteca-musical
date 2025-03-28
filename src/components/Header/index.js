import React from "react";

import "./styles.css";

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
