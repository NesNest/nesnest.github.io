import PresentationCard from "./PresentationCard/PresentationCard";
import nestorAvatar from "./../../assets/profile/avatar.jpeg";
import style from "./ContactCard.module.scss";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import React from "react";

export default function ContactCard(): React.ReactElement {
  return (
    <div className={style["contact-container"]}>
      <PresentationCard
        mainImage={nestorAvatar}
        title="Contactos"
        socialLinks={[
          {
            href: "mailto:nestor.guerreromolina@gmail.com",
            icon: <FaEnvelope />,
            altText: "Correo electrónico",
          },
          {
            href: "https://www.linkedin.com/in/n%C3%A9stor-alejandro-guerrero-molina-a62b732a8/",
            icon: <FaLinkedinIn />,
            altText: "LinkedIn",
          },
          {
            href: "https://wa.me/5215511834504",
            icon: <FaWhatsapp />,
            altText: "Whatsapp",
          },
        ]}
      />
    </div>
  );
}
