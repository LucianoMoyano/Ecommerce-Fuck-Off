import { stock } from "../Data/stock";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
      reject(console.log("Error"));
    }, 2000);
  });
};
