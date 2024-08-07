import { useEffect } from "react";
import XIconSvg from "../../../assets/icon_X";

export default function MyServiceModal({ setOpenModal, service }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XIconSvg size={25} strokeWidth={3} color="white" />
          </button>
        </div>
        <div className="modal-body">
          <div
            className="modal-body-meus-servicos-texto"
            dangerouslySetInnerHTML={{ __html: service.info }}
          />
        </div>
      </div>
    </div>
  );
}
