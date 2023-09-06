import { useEffect, useState } from "react";
import pedirProductos from "../pedirProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    setTimeout(() => {
      cat
        ? pedirProductos().then((res) => {
            setProductos(res.filter((product) => cat === product.category));
          })
        : pedirProductos().then((res) => {
            setProductos(res);
          });
    }, 500);
  }, [cat]);

  return (
    <div>
      {cat ? (
        <h1 className="title-main"> Monitores {cat} Hz</h1>
      ) : (
        <h1 className="title-main">Productos</h1>
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
