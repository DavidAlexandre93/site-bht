import React, { useState, useContext, useEffect } from "react";
import { MouseContext } from "../context/mouse-context";
import Scroll from "react-scroll";
import "../css/Header.scss";
import { Logo56x56, XboxIcon, Steam } from "../utils/Images";
import "../css/Navbar.scss";
import { useLang } from "../context/LangContext"; // Ajuste o caminho conforme necessário

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);
  const [toggleMenuScroll, setToggleMenuScroll] = useState(false);
  const [toggleSkewMenu, settoggleSkewMenu] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);
  const { translate, setLang } = useLang();

  const ScrollLink = Scroll.Link;
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    settoggleSkewMenu(!toggleSkewMenu);
  };

  const handleToggleLangContainer = () => {
    setToggleLang(!toggleLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setToggleMenuScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetLang = (lang) => {
    setLang(lang);
    setToggleLang(false);
  };

  return (
    <div className="nav-container m-auto">
      <nav className="navbar">
        <ScrollLink to="main" className="logo">
          <img src={Logo56x56} alt="Logo" />
        </ScrollLink>
        <div
          className={`menu-toggle ${toggleMenu ? "is-active" : ""} 
                ${toggleMenuScroll ? "scrolled" : ""} ${
            toggleSkewMenu ? "active" : ""
          }`}
          onClick={handleToggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${toggleMenu ? "active showMenu" : ""}`}>
          <li>
            <ScrollLink
              to="main"
              className="nav-links active-link"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              spy={true}
              smooth={true}
              duration={500}
            >
              {translate("Página inicial")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              className="nav-links"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              spy={true}
              smooth={true}
              duration={500}
            >
              {translate("Sobre nós")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="gamefeature"
              className="nav-links"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              spy={true}
              smooth={true}
              duration={500}
            >
              {translate("Campeonatos")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="systemrequirements"
              className="nav-links"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              spy={true}
              smooth={true}
              duration={500}
            >
              {translate("Requisitos")}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="quotes"
              className="nav-links"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              spy={true}
              smooth={true}
              duration={1000}
            >
              {translate("Administração")}
            </ScrollLink>
          </li>
        </ul>

        <div className="lang-container">
          <div className="current-lang" onClick={handleToggleLangContainer}>
            <span className="current-lang__name">PT-BR</span>
            <i className="uil uil-angle-down"></i>
          </div>
          <div className={`lang-option ${toggleLang ? "active" : ""}`}>
            <span className="lang-eng" onClick={() => handleSetLang("en")}>
              EN
            </span>
            <span className="lang-fra" onClick={() => handleSetLang("fr")}>
              FR
            </span>
            <span className="lang-spa" onClick={() => handleSetLang("es")}>
              ES
            </span>
          </div>
        </div>

        <div className="container-sponsor">
          <a
            href="https://www.callofduty.com/br/pt/mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={XboxIcon} alt="Xbox" />
          </a>
          <a
            href="https://www.callofduty.com/br/pt/warzone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Steam} alt="Steam" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
