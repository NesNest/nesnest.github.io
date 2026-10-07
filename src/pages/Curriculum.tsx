import CertificatesList from "../components/CertificatesList/CertificatesList";
import Habilities from "../components/Habilities/Habilities";
export default function Curriculum() {
  return (
    <div>
      <a href="./Nestor_CV.pdf" download>
        Descargar CV
      </a>
      <Habilities />
      <CertificatesList />
    </div>
  );
}
