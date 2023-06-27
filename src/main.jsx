import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MiSegundoComponente } from "./components/MiSegundoComponente/MiSegundoComponente.jsx";
import { Counter } from "./components/Counter/Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MiSegundoComponente />
    <Counter />
  </React.StrictMode>
);
