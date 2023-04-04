import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ producto }) => {
    const [isCount, setIsCount] = useState(true)

    const { agregarCarrito} = useCartContext()

    const onAdd = (cant) => {
    
        agregarCarrito({ ...producto, cantidad: cant })
        setIsCount(false)
    }


  return (
    <div className='contenedor-producto'>
        <div className='img-prod'><img src={producto.foto} alt="imagen del producto" /></div>
        <div className='detalle-prod'>
            <h2>Nombre:</h2> {producto.name}<br/>
            <h2>Descripcion:</h2>  {producto.descripcion}<br/>
            <h2>Precio:</h2> Precio: ${producto.precio}<br/>
            {
                isCount ?
                
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                :
                <Link className='irCart-btn' to='/cart'>
                    Completar Compra
                </Link>
            }
            
        </div>
        
    </div>
  )
}

export default ItemDetail