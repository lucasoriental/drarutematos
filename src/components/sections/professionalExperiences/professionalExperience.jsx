import { useEffect, useState } from "react";
import clinicadopaiao from "../../../assets/images/experiencias_profissionais/clinica_do_paiao.webp";
import hiwellLogo from "../../../assets/images/experiencias_profissionais/hiwellLogo.webp"
import condeixa from "../../../assets/images/experiencias_profissionais/centro_de_saude_condeixa_a_nova.webp";
import casa from "../../../assets/images/experiencias_profissionais/CASA.webp";
import psike from "../../../assets/images/experiencias_profissionais/psike.webp";
import mentalschool from "../../../assets/images/experiencias_profissionais/mental_school.webp";
import centroSocial from "../../../assets/images/experiencias_profissionais/centro_social_paroquial_do_paiao.webp"
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
      id: 0,
      imagem: hiwellLogo,
      titulo: "Psicóloga Clínica e da Saúde",
      empresa: "Hiwell",
      responsabilidades:
        "A Hiwell é uma plataforma de saúde mental que facilita o acesso a consultas online com psicólogos qualificados, oferecendo descontos que tornam o acompanhamento mais acessível. Na Hiwell, realizo intervenções psicológicas online direcionadas para adolescentes e adultos, proporcionando um acompanhamento acessível, flexível e personalizado. <br><br>Através deste serviço, ajudo os pacientes a lidar com desafios emocionais e psicológicos, promovendo o bem-estar e o desenvolvimento pessoal. As principais áreas de atuação incluem: <br><br><ul><li><span>Avaliação Psicológica e Diagnóstico:</span> Utilizo entrevistas clínicas e instrumentos de avaliação para compreender as necessidades individuais de cada paciente e definir estratégias eficazes para o seu percurso terapêutico;</li><br><li><span>Intervenção Cognitivo-Comportamental (2ª e 3ª Gerações):</span> Aplico técnicas baseadas na Terapia Cognitivo-Comportamental (TCC), bem como abordagens de terceira geração, como Mindfulness, Compaixão e Terapia de Aceitação e Compromisso (ACT), ajustando-as a cada caso específico;</li><br><li><span>Promoção da Saúde Mental e Prevenção de Psicopatologias:</span> Trabalho com questões como ansiedade, depressão, dificuldades relacionais, gestão emocional e autoestima, ajudando os pacientes a desenvolver estratégias para lidar melhor com os seus desafios;</li><br><li><span>Planeamento de Intervenções Personalizadas:</span> Defino planos de intervenção adaptados a cada pessoa, acompanhando a sua evolução e ajustando as estratégias sempre que necessário.</li></ul><br>A Hiwell é a escolha ideal para quem procura um acompanhamento psicológico online de qualidade, com a comodidade de ser realizado à distância e com condições acessíveis.",
      tempo: "01/2025 - presente",
    },
    {
      id: 1,
      imagem: centroSocial,
      titulo: "Psicóloga Clínica e da Saúde",
      empresa: "Centro Social Paroquial do Paião",
      responsabilidades:
        "No Centro Social Paroquial do Paião, desenvolvi um conjunto de atividades focadas no bem-estar e na qualidade de vida da população idosa. As minhas intervenções destinaram-se a promover a saúde mental, a autonomia e a integração social dos utentes, através de diversas abordagens: <br><br><ul><li><span>Avaliações Psicossociais:</span> Realizei avaliações psicossociais para compreender o contexto e as necessidades de cada utente, o que permitiu um acompanhamento mais direcionado e sensível às suas particularidades;</li><br><li><span>Apoio Psicológico Individual:</span> Proporcionei apoio psicológico individualizado, oferecendo um espaço seguro onde os utentes podiam expressar as suas emoções e trabalhar as dificuldades que enfrentam na sua vida diária;</li><br><li><span>Atividades em Grupo:</span> Organizei sessões em grupo que incentivaram a socialização e a partilha de experiências, com o objetivo de fortalecer os laços sociais, estimular a mente e proporcionar momentos de diversão e interação;</li><br><li><span>Treino Cognitivo:</span> Desenvolvi atividades específicas de treino cognitivo, como exercícios de memória, atenção e raciocínio para preservar e fortalecer as capacidades cognitivas e estimular a plasticidade mental;</li><br><li><span>Promoção do Bem-Estar e Qualidade de Vida:</span> Implementei estratégias para promover o bem-estar físico e emocional, contribuindo para uma maior qualidade de vida dos utentes e para a manutenção da sua saúde mental e emocional.</li></ul><br>Estas intervenções foram desenhadas para responder às necessidades desta faixa etária, proporcionando-lhes um acompanhamento integral e personalizado.<br><br>O trabalho em part-time no Centro Social permitiu-me aprofundar a minha experiência na intervenção com a população idosa, desenvolvendo competências na adaptação de estratégias terapêuticas a esta faixa etária e reforçando a minha sensibilidade para as suas necessidades emocionais e cognitivas.",
      tempo: "10/24 - 01/2025",
    },
    {
      id: 2,
      imagem: clinicadopaiao,
      titulo: "Psicóloga Clínica e da Saúde",
      empresa: "Clínica do Paião",
      responsabilidades:
        "Na Clínica do Paião, realizo uma variedade de intervenções psicológicas direcionadas para o bem-estar e a saúde mental de crianças, adolescentes, adultos e idosos. A principal atividade consiste no acompanhamento de Consultas de Psicologia Clínica, onde proporciono apoio emocional e intervenções terapêuticas, orientadas para ajudar os pacientes a compreender e gerir os seus desafios psicológicos, promovendo o autoconhecimento e o desenvolvimento de competências. Entre as áreas de foco das consultas, incluem-se: <br><br><ul><li><span>Avaliação Psicológica e Diagnóstico:</span> Realizo avaliações psicológicas detalhadas, utilizando entrevistas clínicas, questionários eoutros instrumentos de avaliação que permitem compreender o estado psicológico, as necessidades e os objetivos de cada paciente;</li><br><li> <span>Intervenção Cognitivo-Comportamental (2ª e 3ª Gerações):</span> Implemento abordagens baseadas na terapia cognitivo-comportamental de segunda e terceira geração, incluindo Mindfulness, Compaixão e Terapia de Aceitação e Compromisso (ACT), adaptando as técnicas às necessidades e características individuais dos pacientes;</li><br><li><span>Promoção da Saúde Mental e Prevenção de Psicopatologias:</span> Trabalho na prevenção e tratamento de uma ampla gama de condições, como ansiedade, depressão, perturbações do sono, dificuldades de relacionamento e luto, com foco no fortalecimento das capacidades pessoais e na promoção do bem-estar emocional;</li><br><li><span>Planeamento de Intervenções Personalizadas:</span> Desenvolvo planos de intervenção personalizados para cada paciente, com objetivos claros e estratégias específicas, monitorizando o progresso e ajustando as técnicas conforme necessário.</li></ul><br> Além do acompanhamento individual, também estão disponíveis outras formas de apoio, como terapia de grupo e familiar, bem como workshops, que abordam temas diversos e que permitem uma partilha enriquecedora de experiências e aprendizagens em grupo.<br><br><br><h2>Estágio Profissional</h2><p class=\"sub-sec-2\">10/23 - 10/24</p><p class=\"modal-experiencia-profissional-responsabilidades-titulo\">Responsabilidades:</p>Durante o meu estágio profissional na Clínica do Paião, participei ativamente em várias atividades que contribuíram para o desenvolvimento das minhas competências na área da psicologia clínica. Entre as principais responsabilidades, destacam-se: <br><br><ul><li>Acompanhamento de consultas de psicologia clínica, proporcionando uma abordagem prática ao acompanhamento terapêutico;</li><br><li>Avaliação e intervenção cognitivo-Comportamental, incluindo técnicas de Mindfulness e Terapia de Aceitação e Compromiss (ACT); </li><br><li>Desenvolvimento e apresentação de workshops numa entidade parceira sobre saúde mental e bem-estar, promovendo uma maio consciencialização entre os participantes; </li><br><li>Apoio na receção e atendimento ao cliente, assegurando um ambiente acolhedor e organizado; </li><br><li>Participação em atividades de design e marketing, contribuindo para a promoção dos serviços da clínica e a criação de materiais informativos.</li></ul>",
      tempo: "10/23 - Presente",
    },
    {
      id: 3,
      imagem: condeixa,
      titulo: "Estágio Curricular",
      empresa: "Centro de Saúde de Condeixa-a-Nova",
      responsabilidades:
        "Durante o meu estágio curricular no Centro de Saúde de Condeixa-a-Nova, tive a oportunidade de aprofundar as minhas competências em psicologia clínica, realizando as seguintes funções: <br><br><ul><li><span>Acompanhamento de Consultas:</span> Participei no acompanhamento de consultas individuais, familiares, em grupo e de casal, proporcionando suporte emocional e intervenções terapêuticas; </li><br><li><span>Avaliação Psicológica:</span> Realizei avaliações detalhadas, utilizando ferramentas e técnicas adequadas para compreender as necessidades dos pacientes; </li><br><li><span>Intervenção Cognitivo-Comportamental (2ª e 3ª Gerações):</span> Implementei abordagens baseadas na terapia cognitivo-comportamental de segunda e terceira geração, adaptando as intervenções às especificidades de cada caso.</li></ul><br> Além disso, a colaboração com o meu orientador e colega de estágio foi fundamental, permitindo um trabalho em equipa enriquecedor, onde pude aprender e partilhar experiências, contribuindo para o desenvolvimento de soluções terapêuticas eficazes. ",
      tempo: "09/22 - 06/23",
    },
    {
      id: 4,
      imagem: casa,
      titulo: "Psicóloga Clínica e da Saúde",
      empresa: "CASA (Centro de Apoio ao Sem Abrigo) - Figueira da Foz",
      responsabilidades:
        "No Centro de Apoio ao Sem-Abrigo (CASA), contribuo com serviços de apoio psicológico gratuitos, dedicados ao bem-estar e à saúde mental de pessoas em situação de vulnerabilidade, de todas as faixas etárias. Esta iniciativa teve início como parte de uma parceria entre o CASA e a Clínica do Paião, onde realizei o meu estágio profissional, e tornou-se uma missão pessoal que decidi continuar de forma independente, com o compromisso de prestar um acompanhamento regular e acessível. <br><br>A minha atividade no CASA inclui: <ul><br><li><span>Consultas de Psicologia Clínica:</span> Proporciono acompanhamento psicológico gratuito, onde ofereço apoio emocional e intervenções terapêuticas para ajudar os utentes a enfrentar desafios psicológicos, a promover o autoconhecimento e a desenvolver competências para a gestão emocional; </li><br><li><span>Avaliação Psicológica e Diagnóstico:</span> Realizo avaliações psicológicas com o uso de entrevistas clínicas e outros instrumentos de avaliação para melhor compreender o estado psicológico e as necessidades de cada utente; </li><br><li><span>Intervenção Cognitivo-Comportamental (2ª e 3ª Gerações):</span> Utilizo técnicas cognitivo-comportamentais, incluindo Mindfulness e Terapia de Aceitação e Compromisso (ACT), adaptadas às necessidades específicas dos utentes, promovendo abordagens eficazes e empáticas para lidar com as dificuldades emocionais; </li><br><li><span>Promoção da Saúde Mental e Prevenção de Psicopatologias:</span> Trabalho na prevenção e tratamento de problemas como ansiedade, depressão, stress pós-traumático, dificuldades de relacionamento, toxicodependências e apoio a vítimas de violência doméstica; </li><br><li><span>Workshops de Saúde Mental e Bem-Estar:</span> Facilito workshops que permitem a partilha de experiências e a aprendizagem em grupo, abordando temas relevantes e adaptados aos desafios dos utentes do CASA. </li><br></ul> Esta experiência tem sido especialmente gratificante e confirma o meu compromisso em promover a saúde mental e o bem-estar nas comunidades mais desfavorecidas, com um acompanhamento próximo e sensível às suas necessidades.<br><br><br><h2>Estágio de Verão</h2><p class=\"sub-sec-2\">2020 - 2021</p><p class=\"modal-experiencia-profissional-responsabilidades-titulo\">Responsabilidades:</p>No ano letivo de 2020-2021, efetuei um estágio de verão na organização Centro de Apoio ao Sem Abrigo da Figueira da Foz, totalizando 166 horas, onde desenvolvi diversas funções significativas, incluindo: <br><br><ul><li><span>Observação e Participação em Entrevistas:</span> Participei ativamente em entrevistas individuais e familiares, contribuindo para o diagnóstico de problemáticas e a identificação das necessidades; </li><br><li><span>Apoio Administrativo:</span> Auxiliei no preenchimento de fichas e escalas, garantindo o bom funcionamento da delegação e aorganização da informação; </li><br><li><span>Contato Direto com Famílias:</span> Estabeleci contacto direto com famílias carenciadas e utentes em situação de sem abrigo, oferecendo apoio e compreensão em suas dificuldades; </li><br><li><span>Participação em Atividades:</span> Colaborei em atividades da organização, como caminhadas solidárias, promovendo a integração eo apoio à comunidade; </li><br><li><span>Manutenção e Organização do Espaço:</span> Contribuí para a manutenção e organização do espaço, assegurando um ambiente acolhedor e funcional para os utentes. </li></ul><br>Este estágio proporcionou-me uma experiência prática valiosa na área do apoio social, permitindo-me desenvolver competências de comunicação, empatia e trabalho em equipa. ",
      tempo: "07/2021",
    },
    {
      id: 5,
      imagem: mentalschool,
      titulo: "Estágio de Verão",
      empresa: "Mental School - Figueira da Foz",
      responsabilidades:
        "No ano letivo de 2019-2020, efetuei um estágio de verão na organização Mental School - Figueira da Foz, totalizando 192 horas, onde desempenhei diversas funções enriquecedoras, incluindo: <br><br><ul><li><span>Participação em Campos de Férias:</span> Colaborei nas atividades de campos de férias, que incluíam atividades lúdicas e divertidas, com o objetivo de promover a socialização e o bem-estar das crianças; </li><br><li><span>Manuseamento de Materiais de Avaliação:</span> Auxiliei no manuseamento e exploração de materiais de avaliação psicológica e neuropsicológica, adquirindo experiência prática na aplicação de instrumentos de avaliação; </li><br><li><span>Observação de Relatórios Clínicos:</span> Observei a elaboração de relatórios clínicos, compreendendo a importância da documentação no contexto da intervenção psicológica; </li><br><li><span>Observação de Sessões Psicopedagógicas:</span> Assisti a sessões psicopedagógicas focadas na avaliação e intervenção nas dificuldades de aprendizagem, desenvolvendo uma compreensão mais profunda das estratégias utilizadas para apoiar ascrianças; </li><br><li><span>Participação na Discussão de Casos Clínicos:</span> Participei nas discussões de casos clínicos, enriquecendo a minha formação através da partilha de experiências e perspetivas com profissionais da área. </li></ul><br>Este estágio proporcionou-me uma valiosa experiência prática na área da psicologia infantil e psicopedagogia, permitindo-me desenvolver competências de observação, análise crítica e trabalho colaborativo. ",
      tempo: "07/20 - 08/20",
    },
    {
      id: 6,
      imagem: psike,
      titulo: "Estágio de Verão",
      empresa: "Psike - Figueira da Foz",
      responsabilidades:
        "No ano letivo de 2018/2019, efetuei um estágio de verão na organização PSIKE - Centro de Psicologia e Apoio Educativo - Figueira da Foz, totalizando 172 horas, onde desempenhei diversas funções enriquecedoras, incluindo: <br><br><ul><li><span>Participação nas Atividades de ATL de Verão:</span> Colaborei nas atividades de ATL de Verão do Centro, que incluíram atividades desportivas, sessões de mindfulness e terapia assistida com animais, promovendo o bem-estar e a socializaçãodos participantes; </li><br><li><span>Manuseamento de Instrumentos Clínicos:</span> Auxiliei no manuseamento de instrumentos clínicos de avaliação psicológica, bem como na consulta de material teórico e na elaboração de relatórios psicológicos, adquirindo experiência prática na área; </li><br><li><span>Auxílio na Elaboração de Workshops:</span> Contribuí para a elaboração de workshops destinados a crianças, adolescentes eadultos, abordando temas relevantes como violência no namoro e uso abusivo das redes sociais, fomentando a sensibilização e a educação. </li></ul><br>Este estágio proporcionou-me uma experiência valiosa na interseção da psicologia e da educação, permitindo-me desenvolver competências de intervenção, comunicação e trabalho em equipa. ",
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
