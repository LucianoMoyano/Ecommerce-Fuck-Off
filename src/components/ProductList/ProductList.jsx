import React, { useState, useEffect } from "react";
import { pedirProductos } from "../../components/Helpers/pedirProductos";
import "./ProductList.css";

export const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    pedirProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("Tiene un error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="card-container">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div>
          {items.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.photo} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
