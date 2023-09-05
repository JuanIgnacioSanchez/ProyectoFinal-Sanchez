import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (product) => {
  return (
    <div className="detail-container">
      <img
        className="img-detail"
        src={product.item.image}
        alt={product.item.name}
      />
      <h2 className="title-detail">{product.item.name}</h2>
      <p className="price-detail">$ {product.item.price}</p>
      <hr />
      <p className="description-detail">{product.item.description}</p>
      <hr />
      <ItemCount initial={product.item.initial} stock={product.item.stock} />
      <button className="btn-comprar-detail"> Comprar </button>
    </div>
  );
};

export default ItemDetail;
