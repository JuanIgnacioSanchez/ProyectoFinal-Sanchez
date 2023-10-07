import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", id);

    getDoc(queryDoc)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setItem({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log("El producto no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [id]);
  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
