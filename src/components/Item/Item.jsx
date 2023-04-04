import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ producto }) => {
  return (
    <div className="producto">
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
});

export default Item;
