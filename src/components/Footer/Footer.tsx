import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style["footer"]}>
      <footer>
        <div className={style["footer__city"]}></div>
        <p>© 2024 Nesnest. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Footer;
