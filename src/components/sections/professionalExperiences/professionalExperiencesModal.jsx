import { useEffect } from "react";
import XIconSvg from "../../../assets/icon_X";

export default function ProfessionalExperiencesModal({ item, onClose }) {
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
          <button className="modal-close-button" onClick={onClose}>
            <XIconSvg size={25} strokeWidth={3} color="white" />
          </button>
        </div>
        <div className="modal-body-experiencia-profissional">
          <div className="modal-experiencia-profissional-div">
            <img
              src={item.imagem}
              alt="logo da empresa"
              className="modal-experiencia-profissional-imagem"
            />
            <canvas className="modal-experiencia-profissional-barra-divisoria" />
            <div className="modal-experiencia-profissional-div-info">
              <p className="modal-experiencia-profissional-titulo">
                {item.titulo}
              </p>
              <p className="modal-experiencia-profissional-empresa">
                {item.empresa}
              </p>
              <p className="modal-experiencia-profissional-tempo">
                {item.tempo}
              </p>
            </div>
          </div>
          <div className="modal-experiencia-profissional-coluna-info">
            <p className="modal-experiencia-profissional-responsabilidades-titulo">
              Responsabilidades:
            </p>
            <div
              className="modal-experiencia-profissional-responsabilidades"
              dangerouslySetInnerHTML={{ __html: item.responsabilidades }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
