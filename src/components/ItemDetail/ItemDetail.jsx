import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { gIdProdFetch } from '../../utils/gIdProdFetch'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ idproducto }) => {
    const [producto, setProducto] = useState([])
    const [isCount, setIsCount] = useState(true)

    const { agregarCarrito} = useCartContext()

    const onAdd = (cant) => {
    
        agregarCarrito({ ...producto, cantidad: cant })
        setIsCount(false)
    }

    //Es Para traer un producto
    useEffect(()=>{
        const db = getFirestore()
        const query = doc(db, 'productos', `${idproducto}`)
        getDoc(query)
        .then(resp => setProducto({ id:resp.id, ...resp.data() }))
        .catch((err) => console.log('error: ', err))
    }, [])

    // useEffect(() => {
    //     gIdProdFetch(idproducto)
    //     .then((res) => {
    //         console.log(res);
    //         setProducto(res);
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => console.log('xd'));
    
    //   }, [])


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