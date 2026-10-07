import style from "./Banner.module.scss";
// import

const Banner = () => {
  return (
    <div className={style["banner"]}>
      <div className={style["banner__container"]}>
        <div className={style["banner__container__info"]}>
          <img src="src/assets/nestorphoto.jpeg" alt="profile img" />

          <p>
            Me interesa la tecnología no solo como herramienta, sino como
            sistema: entender cómo funciona, por qué funciona y cómo construirla
            de forma clara y útil.. A la hora de trabajar quede enamorado de
            resolver problemas, de crear algo desde 0 de buscar la mejor
            solución y hacerlo mio. Aunque no me cierro a otras áreas me he
            inclinado a la programación web porque mezcla varias cosas en las
            que siempre he sido bueno, como; la resolcución de problemas, la
            creación y el diseño, la optimización y el ordenamiento, disfruto
            hacer aplicaciónes modulares y bien oreganizadas. El mundo de la
            tecnología es un mundo cambiante, siempre que aprendo algo hay 10
            cosas que desconocia, a pesar de saturarme me motiva que siempre
            haya algo que pueda aprender.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
