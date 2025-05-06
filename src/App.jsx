import React, { useState } from 'react';
import CitasContainer from "./CitasContainer";
import Formulario from "./Formulario";

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = nuevaCita => {
    setCitas(prev => [...prev, nuevaCita]);
  };

  function eliminarCita(indice) {
    setCitas(function (citasAnteriores) {
      return citasAnteriores.filter(function (cita, i) {
        return i !== indice;
      });
    });
  }


  return (
    <>
      <h1 className="titulo">ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <Formulario onNuevaCita={crearCita} />
          <CitasContainer citas={citas} onEliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;
