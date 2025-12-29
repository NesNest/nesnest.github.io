// import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>
          Néstor Alejandro "La maquina sexual" Guerrero Molina <br />
        </h1>
        <p>
          Por favor contratenme <br />
        </p>
        <p>
          Gracias <br />
        </p>
        <p>todos los derechos reservados </p>
      </div>

      <div>
        <Link to="/MicoMind">
          <button>Micomind</button>
        </Link>
      </div>
    </>
  );
}

export default App;
