import React from 'react'
import Input from './Input'

export default function Formulario() {
  return (
    <div class="one-half column">
          <h2>Crear mi Cita</h2>
          <form>

            <label>Nombre Mascota</label>
            <Input tipo={"Text"} name={"mascota"} holder={"Ingrese el nombre de su mascota"}/>

              <label>Nombre Dueño</label>
              <Input tipo={"Text"} name={"propietario"} holder={"Ingrese el nombre del dueño de la mascota"}/>


              <label>Fecha</label>
              <Input tipo={"date"} name={"fecha"} holder={"Ingrese la fecha"}/>

              <label>hora</label>
              
              <Input tipo={"time"} name={"hora"} holder={"Ingrese la hora"}/>

              <label>Sintomas</label>
              <Input tipo={"textarea"} name={"sintomas"} />

              <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
            </form>


    </div>

  )
}
