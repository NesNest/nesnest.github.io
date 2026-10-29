import styles from "./Habilities.module.scss";
import HabilitiesTag from "./HabilitiesTag";

export const LANGUAGES = [
  { name: "Python", color: "#1E3A5F" },
  { name: "JavaScript", color: "#5C4B00" },
  { name: "TypeScript", color: "#1E4E8C" },
  { name: "C#", color: "#4B2E83" },
  { name: "SQL", color: "#374151" },
];
export const FRONTEND = [
  { name: "React", color: "#0F4C5C" },
  { name: "Angular", color: "#7A1F1F" },
  { name: "HTML5", color: "#8A2D0A" },
  { name: "CSS3", color: "#174EA6" },
  { name: "SCSS", color: "#7A284E" },
  { name: "Bootstrap", color: "#4C1D95" },
];
export const BACKEND = [
  { name: "FastAPI", color: "#065F46" },
  { name: "REST APIs", color: "#1F2937" },
  { name: "OAuth2", color: "#5B21B6" },
  { name: "JWT", color: "#7C2D12" },
];
export const DATABASES = [
  { name: "PostgreSQL", color: "#1E3A8A" },
  { name: "MySQL", color: "#0C4A6E" },
];
export const DEVOPS = [
  { name: "Docker", color: "#0F4C81" },
  { name: "Git", color: "#7C2D12" },
  { name: "GitHub", color: "#111827" },
  { name: "GitLab", color: "#78350F" },
  { name: "GitFlow", color: "#4B5563" },
  { name: "GitHub Pages", color: "#374151" },
  { name: "Linux", color: "#44403C" },
];
export default function Habilities() {
  return (
    <>
      <h2>Habilidades</h2>
      <section className={styles["skills-section"]}>
        <div className={styles["skills-section__group"]}>
          <h3>Lenguajes</h3>
          <div className={styles["skills-section__list"]}>
            {LANGUAGES.map((tech) => (
              <HabilitiesTag key={tech.name} color={tech.color}>
                {tech.name}
              </HabilitiesTag>
            ))}
          </div>
        </div>
        <div className={styles["skills-section__group"]}>
          <h3>Front-end</h3>
          <div className={styles["skills-section__list"]}>
            {FRONTEND.map((tech) => (
              <HabilitiesTag key={tech.name} color={tech.color}>
                {tech.name}
              </HabilitiesTag>
            ))}
          </div>
        </div>
        <div className={styles["skills-section__group"]}>
          <h3>Back-end</h3>
          <div className={styles["skills-section__list"]}>
            {BACKEND.map((tech) => (
              <HabilitiesTag key={tech.name} color={tech.color}>
                {tech.name}
              </HabilitiesTag>
            ))}
          </div>
        </div>
        <div className={styles["skills-section__group"]}>
          <h3>Data bases</h3>
          <div className={styles["skills-section__list"]}>
            {DATABASES.map((tech) => (
              <HabilitiesTag key={tech.name} color={tech.color}>
                {tech.name}
              </HabilitiesTag>
            ))}
          </div>
        </div>
        <div className={styles["skills-section__group"]}>
          <h3>Devops</h3>
          <div className={styles["skills-section__list"]}>
            {DEVOPS.map((tech) => (
              <HabilitiesTag key={tech.name} color={tech.color}>
                {tech.name}
              </HabilitiesTag>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
