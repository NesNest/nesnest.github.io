import style from "./DownloadButton.module.scss";
import nestorCV from "./../../assets/documents/nestorCV.pdf";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function DownloadButton() {
  return (
    <div className={style["button-container"]}>
      <a
        href={nestorCV}
        download="NéstorGuerreroCV.pdf"
        className={style["button-container__button"]}
      >
        <HiOutlineDocumentText size={22} />
        Descargar CV
      </a>
    </div>
  );
}
