import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import criatividade from "../../assets/images/minhas_competencias/transversais/criatividade.webp";
import comunicacao from "../../assets/images/minhas_competencias/transversais/comunicacao.webp";
import colaboracao from "../../assets/images/minhas_competencias/transversais/colaboracao.webp";
import empatia from "../../assets/images/minhas_competencias/transversais/empatia.webp";
import flexibilidade from "../../assets/images/minhas_competencias/transversais/flexibilidade.webp";
import organizacao from "../../assets/images/minhas_competencias/transversais/organizacao.webp";
import pensamentoCritico from "../../assets/images/minhas_competencias/transversais/pensamento_critico.webp";
import resolucaoDeProblema from "../../assets/images/minhas_competencias/transversais/resolucao_de_problema.webp";
import atualizacaoDeConhecimento from "../../assets/images/minhas_competencias/tecnicas/atualizacao_de_conhecimento.webp";
import avaliacaoPsicologica from "../../assets/images/minhas_competencias/tecnicas/avaliacao_psicologica.webp";
import documentacaoERelatorios from "../../assets/images/minhas_competencias/tecnicas/documentacao_e_relatorios.webp";
import eticaEConfidencialidade from "../../assets/images/minhas_competencias/tecnicas/etica_e_confidencialidade.webp";
import intervencaoCC from "../../assets/images/minhas_competencias/tecnicas/intervencao_cc.webp";
import terceiraGeracao from "../../assets/images/minhas_competencias/tecnicas/terceira_geracao.webp";

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
      id: 1,
      imagem: criatividade,
      competencia: "Criatividade",
      nivel: 7,
      tipo: false,
    },
    {
      id: 2,
      imagem: comunicacao,
      competencia: "Comunicação",
      nivel: 8,
      tipo: false,
    },
    {
      id: 3,
      imagem: colaboracao,
      competencia: "Colaboração",
      nivel: 8,
      tipo: false,
    },
    {
      id: 4,
      imagem: flexibilidade,
      competencia: "Flexibilidade e Adaptabilidade",
      nivel: 9,
      tipo: false,
    },
    {
      id: 5,
      imagem: empatia,
      competencia: "Empatia",
      nivel: 8,
      tipo: false,
    },
    {
      id: 6,
      imagem: organizacao,
      competencia: "Organização",
      nivel: 8,
      tipo: false,
    },
    {
      id: 7,
      imagem: pensamentoCritico,
      competencia: "Pensamento Crítico",
      nivel: 8,
      tipo: false,
    },
    {
      id: 8,
      imagem: resolucaoDeProblema,
      competencia: "Resolução de Problemas",
      nivel: 8,
      tipo: false,
    },
    {
      id: 9,
      imagem: avaliacaoPsicologica,
      competencia: "Avaliação Psicológica",
      nivel: 9,
      tipo: true,
    },
    {
      id: 10,
      imagem: intervencaoCC,
      competencia: "Téc. de Interv. Cogn.-Comport.",
      nivel: 9,
      tipo: true,
    },
    {
      id: 11,
      imagem: atualizacaoDeConhecimento,
      competencia: "Atualização de Conhecimento",
      nivel: 8,
      tipo: true,
    },
    {
      id: 12,
      imagem: documentacaoERelatorios,
      competencia: "Documentação e Relatórios",
      nivel: 8,
      tipo: true,
    },
    {
      id: 13,
      imagem: eticaEConfidencialidade,
      competencia: "Ética e Confidencialidade",
      nivel: 10,
      tipo: true,
    },
    {
      id: 14,
      imagem: terceiraGeracao,
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
              Competências Transversais
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
                        <canvas key={i} className="item-minhas-competencias-nivel-barra-On" />
                      );
                    } else {
                      levelElements.push(
                        <canvas key={i} className="item-minhas-competencias-nivel-barra-Off" />
                      );
                    }
                  }
                  return (
                    !item.tipo && (
                      <SwiperSlide key={item.id} id={item.id} virtualIndex={index}>
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
              Competências Técnicas
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
                        <canvas key={i} className="item-minhas-competencias-nivel-barra-On" />
                      );
                    } else {
                      levelElements.push(
                        <canvas key={i} className="item-minhas-competencias-nivel-barra-Off" />
                      );
                    }
                  }
                  return (
                    item.tipo && (
                      <SwiperSlide key={item.id} id={item.id} virtualIndex={index}>
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
