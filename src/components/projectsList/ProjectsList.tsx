import styles from "./ProjectsList.module.scss";
import PageLink from "../pageLink/PageLink";

const ProjectsList = () => {
  return (
    <>
      <div className={styles["projects-list"]}>
        <h1>Proyectos</h1>
        <div className={styles["projects-list__container"]}>
          <PageLink href="https://nesnest.github.io/MicoMind/">
            <h2> Micomind</h2>
          </PageLink>
          <PageLink href="https://nesnest.github.io/MenuCraft/">
            <h2>MenuCraft</h2>
          </PageLink>
        </div>
      </div>
    </>
  );
};
export default ProjectsList;
