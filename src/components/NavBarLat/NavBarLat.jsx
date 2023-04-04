import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NavBarLat extends Component {


  render() {
    return (
      <div className="aside-filter">
        <div className="frame">
          <section className="todo-cmp">
            <header className="todo-cmp__header">
              <h2>Categorias</h2>
            </header>

            <ul className="todo-cmp__list">
              <li>
                <NavLink to="/subcategoria/Playeras">
                  <h3>Playeras</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/Pantalones">
                  <h3>Pantalones</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/Gorras">
                  <h3>Gorras</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/Calzado">
                  <h3>Calzado</h3>
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default NavBarLat