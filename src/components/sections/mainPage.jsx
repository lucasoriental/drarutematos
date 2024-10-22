import FacebookSvg from "../../assets/svgs/FacebookSVG";
import InstagramSvg from "../../assets/svgs/InstagramSVG";
import LinkedinSvg from "../../assets/svgs/LinkedinSVG";
import { Link } from "react-scroll";

import fotoDePerfil from "../../assets/images/main_page_imagem.webp";

export default function mainPage() {
  let headerHeight;

  if (window.innerWidth > 800) {
    headerHeight = 220;
  } else {
    headerHeight = 84;
  }

  return (
    <div id="container-main">
      <div>
        <img src={fotoDePerfil} alt="Foto de Perfil" />
        <p className="container-main-cedula">
          Cédula Profissional: <span>29977</span>
        </p>
      </div>
      <div className="container-main-texts">
        <div>
          <p>
            Olá, sou a <span>Dra. Rute Matos!</span> Psicóloga Clínica{" "}
            <span>Cognitivo-Comportamental (TCC).</span>
          </p>
          <p>
            Aqui, apresento os <span>serviços</span> que disponibilizo na área
            da psicologia, bem como o meu <span>percurso académico</span> e{" "}
            <span>profissional</span>.
          </p>
        </div>
        <Link
          to="container-conteudo-contactos-e-marcacoes-light"
          spy={true}
          smooth={true}
          offset={-headerHeight}
          duration={1000}
        >
          <button>Agende a sua consulta!</button>
        </Link>
      </div>
      <nav>
        <a
          href="https://facebook.com/rutematospsicologa"
          className="container-main-link-rede-social"
          target="_blank"
        >
          <FacebookSvg color="#c3ba9f" size="40" />
        </a>
        <a
          href="https://instagram.com/rutematos_psicologa"
          className="container-main-link-rede-social"
          target="_blank"
        >
          <InstagramSvg color="#c3ba9f" size="40" />
        </a>
        <a
          href="https://www.linkedin.com/in/rutematos/"
          className="container-main-link-rede-social"
          target="_blank"
        >
          <LinkedinSvg color="#c3ba9f" size="40" />
        </a>
      </nav>
    </div>
  );
}
