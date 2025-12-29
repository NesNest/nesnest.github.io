import style from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={style["banner"]}>
      <h1>Néstor Alejandro "La maquina sexual" Guerrero Molina</h1>
      <div>
        <p>
          Por favor contratenme <br />
        </p>
        <p>
          Gracias <br />
        </p>
        <p>todos los derechos reservados </p>
      </div>
    </div>
  );
};

export default Banner;
