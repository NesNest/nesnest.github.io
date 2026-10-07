import React from "react";

const Contacto: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <div className="contact-links">
        {/* Correo directo */}
        <a
          href="mailto:nestor.guerreromolina@gmail.com"
          className="contact-link"
        >
          📧 Envíame un correo
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5215511834504"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          💬 Escríbeme por WhatsApp
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/néstor-alejandro-guerrero-molina-a62b732a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          🔗 Mi perfil en LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contacto;
