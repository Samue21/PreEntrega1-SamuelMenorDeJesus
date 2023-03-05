import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

export const CartContextProvider = ({children})=>{
    //estados y funciones globales
    const [cartList, setCarList] = useState([])
    const agregarCarrito= (newProducto)=>{
        //validamos si esta dentro del producto
        const productoExistente = cartList.find(
            (producto) => producto.id === newProducto.id
          );
        
          if (productoExistente) {
            // Actualizar la cantidad del producto existente
            const carritoActualizado = cartList.map((producto) => {
              if (producto.id === newProducto.id) {
                return { ...producto, cantidad: producto.cantidad + newProducto.cantidad };
              } else {
                return producto;
              }
            });
            setCarList(carritoActualizado);
            } else {
                // Agrego el nuevo producto al carrito
                setCarList([
                    ...cartList,
                    newProducto
                ]);
            }
        
    }

    const vaciarCarrito= ()=> setCarList( [] )
    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
         }}>
            {children}
        </CartContext.Provider>
    )
}