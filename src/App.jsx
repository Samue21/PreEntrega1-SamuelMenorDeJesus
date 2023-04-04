import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";

import "./App.css";
import { CartContextProvider } from "./context/CartContext";




function App() {

  return (
    <BrowserRouter>

      <CartContextProvider>

        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo="Hola, Bienvenido" />} />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer saludo="Hola, Bienvenido" />} />
          <Route path="/subcategoria/:idSubCategoria" element={ <ItemListContainer saludo="Hola, Bienvenido" />} />

          <Route path="/detalle/:idProducto" element={ <ItemDetailContainer /> } />

          <Route path="/cart" element={ <CartContainer /> } />

          <Route path="*" element={<Navigate to='/'/>}></Route>
        </Routes>

      </CartContextProvider>
      

    

    </BrowserRouter>
  );
}

export default App;
