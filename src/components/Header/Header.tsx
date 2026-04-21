import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style["header"]}>
      <div className={style["header-content"]}>
        <h1 className={style["title"]}>Néstor Alejandro Guerrero Molina</h1>

        <nav className={style["nav"]}>
          <Link to="/" className={style["link"]}>
            Inicio
          </Link>
          <Link to="/projects" className={style["link"]}>
            Proyectos
          </Link>
          <Link to="/contact" className={style["link"]}>
            Contacto
          </Link>
          <a href="./Nestor_CV.pdf" className={style["cv-button"]} download>
            Descargar CV
          </a>
        </nav>
      </div>
    </header>
  );
}
