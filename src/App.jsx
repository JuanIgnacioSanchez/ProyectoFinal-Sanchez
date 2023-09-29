import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Container/Cart/Cart";
import { useState } from "react";
import { CartContext } from "./components/Context/CartContext";

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ carrito, setCarrito }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;