type Certificate = {
  title: string;
  image: string;
};

const certificates: Certificate[] = [
  { title: "C# Microsoft", image: "/certifications/CsharpMicrosoft.png" },
  { title: "Linux Cisco", image: "/certifications/linuxCisco.png" },
  {
    title: "Scrum Fundamentals",
    image: "/certifications/ScrumFundamentalsCertified.png",
  },
  // si conviertes otros PDFs a imagen, los agregas aquí
];

export default function CertificatesList() {
  return (
    <section>
      <h2>Certificaciones</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
