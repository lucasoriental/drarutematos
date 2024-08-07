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
      } else if (width < 610) {
        setItemsPerPage(2);
      } else if (width < 761) {
        setItemsPerPage(3);
      } else if (width < 962) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
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
      competencia: "Psicologia Clínica e da Saúde",
      nivel: 9,
      tipo: true,
    },
    {
      id: 1,
      imagem: tempImg,
      competencia: "Ética profissional",
      nivel: 2,
      tipo: true,
    },
    {
      id: 2,
      imagem: tempImg,
      competencia: "Investigação",
      nivel: 2,
      tipo: true,
    },
    {
      id: 3,
      imagem: tempImg,
      competencia: "Escuta ativa",
      nivel: 2,
      tipo: true,
    },
    {
      id: 4,
      imagem: tempImg,
      competencia: "Empatia",
      nivel: 2,
      tipo: true,
    },
    {
      id: 5,
      imagem: tempImg,
      competencia: "Avaliação individual",
      nivel: 2,
      tipo: true,
    },
    {
      id: 6,
      imagem: tempImg,
      competencia: "TCC (Terapia cognitivo-comportamental)",
      nivel: 2,
      tipo: true,
    },
    {
      id: 7,
      imagem: tempImg,
      competencia: "Intervenções psicológicas",
      nivel: 2,
      tipo: true,
    },
    {
      id: 8,
      imagem: tempImg,
      competencia: "Avaliação psicológica",
      nivel: 2,
      tipo: true,
    },
    {
      id: 9,
      imagem: tempImg,
      competencia: "Psicologia",
      nivel: 2,
      tipo: false,
    },
    {
      id: 10,
      imagem: tempImg,
      competencia: "Comunicação",
      nivel: 2,
      tipo: false,
    },
    {
      id: 11,
      imagem: tempImg,
      competencia: "Capacidade de organização",
      nivel: 2,
      tipo: false,
    },
    {
      id: 12,
      imagem: tempImg,
      competencia: "Saúde mental",
      nivel: 2,
      tipo: false,
    },
    {
      id: 13,
      imagem: tempImg,
      competencia: "Trabalho em equipe",
      nivel: 2,
      tipo: false,
    },
  ];

  return (
    <div id="container-background-minhas-competencias-light">
      <div id="container-conteudo-minhas-competencias-light">
        <p className="container-titulo-da-seccao">Minhas Competências</p>
        <p className="container-sub-titulo-da-seccao">
          Cá estão reunidas as minhas Soft e Technical Skills!
        </p>
        <div className="container-minhas-competencias-div">
          <div className="container-minhas-competencias-transversais">
            <p className="container-minhas-competencias-tecnicas-e-transversais-titulo">
              Competéncias Transversais
            </p>
            <div className="container-minhas-competencias-tecnicas-transversais-grade">
              <Swiper
                modules={[Virtual, Pagination, Navigation]}
                spaceBetween={50}
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
                spaceBetween={50}
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
