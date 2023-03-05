import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.scss";

export const CartContainer = () => {
  const { cartList,vaciarCarrito } = useCartContext();
  
  const agregarOrden = ()=> {
    const orden = {}
    orden.comprador = {nombre: 'Samuel', tel: '53321456432', correo: 'sam@gmail.com'}
    orden.productos = cartList.map(({id,name, precio, cantidad}) => ({id, name, precio,cantidad}))
    orden.total = cartList.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

    //Firestore
    const db = getFirestore()
    const ordersCollection = collection(db,'ordenes')
    
    addDoc(ordersCollection, orden)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

    console.log(orden)
  }

  const actualizarOrden = ()=> {
    const orden = {}
    orden.comprador = {nombre: 'Samuel', tel: '53321456432', correo: 'sam@gmail.com'}
    orden.productos = cartList.map(({id,name, precio, cantidad}) => ({id, name, precio,cantidad}))
    orden.total = cartList.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

    //Firestore
    const db = getFirestore()
    const ordersCollection = collection(db,'ordenes')
    
    
  }
  console.log(cartList);
  return (
    <div>
      <div class="cart-container">
        <h2 class="cart-title">Carrito de Compras</h2>
        <div class="cart-items">
          {cartList == undefined ? (
            <center>
              <h2>Vacio</h2>
            </center>
          ) : (
            cartList.map((producto) => (
              <>
                <div class="cart-item" key={producto.id}>
                  <div class="item-img">
                    <img src={producto.foto} alt="Nombre del Producto" />
                  </div>
                  <div class="item-details">
                    <h3 class="item-name">{producto.name}</h3>
                    <p class="item-desc">Precio: {producto.precio}</p>
                    <p class="item-price">Cantidad: {producto.cantidad}</p>
                  </div>
                  <button class="item-remove-btn" >Eliminar</button>
                </div>
              </>
            ))
          )}
        </div>
        <div class="cart-total">
        <span class="total-text">Total:</span>
        <span class="total-price">
          ${cartList.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)}
        </span>
      </div>
      </div>
      <div class="botones-vaciar-pagar">
        <button class="clear-cart-btn" onClick={vaciarCarrito}>Vaciar carrito</button>
        <button class="checkout-btn" onClick={agregarOrden}>Proceder al Pago</button>
      </div>
     
    </div>
  );
};
