import React from 'react'
import { useState } from 'react'
import cartWhite from '../../assets/carrito-white.svg'
import './CartWidget.scss'

export const CartWidget = () => {
  const [count, setCount] = useState(0)

  const contador = () => {
    setCount(count+1); 
  }

  return (
    

    <div className='carrito-compras'>
        <img className='carrito' src={cartWhite} alt="icono carrito" />
        <span className='badge ' id='lblCartCount' onClick={contador}> {count} </span>
    </div>
  )
}
