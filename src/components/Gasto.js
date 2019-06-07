import React from "react";

export default function Gasto({ gasto }) {
  return (
    <li className="gastos">
      <p>
        {gasto.nombreGasto}
        <span className="gasto">$ {gasto.cantidadGasto}</span>
      </p>
    </li>
  );
}
