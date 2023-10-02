import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (newProduct) => {
    setCarrito([...carrito, newProduct]);
  };
  return (
    <CartContext.Provider value={{ carrito, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
