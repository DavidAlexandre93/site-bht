import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { MouseContext } from "../context/mouse-context";
import Scroll from "react-scroll";
import { Logo56x56 } from "../utils/Images";
import "../css/Footer.scss";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const ScrollLink = Scroll.Link;

  return (
    <footer>
      <div className="content-1">
        <ScrollLink
          to="main"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <img src={Logo56x56} alt="logo" />
        </ScrollLink>

        <div className="site-map">
          <ul className="site-map__list">
            <li>
              <ScrollLink
                to="main"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                spy={true}
                smooth={true}
                duration={500}
              >
                Página inicial
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                spy={true}
                smooth={true}
                duration={500}
              >
                Sobre nós
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="gamefeature"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                spy={true}
                smooth={true}
                duration={500}
              >
                Campeonatos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="systemrequirements"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                spy={true}
                smooth={true}
                duration={500}
              >
                Requisitos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="quotes"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                spy={true}
                smooth={true}
                duration={500}
              >
                Administração
              </ScrollLink>
            </li>
          </ul>
        </div>

        <span className="social-container">
          <a
            href="https://www.instagram.com/bloodhunts_gaming"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram-link"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.tiktok.com/@bloodhunts_gaming"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link tiktok-link"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </span>
      </div>
      <hr />
      <div className="content-2">
        <span className="copiright">
          © 2024 BloodHunts Gaming, Inc. All Rights Reserved
        </span>
        <div className="site-info">
          <a
            href="https://www.google.com"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Privacy Policy
          </a>
          <a
            href="https://www.google.com"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            | Terms of Services |
          </a>
          <a
            href="https://www.google.com"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
