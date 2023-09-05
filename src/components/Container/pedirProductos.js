import data from "../../data/products.json";

const pedirProductos = () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};

export default pedirProductos;
