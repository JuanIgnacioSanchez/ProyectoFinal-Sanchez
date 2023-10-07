import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = (product) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const updateContador = (count) => {
    setContador(count);
  };

  return (
    <div className="detail-container">
      <div className="div-head-detail">
        <Link className="btn-back-detail" to={"/"}>
          ◁
        </Link>
        <div className="div-title-detail">
          <h2 className="title-detail">{product.item.shortname}</h2>
        </div>
      </div>
      <hr />
      <img
        className="img-detail"
        src={product.item.image}
        alt={product.item.name}
      />
      <p className="price-detail">$ {product.item.price}</p>
      <hr />
      <p className="description-detail">{product.item.description}</p>
      <hr />
      <ItemCount
        initial={product.item.initial}
        stock={product.item.stock}
        onUpdate={updateContador}
      />
      <Link
        onClick={() => agregarAlCarrito(product.item, contador)}
        className="btn-comprar-detail"
      >
        Comprar
      </Link>
    </div>
  );
};

export default ItemDetail;
