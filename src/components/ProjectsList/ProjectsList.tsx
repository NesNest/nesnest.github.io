import styles from "./ProjectsList.module.scss";
import PageLink from "../PageLink/PageLink";

const ProjectsList = () => {
  return (
    <>
      <div className={styles["projects-list"]}>
        <h1>Paginas</h1>
        <div className={styles["projects-list__container"]}>
          <PageLink
            className={styles["card"]}
            href="https://nesnest.github.io/MicoMind/"
          >
            <img src="/pagesImages/micomind_img.png" alt="MicoMind" />
          </PageLink>
          <PageLink
            className={styles["card"]}
            href="https://nesnest.github.io/MenuCraft/"
          >
            <img src="/pagesImages/menucraft_img.png" alt="Menucraft" />
          </PageLink>
        </div>
      </div>
    </>
  );
};
export default ProjectsList;
