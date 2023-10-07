import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productCollection = collection(db, "products");
      let productQuery = query(productCollection);
      if (cat) {
        productQuery = query(productCollection, where("category", "==", cat));
      }

      try {
        const querySnapshot = await getDocs(productQuery);
        const productsData = querySnapshot.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, [cat]);

  return (
    <div>
      {cat ? (
        <h1 className="title-main">Monitores {cat} Hz</h1>
      ) : (
        <h1 className="title-main">Productos</h1>
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
