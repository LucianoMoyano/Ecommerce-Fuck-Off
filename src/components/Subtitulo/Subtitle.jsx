import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./style.css";
import { Formulario } from "../Formulario/Formulario";

export const Subtitle = () => {
  return (
    <div className="subtitle-container">
      <h1> FUCK OFF ©</h1>
      <p className="description">
        " Each of our products are created with the highest quality and
        perfectionism. Looking for a modern and vulgar design.
        <br />
        You have to be proud of yourself "
      </p>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img
            src="https://images.pexels.com/photos/13457491/pexels-photo-13457491.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Espacio Fuck Off"
            className="image"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/13457490/pexels-photo-13457490.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Espacio Fuck Off"
            className="image"
          />
        </div>
        {/* Agrega más elementos div si tienes más imágenes */}
      </Carousel>
      <p className="description">
        Te invitamos a sumarte al Espacio FUCK OFF ©, donde puedes conectarte
        contigo misma a través de diferentes actividades como bailar, correr,
        practicar yoga o simplemente moverte como más te guste.
      </p>
      <p className="description">
        <em className="grande">#ConectáConVos</em>
      </p>
      <div>
        <img
          src="https://images.pexels.com/photos/11281577/pexels-photo-11281577.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="Espacio Fuck Off"
          className="image"
        />
      </div>
      <Formulario />
    </div>
  );
};
