import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemList.scss";

export const ItemList = memo(({ producto }) => {
  //const [loading, setLoading] = useState(true)

  console.log(producto);
  return (
    <div className="producto" key={producto.id}>
      <>
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
      </>
    </div>
  );
});
