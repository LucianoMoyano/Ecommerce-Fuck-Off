import { useState } from "react";

import "./App.css";

import React from "react";
import { Subtitle } from "./components/Subtitulo/Subtitle";
import { ProductList } from "./components/ProductList/ProductList";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> Fuck Off ©</h1>
        <Subtitle />
        <ProductList />
      </div>
    </>
  );
}
