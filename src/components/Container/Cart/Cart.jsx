import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito, disminuirCantidad } = useContext(CartContext);
  const carritoVacio = carrito.length === 0;
  const totalCarrito = carrito.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  );
  const handleDisminuirCantidad = (productId) => {
    disminuirCantidad(productId);
  };

  return (
    <div className="cart-container">
      {carritoVacio ? (
        <h4 className="text-cart">No hay productos en el carrito</h4>
      ) : (
        <>
          <h2 className="title-cart">Carrito</h2>
          <table className="cart-table">
            <thead>
              <tr className="thead">
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((product) => (
                <tr key={product.id}>
                  <td className="td-title">{product.shortname}</td>
                  <td>$ {product.price}</td>
                  <td>{product.cantidad}</td>
                  <td>$ {product.price * product.cantidad}</td>
                  <td>
                    <button
                      className="btn-cart btn-disminuir"
                      onClick={() => disminuirCantidad(product.id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="div-total">
            <button
              className="btn-cart btn-vaciar-comprar"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito 🗑
            </button>
            <Link className="btn-cart btn-vaciar-comprar" to={"/validation"}>
              Finalizar compra
            </Link>
            <h4 className="text-total">
              Total del carrito <span>$ {totalCarrito}</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
