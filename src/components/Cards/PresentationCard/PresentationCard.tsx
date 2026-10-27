import styles from "./PresentationCard.module.scss";

interface socialLinks {
  href: string;
  icon: React.ReactNode;
  altText: string;
}

interface PresentationCardProps {
  mainImage: string;
  title: string;
  socialLinks: socialLinks[];
}

export default function PresentationCard({
  mainImage,
  title,
  socialLinks,
}: PresentationCardProps) {
  return (
    <div className={styles["content"]}>
      <div className={styles["presentation-card"]}>
        <img
          className={styles["presentation-card__image"]}
          src={mainImage}
          alt="presentation photo"
        />

        <div className={styles["presentation-card__title"]}>
          <b>
            <p>{title}</p>
          </b>
        </div>
        <div className={styles["presentation-card__links"]}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["presentation-card__links__btn"]}
              aria-label={link.altText}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
