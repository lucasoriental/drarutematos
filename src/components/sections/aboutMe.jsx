import fotoDePerfil from "../../assets/images/sobreMim.jpg";

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
            Sou <strong>Mestre</strong> em Intervenções <strong>Cognitivo-Comportamentais</strong> em <strong>Psicologia Clínica</strong> e da <strong>Saúde</strong>, formada na Faculdade de Psicologia e Ciências da Educação da <strong>Universidade de Coimbra</strong>. Após concluir o meu estágio curricular no Centro de Saúde de Condeixa-a-Nova e realizar diversas experiências de voluntariado, atualmente estou a desenvolver o meu Ano Profissional Júnior na Clínica do Paião. <br /> Desde cedo, a psicologia clínica tornou-se a minha verdadeira paixão. Ajudar os outros a superar desafios e promover o seu bem-estar é profundamente gratificante para mim. No meu trabalho, aplico o modelo cognitivo-comportamental de 2ª e 3ª geração, conhecido pela sua eficácia em tratar uma ampla gama de questões, incluindo ansiedade, depressão, stress e dificuldades comportamentais. <br /> Os meus colegas consideram-me uma pessoa organizada, focada e dedicada. No meu tempo livre, gosto de praticar hipismo, ver filmes, ler, socializar com amigos e jogar. <br /> Estou disponível para apoiar quem procura melhorar a sua saúde mental e enfrentar desafios da vida. Sinta-se à vontade para me contactar para marcar uma consulta ou explorar oportunidades de colaboração.
          </p>
        </div>
      </div>
    </div>
  );
}
