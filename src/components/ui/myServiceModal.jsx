import { useEffect } from "react";
import XIconSvg from "../../assets/icon_X";

export default function MyServiceModal({ setOpenModal, service }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleLinkClick = (event) => {
      if (event.target.tagName === "A") {
        const href = event.target.getAttribute("href");

        const isExternal = href.startsWith("http") || href.startsWith("https");

        if (!isExternal && href.startsWith("#")) {
          event.preventDefault();
          setOpenModal(false);

          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    const modalBody = document.querySelector(".modal-body");
    if (modalBody) {
      modalBody.addEventListener("click", handleLinkClick);
    }

    return () => {
      document.body.classList.remove("modal-open");
      if (modalBody) {
        modalBody.removeEventListener("click", handleLinkClick);
      }
    };
  }, [setOpenModal]);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={() => setOpenModal(false)}
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
