import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Subtitle = () => {
  return (
    <div className="subtitle-container">
      <h1> FUCK OFF ©</h1>
      <h3>
        " Each of our products are created with the highest quality and
        perfectionism. Looking for a modern and vulgar design.
        <br />
        You have to be proud of yourself "
      </h3>
      <img
        src="https://images.pexels.com/photos/11281577/pexels-photo-11281577.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Espacio Fuck Off"
        className="image"
      />
      <p className="description">
        Te invitamos a sumarte al Espacio Fuck Off, donde puedes conectarte
        contigo misma a través de diferentes actividades como bailar, correr,
        practicar yoga o simplemente moverte como más te guste.
      </p>
      <p className="description">
        <em className="grande">#ConectáConVos</em>
      </p>
      <img
        src="https://images.pexels.com/photos/9546375/pexels-photo-9546375.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Espacio Fuck Off"
        className="image"
      />
      <div className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form action="https://formspree.io/f/xyyqgnqr" method="POST">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
