import React from "react";
import { Cart } from "../Cart/Cart";


export const CartList = ({cartList}) => {


  return (
    cartList.map(cart => <Cart key={cart.id} cart={cart}/>)
    
  );
};