import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gIdProdFetch } from '../../utils/gIdProdFetch'
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {idProducto} = useParams()
    
    useEffect(() => {
        gIdProdFetch(idProducto)
        .then((res) => {
            console.log(res);
            setProducto(res);
        })
        .catch((err) => console.log(err))
        .finally(() => console.log('xd'));
    
      }, [])
    
  return (
    <div className='contenedor-producto'>
        <div className='img-prod'><img src={producto.foto} alt="imagen del producto" /></div>
        <div className='detalle-prod'>
            <h2>Nombre:</h2> {producto.name}<br/>
            <h2>Descripcion:</h2>  {producto.descripcion}<br/>
            <h2>Precio:</h2> Precio: {producto.precio}<br/>
        </div>
    </div>
  )
}
