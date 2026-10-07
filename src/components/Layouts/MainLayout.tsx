import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./MainLayout.module.scss";

export default function MainLayout() {
  return (
    <div className={style["layout"]}>
      <Header />
      <main className={style["content"]}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
