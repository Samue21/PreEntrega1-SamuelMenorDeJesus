import React, { memo } from "react";
import "./ItemList.scss";
import Item from "../Item/Item";

export const ItemList = memo(({ productos }) => {
  
  return (
    productos.map(producto =>   <Item key={producto.id}   producto={producto}/> )
  );
});
