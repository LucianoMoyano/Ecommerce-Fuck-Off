import React, { useState } from "react";
import "./cart.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const Cart = () => {
  //Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  //Función para agregar productos
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  //Funcion para eliminar productos
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item !== product);
    setCartItems(updatedCartItems);
  };

  // Función para realizar la transacción de compra
  const checkout = () => {
    // Realizar la lógica de la transacción aquí, enviar los productos del carrito a un servidor, procesar el pago, etc.

    // Puedes reiniciar el estado del carrito después de completar la transacción
    setCartItems([]);
  };

  return (
    <>
      <div className="cart-container">
        <PiShoppingCartSimpleBold className="cart" />
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name}</p>
                <button onClick={() => removeFromCart(item)}>Eliminar</button>
              </div>
            ))
          )}
        </div>
        <button onClick={checkout}>Checkout</button>
      </div>
    </>
  );
};
