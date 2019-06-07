import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, updatePresupuesto] = useState(0);
  const [restante, updateRestante] = useState(0);
  const [preguntaPresupuesto, updatePreguntaPresupuesto] = useState(true);
  const [gasto, updateGasto] = useState({});
  const [gastos, updateGastos] = useState([]);
  const [crearGasto, updateCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      updateGastos(listadoGastos);
      const presupuestoRestante = restante - gasto.cantidadGasto;
      updateRestante(presupuestoRestante);
      updateCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]);

  return (
    <div className="App container">
      <header>
        <h1>Gastos Semanales</h1>

        <div className="contenido-principal contenido">
          {preguntaPresupuesto ? (
            <Pregunta
              updatePresupuesto={updatePresupuesto}
              updatePreguntaPresupuesto={updatePreguntaPresupuesto}
              updateRestante={updateRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  updateGasto={updateGasto}
                  updateCrearGasto={updateCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
