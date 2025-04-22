import React from "react";

//archvos css
import "./formulario.css";

export const Formulario = () => {
  return (
    <>
      <div className="contact-form">
        <h2>Dejanos tu consulta</h2>
        <form action="https://formspree.io/f/xyyqgnqr" method="POST">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" maxLength={300} required ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};
