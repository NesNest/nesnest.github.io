import styles from "./ProjectsList.module.scss";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <>
      <div className={styles["projects-list"]}>
        <h2>Paginas</h2>
        <div className={styles["projects-list__container"]}>
          <ProjectCard
            href="https://nesnest.github.io/MicoMind/"
            imageSrc="/pagesImages/micomind_img.png"
            title="MicoMind"
          />

          <ProjectCard
            href="https://nesnest.github.io/MenuCraft/"
            imageSrc="/pagesImages/menucraft_img.png"
            title="MenuCraft"
          />
        </div>
      </div>
    </>
  );
};
export default ProjectsList;
