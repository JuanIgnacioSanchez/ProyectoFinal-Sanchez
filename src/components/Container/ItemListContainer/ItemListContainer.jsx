import { useEffect, useState } from "react";
import pedirProductos from "../pedirProductos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { cat } = useParams();
  console.log(cat);

  useEffect(() => {
    cat
      ? pedirProductos().then((res) => {
          setProductos(res.filter((product) => cat === product.category));
        })
      : pedirProductos().then((res) => {
          setProductos(res);
        });
  }, [cat]);

  return (
    <main>
      <ItemList products={products} />
    </main>
  );
};

export default ItemListContainer;
