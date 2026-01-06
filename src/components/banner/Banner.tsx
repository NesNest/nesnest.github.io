import style from "./Banner.module.scss";
// import

const Banner = () => {
  return (
    <div className={style["banner"]}>
      <div className={style["banner__container"]}>
        <h1>Néstor Alejandro Guerrero Molina</h1>

        <div className={style["banner__container--info"]}>
          <img src="./../../prueba.jpg" alt="profile img" />
          <p>
            Por favor contratenme <br />
          </p>
          <p>
            Gracias <br />
          </p>
          <p>todos los derechos reservados </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
