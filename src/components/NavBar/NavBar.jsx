import React from "react";
import logoSpartan from "../../assets/white-logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="header barra">
      <a href="index.html">
        <img className="logo-spartan" src={logoSpartan} alt="logo spartan" />
      </a>

      <nav className="navegacion">
        <a href="#">Mujeres</a>
        <a href="#">Hombres</a>
        <a href="#">Niños</a>
      </nav>

      <CartWidget />
    </div>
  );
};

export default NavBar;
