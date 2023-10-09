import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/Container/Cart/Cart.css";
import "./components/Container/Item/Item.css";
import "./components/Container/ItemCount/ItemCount.css";
import "./components/Container/ItemDetail/ItemDetail.css";
import "./components/Container/ItemList/ItemList.css";
import "./components/Container/ItemListContainer.css";
import "./components/Container/Validation/validation.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Container/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Validation from "./components/Container/Validation/Validation";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/validation" element={<Validation />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
