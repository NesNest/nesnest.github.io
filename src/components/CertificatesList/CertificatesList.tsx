import styles from "./CertificatesList.module.scss";
import { useState } from "react";

type Certificate = {
  title: string;
  image: string;
};
const globCertificates = import.meta.glob("/src/assets/certifications/*.png", {
  eager: true,
  import: "default",
});

const certificates: Certificate[] = Object.entries(globCertificates).map(
  ([path, url]) => {
    const fileName =
      path.split("/").pop()?.replace(".png", "") || "Certificación";

    const formattedTitle = fileName.replace(/([A-Z])/g, " $1").trim();

    return {
      title: formattedTitle,
      image: url as string,
    };
  },
);

export default function CertificatesList() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className={styles["cert-section"]}>
      <h2>Certificaciones</h2>
      <div className={styles["cert-section__grid"]}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles["cert-section__card"]}>
            <img
              src={cert.image}
              alt={cert.title}
              className={styles["cert-section__image"]}
              onClick={() => setSelectedImage(cert.image)}
              style={{ cursor: "zoom-in" }}
            />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className={styles["cert-modal"]}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className={styles["cert-modal__close"]}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Certificado Ampliado"
            className={styles["cert-modal__content"]}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
