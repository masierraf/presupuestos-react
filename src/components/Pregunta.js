import React, { Fragment, useState } from "react";
import Error from "./Error";

function Pregunta(props) {
  const {
    updatePresupuesto,
    updatePreguntaPresupuesto,
    updateRestante
  } = props;

  const [quantity, updateQuantity] = useState(0);
  const [error, updateError] = useState(false);

  const addPresupuesto = e => {
    e.preventDefault();
    console.log(quantity);

    if (quantity <= 0 || isNaN(quantity)) {
      updateError(true);
      return;
    }

    updateError(false);
    updatePresupuesto(quantity);
    updateRestante(quantity);
    updatePreguntaPresupuesto(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error && <Error mensaje="El presupuesto es Incorrecto" />}
      <form onSubmit={addPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu Presupuesto"
          onChange={e =>
            updateQuantity(
              parseInt(e.target.value === null ? "0" : e.target.value, 10)
            )
          }
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;
