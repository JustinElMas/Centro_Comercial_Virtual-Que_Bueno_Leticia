import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessList from "./BusinessList";
import BusinessPage from "./BusinessPage";
import TiendasList from "./tiendasList";
import TiendasPage from "./tiendapage";
import "./styles.css";
import DetalleNegocio from "./detalleNegocio";
import Footer from "./footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="home-title">
          Bienvenido al centro comercial virtual CC - Que bueno Leticia{" "}
          <span>🛵🍞🚪</span>
        </h1>
        <h2>Encuentra los mejores precios y domicilios.</h2>
      </div>
      <div className="App">
        <h1>Tienda Virtual de Negocios Locales</h1>
        <Routes>
          <Route path="/" element={<BusinessList />} />
          <Route path="/negocio/:id" element={<BusinessPage />} />
        </Routes>

        <DetalleNegocio></DetalleNegocio>
        <Routes>
          <Route path="/" element={<TiendasList />} />
          <Route path="/tienda/:id" element={<TiendasPage />} />
        </Routes>
      </div>

      <Footer></Footer>
    </Router>
  );
}
