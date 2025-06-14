import { useEffect, useState } from "react";
import cineicc from "../assets/images/formacao_academica/CINEICC.jpeg";
import instPPC from "../assets/images/formacao_academica/instituto_portugues_de_psicoterapia_corporal.webp";
import mindTheMind from "../assets/images/formacao_academica/mindTheMindLogo.jpeg";
import opp from "../assets/images/formacao_academica/ordem_dos_psicologos_portugueses.webp";
import univCoimbra from "../assets/images/formacao_academica/universidade_de_coimbra.webp";
import centroSocialCovaeGala from "../assets/images/formacao_academica/centroSocialdaCovaeGala.png";

import AwardSVG from "../assets/svgs/award.jsx";
import AwardsCupSVG from "../assets/svgs/awardsCup.jsx";
import BookSVG from "../assets/svgs/book.jsx";
import CertificateSVG from "../assets/svgs/certificate.jsx";

import psicCond from "../assets/certificados/Certificado_Avaliacao_Psicologica_de_Condutores_e_Candidatos_a_Condutores.pdf";

import direitosHumanos from "../assets/certificados/Certificado_Ciclo_de_Workshops_de_Direitos_Humanos.pdf";

import educFinan from "../assets/certificados/Certificado_Educacao_Financeira_E_Psicologia.pdf";

import intervCeJRisco from "../assets/certificados/Certificado_Intervencao_Com_Criancas_E_Jovens_Em_Risco.pdf";

import psicAdultVel from "../assets/certificados/Certificado_Intervencao_Psicologica_Com_Adultos_Mais_Velhos.pdf";

import psicLSGBT from "../assets/certificados/Certificado_Intervencao_Psicologica_Com_Pessoas_LGBTQ.pdf";

import refEAsilo from "../assets/certificados/Certificado_intervencao_Psicologica_com_Pessoas_Refugiadas_e_Requerentes_de_Asilo.pdf";

import problAlcool from "../assets/certificados/Certificado_Intervencao_Psicologica_Em_Problemas_Ligados_Ao_Alcool.pdf";

import violDom from "../assets/certificados/Certificado_Intervencao_Psicologica_em_Situacoes_de_Violencia_Domestica.pdf";

import papelPsico from "../assets/certificados/Certificado_Literacia_Em_Saude_O_Papel_Do_Psicologo.pdf";

import mktPesEProf from "../assets/certificados/Certificado_Marketing_Pessoal_E_Profissional.pdf";

import mindTheMindCert from "../assets/certificados/Certificado_Mind_the_mind_formaçao.pdf";

import cuidadosPaliativos from "../assets/certificados/Certificado_O_Profissional_No_ambito_Dos_Cuidados_Paliativos.pdf";

import emCarreira from "../assets/certificados/Certificado_Workshops_EmCarreira.pdf";

import cineiccCert from "../assets/certificados/Certificado_Congresso_CINEICC.pdf";

import regCorp from "../assets/certificados/Certificado_Corpo_Regulacao_Emocional_e_Relacao_Terapeutica.pdf";

import cucubebe from "../assets/certificados/Certificado_Cucu_Bebe.pdf";

import servicosMediadosPorTecnologias from "../assets/certificados/certificado_prest_de_serv_de_psic_med_por_ti.pdf";

import psicCorp from "../assets/certificados/Certificado_Simposio_Saude_Emocional.pdf";

import tecPsicCorp from "../assets/certificados/Certificado_Tecnicas_de_Psicoterapia_Corporal.pdf";

import relaxParaAdultosEIdosos from "../assets/certificados/certificado_tecnicas_de_relaxamento_para_adultos_e_idosos.pdf";

import encontroPespectivasDoEnvelhecimento from "../assets/certificados/Certificado_Encontro_Perspectivas_do_Envelhecimento.pdf";

import xiSeminarioPsicologiaEducacao from "../assets/certificados/Certificado_OPP_XISeminarioPsicologiaEducacao.pdf";

import mdc from "../assets/images/formacao_academica/mdc.webp";

