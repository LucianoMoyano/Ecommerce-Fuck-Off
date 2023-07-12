import React from "react";

import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="about-us">
        <h3>ACERCA DE NOSOTROS</h3>
        <p>
          Somos una tienda multimarca que comenzó en 2007 con un local ubicado
          en Morón, Buenos Aires, zona oeste.
          <br />
          Actualmente, contamos con una tienda online a todo el país.
          <br />
          Tanto en nuestras tiendas online, como en los productos y la
          comunicación, buscamos que el cliente se sienta parte de lo que
          representa nuesro movimiento.
        </p>
      </div>
      <div className="information">
        <h3>INFORMACIÓN</h3>
        <p>
          Sucursales | Como Comprar? | Medios de Pago | Métodos de envío |
          Cambios y devoluciones | Contacto
        </p>
      </div>
    </footer>
  );
};
