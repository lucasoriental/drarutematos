import fotoDePerfil from "../../assets/images/sobre_mim/sobre_mim.webp";

export default function SobreMim() {
  return (
    <div id="container-background-sobre-mim-dark">
      <div id="container-conteudo-sobre-mim-dark">
        <p className="container-titulo-da-seccao">Sobre Mim</p>
        <div className="container-sobre-mim-div">
          <img
            src={fotoDePerfil}
            alt="Foto de Perfil"
            className="container-sobre-mim-imagem"
          />
          <p className="container-sobre-mim-texto">
            Sou Mestre em <span>Intervenções Cognitivo-Comportamentais</span> em <span>Psicologia
            Clínica e da Saúde</span>, formada na Faculdade de Psicologia e Ciências da
            Educação da <span>Universidade de Coimbra</span>. No âmbito da minha prática
            profissional, tive a oportunidade de realizar o meu estágio
            curricular no Centro de Saúde de Condeixa-a-Nova e o meu Ano
            Profissional Júnior na <span>Clínica do Paião</span>, onde atualmente continuo a
            desenvolver a minha atividade. Além disso, colaboro no <span>Centro de
            Apoio ao Sem Abrigo</span> da Figueira da Foz, acompanhando pessoas de
            todas as idades, e no <span>Centro Social Paroquial do Paião</span>, onde
            concentro a minha intervenção no apoio à população idosa. <br />{" "}
            Desde cedo, a psicologia clínica tornou-se a minha{" "}
            <span>verdadeira paixão</span>. Ajudar os outros a superar desafios
            e promover o seu bem-estar é profundamente{" "}
            <span>gratificante para mim</span>. No meu trabalho, aplico o modelo
            cognitivo-comportamental de 2ª e 3ª geração, conhecido pela sua{" "}
            <span>eficácia</span> em tratar uma ampla gama de questões,
            incluindo{" "}
            <span>
              ansiedade, depressão, stress e dificuldades comportamentais
            </span>
            . <br /> Os meus colegas consideram-me uma pessoa{" "}
            <span>organizada, focada e dedicada</span>. No meu tempo livre,
            gosto de praticar hipismo, ver filmes, ler, socializar com amigos e
            jogar. <br /> Estou disponível para apoiar quem procura{" "}
            <span>
              melhorar a sua saúde mental e enfrentar desafios da vida
            </span>
            . Sinta-se à vontade para me contactar para{" "}
            <span>marcar uma consulta</span> ou explorar oportunidades de
            colaboração.
          </p>
        </div>
      </div>
    </div>
  );
}
