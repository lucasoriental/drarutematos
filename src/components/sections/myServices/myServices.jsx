import { useState } from "react";
import callToActionImg from "../../../assets/images/callToActionwebp.webp";
import MyServiceModal from "./myServiceModal";
import { Link } from "react-scroll";
import FormasDeAtendimentoSVG from "../../../assets/svgs/formasDeAtendimento";
import PrincipaiServicosSVG from "../../../assets/svgs/principaisServicos";
import BeneficiosSVG from "../../../assets/svgs/beneficios";

import terapiaIndividual from "../../../assets/images/terapiaIndividual.jpg";
import terapiaEmGrupo from "../../../assets/images/terapiaEmGrupo.jpg";
import terapiaFamiliar from "../../../assets/images/terapiaFamiliar.jpg";
import rastreioPsicologico from "../../../assets/images/rastreioPsicologico.jpg";
import realizacaoDeWorkshops from "../../../assets/images/realizacaoDeWorkshops.jpg";

import consultaOnline from "../../../assets/images/consultaOnline.jpg";
import consultaPresencial from "../../../assets/images/consultaPresencial.jpg";

import lotusIcon from "../../../assets/images/lotus.png";

export default function MyServices() {
  let headerHeight;

  if (window.innerWidth > 800) {
    headerHeight = 194;
  } else {
    headerHeight = 84;
  }

  let arrBeneficios = [
    {
      id: 0,
      beneficio: "Melhoria do bem-estar físico e emocional;",
    },
    {
      id: 1,
      beneficio: "Equilibrio emocional;",
    },
    {
      id: 2,
      beneficio:
        "Aumento da resiliência e capacidades de coping para lidar com adversidades e mudanças;",
    },
    {
      id: 3,
      beneficio: "Fortalecimento de relações interpessoais e familiares;",
    },
    {
      id: 4,
      beneficio: "Desenvolvimento pessoal e autoconhecimento;",
    },
    {
      id: 5,
      beneficio:
        "Desenvolvimento de estratégias práticas para lidar com o stress e a ansiedade;",
    },
    {
      id: 6,
      beneficio: "Melhoria da autoestima e da autoconfiança;",
    },
    {
      id: 7,
      beneficio:
        "Aprender a identificar e modificar padrões de pensamento negativos;",
    },
    {
      id: 8,
      beneficio: "Redução de sintomas de depressão e prevenção de recaídas;",
    },
    {
      id: 9,
      beneficio:
        "Aquisição de habilidades para resolver problemas de forma eficaz;",
    },
    {
      id: 10,
      beneficio: "Ajudar a superar fobias e medos específicos;",
    },
    {
      id: 11,
      beneficio:
        "Ensinar técnicas para melhorar a gestão do tempo e aumentar a produtividade;",
    },
    {
      id: 12,
      beneficio:
        "Promoção da adesão a hábitos de vida saudáveis, como exercício físico e dieta equilibrada;",
    },
    {
      id: 13,
      beneficio:
        "Facilitar a tomada de decisões importantes na vida pessoal e profissional.",
    },
  ];
  let arr1 = [
    {
      id: 1,
      img: terapiaIndividual,
      servico: "Terapia Individual",
      info: 'As consultas individuais são baseadas no <a href="https://www.saudebemestar.pt/pt/blog/psicologia/terapia-cognitivo-comportamental/" target="_blank">modelo cognitivo-comportamental</a> de 2ª e 3ª geração, reconhecido pela sua <strong>eficácia e adaptação às necessidades dos clientes.</strong></br> Este tipo de intervenção foca-se na <strong>compreensão dos pensamentos</strong> que podem estar a contribuir para as dificuldades emocionais e comportamentais que enfrenta. Através de um <strong>processo colaborativo</strong>, trabalhamos juntos para identificar padrões de pensamento disfuncionais e desenvolver estratégias práticas para promover mudanças positivas.</br></br><strong>O que esperar das consultas individuais:</strong></br></br> <ul><li><strong>Avaliação inicial</strong>: Uma avaliação abrangente para compreender os seus desafios específicos e estabelecer objetivos terapêuticos claros;</li><li> <strong>Intervenção personalizada:</strong> Desenvolvimento de um plano de tratamento adaptado às suas necessidades individuais, utilizando técnicas comprovadas da terapia cognitivo-comportamental;</li><li> <strong>Apoio contínuo:</strong> Sessões regulares para explorar e modificar padrões de pensamento negativos, aprender habilidades de enfrentamento eficazes e alcançar os objetivos terapêuticos definidos.</li></ul></br> <strong>Áreas de Intervenção:</strong></br> As consultas de psicologia destinam-se à <strong>prevenção e tratamento da doença mental</strong>, abrangendo todas as faixas etárias, desde crianças até idosos. Especificamente, a intervenção pode incidir em: </br></br><ul><li>Stress e Ansiedade;</li><li> Depressão ou outras perturbações de humor;</li><li> Ansiedade e Medos;</li><li> Perturbações Alimentares;</li><li> Problemas de comportamento;</li><li> Hiperatividade e Défice de Atenção;</li><li> Lidar com doenças crónicas;</li><li> Problemas de sono;</li><li> Perda e Luto;</li><li> Stress pós-traumático;</li><li> Lidar com dificuldades do dia-a-dia (escolares, sociais, amorosas, laborais, familiares);</li><li> Enurese e encoprese;</li><li> Entre outras problemáticas.</li></ul> </br><strong>Benefícios das Consultas:</strong></br> Com as consultas individuais, visa-se promover e manter a saúde mental e física, prevenir psicopatologias e reduzir situações de risco. Os clientes têm a oportunidade de aprender a gerir estados de ansiedade, superar fobias, tomar decisões conscientes em momentos de transição e lidar com emoções desagradáveis, entre outros desafios do dia-a-dia. </br></br><strong>Horários e Disponibilidade:</strong></br> O serviço de psicologia está disponível de segunda a sábado de manhã, mediante marcação prévia. Estou comprometida em oferecer um espaço seguro e confidencial, onde juntos podemos explorar e superar as suas dificuldades, promovendo o seu bem-estar emocional e melhor qualidade de vida. </br></br><strong>Honorário:</strong></br> O valor das consultas individuais varia entre 22€ a 40€.',
    },
    {
      id: 2,
      img: terapiaEmGrupo,
      servico: "Terapia em Grupo",
      info: 'As sessões de terapia de grupo são baseadas no modelo cognitivo-comportamental de 2ª e 3ª geração, reconhecido pela sua eficácia e adaptação às necessidades dos participantes. Este formato terapêutico oferece uma oportunidade única de <strong>crescimento pessoal e apoio mútuo</strong>, permitindo que os participantes aprendam uns com os outros em um <strong>ambiente seguro e colaborativo.</strong></br></br><strong>O que esperar das sessões de terapia de grupo:</strong></br></br> <ul><li><strong>Dinâmica de grupo:</strong> Sessões estruturadas que promovem a interação entre os membros do grupo, facilitando a partilha de experiências e estratégias de enfrentamento;</li><li><strong>Intervenção baseada no grupo:</strong> Técnicas cognitivo-comportamentais adaptadas ao contexto de grupo, permitindo que os participantes se beneficiem da dinâmica e apoio coletivo.</li></ul> </br></br><strong>Áreas de Intervenção:</strong></br> A terapia de grupo pode ser particularmente eficaz para uma variedade de questões, desde problemas emocionais (exs.: perturbações de ansiedade, luto) a desenvolvimento de competências (exs.: treino de competências sociais). <strong></br></br>Benefícios da Terapia de Grupo:</strong></br> A terapia de grupo visa promover e manter a saúde mental e física, prevenir psicopatologias e reduzir situações de risco. Os participantes têm a oportunidade de: </br></br><ul><li>Aprender com as experiências de outros membros do grupo;</li><li>Desenvolver habilidades de comunicação e relacionamento;</li><li> Receber e oferecer apoio emocional;</li><li> Identificar e modificar padrões de pensamento disfuncionais;</li><li> Aprender novas estratégias de enfrentamento para os desafios diários.</li></ul></br></br> <strong>Requisitos e Disponibilidade:</strong></br> Para iniciar um grupo de terapia, é necessário um mínimo de 5 participantes. O serviço de terapia de grupo está disponível de segunda a sábado de manhã, mediante marcação prévia.</br> Se tem interesse em participar numa terapia de grupo, por favor preencha o seguinte formulário:  <a href="#" target="_blank">Clique Aqui</a></br></br> <strong>Honorário:</strong></br> O valor de cada sessão de grupo é 20€. Quando a terapia de grupo acontece semanalmente, é possível obter um pack mensal, com o valor de 60€/mês.',
    },
    {
      id: 3,
      img: terapiaFamiliar,
      servico: "Terapia Familiar",
      info: "A terapia familiar, baseada no modelo cognitivo-comportamental de 2ª e 3ª geração, é reconhecida pela sua eficácia e adaptação às necessidades específicas de cada família. Este tipo de intervenção foca-se em melhorar a comunicação, resolver conflitos e fortalecer as relações familiares, criando um ambiente mais harmonioso e compreensivo. </br><strong>O que esperar das sessões de terapia familiar:</strong></br></br><ul><li> <strong>Avaliação inicial:</strong> Uma avaliação abrangente de todos os membros da família para identificar as dinâmicas e desafios específicos;</li><li><strong>Intervenção personalizada:</strong> Desenvolvimento de um plano de tratamento adaptado às necessidades da família, utilizando técnicas comprovadas da terapia cognitivo-comportamental;</li><li><strong>Sessões colaborativas:</strong> Encontros regulares que envolvem todos os membros da família, promovendo a participação ativa e o apoio mútuo.</li></ul></br><strong>Áreas de Intervenção:</strong></br> A terapia familiar pode ser particularmente eficaz para tratar uma variedade de questões, incluindo:</br></br> <ul><li>Problemas de comunicação;</li><li>Conflitos familiares;</li><li> Adaptação a mudanças (divórcio, mudança de residência, etc.);</li><li> Problemas de comportamento em crianças e adolescentes;</li><li> Hiperatividade e Défice de Atenção;</li><li> Lidar com doenças crónicas ou terminais de um membro da família;</li><li> Perda e Luto;</li><li> Stress pós-traumático;</li><li> Dificuldades escolares e sociais;</li><li> Problemas de sono;</li><li> Enurese e encoprese;</li><li> Entre outras problemáticas.</li></ul></br><strong>Benefícios da Terapia Familiar:</strong></br> A terapia familiar visa promover um ambiente familiar saudável e solidário, prevenindo psicopatologias e reduzindo situações de risco. Os benefícios incluem:</br></br> <ul><li>Melhoria na comunicação e compreensão mútua;</li><li> Resolução eficaz de conflitos;</li><li> Fortalecimento dos laços familiares;</li><li> Desenvolvimento de estratégias conjuntas para enfrentar desafios;</li><li> Apoio emocional para todos os membros da família.</li></ul></br> <strong>Requisitos e Disponibilidade:</strong> </br>A terapia familiar está disponível de segunda a sábado de manhã, mediante marcação prévia. Estou comprometida em oferecer um espaço seguro e confidencial onde a sua família pode trabalhar junta para superar dificuldades, promover o bem-estar emocional e alcançar uma melhor qualidade de vida para todos os membros. </br></br><strong>Honorários:</strong></br> O valor de cada sessão de terapia familiar é de 60€.",
    },
    {
      id: 4,
      img: rastreioPsicologico,
      servico: "Rastreio Psicológico <span>(Gratuito)</span>",
      info: 'O <strong>Rastreio Psicológico Gratuito</strong> é uma iniciativa destinada a oferecer uma avaliação preliminar da saúde mental de indivíduos, identificando possíveis sinais de stress, ansiedade, depressão ou outros problemas psicológicos. Este serviço é ideal para quem deseja uma análise inicial sem compromisso financeiro, servindo como um primeiro passo na direção do cuidado psicológico.</br> </br><strong>Objetivos do Rastreio Psicológico Gratuito:</strong> </br></br><ul><li><strong>Identificação Precoce:</strong> Detectar precocemente sinais de problemas psicológicos, permitindo intervenções rápidas e eficazes;</li><li><strong> Orientação:</strong> Fornecer orientação sobre os próximos passos a seguir, seja iniciando um processo terapêutico ou encaminhando para outros especialistas;</li><li><strong> Acessibilidade:</strong> Tornar o cuidado psicológico mais acessível à população, removendo barreiras financeiras que possam impedir a busca por ajuda.</li></ul></br><strong> Como Funciona:</strong></br> Este rastreio pode ser realizado de duas formas: </br></br><ul><li><strong>Online:</strong> preenchendo o formulário do rastreio, em qualquer momento do dia e do mês, através do seguinte link - <a href="https://forms.gle/6ja9HKTQuCXtNrYe7" target="_blank">clique aqui</a>;</li><li><strong> Presencial:</strong> preenchendo o formulário do rastreio, presencialmente na Clínica do Paião, mediante marcação (pode agendar o seu rastreio ligando para o 233 940 116).</li></ul></br></br> <strong>Duração:</strong> Este rastreio tem uma duração aproximada de <strong>30 a 60 minutos</strong> (dependendo do ritmo de preenchimento de cada pessoa). </br><strong>Feedback:</strong> No final do preenchimento do formulário, o cliente receberá feedback sobre sua condição psicológica e orientações sobre possíveis tratamentos ou intervenções adicionais, <strong>num prazo máximo de duas semanas.</strong> </br></br><strong>Benefícios:</strong> </br></br><ul><li><strong>Sem Custo:</strong> Totalmente gratuito, garantindo que todos possam ter acesso a uma avaliação inicial de sua saúde mental;</li><li><strong>Confidencialidade:</strong> O rastreio é realizado de forma confidencial, respeitando a privacidade e o sigilo profissional.</strong></li></ul></br></br><strong>Quem Pode Participar:</br></br></strong><ul><li> <strong>Adultos</strong> a partir dos 18 anos;</li><li><strong>Indivíduos com Dúvidas sobre sua Saúde Mental:</strong> Ideal para quem está a passar por momentos de dúvida ou desconforto emocional e busca uma orientação inicial.</li></ul> </br>O rastreio psicológico gratuito é um recurso valioso para quem está a começar a jornada de cuidado com a saúde mental, oferecendo um ponto de partida seguro e orientado. </br></br>Para mais informações ou para agendar o seu rastreio psicológico gratuito, entre em contato <a href="#" target="_blank">aqui</a>',
    },
    {
      id: 5,
      img: realizacaoDeWorkshops,
      servico: "Workshops sobre Saúde Mental e Bem-estar",
      info: "Os <strong>Workshops sobre Saúde Mental e Bem-Estar</strong> são sessões interativas e educativas destinadas a promover a compreensão e o cuidado com a saúde mental. Estes workshops podem ser realizados tanto online quanto presencialmente, oferecendo flexibilidade e acessibilidade a todos os participantes. Com um mínimo de 10 participantes, esses workshops são projetados para grupos que desejam melhorar seu bem-estar mental e adquirir habilidades práticas para lidar com o stress e outras questões emocionais.</br></br> <strong>Objetivos dos Workshops sobre Saúde Mental e Bem-Estar:</strong></br></br><ul><li><strong>Educação e Conscientização:</strong> Aumentar a compreensão sobre a saúde mental, desmistificando conceitos e promovendo a importância do cuidado psicológico;</li><li><strong> Habilidades Práticas:</strong> Ensinar técnicas e estratégias práticas para gerir o stress, ansiedade e melhorar o bem-estar geral;</li><li><strong>  Apoio Comunitário:</strong> Criar um espaço de apoio onde os participantes possam compartilhar experiências e aprender uns com os outros.</li></ul></br></br><strong>Como Funciona:</strong></br></br><ul><li><strong> Agendamento:</strong> Os workshops podem ser agendados por telefone. Sessões presenciais são realizadas em locais convenientes, enquanto as sessões online são feitas por meio de plataformas digitais;</li><li><strong>  Duração e Estrutura:</strong> Cada workshop tem uma duração média de 1 a 3 horas, dependendo do tópico abordado;</li><li><strong>  Interação:</strong> Os participantes são incentivados a interagir, fazer perguntas e participar de atividades práticas durante o workshop; </li><li><strong> Feedback e Recursos:</strong> Ao final da sessão, os participantes recebem feedback e materiais de apoio, como guias e recursos adicionais, para continuar o aprendizado.</li></ul></br></br><strong>Benefícios:</strong> </br></br><ul><li><strong>Acessibilidade:</strong> Disponíveis em formato online e presencial, atendendo às necessidades e preferências de diferentes grupos;</li><li><strong>  Interatividade:</strong> Ambiente interativo que incentiva a participação ativa dos participantes;</li><li><strong>  Qualidade:</strong> Facilitados por profissionais qualificados na área da psicologia e saúde mental.</li></ul></br></br><strong> Tópicos Abordados:</strong></br></br> <ul><li><strong>Gestão de Stress e Ansiedade:</strong> Técnicas para identificar e gerir o stress e a ansiedade no dia a dia; </li><li><strong> Mindfulness e Meditação:</strong> Introdução a práticas de mindfulness e meditação para melhorar o bem-estar mental;</li><li><strong> Autoestima e Resiliência:</strong> Estratégias para desenvolver autoestima e resiliência emocional;</li><li><strong> Saúde Mental no Local de Trabalho:</strong> Abordagem de questões de saúde mental específicas do ambiente de trabalho e técnicas para melhorar o bem-estar no trabalho;</li><li><strong> Entre outros.</strong></br></br><strong>Quem Pode Participar:</strong></br></br> <ul><li><strong>Grupos Comunitários:</strong> Organizações e comunidades interessadas em promover a saúde mental entre seus membros;</li><li><strong>Empresas e Corporações:</strong> Empresas que desejam proporcionar bem-estar aos seus colaboradores e melhorar o ambiente de trabalho;</li><li><strong> Indivíduos:</strong> Qualquer pessoa interessada em melhorar sua saúde mental e bem-estar pode participar.</li></ul></br></br> Os workshops sobre saúde mental e bem-estar são uma excelente oportunidade para adquirir conhecimentos valiosos, desenvolver habilidades práticas e promover uma vida mais saudável e equilibrada.",
    },
  ];

  const [myService, setMyService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div id="container-background-meus-servicos-dark">
      <div id="container-conteudo-meus-servicos-dark">
        <p className="container-titulo-da-seccao">Meus Serviços</p>
        <p className="container-sub-titulo-da-seccao">
          Descubra os serviços que ofereço para apoiar o seu bem-estar mental,
          desde consultas individuais até realização de workshops. Encontre a
          forma de atendimento que melhor se adequa às suas necessidades e os
          benefícios que pode alcançar com o meu apoio profissional.
        </p>

        <div className="container-servicos-prestados-div">
          <div className="titulo-subseccao-icone-e-texto-div">
            <PrincipaiServicosSVG size="33" color="black" strokeWidth="1.4" />
            <p className="container-titulo-subseccao">Principais Serviços:</p>
          </div>
          <div className="container-servicos-prestados-grade">
            {arr1.map((item, index) => {
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="container-servicos-prestados-item"
                >
                  <img
                    src={item.img}
                    alt="Imagem do Serviço"
                    className="item-SP-imagem"
                  />
                  <div
                    className="item-SP-texto"
                    dangerouslySetInnerHTML={{ __html: item.servico }}
                  />
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setMyService(index);
                    }}
                    className="item-SP-botao"
                  >
                    mais detalhes
                  </button>
                  {modalOpen && myService === index && (
                    <MyServiceModal
                      service={item}
                      setOpenModal={setModalOpen}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-formas-atendimento-div">
          <div className="titulo-subseccao-icone-e-texto-div">
            <FormasDeAtendimentoSVG strokeWidth="1.4" size="33" color="black" />
            <p className="container-titulo-subseccao">Formas de Atendimento:</p>
          </div>
          <div className="container-formas-atendimento-grade">
            <div className="container-formas-atendimento-item">
              <img src={consultaOnline} alt="" className="item-FA-imagem" />
              <p className="item-FA-texto">Consultas Online</p>
            </div>
            <div className="container-formas-atendimento-item">
              <img src={consultaPresencial} alt="" className="item-FA-imagem" />
              <p className="item-FA-texto">Consultas Presenciais</p>
            </div>
          </div>
        </div>
        <div className="container-beneficios-div">
          <div className="titulo-subseccao-icone-e-texto-div">
            <BeneficiosSVG size="33" color="black" />
            <p className="container-titulo-subseccao">
              Benefícios das Consultas:
            </p>
          </div>
          <div className="container-beneficios-grade">
            {arrBeneficios.map((item) => {
              return (
                <div className="container-beneficios-item" key={item.id}>
                  <img src={lotusIcon} alt="icone" />
                  <p>{item.beneficio}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-alguma-duvida-div">
          <p className="container-alguma-duvida-titulo">Alguma Dúvida?</p>
          <p className="container-alguma-duvida-subtitulo">
            Veja quais são as perguntas mais frequentes clicando{" "}
            <Link
              to="container-conteudo-FAQ-dark"
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              Aqui
            </Link>
            .
          </p>
        </div>
        <div className="container-call-to-action-div">
          <div className="container-call-to-action-column-1">
            <p>
              Preparad@ para iniciar a sua caminhada em direção ao
              autoconhecimento e bem-estar? Entre em contato e agende sua
              consulta agora mesmo!
            </p>
            <a
              href="https://lucasoriental.com"
              className="container-call-to-action-link"
              target="_blank"
            >
              <button>Agende a sua consulta</button>
            </a>
          </div>
          <img src={callToActionImg} alt="" />
        </div>
      </div>
    </div>
  );
}
