import CertificatesList from "../components/CertificatesList/CertificatesList";
import Habilities from "../components/Habilities/Habilities";
import DownloadButton from "../components/DownloadButton/DownloadButton";

export default function Curriculum() {
  return (
    <div>
      <DownloadButton />
      <Habilities />
      <CertificatesList />
    </div>
  );
}
