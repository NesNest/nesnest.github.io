import style from "./navBar.module.scss";
import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavBar({
  isOpen,
  onClose,
}: NavBarProps): React.JSX.Element {
  return (
    <nav className={`${style["nav"]} ${isOpen ? style["nav--is-open"] : ""}`}>
      <div className={style["nav__container"]}>
        <Link to="/" className={style["nav__link"]} onClick={onClose}>
          Inicio
        </Link>
        <Link to="/projects" className={style["nav__link"]} onClick={onClose}>
          Proyectos
        </Link>
        <Link to="/curriculum" className={style["nav__link"]} onClick={onClose}>
          Curriculum
        </Link>
        <Link to="/contact" className={style["nav__link"]} onClick={onClose}>
          Contacto
        </Link>
      </div>
    </nav>
  );
}
