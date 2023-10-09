import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const totalCarrito = carrito.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  );

  const agregarAlCarrito = (product, count) => {
    const newProduct = { ...product, cantidad: count };
    const newCart = [...carrito];
    const index = newCart.findIndex((item) => item.id === newProduct.id);
    if (count <= product.stock) {
      const newCart = [...carrito];
      const index = newCart.findIndex((item) => item.id === newProduct.id);

      if (index !== -1) {
        newCart[index].cantidad += count;
        toast(
          `Se ha agregado ${newProduct.cantidad} ${newProduct.shortname} al carrito `,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      } else {
        newCart.push(newProduct);
        toast(
          `Se ha agregado ${newProduct.cantidad} ${newProduct.shortname} al carrito `,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }

      setCarrito(newCart);
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, product) => acc + product.cantidad, 0);
  };

  const disminuirCantidad = (productId) => {
    const productoSeleccionado = carrito.find(
      (product) => product.id === productId
    );

    if (productoSeleccionado && productoSeleccionado.cantidad > 1) {
      productoSeleccionado.cantidad -= 1;
      setCarrito([...carrito]);
    } else {
      const index = carrito.findIndex(
        (product) => product.id === productoSeleccionado.id
      );
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    toast(`Se ha vaciado el carrito `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
        disminuirCantidad,
        totalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
