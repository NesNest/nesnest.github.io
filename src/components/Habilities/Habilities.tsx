import styles from "./Habilities.module.scss";

const skills = [
  { name: "Python", color: "#3776AB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Git", color: "#F05032" },
  { name: "LaTeX", color: "#008080" },
];

export default function Habilities() {
  return (
    <section className={styles["skillsSection"]}>
      <h2 className={styles["title"]}>Habilidades Técnicas</h2>
      <div className={styles["skillsGrid"]}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles["skillCard"]}
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
