import { useEffect, useState } from "react";
import tempImg from "../../../assets/images/tempImage512.png";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import ProfessionalExperiencesModal from "./professionalExperiencesModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ExperienciaProfissional() {
  let profExp = [
    {
      id: 1,
      imagem: tempImg,
      titulo: "Psicóloga Júnior",
      empresa: "Clínica do Paião",
      responsabilidades:
        "Acompanhamento de consultas; avaliação e intervenção cognitivo-comportamental e de 3ª geração; realização de workshops sobre saúde mental e bem-estar; atendimento ao cliente; design e marketing.",
      tempo: "10/23 - Presente",
    },
    {
      id: 2,
      imagem: tempImg,
      titulo: "Estágio Curricular",
      empresa: "Centro de Saúde de Condeixa-a-Nova",
      responsabilidades:
        " Acompanhamento de consultas individuais, familiares, em grupo e de casal; avaliação e intervenção cognitivo comportamental e de 3ª geração.",
      tempo: "09/22 - 06/23",
    },
    {
      id: 3,
      imagem: tempImg,
      titulo: "Part-time",
      empresa: "LavosPet - Figueira da Foz",
      responsabilidades:
        "Atendimento ao cliente, organização e manutenção dos artigos da loja, manutenção dos animais e auxílio em banhos e tosquias de cães.",
      tempo: "07/22 - 08/23",
    },
    {
      id: 4,
      imagem: tempImg,
      titulo: "Estágio de Verão",
      empresa: "CASA (Centro de Apoio ao Sem Abrigo) - Figueira da Foz",
      responsabilidades:
        "Observação e participação em entrevistas familiares; contacto com famílias carenciadas e utentes em situação de sem-abrigo.",
      tempo: "07/2021",
    },
    {
      id: 5,
      imagem: tempImg,
      titulo: "Estágio de Verão",
      empresa: "Mental School - Figueira da Foz",
      responsabilidades:
        "Participação e auxílio nas atividades de campos de férias; manuseamento de instrumentos clínicos de avaliação psicológica; observação de sessões psicopedagógicas; participação na discussão de casos clínicos.",
      tempo: "07/20 - 08/20",
    },
    {
      id: 6,
      imagem: tempImg,
      titulo: "Estágio de Verão",
      empresa: "Psike - Figueira da Foz",
      responsabilidades:
        "Participação e auxílio nas atividades de ATL de Verão da Psike; manuseamento de instrumentos clínicos de avaliação psicológica; auxílio na elaboração de workshops.",
      tempo: "07/2019",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 610) {
        setItemsPerPage(1);
      } else if (width < 850) {
        setItemsPerPage(2);
      } else if (width < 1200) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="container-background-experiencias-profissionais-light">
      <div id="container-conteudo-experiencias-profissionais-light">
        <p className="container-titulo-da-seccao">Experiências Profissionais</p>
        <p className="container-sub-titulo-da-seccao">
          Aqui estão as minhas experiências Profissionais
        </p>
        <div
          className="container-todas-as-experiencias-profissionais"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Swiper
            modules={[Virtual, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={itemsPerPage}
            navigation={true}
            virtual
          >
            {profExp.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <div className="cada-experiencia-profissional-card-swipper-div">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="cada-experiencia-profissional-card-item"
                  >
                    <img
                      src={item.imagem}
                      alt=""
                      className="cada-experiencia-profissional-card-imagem"
                    />
                    <p className="cada-experiencia-profissional-card-titulo">
                      {item.empresa}
                    </p>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {selectedItem && (
        <ProfessionalExperiencesModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
