import React from "react";
import { useParams, Link } from "react-router-dom";
import Tiendas from "./tiendas";

export default function TiendasPage() {
  const { id } = useParams();
  const tiendas = Tiendas.find((t) => t.id === id);

  if (!tiendas) return <p>Tienda no encontrado</p>;

  return (
    <div>
      <h2>{tiendas.name}</h2>
      <p>{tiendas.description}</p>
      <p>{tiendas.horario}</p>
      <p>
        <strong>Dirección:</strong> {tiendas.address}
      </p>
      <h4>Productos:</h4>
      <ul>
        {tiendas.products.map((p, i) => (
          <li key={i}>
            {p.name} - <strong>${p.price}</strong>
          </li>
        ))}
      </ul>

      <div>
        <button className="button-cta-empresa">
          Comunicarme con la empresa
        </button>
        <button className="button-cta-domicilio">Pedir a domicilio 🛵</button>
      </div>

      <Link to="/">⬅️ Volver a la lista</Link>
    </div>
  );
}
