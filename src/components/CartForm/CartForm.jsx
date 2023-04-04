import React, { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Loading } from "../Loading/Loading";

export const CartForm = ({ setOrderId }) => {
  const { cartList, vaciarCarrito } = useCartContext();

  const [loading, setLoading] = useState(false);

  const [formData, setformData] = useState({
    name: "",
    tel: "",
    correo: "",
  });

  const agregarOrden = (evt) => {
    evt.preventDefault();
    setLoading(true);
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
        actualizarStockProducts(orden.productos);
      })
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
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
            .catch((error) => console.log("error: ", error))
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
    <>
    {loading && <Loading />}
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
            pattern="^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
        {cartList.length > 0 ? (
          <button type="submit">Generar la orden</button>
        ) : (
          <h2>Agrega productos a tu carro para proceder al pago</h2>
        )}
      </form>
    </div>
    </>
  );
};
