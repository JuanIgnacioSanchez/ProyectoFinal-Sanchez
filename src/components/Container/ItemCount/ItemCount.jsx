import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock }) => {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    contador < stock && setContador(contador + 1);
  };

  const disminuirContador = () => {
    contador > initial && setContador(contador - 1);
  };

  return (
    <div className="div-counter">
      <p className="p-stock">Stock disponible : {stock} </p>
      <div className="div-counter-2">
        <button className="btns-counter" onClick={disminuirContador}>
          -
        </button>
        <p className="p-counter">{contador}</p>
        <button className="btns-counter" onClick={aumentarContador}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
