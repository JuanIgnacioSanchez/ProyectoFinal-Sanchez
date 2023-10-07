import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Container/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Validation from "./components/Container/Validation/Validation";
import PurchaseDetails from "./components/Container/PurchaseDetails/PurchaseDetails";

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
            <Route path="/purchase" element={<PurchaseDetails />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
