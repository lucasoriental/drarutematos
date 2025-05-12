import { useState } from "react";
import { Link } from "react-scroll";
import MenuHamburger from "../../assets/icon_menu_hamburger";
import XIconSvg from "../../assets/icon_X";
import logo from "../../assets/images/logo1.png";

export default function Header() {
  let headerHeight;

  if (window.innerWidth > 800) {
    headerHeight = 220;
  } else {
    headerHeight = 180;
  }

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const btnMenu = document.querySelector(".icon-hamburguer");
    const mob_menu = document.querySelector(".header-mobile-side-bar");

    btnMenu.classList.toggle("is-active");
    mob_menu.classList.toggle("is-active");
    setIsActive(!isActive);
  };

  const handleClickLink = () => {
    setIsActive(false);
  };

  return (
    <header>
      <div id="header-desktop">
        <Link
          activeClass="active"
          to="container-main"
          spy={true}
          smooth={true}
          offset={-headerHeight}
          duration={1000}
        >
          <img src={logo} alt="logo" />
        </Link>
        <canvas id="header-desktop-DivisionBar" />
        <nav>
          <Link
            activeClass="active"
            to="container-conteudo-meus-servicos-dark"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Meus Serviços
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-experiencias-profissionais-light"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Experiência Profissional
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-formacao-academica-dark"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Formação
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-minhas-competencias-light"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Competências
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-sobre-mim-dark"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Sobre mim
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-contactos-e-marcacoes-light"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Contactos
          </Link>
          <Link
            activeClass="active"
            to="container-conteudo-FAQ-dark"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            FAQ
          </Link>
        </nav>
      </div>

      <div id="header-mobile">
        <div id="header-mobile-bar">
          <button className="icon-hamburguer" onClick={handleClick}>
            <MenuHamburger
              width={35}
              height={20}
              strokeWidth={3}
              strokeColor="#9D957B"
            />
          </button>
          <Link
            activeClass="active"
            to="container-main"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            <p id="header-mobile-title">Dra. Rute Isabel Matos</p>
          </Link>
        </div>
        <div
          className={`header-mobile-side-bar ${isActive ? "is-active" : ""}`}
        >
          <button className="header-mobile-icon-X" onClick={handleClick}>
            <XIconSvg size={30} strokeWidth={3} color="#9D957B" />
          </button>

          <nav>
            <Link
              activeClass="active"
              to="container-conteudo-meus-servicos-dark"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Meus Serviços
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-experiencias-profissionais-light"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Experiência Profissional
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-formacao-academica-dark"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Formação Académica
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-minhas-competencias-light"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Minhas Competências
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-sobre-mim-dark"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Sobre mim
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-contactos-e-marcacoes-light"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Contactos e Marcações
            </Link>
            <Link
              activeClass="active"
              to="container-conteudo-FAQ-dark"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
