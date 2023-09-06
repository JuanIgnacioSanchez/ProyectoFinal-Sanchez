import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = (product) => {
  return (
    <div className="detail-container">
      <div className="div-head-detail">
        <Link className="btn-back-detail" to={"/"}>
          ◁
        </Link>
        <div className="div-title-detail">
          <h2 className="title-detail">{product.item.name}</h2>
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
      <ItemCount initial={product.item.initial} stock={product.item.stock} />
      <Link className="btn-comprar-detail">Comprar</Link>
    </div>
  );
};

export default ItemDetail;
