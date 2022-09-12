import React from "react";
import "./Navigation.css";
const Navigation = (prop) => {
  return (
    <nav className="nav">
      <p>Películas</p>
      <p>Series</p>
      <p>Top 10 {prop.month}</p>
      <p>Mi Lista</p>
    </nav>
  );
};
export default Navigation;
