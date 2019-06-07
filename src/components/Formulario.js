import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = props => {
  const { updateGasto, updateCrearGasto } = props;
  const [cantidadGasto, updateCantidadGasto] = useState(0);
  const [nombreGasto, updateNombreGasto] = useState("");
  const [error, updateError] = useState(false);

  const addGasto = e => {
    e.preventDefault();

    //validar gasto
    if (cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === "") {
      updateError(true);
      return;
    }

    //construir objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    };
    //elimino alerta de error
    updateError(false);

    //crear gasto
    updateCrearGasto(true);

    //se pasa el objeto al componente principal
    updateGasto(gasto);

    //se resetea el formulario
    updateCantidadGasto("");
    updateNombreGasto("");
  };

  return (
    <form onSubmit={addGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error && (
        <Error mensaje="Todos los campos son requeridos o alguno no es valido" />
      )}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          placeholder="Ej. Transporte"
          className="u-full-width"
          onChange={e => updateNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          placeholder="Ej. 250"
          className="u-full-width"
          onChange={e => updateCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>

      <input
        type="submit"
        value="Agregar Gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};

export default Formulario;
