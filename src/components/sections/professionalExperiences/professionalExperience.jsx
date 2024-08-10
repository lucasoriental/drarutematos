import { useEffect, useState } from "react";
import clinicadopaiao from "../../../assets/images/experiencias_profissionais/clinica_do_paiao.webp";
import condeixa from "../../../assets/images/experiencias_profissionais/centro_de_saude_condeixa_a_nova.webp";
import lavosPet from "../../../assets/images/experiencias_profissionais/lavos_pet.webp";
import casa from "../../../assets/images/experiencias_profissionais/CASA.webp";
import psike from "../../../assets/images/experiencias_profissionais/psike.webp";
import mentalschool from "../../../assets/images/experiencias_profissionais/mental_school.webp";
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
      imagem: clinicadopaiao,
      titulo: "Psicóloga Júnior",
      empresa: "Clínica do Paião",
      responsabilidades:
        "Acompanhamento de consultas; avaliação e intervenção cognitivo-comportamental e de 3ª geração; realização de workshops sobre saúde mental e bem-estar; atendimento ao cliente; design e marketing.",
      tempo: "10/23 - Presente",
    },
    {
      id: 2,
      imagem: condeixa,
      titulo: "Estágio Curricular",
      empresa: "Centro de Saúde de Condeixa-a-Nova",
      responsabilidades:
        " Acompanhamento de consultas individuais, familiares, em grupo e de casal; avaliação e intervenção cognitivo comportamental e de 3ª geração.",
      tempo: "09/22 - 06/23",
    },
    {
      id: 3,
      imagem: lavosPet,
      titulo: "Part-time",
      empresa: "LavosPet - Figueira da Foz",
      responsabilidades:
        "Atendimento ao cliente, organização e manutenção dos artigos da loja, manutenção dos animais e auxílio em banhos e tosquias de cães.",
      tempo: "07/22 - 08/23",
    },
    {
      id: 4,
      imagem: casa,
      titulo: "Estágio de Verão",
      empresa: "CASA (Centro de Apoio ao Sem Abrigo) - Figueira da Foz",
      responsabilidades:
        "Observação e participação em entrevistas familiares; contacto com famílias carenciadas e utentes em situação de sem-abrigo.",
      tempo: "07/2021",
    },
    {
      id: 5,
      imagem: mentalschool,
      titulo: "Estágio de Verão",
      empresa: "Mental School - Figueira da Foz",
      responsabilidades:
        "Participação e auxílio nas atividades de campos de férias; manuseamento de instrumentos clínicos de avaliação psicológica; observação de sessões psicopedagógicas; participação na discussão de casos clínicos.",
      tempo: "07/20 - 08/20",
    },
    {
      id: 6,
      imagem: psike,
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
      if (width < 720) {
        setItemsPerPage(1);
      } else if (width < 1100) {
        setItemsPerPage(2);
      } else if (width < 1480) {
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
          Conheça o meu percurso profissional e as experiências que fundamentam
          o meu trabalho na área da psicologia.
        </p>
        <div className="container-todas-as-experiencias-profissionais">
          <Swiper
            modules={[Virtual, Pagination, Navigation]}
            spaceBetween={0}
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
