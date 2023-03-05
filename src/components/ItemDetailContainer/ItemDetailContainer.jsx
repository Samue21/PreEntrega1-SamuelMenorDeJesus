import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gIdProdFetch } from '../../utils/gIdProdFetch'
import { ItemCount } from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {

    const {idProducto} = useParams()

  return (
    <div>
        <ItemDetail idproducto={idProducto}/>
    </div>
    
  )
}
