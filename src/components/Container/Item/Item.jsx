import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card-product">
      <img className="img-product" src={product.image} alt={product.tilte} />
      <h3 className="title-product">{product.name}</h3>
      <p className="price-product">$ {product.price}</p>
      <Link className="btn-detail" to={`/item/${product.id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default Item;
