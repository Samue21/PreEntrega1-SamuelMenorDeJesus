import React from "react";
import { Link } from "react-router-dom";
import './ItemContainer.scss'

export const ItemContainer = ({producto}) => {
    console.log(producto)
  return (
    <div className="producto" key={producto.id}>
      <Link to={`/detalle/${producto.id}`}>
        <img src={producto.foto} alt="imagen del producto" />
      </Link>
      <div className="contenido-producto">
        <div>
          <h3>{producto.name}</h3>

          <p>${producto.precio}</p>
        </div>

        <Link to={`/detalle/${producto.id}`} className="boton-amarillo-block">
          Ver
        </Link>
      </div>
    </div>
  );
};
