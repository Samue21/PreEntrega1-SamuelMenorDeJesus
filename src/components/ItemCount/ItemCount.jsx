import React, { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ({initial=1, stock=10, onAdd}) => {
  const [cantidad, setCantidad] = useState(1);

  function menosClick() {
      if (cantidad > initial) {
          setCantidad(cantidad - 1);
      }
  }
  
  function masClick() {
    if(cantidad < stock){
      setCantidad(cantidad + 1);
    }
    
  }
  function mostrarCantidadEnviada(){

    onAdd(cantidad)
  }

  return (
    <>
      <div className='addRemoveProd'>
          <button className="cantidad-button menos" onClick={menosClick}>-</button>
          <input className="cantidad-input" type="number" value={cantidad} min={initial} readOnly />
          <button className="cantidad-button mas"onClick={masClick}>+</button>
          
      </div>
      <button className="add-carrito" onClick={mostrarCantidadEnviada}>Agregar al carrito</button>
    </>
  )
};
