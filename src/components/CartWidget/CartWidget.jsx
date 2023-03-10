import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cartWhite from '../../assets/carrito-white.svg'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
  const [count, setCount] = useState(0)
  const { cartList } = useCartContext();

  const contador = () => {
    setCount(count+1); 
  }

  return (
    

    <div className='carrito-compras'>
      <Link to='/cart'><img className='carrito' src={cartWhite} alt="icono carrito" /></Link>
        
        <span className='badge ' id='lblCartCount' onClick={contador}> {cartList.reduce((total, producto) => total + producto.cantidad , 0)} </span>
    </div>
  )
}
