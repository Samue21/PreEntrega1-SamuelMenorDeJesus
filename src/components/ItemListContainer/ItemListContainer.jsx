import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.scss";
import { Loading } from "../Loading/Loading";
import NavBarLat from "../NavBarLat/NavBarLat";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria,idSubCategoria } = useParams();


  //funcion para construir consultas en caso de agregar nuevos filtros
  const buildQueryFilter = (idCategoria, idSubCategoria) => {
    const db = getFirestore();
    let queryFilter = collection(db, "productos")
    if(idCategoria){
      queryFilter = query(queryFilter, where("genre", "==", `${idCategoria}`))
    } else if(idSubCategoria){
      queryFilter = query(queryFilter, where("categoria", "==", `${idSubCategoria}`))
    }
    return queryFilter
  }

  //traemos todos
  useEffect(() => {
    setLoading(true);
    const queryFilter = buildQueryFilter(idCategoria, idSubCategoria)


    getDocs(queryFilter)
      .then((resp) =>
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((err) => console.log("error: ", err))
      .finally(() => setLoading(false));
    
  }, [idCategoria, idSubCategoria]);

  return (
    <div className="bodyPagina">
      <NavBarLat />

      <div className="contenedor-productos">
        {loading ? (
          <Loading />
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </div>
  );
};
