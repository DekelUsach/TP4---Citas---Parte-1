import React from "react";
import Cita from "./Cita";

export default function CitasContainer() {
  return (
    
        <div className="one-half column">
          <h2>Administra tus citas</h2>

          <Cita
            mascota={"Nina"}
            dueño={"Martin"}
            fecha={"2021-08-05"}
            hora={"08:20"}
            sintomas={"Le duele la panza"}
          />
          <Cita
            mascota={"Nina"}
            dueño={"Martin"}
            fecha={"2021-08-05"}
            hora={"08:20"}
            sintomas={"Le duele la panza"}
          />

          <Cita
            mascota={"Nina"}
            dueño={"Martin"}
            fecha={"2021-08-05"}
            hora={"08:20"}
            sintomas={"Le duele la panza"}
          />
        </div>
     
  );
}
