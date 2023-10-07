import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
      <div className="button button-outline-dark">
        🛒<span id="count-cart">{cantidadEnCarrito()}</span>
      </div>
    </div>
  );
}

export default CartWidget;
