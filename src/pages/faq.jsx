import { useState } from "react";

export default function FAQ() {
  const arrFAQ = [
    {
      id: 0,
      nome: "Sobre a Terapia",
      questoes: [
        {
          pergunta: "1. O que é a terapia cognitivo-comportamental (TCC)?",
          resposta:
            "A terapia cognitivo-comportamental (TCC) é uma abordagem psicoterapêutica que se concentra em identificar e alterar padrões de pensamento e comportamento negativos. É baseada na ideia de que nossos pensamentos, sentimentos e comportamentos estão interligados e que mudando os pensamentos negativos, podemos alterar as emoções e comportamentos disfuncionais.<br/><br/>A TCC de terceira geração, também conhecida como terapias contextuais, inclui abordagens como a Terapia de Aceitação e Compromisso (ACT) e a Terapia Comportamental Dialética (DBT). Essas abordagens integram conceitos de aceitação, mindfulness e valores pessoais, enfatizando a aceitação das experiências internas, a flexibilidade psicológica e o compromisso com ações alinhadas aos valores pessoais, além da mudança comportamental. Isso permite uma abordagem mais holística e personalizada do tratamento.",
        },
        {
          pergunta: "2. Quais são os benefícios da TCC?",
          resposta:
            "A TCC pode ajudar a reduzir sintomas de ansiedade, depressão, stress e outras condições psicológicas. Ela fornece ferramentas práticas para lidar com situações difíceis, melhora a autoconfiança e promove mudanças duradouras ao ensinar novas formas de pensar e comportar-se.",
        },
        {
          pergunta: "3. Como a TCC difere de outras formas de terapia?",
          resposta:
            "A TCC é mais estruturada e orientada para objetivos específicos em comparação com outras formas de terapia. Envolve tarefas e atividades fora das sessões, é de curto prazo e focada no presente, ao invés de explorar o passado profundamente.",
        },
        {
          pergunta: "4. Que tipos de problemas a TCC pode ajudar a tratar?",
          resposta:
            "A TCC pode ser eficaz no tratamento de uma variedade de problemas, incluindo ansiedade, depressão, perturbações alimentares, perturbações obsessivo-compulsivas, fobias, stress pós-traumático, e problemas de relacionamento, entre outros.",
        },
        {
          pergunta: "5. Quanto tempo geralmente dura o tratamento com TCC?",
          resposta:
            "A duração do tratamento varia conforme a necessidade individual, mas muitas vezes a TCC é uma terapia de curto a médio prazo, com tratamentos típicos durando entre 12 e 20 sessões.",
        },
      ],
    },
    {
      id: 1,
      nome: "Processo e Sessões",
      questoes: [
        {
          pergunta: "1. O que esperar na primeira sessão de terapia?",
          resposta:
            "Na primeira sessão, vamos discutir as suas preocupações, histórico pessoal e objetivos para a terapia. É uma oportunidade para nos conhecermos e para eu entender melhor as suas necessidades específicas.",
        },
        {
          pergunta: "2. Com que frequência devo marcar sessões de terapia?",
          resposta:
            "A frequência das sessões é geralmente semanal, mas pode variar conforme as suas necessidades e a natureza das suas dificuldades.",
        },
        {
          pergunta: "3. O que devo levar para a minha primeira consulta?",
          resposta:
            "Traga qualquer informação médica relevante, uma lista de medicações que está a tomar e qualquer outro documento que possa ajudar a contextualizar a sua situação.",
        },
        {
          pergunta: "4. Qual é a duração de cada sessão de terapia?",
          resposta:
            "Cada sessão de terapia dura geralmente 60 minutos, sendo a primeira consulta mais longa (até 90 minutos).",
        },
        {
          pergunta:
            "5. Como posso saber se a terapia está a funcionar para mim?",
          resposta:
            "Sinais de que a terapia está a funcionar incluem uma redução dos sintomas, melhorias no humor e no comportamento, e uma maior capacidade de lidar com situações difíceis. Discutiremos o seu progresso regularmente para garantir que a terapia está a ser eficaz.",
        },
      ],
    },
    {
      id: 2,
      nome: "Práticas e Ferramentas",
      questoes: [
        {
          pergunta:
            "1. Que tipos de técnicas ou ferramentas são utilizadas na TCC?",
          resposta:
            "Utilizamos várias técnicas, incluindo reestruturação cognitiva, exposição gradual a situações temidas, exercícios de relaxamento e mindfulness, e tarefas comportamentais para serem realizadas entre as sessões, entre outras.",
        },
        {
          pergunta:
            "2. Existem tarefas de casa ou atividades entre as sessões?",
          resposta:
            "Sim, tarefas entre as sessões são comuns na TCC. Elas ajudam a aplicar o que foi aprendido na sessão e a praticar novas habilidades.",
        },
        {
          pergunta: "3. O que devo levar para a minha primeira consulta?",
          resposta:
            "Traga qualquer informação médica relevante, uma lista de medicações que está a tomar e qualquer outro documento que possa ajudar a contextualizar a sua situação.",
        },
        {
          pergunta:
            "4. Como a terapia online funciona e é tão eficaz quanto a presencial?",
          resposta:
            "A terapia online funciona através de videochamadas seguras e tem-se mostrado tão eficaz quanto a presencial para muitas pessoas. Permite flexibilidade e acesso a terapia mesmo a partir de casa.",
        },
        {
          pergunta:
            "5. Posso combinar a TCC com outras formas de tratamento, como medicamentos?",
          resposta:
            "Sim, a TCC pode ser combinada com medicação quando necessário. Juntos podemos avaliar a necessidade de medicação e encaminhar para um médico, psiquiatra ou outra especialidade.",
        },
      ],
    },
    {
      id: 3,
      nome: "Logística e Administração",
      questoes: [
        {
          pergunta: "1. Como faço para agendar uma sessão?",
          resposta:
            "Pode agendar uma sessão através do website, por telefone ou e-mail. As informações de contacto estão disponíveis na secção de contactos do website.",
        },
        {
          pergunta: "2. Quais são as suas tarifas e políticas de pagamento?",
          resposta:
            "As tarifas variam conforme a duração e tipo de sessão. Os pagamentos podem ser realizados por transferência bancária, MB Way e numerário. Detalhes específicos serão fornecidos durante o agendamento.",
        },
        {
          pergunta: "3. Vocês aceitam planos de saúde ou seguros?",
          resposta:
            "Alguns seguros de saúde podem cobrir a terapia. Verifique com o seu seguro para saber se tem cobertura para consultas de psicologia.",
        },
        {
          pergunta: "4. Qual é a política de cancelamento de consultas?",
          resposta:
            "Solicito que as cancelamentos sejam feitos com pelo menos 24 horas de antecedência. Cancelamentos com menos de 24 horas podem estar sujeitos a uma taxa.",
        },
        {
          pergunta:
            "5. Existe algum tipo de contrato ou acordo de confidencialidade?",
          resposta:
            "Sim, todas as informações partilhadas nas sessões são confidenciais e protegidas por ética profissional e leis de privacidade.",
        },
      ],
    },
    {
      id: 4,
      nome: "Preocupações Comuns",
      questoes: [
        {
          pergunta:
            "1. O que devo fazer se não me sentir confortável com o terapeuta?",
          resposta:
            "É importante sentir-se à vontade com o seu terapeuta. Se não se sentir confortável, por favor, informe-me para que possamos discutir as suas preocupações e, se necessário, ajudá-lo a encontrar outro profissional.",
        },
        {
          pergunta: "2. A terapia é confidencial?",
          resposta:
            "Sim, a terapia é totalmente confidencial. As informações partilhadas durante as sessões são protegidas por regras éticas e legais de confidencialidade. Contudo, existem exceções a esta confidencialidade. A não manutenção da confidencialidade pode justificar-se sempre que se considere existir uma situação de perigo para o cliente ou para terceiros que possa ameaçar de uma forma grave a sua integridade física ou psíquica – perigo de vida, perigo de dano significativo, ou qualquer forma de maus-tratos a menores de idade ou adultos particularmente indefesos, em razão de idade, deficiência, doença ou outras condições de vulnerabilidade.",
        },
        {
          pergunta: "3. E se eu não souber como falar sobre os meus problemas?",
          resposta:
            "É normal sentir dificuldade em começar a falar sobre os seus problemas. Vamos avançar ao seu ritmo e encontrar formas confortáveis de abordar os temas que são importantes para si.",
        },
        {
          pergunta: "4. Como lidar com o estigma associado à terapia?",
          resposta:
            "O estigma em torno da terapia está a diminuir, mas ainda pode ser um desafio. Lembre-se de que procurar ajuda é um sinal de força e autocuidado. A terapia pode melhorar significativamente a sua qualidade de vida.",
        },
        {
          pergunta:
            "5. O que posso fazer se estiver em crise ou precisar de ajuda imediata?",
          resposta:
            "Se estiver em crise, pode ligar para os serviços de emergência ou para linhas de apoio emocional como a Linha SNS 24 (808 24 24 24) ou Linha SOS Voz Amiga (21 354 45 45). Entre em contacto comigo o mais rápido possível para agendar uma consulta.",
        },
      ],
    },
    {
      id: 5,
      nome: "Perturbações Mentais e Quando Procurar Ajuda",
      questoes: [
        {
          pergunta:
            "1. Quais são os sinais de que devo procurar ajuda psicológica?",
          resposta:
            "Sinais incluem sentimentos persistentes de tristeza ou desespero, ansiedade constante, mudanças significativas no apetite ou sono, perda de interesse em atividades, dificuldades em funcionamento diário, e pensamentos de autoagressão ou suicídio.",
        },
        {
          pergunta:
            "2. Como saber se o meu problema é sério o suficiente para procurar terapia?",
          resposta:
            "Se os seus sintomas estão a interferir na sua vida diária, relações ou trabalho, ou causam sofrimento significativo, é uma boa ideia procurar ajuda. Mesmo problemas que parecem menores podem beneficiar de intervenção precoce.",
        },
        {
          pergunta:
            "3. Como abordar um ente querido que pode precisar de terapia?",
          resposta:
            "Aborde a conversa com empatia e sem julgamento. Expresse a sua preocupação, ouça sem interromper, e ofereça-se para ajudar a encontrar recursos ou marcar uma consulta.",
        },
        {
          pergunta:
            "4. A terapia pode ajudar com questões relacionadas ao stress e ao burnout?",
          resposta:
            "Sim, a terapia pode fornecer estratégias para gerir o stress, estabelecer limites saudáveis, melhorar a resiliência e lidar com os sintomas de burnout.",
        },
        {
          pergunta: "5. Como funciona a terapia para crianças e adolescentes?",
          resposta:
            "A terapia para crianças e adolescentes é adaptada à idade e às necessidades deles. Pode envolver jogos, histórias, mais exemplos, e trabalho com a família para apoiar o jovem no seu ambiente.",
        },
      ],
    },
  ];

  const [selecionado, setSelecionado] = useState({
    secaoId: null,
    perguntaId: null,
  });

  const toggleResposta = (secaoId, perguntaId) => {
    if (
      selecionado.secaoId === secaoId &&
      selecionado.perguntaId === perguntaId
    ) {
      setSelecionado({ secaoId: null, perguntaId: null });
    } else {
      setSelecionado({ secaoId, perguntaId });
    }
  };

  return (
    <div id="container-background-FAQ-dark">
      <div id="container-conteudo-FAQ-dark">
        <p className="container-titulo-da-seccao">Perguntas Mais Frequentes</p>
        <p className="container-sub-titulo-da-seccao">
          Nesta secção encontrará informações sobre as perguntas mais frequentes
          acerca das consultas de psicologia.
        </p>
        <div className="container-FAQ-grade">
          {arrFAQ.map((secao) => (
            <div key={secao.id} className="item-FAQ-seccao-div">
              <p className="item-FAQ-seccao-p">{secao.nome}</p>
              {secao.questoes.map((questao, perguntaIndex) => (
                <div key={perguntaIndex} className="item-FAQ-div">
                  <button
                    className="item-FAQ-seccao-button"
                    onClick={() => toggleResposta(secao.id, perguntaIndex)}
                    aria-expanded={
                      selecionado.secaoId === secao.id &&
                      selecionado.perguntaId === perguntaIndex
                    }
                  >
                    {questao.pergunta}
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <div
                    className={
                      selecionado.secaoId === secao.id &&
                      selecionado.perguntaId === perguntaIndex
                        ? "conteudo-mostrado"
                        : "conteudo"
                    }
                    dangerouslySetInnerHTML={{ __html: questao.resposta }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="container-FAQ-mais-perguntas-div">
          <p className="container-FAQ-mais-perguntas-pergunta">
            A sua dúvida não está entre as mais perguntadas? Envie-me a sua
            dúvida para que possa ajudar:{" "}
            <a
              style={{ textDecoration: "none", color: "#9d957b" }}
              href="mailto:ruteimatos@gmail.com"
            >
              ruteimatos@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
