import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style["footer"]}>
      <footer className={style["footer__container"]}>
        <p>© 2024 Nesnest. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Footer;
