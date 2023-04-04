import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import "./CartContainer.scss";
import { CartList } from "../CartList/CartList";
import { CartForm } from "../CartForm/CartForm";

export const CartContainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();
  const [orderId, setOrderId] = useState(null);

  const passSetorderId = (id) => {
    setOrderId(id);
  };

  



  return (
    <div>
      <div className="cart-container">
        <h2 className="cart-title">Carrito de Compras</h2>
        {orderId && <center><h3>Su Id de orden es: </h3><h2 className="total-price">{orderId}</h2></center>}
        <div className="cart-items">
          {cartList.length == 0 ? (
            <center>
              <h2>Vacio</h2>
              <NavLink className="return-btn" to='/'>
               Volver
              </NavLink>
            </center>
          ) : 
            <CartList cartList={cartList} />
          }
        </div>
        {cartList.length == 0 ? <div className="cart-total"></div>: 
        <div className="cart-total">
          <span className="total-text">Total:</span>
          <span className="total-price">
            $
            {cartList.reduce(
              (total, producto) => total + producto.cantidad * producto.precio,
              0
            )}
          </span>
        </div> }
      </div>
      {cartList.length == 0 ? <div className="botones-vaciar-pagar"></div>: 
      <div className="botones-vaciar-pagar">
        <button className="clear-cart-btn" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div> }
      { cartList.length == 0 ? <div></div> :
        <CartForm setOrderId={passSetorderId}/>
      }
    </div>
  );
};
