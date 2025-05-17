import React from "react";
import { Link } from "react-router-dom";
import tiendas from "./tiendas";

export default function BusinessList() {
  return (
    <div>
      <h1>
        Encuentra tiendas de barrio cerca de ti o publica un anuncio para ellos:
      </h1>
      <h2>Tiendas disponibles</h2>
      <ul className="bussines-list">
        {tiendas.map((biz) => (
          <li key={biz.id}>
            <Link to={`/tienda/${biz.id}`}>{biz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
