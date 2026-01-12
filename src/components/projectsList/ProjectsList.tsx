import styles from "./ProjectsList.module.scss";
import PageLink from "../pageLink/PageLink";

const ProjectsList = () => {
  return (
    <>
      <div className={styles["projects-list"]}>
        <h1>Proyectos</h1>
        <div className={styles["projects-list__container"]}>
          <PageLink
            className={styles["card"]}
            href="https://nesnest.github.io/MicoMind/"
          >
            <img
              src="./../../../public/pagesImages/micomind_img.png"
              alt="MicoMind"
            />
          </PageLink>
          <PageLink
            className={styles["card"]}
            href="https://nesnest.github.io/MenuCraft/"
          >
            <img
              src="./../../../public/pagesImages/menucraft_img.png"
              alt="Menucraft"
            />
          </PageLink>
        </div>
      </div>
    </>
  );
};
export default ProjectsList;
