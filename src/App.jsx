import CitasContainer from "./CitasContainer";
import Formulario from "./Formulario";

function App() {
  return (
    <>
      <h1 className="titulo">ADMINISTRADOR DE PACIENTES</h1>

      <div class="container">
        <div class="row">
          <Formulario />
          <CitasContainer />
        </div>
      </div>
    </>
  );
}

export default App;
