import React from "react";

export const Counter = () => {
  //Ejemplo 1

  const botonPresionado = () => {
    console.log("Estas son las veces que presionamos el boton");
  };

  return (
    <>
      <div>
        <h3>Mis estados</h3>
        <hr />
        <button onClick={botonPresionado}>Apretame y mira la consola</button>
      </div>
    </>
  );
};
