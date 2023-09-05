import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <section className="section-products-container">
      <h1>Productos</h1>
      {products.length > 0 &&
        products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
    </section>
  );
};

export default ItemList;
