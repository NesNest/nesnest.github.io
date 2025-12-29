import styles from "./PageLink.module.scss";
type PageLinkProps = {
  href: string;
  children: React.ReactNode;
};

const PageLink = ({ href, children }: PageLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["page-link"]}
    >
      {children}
    </a>
  );
};
export default PageLink;
