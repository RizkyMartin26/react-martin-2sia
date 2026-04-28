import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import "./assets/tailwind.css"; // ✅ WAJIB

createRoot(document.getElementById("root")).render(
  <StrictMode>
=======
import App from "./App";
import "./assets/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
>>>>>>> d3d8fce44a04343a7378f7989b134b1ff7878cf5
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);