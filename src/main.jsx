import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro/index.jsx";
import Conversas from "./pages/Conversas/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/conversas" element={<Conversas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
