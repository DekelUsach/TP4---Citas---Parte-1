import React, { useState } from 'react';
import Input from './Input';

const cosasVacias = {
  mascota: '',
  propietario: '',
  fecha: '',
  hora: '',
  sintomas: ''
};

export default function Formulario({ onNuevaCita }) {
  const [cita, setCita] = useState(cosasVacias);

  const cambioDatos = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const mandarDatos = e => {
    e.preventDefault();
    onNuevaCita(cita);
    setCita(cosasVacias);
  };

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={mandarDatos}>
        <label>Nombre Mascota</label>
        <Input
          tipo="text"
          name="mascota"
          holder="Ingrese el nombre de su mascota"
          value={cita.mascota}
          onChange={cambioDatos}
        />

        <label>Nombre Dueño</label>
        <Input
          tipo="text"
          name="propietario"
          holder="Ingrese el nombre del dueño"
          value={cita.propietario}
          onChange={cambioDatos}
        />

        <label>Fecha</label>
        <Input
          tipo="date"
          name="fecha"
          holder="Ingrese la fecha"
          value={cita.fecha}
          onChange={cambioDatos}
        />

        <label>Hora</label>
        <Input
          tipo="time"
          name="hora"
          holder="Ingrese la hora"
          value={cita.hora}
          onChange={cambioDatos}
        />

        <label>Síntomas</label>
        <Input
          tipo="textarea"
          name="sintomas"
          holder="Describa los síntomas"
          value={cita.sintomas}
          onChange={cambioDatos}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}
