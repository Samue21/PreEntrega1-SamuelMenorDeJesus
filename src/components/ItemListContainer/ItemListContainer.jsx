import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getFetch } from "../../utils/gFetch";
import { ItemList } from "../ItemList/ItemList";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.scss";
import { Loading } from "../Loading/Loading";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  //traemos todos
  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const queryCollections = collection(db, "productos")

    if (idCategoria) {
      const queryFilter = query(queryCollections, where('genre','==',`${idCategoria}`))
      getDocs(queryFilter)
      .then((resp) =>
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((err) => console.log('error: ', err))
      .finally(() => setLoading(false));

    } else {
      setLoading(true)
      getDocs(queryCollections)
      .then((resp) =>
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
    
   

  }, [idCategoria]);

  // useEffect(() => {
  //   setLoading(true)
  //   if (idCategoria) {
  //     getFetch()
  //       .then((res) => {
  //         console.log(res);
  //         setProductos(res.filter(producto => producto.genre === idCategoria));
  //       })
  //       .catch((err) => )
  //       .finally(() => setLoading(false));

  //   }else{
  //     setLoading(true)
  //     getFetch()
  //       .then((res) => {
  //         setProductos(res);
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }

  // }, [idCategoria])

  console.log(productos);

  return (
    <div className="bodyPagina">
      <div className="aside-filter">
        <div className="frame">
          <section className="todo-cmp">
            <header className="todo-cmp__header">
              <h2>Categorias</h2>
            </header>

            <ul className="todo-cmp__list">
              <li>
                <NavLink to="/subcategoria/playeras">
                  <h3>Playeras</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/pantalones">
                  <h3>Pantalones</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/gorras">
                  <h3>Gorras</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/subcategoria/calzado">
                  <h3>Calzado</h3>
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="contenedor-productos">
        {loading ? (
          <Loading />
        ) : (
          productos.map((producto) => <ItemList producto={producto} />)
        )}
      </div>
    </div>
  );
};
