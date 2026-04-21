import styles from "./PageLink.module.scss";
type PageLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const PageLink = ({ href, children, className }: PageLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles["page-link"]} ${className}`}
    >
      {children}
    </a>
  );
};
export default PageLink;
