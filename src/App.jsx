import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Hola, Bienvenido" />} />
        <Route path="/categoria/:idCategoria" element={ <ItemListContainer saludo="Hola, Bienvenido" />} />
        {/* <Route path="/subcategoria/:idSubcategoria" element={ <ItemListContainer saludo="Hola, Bienvenido" />} /> */}

        <Route path="/detalle/:idProducto" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <CartContainer /> } />

        <Route path="*" element={<Navigate to='/'/>}></Route>
      </Routes>
      

      {/* <ItemCount /> */}

    </BrowserRouter>
  );
}

export default App;
