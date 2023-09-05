import data from "../../data/products.json";

export const pedirData = () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};

export const pedirProductoPorId = (id) => {
  return new Promise((resolve) => {
    const item = data.find((product) => product.id === id);

    item && resolve(item);
  });
};
