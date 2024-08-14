import { useState, useEffect } from "react";
import univCoimbra from "../../assets/images/formacao_academica/universidade_de_coimbra.webp";
import opp from "../../assets/images/formacao_academica/ordem_dos_psicologos_portugueses.webp";
import instPPC from "../../assets/images/formacao_academica/instituto_portugues_de_psicoterapia_corporal.webp";

import AwardSVG from "../../assets/svgs/award.jsx";
import BookSVG from "../../assets/svgs/book.jsx";
import CertificateSVG from "../../assets/svgs/certificate.jsx";
import AwardsCupSVG from "../../assets/svgs/awardsCup.jsx";

import cuidadosPaliativos from "../../assets/certificados/Certificado O Profissional No Âmbito Dos Cuidados Paliativos.pdf";
import papelPsico from "../../assets/certificados/Certificado Literacia Em Saúde, O Papel Do Psicólogo.pdf";
import intervCeJRisco from "../../assets/certificados/Certificado Intervenção Com Crianças E Jovens Em Risco.pdf";
import problAlcool from "../../assets/certificados/Certificado Intervenção Psicológica Em Problemas Ligados Ao Álcool.pdf";
import violDom from "../../assets/certificados/Certificado Intervenção Psicológica em Situações de Violência Doméstica.pdf";
import psicCond from "../../assets/certificados/Certificado Avaliação Psicológica de Condutores e Candidatos a Condutores.pdf";
import educFinan from "../../assets/certificados/Certificado Educação Financeira E Psicologia.pdf";
import psicAdultVel from "../../assets/certificados/Certificado Intervenção Psicológica Com Adultos Mais Velhos.pdf";
import mktPesEProf from "../../assets/certificados/Certificado Marketing Pessoal E Profissional.pdf";
import psicLSGBT from "../../assets/certificados/Certificado Intervenção Psicológica Com Pessoas LGBTQ.pdf";
import refEAsilo from "../../assets/certificados/Certificado Intervenção Psicológica com Pessoas Refugiadas e Requerentes de Asilo.pdf";
import emCarreira from "../../assets/certificados/Certificado Workshops EmCarreira.pdf";
import direitosHumanos from "../../assets/certificados/Certificado Ciclo de Workshops de Direitos Humanos.pdf";
import webnar from "../../assets/certificados/Certificado_ participação teachmi.pdf";
import cucubebe from "../../assets/certificados/Certificado_Cucu Bebe.pdf";
import psicCorp from "../../assets/certificados/Certificado_Tecnicas de Psicoterapia Corporal.pdf";
import regCorp from "../../assets/certificados/Certificado_Corpo, Regulação Emocional e Relação Terapêutica.pdf";
import tecPsicCorp from "../../assets/certificados/Certificado_Tecnicas de Psicoterapia Corporal.pdf";

