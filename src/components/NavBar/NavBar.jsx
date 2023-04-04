import React from "react";
import { NavLink } from "react-router-dom";
import logoSpartan from "../../assets/white-logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.scss";

let activeClassName = "select";

const NavBar = () => {
  return (
    <div className="header barra">
      <NavLink to='/'><img className="logo-spartan" src={logoSpartan} alt="logo spartan" /></NavLink>
      

      <nav className="navegacion">
        <NavLink to="/categoria/Mujer" className={({ isActive }) => isActive ? activeClassName : undefined }>Mujeres</NavLink>
        <NavLink to="/categoria/Hombre" className={({ isActive }) => isActive ? activeClassName : undefined } >Hombres</NavLink>
        <NavLink to="/categoria/Nino" className={({ isActive }) => isActive ? activeClassName : undefined }>Niños</NavLink>
      </nav>

      <CartWidget />
    </div>
  );
};

export default NavBar;
