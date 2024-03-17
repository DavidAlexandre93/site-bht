import React from "react";
import { Row, Col } from "antd";
import Button from "./Button";
import CardTestimonial from "./CardTestimonial";
import {
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
  Testimonial_4,
  Testimonial_5,
  Testimonial_6,
  Testimonial_7,
  Testimonial_8,
  Testimonial_9,
} from "../utils/Images";
import "../css/Quotes.scss";
import "../css/GlitchEffect2.scss";

const Quotes = () => {
  const button_info = {
    text: "Saiba mais",
    price_text: "",
    type: "normal-button",
    url: "https://www.instagram.com/bloodhunts_gaming",
  };

  return (
    <section className="quotes-section" id="quotes">
      <Row gutter={32}>
        <Col xs={24} lg={12} className="quotes-section__left">
          <h4 className="display-2">Quem está por trás da organização?</h4>
          <h1
            className="display-1 glitch-overlay"
            data-content="ADMINISTRATIVO"
          >
            <span>EQUIPE</span>
          </h1>
          <div className="text">
            <p>
              Esses são nossos representantes que fazem a organização BloodHunts
              Gaming conseguir estar presente em todo cenário do mundo dos
              games.
            </p>
          </div>
          <Button {...button_info} />
        </Col>
        <Col xs={24} lg={12} className="quotes-section__right">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_1,
                  img_name: "David Fernandes",
                  name: "David Fernandes",
                  code_name: "VANHELL",
                  content: "CEO",
                  date: "2024",
                  url: "https://www.instagram.com/davidalexandrepro",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_2,
                  img_name: "Ian Capell",
                  name: "Ian Capell",
                  code_name: "Yori",
                  content: "Manager Organização",
                  date: "2024",
                  url: "https://www.instagram.com/one_walking",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_3,
                  img_name: "Lucas",
                  name: "Lucas",
                  code_name: "LukeCoach",
                  content: "Líder geral do competitivo Call of Duty Mobile",
                  date: "2024",
                  url: "https://www.instagram.com/1lukecoach",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_4,
                  img_name: "Samuel",
                  name: "Samuel",
                  code_name: "cheet",
                  content: "Moderador e administrador de players",
                  date: "2024",
                  url: "https://www.instagram.com/cheet.zip",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_5,
                  img_name: "Emili Karmaico",
                  name: "Emili Karmaico",
                  code_name: "Tata",
                  content: "Líder geral de players casuais Call of Duty Mobile",
                  date: "2024",
                  url: "https://www.instagram.com/emilikarmaico",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_6,
                  img_name: "Thamilly Salustiano",
                  name: "Thamilly Salustiano",
                  code_name: "noze",
                  content:
                    "Vice líder geral de players casuais Call of Duty Mobile",
                  date: "2024",
                  url: "https://www.instagram.com/thamillysalustiano",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_7,
                  img_name: "Gustavo Ferreira",
                  name: "Gustavo Ferreira",
                  code_name: "Rocky",
                  content:
                    "Coordenador e analista de competitivo Call of Duty Mobile",
                  date: "2024",
                  url: "https://www.instagram.com",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_8,
                  img_name: "Gustavo Henri",
                  name: "Gustavo Henri",
                  code_name: "Ojisan",
                  content:
                    "Coordenador e analista de competitivo Call of Duty Mobile",
                  date: "2024",
                  url: "https://www.instagram.com/ojisan.7",
                }}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardTestimonial
                testimonial={{
                  img_src: Testimonial_9,
                  img_name: "Guilherme Santos",
                  name: "Guilherme Santos",
                  code_name: "VANHELSING",
                  content: "Líder geral de Warzone pc/console",
                  date: "2024",
                  url: "https://www.instagram.com/gui_san119",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Quotes;
