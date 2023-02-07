import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getFetch } from "../../utils/gFetch";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import "./ItemListContainer.scss";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {idCategoria} = useParams()
  
  
  useEffect(() => {
    if (idCategoria) {
      getFetch()
        .then((res) => {
          console.log(res);
          setProductos(res.filter(producto => producto.genre === idCategoria));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        
    }else{
      getFetch()
        .then((res) => {
          setProductos(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    

  }, [idCategoria])

  console.log(productos)
  
  return (
    <div className="bodyPagina">

      <div className="aside-filter">
            <div className="frame">
                <section className="todo-cmp">
                  <header className="todo-cmp__header">
                    <h2>Categorias</h2>
                  </header>

                    <ul className="todo-cmp__list">
                      <li>
                        <NavLink to='categoria' ><h3>Playeras</h3></NavLink> 
                      </li>
                      <li>
                        <NavLink to='categoria' ><h3>Pantalones</h3></NavLink> 
                      </li>
                        <li>
                        <NavLink to='categoria'><h3>Gorras</h3></NavLink> 
                      </li>
                      <li>
                        <NavLink to='categoria'><h3>Calzado</h3></NavLink> 
                      </li>
                  </ul>
                </section>
            </div>
      </div>

      <div className="contenedor-productos">
        { loading ? <center><h2>Cargando...</h2></center>
        : 
        productos.map(producto => 
            <ItemContainer producto = {producto}/>
            // <div className="producto" key={producto.id}>
            //   <Link to={`/detalle/${producto.id}`} ><img src={producto.foto} alt="imagen del producto" /></Link>
            //   <div className="contenido-producto">
            //     <div>
            //       <h3>{producto.name}</h3>
                  
            //       <p>${producto.precio}</p>
            //     </div>
                
            //     <Link to={`/detalle/${producto.id}`} className="boton-amarillo-block">
            //         Ver
            //     </Link>
                
                
            //   </div>
            // </div>

          ) }
      </div>


    </div>
    
    
  );
};
