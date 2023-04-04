import React from "react";
import { useCartContext } from "../../context/CartContext";


export const Cart = ({cart}) => {
  const { eliminarProducto } = useCartContext();

  const eliminarDeCarrito = (id) => {
    eliminarProducto(id)
  }
  

  return (
    <div className="cart-item" >
      <div className="item-img">
        <img src={cart.foto} alt="Nombre del Producto" />
      </div>
      <div className="item-details">
        <h3 className="item-name">{cart.name}</h3>
        <p className="item-desc">Precio: ${cart.precio}</p>
        <p className="item-price">Cantidad: {cart.cantidad}</p>
      </div>
      <button className="item-remove-btn" onClick={()=> eliminarDeCarrito(cart.id)}>Eliminar</button>
    </div>
    
  );
};