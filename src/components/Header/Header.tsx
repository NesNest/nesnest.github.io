import style from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={style["header"]}>
      <div className={style["header__content"]}>
        <h1 className={style["header__content__title"]}>
          Néstor Alejandro Guerrero Molina
        </h1>
        <button
          className={`${style["header__button"]} ${isOpen ? style["header__button--active"] : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <NavBar isOpen={isOpen} onClose={toggleMenu} />
      </div>
    </header>
  );
}
