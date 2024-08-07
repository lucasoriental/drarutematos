/* import tempImg from "../../assets/images/tempImage512.png"; */
import consultaOnline from "../../assets/images/consultaOnline.png";
import clinicaDoPaiao from "../../assets/images/clinicaDoPaiao.webp";
import casaFigFoz from "../../assets/images/CASAFigFoz.png";
import TelephoneSVG from "../../assets/svgs/telephoneSVG";
/* import InstagramSvg from "../../assets/svgs/InstagramSVG";
import LinkedInSVG from "../../assets/svgs/LinkedinSVG";
import FacebookSVG from "../../assets/svgs/FacebookSVG"; */

export default function ContactosEMarcacoes() {
  const arrRedesSociais = [
    {
      id: 0,
      imagem: <i className="fa-solid fa-envelope"></i>,
      nomeRedeSocial: "ruteimatos@gmail.com",
      link: "mailto:ruteimatos@gmail.com",
    },
    {
      id: 0,
      imagem: <i className="fa-solid fa-phone"></i>,
      nomeRedeSocial: "928 166 888",
      link: "https://web.whatsapp.com/send?phone=351928166888",
    },
    {
      id: 0,
      imagem: <i className="fa-brands fa-instagram"></i>,
      nomeRedeSocial: "@ruteimatos",
      link: "#",
    },
    {
      id: 1,
      imagem: <i className="fa-brands fa-linkedin-in"></i>,
      nomeRedeSocial: "Rute Isabel Matos",
      link: "https://www.linkedin.com/in/rutematos/",
    },
    {
      id: 2,
      imagem: <i className="fa-brands fa-facebook-f"></i>,
      nomeRedeSocial: "Rute Isabel Matos",
      link: "#",
    },
  ];

  return (
    <div id="container-background-contactos-e-marcacoes-light">
      <div id="container-conteudo-contactos-e-marcacoes-light">
        <p className="container-titulo-da-seccao">Contactos e Marcações</p>
        <div className="container-contactos-e-marcacoes-tudo-div">
          <div className="container-onde-estou-div">
            <p className="onde-estou-titulo">Onde Estou?</p>

            <div className="onde-estou-grade">
              <div className="onde-estou-consultas-online-div">
                <div className="consultas-online-titulo-div">
                  <p className="consultas-online-titulo">Consultas Online</p>
                </div>
                <div className="consultas-online-info-div">
                  <img
                    src={consultaOnline}
                    alt="Map"
                    className="onde-estou-consultas-imagem"
                  />
                  <p className="consultas-online-texto">
                    Todo o território Nacional
                  </p>
                </div>
              </div>
              <div className="onde-estou-consultas-presenciais-div">
                <div className="consultas-presenciais-titulo-div">
                  <p className="consultas-presenciais-titulo">
                    Consultas Presenciais
                  </p>
                </div>
                <div className="consultas-presenciais-info-div">
                  <img
                    src={clinicaDoPaiao}
                    alt="Map"
                    className="onde-estou-consultas-imagem"
                  />
                  <div className="consultas-presenciais-textos-div">
                    <a
                      className="consultas-presenciais-titulo-card"
                      href="https://clinicadopaiao.com"
                      target="_blank"
                    >
                      Clínica do Paião
                    </a>
                    <p className="consultas-presenciais-sub-titulo-1">
                      Rua Dr. Teixeira Dias, Nº 47, Paião
                    </p>
                    <div className="consultas-presenciais-telephone-e-numero-div">
                      <TelephoneSVG size="20" color="#FFF" strokeWidth="1.5" />
                      <p className="consultas-presenciais-numero">
                        233 940 116
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onde-estou-consultas-presenciais-div">
                <div className="consultas-presenciais-info-div">
                  <img
                    src={casaFigFoz}
                    alt="Map"
                    className="onde-estou-consultas-imagem"
                  />
                  <div className="consultas-presenciais-textos-div">
                    <a
                      className="consultas-presenciais-titulo-card"
                      href="https://www.facebook.com/CentroApoioSemAbrigoFFoz"
                      target="_blank"
                    >
                      CASA (Figueira da Foz)
                    </a>
                    <p className="consultas-presenciais-sub-titulo-1">
                      Rua Bombeiros Voluntários, Nº 37
                    </p>
                    <p className="consultas-presenciais-sub-titulo-2">
                      (Somente para utentes inscritos no CASA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="onde-estou-ultimo-card">
                <p className="ultimo-card-texto">Em breve em mais locais!</p>
              </div>
            </div>
          </div>
          <div className="meus-contactos-div">
            <p className="meus-contactos-titulo">Meus Contactos</p>
            <div className="meus-contactos-grade">
              {arrRedesSociais.map((item) => {
                return (
                  <a
                    href={item.link}
                    className="rede-social-link-div"
                    target="_blank"
                    key={item.id}
                  >
                    {item.imagem}
                    <p className="rede-social-texto">{item.nomeRedeSocial}</p>
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      id="rede-social-link-icone"
                    ></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