import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FormacaoAcademia() {
  const arrEnsinoSuperior = [
    {
      id: 0,
      imagem: univCoimbra,
      curso:
        "Mestrado em Intervenções Cognitivo-Comportamentais em Psicologia Clínica e da Saúde",
      instituicao:
        "Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra",
      periodo: "2021 - 2023",
    },
    {
      id: 1,
      imagem: univCoimbra,
      curso: "Licenciatura em Psicologia",
      instituicao:
        "Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra",
      periodo: "2018 - 2021",
    },
  ];

  const arrCursosEFormacoes = [
    {
      id: 0,
      imagem: opp,
      curso: "O Profissional no Âmbito dos Cuidados Paliativos",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "04/2024 - 04/2024",
      tempo: "10",
      cert: cuidadosPaliativos,
    },
    {
      id: 1,
      imagem: opp,
      curso: "Literacia em Saúde, o Papel do Psicólogo",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "04/2024 - 04/2024",
      tempo: "10",
      cert: papelPsico,
    },
    {
      id: 2,
      imagem: opp,
      curso: "Intervenção Com Crianças E Jovens Em Risco",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: intervCeJRisco,
    },
    {
      id: 3,
      imagem: opp,
      curso: "Intervenção Psicológica Em Problemas Ligados Ao Álcool",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: problAlcool,
    },
    {
      id: 4,
      imagem: opp,
      curso: "Intervenção Psicológica em Situações de Violência Doméstica",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: violDom,
    },
    {
      id: 5,
      imagem: opp,
      curso:
        "Avaliação Psicológica de Condutores/as e Candidatos/as a Condutor/a",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: psicCond,
    },
    {
      id: 6,
      imagem: opp,
      curso: "Educação Financeira e Psicologia",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: educFinan,
    },
    {
      id: 7,
      imagem: opp,
      curso: "Intervenção Psicológica Com Adultos Mais Velhos",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: psicAdultVel,
    },
    {
      id: 8,
      imagem: opp,
      curso: "Marketing Pessoal E Profissional",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: mktPesEProf,
    },
    {
      id: 9,
      imagem: opp,
      curso: "Intervenção Psicológica Com Pessoas LGBTQ",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "11/2023 - 11/2023",
      tempo: "10",
      cert: psicLSGBT,
    },
    {
      id: 10,
      imagem: opp,
      curso:
        "Intervenção Psicológica com Pessoas Refugiadas e Requerentes de Asilo",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "11/2023 - 11/2023",
      tempo: "10",
      cert: refEAsilo,
    },
    {
      id: 11,
      imagem: opp,
      curso: "Participação nos Workshops EmCarreira",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "06/2023 - 06/2023",
      tempo: "20",
      cert: emCarreira,
    },
    {
      id: 12,
      imagem: univCoimbra,
      curso: "Participação no Ciclo de Workshops de Direitos Humanos",
      instituicao: "Amnistia internacional da Universidade de Coimbra",
      periodo: "06/2021 - 06/2021",
      tempo: "10",
      cert: direitosHumanos,
    },
    {
      id: 13,
      imagem: univCoimbra,
      curso: 'Participação no Webinar "Infoday do Projeto TEACHmi"',
      instituicao:
        "Observatório de Cidadania e Intervenção Social da Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra",
      periodo: "01/2020 - 01/2020",
      tempo: "1",
      cert: webnar,
    },
    {
      id: 14,
      imagem: univCoimbra,
      curso:
        'Participação no Seminário Internacional de Psicologia do Bebé "Cucu, Bebé!"',
      instituicao: "Babylab da Universidade de Coimbra",
      periodo: "",
      tempo: "",
      cert: cucubebe
    },
    {
      id: 15,
      imagem: instPPC,
      curso: "Simpósio Saúde Emocional",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "3,5",
      cert: psicCorp
    },
    {
      id: 16,
      imagem: instPPC,
      curso:
        "Participação no Workshop Corpo, Regulação Emocional e Relação Terapêutica",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "2",
      cert: regCorp
    },
    {
      id: 17,
      imagem: instPPC,
      curso: "Participação no Workshop de Técnicas de Psicoterapia Corporal",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "2",
      cert: tecPsicCorp
    },
    {
      id: 18,
      imagem: univCoimbra,
      curso: "Participação no Treino da Mente Compassiva",
      instituicao:
        "Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra",
      periodo: "",
      tempo: "",
    },
  ];

  const arrMencoesHonrosas = [
    {
      id: 0,
      mencao: "Quadro de Mérito 5% Melhores Estudantes",
      periodo: "2022 - 2023",
    },
    {
      id: 1,
      mencao: " Prémio Santa Casa da Misericórdia de Coimbra",
      periodo: "2020 - 2021",
    },
    {
      id: 2,
      mencao: "Quadro de Mérito 5% Melhores Estudantes",
      periodo: "2020 - 2021",
    },
    {
      id: 3,
      mencao: "Quadro de Mérito 5% Melhores Estudantes",
      periodo: "2019 - 2020",
    },
    {
      id: 4,
      mencao: "Quadro de Mérito 5% Melhores Estudantes",
      periodo: "2018 - 2019",
    },
    {
      id: 5,
      mencao: "Quadro de Mérito 3% Melhores Estudantes",
      periodo: "2018 - 2019",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 912) {
        setItemsPerPage(1);
      } else if (width < 1533) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  return (
    <div id="container-background-formacao-academica-dark">
      <div id="container-conteudo-formacao-academica-dark">
        <p className="container-titulo-da-seccao">Formação Académica</p>
        <p className="container-sub-titulo-da-seccao">
          Explore a minha formação académica e veja como o conhecimento
          adquirido nas diversas etapas da minha educação contribui para a
          qualidade do meu trabalho.
        </p>

        <div className="container-formacao-academica-div">
          <div className="container-formacao-academica-ensino-superior-div">
            <div className="formacao-academica-sub-titulo-div-e-icone">
              <BookSVG size="32" strokeWidth="2" strokeColor="black" />
              <p className="formacao-academica-sub-titulo">Ensino Superior</p>
            </div>
            <div className="container-formacao-academica-ensino-superior-grade">
              {arrEnsinoSuperior.map((item) => {
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="item-ensino-superior-div"
                  >
                    <img
                      src={item.imagem}
                      alt="logo da instituição"
                      className="item-ensino-superior-imagem"
                    />
                    <div className="item-ensino-superior-info-div">
                      <p className="item-ensino-superior-curso">{item.curso}</p>
                      <p className="item-ensino-superior-instituicao">
                        {item.instituicao}
                      </p>
                      <p className="item-ensino-superior-periodo">
                        {item.periodo}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <canvas className="container-formacao-academica-divisoria" />

          <div className="container-formacao-academica-cursos-e-formacoes-div">
            <div className="formacao-academica-sub-titulo-div-e-icone">
              <CertificateSVG size="32" color="black" />
              <p className="formacao-academica-sub-titulo">
                Cursos e Formações
              </p>
            </div>
            <div className="container-formacao-academica-cursos-e-formacoes-grade">
              <Swiper
                modules={[Virtual, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={itemsPerPage}
                navigation={true}
                virtual
              >
                {arrCursosEFormacoes.map((item, index) => {
                  return (
                    <SwiperSlide key={item.id} virtualIndex={index}>
                      <a
                        key={item.id}
                        id={item.id}
                        className="item-cursos-e-formacoes-div"
                        href={item.cert}
                        download={`Certificado_${item.cert}.pdf`}
                      >
                        <img
                          src={item.imagem}
                          alt="logo da instituição"
                          className="item-cursos-e-formacoes-imagem"
                        />
                        <div className="item-cursos-e-formacoes-info-div">
                          <p className="item-cursos-e-formacoes-curso">
                            {item.curso}
                          </p>
                          <p className="item-cursos-e-formacoes-instituicao">
                            {item.instituicao}
                          </p>
                          <div className="item-cursos-e-formacoes-periodo-e-tempo-div">
                            {item.periodo !== "" ? (
                              <p className="item-cursos-e-formacoes-periodo">
                                {item.periodo}
                              </p>
                            ) : (
                              <></>
                            )}
                            {item.periodo || item.tempo !== "" ? (
                              <canvas className="item-cursos-e-formacoes-periodo-e-tempo-divisoria" />
                            ) : (
                              ""
                            )}
                            {item.tempo !== "" ? (
                              <p className="item-cursos-e-formacoes-tempo">
                                {item.tempo} h
                              </p>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <canvas className="container-formacao-academica-divisoria" />

          <div className="container-formacao-academica-mencoes-honrosas-div">
            <div className="formacao-academica-sub-titulo-div-e-icone">
              <AwardsCupSVG size="32" />
              <p className="formacao-academica-sub-titulo">Menções Honrosas</p>
            </div>
            <div className="container-formacao-academica-mencoes-honrosas-grade">
              {arrMencoesHonrosas.map((item) => {
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="item-mencoes-honrosas-div"
                  >
                    <AwardSVG color="black" size="25" />
                    <div className="item-mencoes-honrosas-info">
                      <p className="item-mencoes-honrosas-mencao">
                        {item.mencao}
                      </p>
                      <p className="item-mencoes-honrosas-periodo">
                        {item.periodo}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
