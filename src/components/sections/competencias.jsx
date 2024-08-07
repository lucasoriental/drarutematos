import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import tempImg from "../../assets/images/tempImage512.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MinhasCompetencias() {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setItemsPerPage(1);
      } else if (width < 667) {
        setItemsPerPage(2);
      } else if (width < 878) {
        setItemsPerPage(3);
      } else if (width < 970) {
        setItemsPerPage(4);
      } else if (width < 1300) {
        setItemsPerPage(5);
      } else {
        setItemsPerPage(6);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  let arrMinhasCompetencias = [
    /* tipo: false === Competênicas Transversais */
    /* tipo: true === Competencias Técnicas */
    {
      id: 0,
      imagem: tempImg,
      competencia: "Criatividade",
      nivel: 7,
      tipo: false,
    },
    {
      id: 1,
      imagem: tempImg,
      competencia: "Comunicação",
      nivel: 8,
      tipo: false,
    },
    {
      id: 2,
      imagem: tempImg,
      competencia: "Colaboração",
      nivel: 8,
      tipo: false,
    },
    {
      id: 3,
      imagem: tempImg,
      competencia: "Flexibilidade e Adaptabilidade",
      nivel: 9,
      tipo: false,
    },
    {
      id: 4,
      imagem: tempImg,
      competencia: "Empatia",
      nivel: 8,
      tipo: false,
    },
    {
      id: 5,
      imagem: tempImg,
      competencia: "Organização",
      nivel: 8,
      tipo: false,
    },
    {
      id: 6,
      imagem: tempImg,
      competencia: "Pensamento Crítico",
      nivel: 8,
      tipo: false,
    },
    {
      id: 7,
      imagem: tempImg,
      competencia: "Resolução de Problemas",
      nivel: 8,
      tipo: false,
    },

    {
      id: 8,
      imagem: tempImg,
      competencia: "Avaliação Psicológica",
      nivel: 9,
      tipo: true,
    },
    {
      id: 9,
      imagem: tempImg,
      competencia: "Téc. de Interv. Cogn.-Comport.",
      nivel: 9,
      tipo: true,
    },
    {
      id: 10,
      imagem: tempImg,
      competencia: "Atualização de Conhecimento",
      nivel: 8,
      tipo: true,
    },
    {
      id: 11,
      imagem: tempImg,
      competencia: "Documentação e Relatórios",
      nivel: 8,
      tipo: true,
    },
    {
      id: 12,
      imagem: tempImg,
      competencia: "Ética e Confidencialidade",
      nivel: 10,
      tipo: true,
    },
    {
      id: 13,
      imagem: tempImg,
      competencia: "Terapias de 3ª geração",
      nivel: 7,
      tipo: true,
    },
  ];

  return (
    <div id="container-background-minhas-competencias-light">
      <div id="container-conteudo-minhas-competencias-light">
        <p className="container-titulo-da-seccao">Minhas Competências</p>
        <p className="container-sub-titulo-da-seccao">
          Explore as minhas competências técnicas e transversais que sustentam a
          minha prática profissional e garantem um atendimento eficaz e de
          qualidade, adaptado às suas necessidades.
        </p>
        <div className="container-minhas-competencias-div">
          <div className="container-minhas-competencias-transversais">
            <p className="container-minhas-competencias-tecnicas-e-transversais-titulo">
              Competéncias Transversais
            </p>
            <div className="container-minhas-competencias-tecnicas-transversais-grade">
              <Swiper
                modules={[Virtual, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={itemsPerPage}
                navigation={true}
                virtual
              >
                {arrMinhasCompetencias.map((item, index) => {
                  const levelElements = [];
                  for (let i = 0; i < 10; i++) {
                    if (i < item.nivel) {
                      levelElements.push(
                        <canvas className="item-minhas-competencias-nivel-barra-On" />
                      );
                    } else {
                      levelElements.push(
                        <canvas className="item-minhas-competencias-nivel-barra-Off" />
                      );
                    }
                  }
                  return (
                    !item.tipo && (
                      <SwiperSlide key={item.id} virtualIndex={index}>
                        <div className="item-minhas-competencias-div">
                          <img
                            src={item.imagem}
                            alt="Competência.img"
                            className="item-minhas-competencias-imagem"
                          />
                          <div className="item-minhas-competencias-info-div">
                            <p className="item-minhas-competencias-competencia">
                              {item.competencia}
                            </p>
                            <div className="item-minhas-competencias-nivel">
                              {levelElements}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="container-minhas-competencias-tecnicas">
            <p className="container-minhas-competencias-tecnicas-e-transversais-titulo">
              Competéncias Técnicas
            </p>
            <div className="container-minhas-competencias-tecnicas-grade">
              <Swiper
                modules={[Virtual, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={itemsPerPage}
                navigation={true}
                virtual
              >
                {arrMinhasCompetencias.map((item, index) => {
                  const levelElements = [];
                  for (let i = 0; i < 10; i++) {
                    if (i < item.nivel) {
                      levelElements.push(
                        <canvas className="item-minhas-competencias-nivel-barra-On" />
                      );
                    } else {
                      levelElements.push(
                        <canvas className="item-minhas-competencias-nivel-barra-Off" />
                      );
                    }
                  }
                  return (
                    item.tipo && (
                      <SwiperSlide key={item.id} virtualIndex={index}>
                        <div className="item-minhas-competencias-div">
                          <img
                            src={item.imagem}
                            alt="Competência.img"
                            className="item-minhas-competencias-imagem"
                          />
                          <div className="item-minhas-competencias-info-div">
                            <p className="item-minhas-competencias-competencia">
                              {item.competencia}
                            </p>
                            <div className="item-minhas-competencias-nivel">
                              {levelElements}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
