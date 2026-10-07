import Projectslist from "../components/ProjectsList/ProjectsList";
import styles from "../components/ProjectsList/ProjectsList.module.scss";

import PageLink from "../components/PageLink/PageLink";
export default function Projects() {
  return (
    <>
      <PageLink className={styles["card"]} href="https://github.com/nesnest">
        <img src="/pagesImages/github_img.png" alt="GitHub" />
      </PageLink>
      <Projectslist />
    </>
  );
}