import { Navigation, Pagination, Virtual } from "swiper/modules";
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
      id: 23,
      imagem: opp,
      curso: "XI Seminário de Psicologia e Educação",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "05/2025 - 05/2025",
      tempo: "9",
      cert: xiSeminarioPsicologiaEducacao,
    },
    {
      id: 0,
      imagem: mdc,
      curso: "Técnicas de Relaxamento para Adultos e Idosos",
      instituicao: "MDC Psicologia e Formação",
      periodo: "11/2024 - 11/2024",
      tempo: "4",
      cert: relaxParaAdultosEIdosos,
    },
    {
      id: 22,
      imagem: centroSocialCovaeGala,
      curso: "III Encontro: Perspetivas do Envelhecimento",
      instituicao: "Centro Social da Cova e Gala",
      periodo: "09/2024 - 09/2024",
      tempo: "8",
      cert: encontroPespectivasDoEnvelhecimento,
    },
    {
      id: 1,
      imagem: opp,
      curso:
        "Prestação de Serviços de Psicologia Mediados por Tecnologias da Informação e da Comunicação (TIC)",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "09/2024 - 09/2024",
      tempo: "10",
      cert: servicosMediadosPorTecnologias,
    },
    {
      id: 2,
      imagem: opp,
      curso: "O Profissional no Âmbito dos Cuidados Paliativos",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "04/2024 - 04/2024",
      tempo: "10",
      cert: cuidadosPaliativos,
    },
    {
      id: 3,
      imagem: opp,
      curso: "Literacia em Saúde, o Papel do Psicólogo",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "04/2024 - 04/2024",
      tempo: "10",
      cert: papelPsico,
    },
    {
      id: 4,
      imagem: opp,
      curso: "Intervenção Com Crianças E Jovens Em Risco",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: intervCeJRisco,
    },
    {
      id: 5,
      imagem: opp,
      curso: "Intervenção Psicológica Em Problemas Ligados Ao Álcool",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: problAlcool,
    },
    {
      id: 6,
      imagem: opp,
      curso: "Intervenção Psicológica em Situações de Violência Doméstica",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "01/2024 - 01/2024",
      tempo: "10",
      cert: violDom,
    },
    {
      id: 7,
      imagem: opp,
      curso:
        "Avaliação Psicológica de Condutores/as e Candidatos/as a Condutor/a",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: psicCond,
    },
    {
      id: 8,
      imagem: opp,
      curso: "Educação Financeira e Psicologia",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: educFinan,
    },
    {
      id: 9,
      imagem: opp,
      curso: "Intervenção Psicológica Com Adultos Mais Velhos",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: psicAdultVel,
    },
    {
      id: 10,
      imagem: opp,
      curso: "Marketing Pessoal E Profissional",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "12/2023 - 12/2023",
      tempo: "10",
      cert: mktPesEProf,
    },
    {
      id: 11,
      imagem: opp,
      curso: "Intervenção Psicológica Com Pessoas LGBTQ",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "11/2023 - 11/2023",
      tempo: "10",
      cert: psicLSGBT,
    },
    {
      id: 12,
      imagem: opp,
      curso:
        "Intervenção Psicológica com Pessoas Refugiadas e Requerentes de Asilo",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "11/2023 - 11/2023",
      tempo: "10",
      cert: refEAsilo,
    },
    {
      id: 13,
      imagem: opp,
      curso: "Participação nos Workshops EmCarreira",
      instituicao: "Ordem dos Psicólogos Portugueses",
      periodo: "06/2023 - 06/2023",
      tempo: "20",
      cert: emCarreira,
    },
    {
      id: 14,
      imagem: cineicc,
      curso: "IV International Congress CINEICC",
      instituicao:
        "Centro de Investigação em Neuropsicologia e Intervenção Cognitivo-Comportamental",
      periodo: "03/2023 - 04/2023",
      tempo: "10",
      cert: cineiccCert,
    },
    {
      id: 15,
      imagem: univCoimbra,
      curso: "Participação no Ciclo de Workshops de Direitos Humanos",
      instituicao: "Amnistia internacional da Universidade de Coimbra",
      periodo: "06/2021 - 06/2021",
      tempo: "10",
      cert: direitosHumanos,
    },
    {
      id: 16,
      imagem: mindTheMind,
      curso:
        "“Mind the Mind - to Combat the Stigma of Mental Disorders (Formação)",
      instituicao: "Mind The Mind",
      periodo: "2020",
      tempo: "2",
      cert: mindTheMindCert,
    },
    {
      id: 17,
      imagem: univCoimbra,
      curso:
        'Participação no Seminário Internacional de Psicologia do Bebé "Cucu, Bebé!"',
      instituicao: "Babylab da Universidade de Coimbra",
      periodo: "",
      tempo: "",
      cert: cucubebe,
    },
    {
      id: 18,
      imagem: instPPC,
      curso: "Simpósio Saúde Emocional",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "3,5",
      cert: psicCorp,
    },
    {
      id: 19,
      imagem: instPPC,
      curso:
        "Participação no Workshop Corpo, Regulação Emocional e Relação Terapêutica",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "2",
      cert: regCorp,
    },
    {
      id: 20,
      imagem: instPPC,
      curso: "Participação no Workshop de Técnicas de Psicoterapia Corporal",
      instituicao: "Instituto Português de Psicoterapia Corporal",
      periodo: "11/2019 - 11/2019",
      tempo: "2",
      cert: tecPsicCorp,
    },
    {
      id: 21,
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
