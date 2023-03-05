import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { TextComponent } from "../Condicionales/ComponentesCondicionales";
import { MessageIdcompra } from "../Loading/Loading";
import "./CartContainer.scss";

export const CartContainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();
  const [orderId, setOrderId] = useState(null);

  const [formData, setformData] = useState({
    name: "",
    tel: "",
    correo: "",
  });

  const agregarOrden = (evt) => {
    evt.preventDefault();
    const orden = {};
    orden.comprador = formData;
    orden.productos = cartList.map(({ id, name, precio, cantidad }) => ({
      id,
      name,
      precio,
      cantidad,
    }));
    orden.total = cartList.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );

    //Firestore
    const db = getFirestore();
    const ordersCollection = collection(db, "ordenes");

    addDoc(ordersCollection, orden)
      .then((resp) => {
        setOrderId(resp.id);
        actualizarStockProducts(orden.productos)})
      .catch((error) => console.log(error));

  };

  const actualizarStockProducts = (orden) => {
    //Firestore
    const db = getFirestore();

    orden.forEach((producto) => {
      const query = doc(db, "productos", `${producto.id}`);
      const productoUpdate = doc(db, "productos", `${producto.id}`);
      getDoc(query)
        .then((resp) =>
          updateDoc(productoUpdate, {
            stock: resp.data().stock - producto.cantidad,
          })
            .then(() => console.log("producto actualizado"))
            .catch((error) => console.log('error: ', error))
            .finally(() => {
              vaciarCarrito();
              setformData({
                name: "",
                tel: "",
                correo: "",
              });
            })
        )
        .catch((err) => console.log(err));
    });
  };

  const handletOnChange = (evt) => {


    setformData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
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
            </center>
          ) : (
            cartList.map((producto) => (
              <>
                <div className="cart-item" key={producto.id}>
                  <div className="item-img">
                    <img src={producto.foto} alt="Nombre del Producto" />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{producto.name}</h3>
                    <p className="item-desc">Precio: ${producto.precio}</p>
                    <p className="item-price">Cantidad: {producto.cantidad}</p>
                  </div>
                  {/* <button className="item-remove-btn">Eliminar</button> */}
                </div>
              </>
            ))
          )}
        </div>
        <div className="cart-total">
          <span className="total-text">Total:</span>
          <span className="total-price">
            $
            {cartList.reduce(
              (total, producto) => total + producto.cantidad * producto.precio,
              0
            )}
          </span>
        </div>
      </div>
      <div className="botones-vaciar-pagar">
        <button className="clear-cart-btn" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>

      <div className="payment-form-container">
        <h2>Información del Comprador</h2>
        <form onSubmit={agregarOrden} className="payment-form">
          <label>
            Nombre completo:
            <input
              type="text"
              name="name"
              onChange={handletOnChange}
              placeholder="Ingresa tu Nombre"
              required
              value={formData.name}
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="correo"
              onChange={handletOnChange}
              placeholder="Ingresa tu Correo electronico"
              required
              value={formData.correo}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="tel"
              pattern="^\d+$"
              onChange={handletOnChange}
              placeholder="Ingresa tu Telefono"
              required
              value={formData.tel}
            />
          </label>
          <hr />
          {
            cartList.length > 0 ? <button type="submit">Generar la orden</button>: <h2>Agrega productos a tu carro para proceder al pago</h2>
          }
        </form>
      </div>
    </div>
  );
};
