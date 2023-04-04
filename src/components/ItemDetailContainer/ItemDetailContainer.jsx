import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import "./ItemDetailContainer.scss";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const { idProducto } = useParams();

  //Es Para traer un producto
  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "productos", `${idProducto}`);
    getDoc(query)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};
