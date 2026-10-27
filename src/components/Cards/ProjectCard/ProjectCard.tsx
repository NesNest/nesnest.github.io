import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  title: string;
};

const ProjectCard = ({ href, imageSrc, title }: ProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["card"]}
    >
      <img
        src={imageSrc}
        alt={`Captura de ${title}`}
        className={styles["card__image"]}
      />

      <div className={styles["card__content"]}>
        <h3 className={styles["card__title"]}>{title}</h3>
        <span className={styles["card__btn"]}>Visitar</span>
      </div>
    </a>
  );
};
export default ProjectCard;
