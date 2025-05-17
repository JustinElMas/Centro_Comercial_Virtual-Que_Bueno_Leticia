import React from "react";
import { Link } from "react-router-dom";
import businesses from "./businesses";

export default function BusinessList() {
  return (
    <div>
      <h2>Negocios disponibles</h2>
      <ul className="bussines-list">
        {businesses.map((biz) => (
          <li key={biz.id}>
            <Link to={`/negocio/${biz.id}`}>{biz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
