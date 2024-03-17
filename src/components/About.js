import React from "react";
import { Row, Col } from "antd";
import SliderAbout from "./SliderAbout";
import "../css/About.scss";
import "../css/GlitchEffect2.scss";

const About = () => {
  return (
    <section className="about-section" id="about">
      <Row justify="space-between" align="middle">
        {/* Configurações responsivas mantidas para a esquerda */}
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="about-section__left">
            <h4 className="display-2">Sobre nós</h4>
            <h1 className="display-1 glitch-overlay" data-content="ALCATEIA DE">
              <span>BLOODHUNTS</span>
            </h1>
            <h1 className="display-1 glitch-overlay" data-content="LOBOS">
              <span>GAMING</span>
            </h1>
            <hr className="line-separator" />
            <div className="text-container">
              <p className="about-text-info">
                Fundado em 2 de novembro de 2023, a BloodHunts Gaming é uma
                organização dedicada a unir jogadores de Call of Duty Mobile,
                Warzone PC/Console e Warzone Mobile. Nosso foco é criar uma
                comunidade inclusiva, valorizando tanto o jogo competitivo
                quanto o casual. Nascemos com o propósito de ser uma
                comunidade/organização para compartilhar estratégias,
                experiências e acima de tudo, a paixão por Call of Duty. Estamos
                sempre disponíveis para novos membros que queiram contribuir
                para nossa crescente família, oferecendo um ambiente acolhedor
                para todos. Com planos de expandir nossos horizontes para outros
                jogos no futuro, a BloodHunts Gaming se compromete a ser mais do
                que uma organização: somos uma comunidade, uma família, unida
                pelo amor aos games.
              </p>
            </div>
          </div>
        </Col>
        {/* Ajuste do offset para empurrar um pouco para a direita */}
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 8, offset: 1 }}
          lg={{ span: 8, offset: 1 }}
          xl={{ span: 8, offset: 2 }}
          push={6}
        >
          <div className="about-section__right">
            <SliderAbout />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
