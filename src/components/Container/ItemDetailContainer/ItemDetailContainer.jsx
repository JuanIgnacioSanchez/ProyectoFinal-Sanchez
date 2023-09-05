import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { pedirProductoPorId } from "../pedirData";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirProductoPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);
  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
