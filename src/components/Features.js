import React from "react";
import { Typography, Row, Col } from "antd";
import "../css/Features.scss";
import "../css/GlitchEffect2.scss";

const Features = () => {
  return (
    <section className="features-section" id="gamefeature">
      <Row justify="center">
        <Col xs={24} lg={20} xl={18}>
          <div className="features-section__content-margin-right"></div>
          <div className="features-section__content">
            <h4 className="display-2">Campeonatos que estamos participando</h4>
            <h1 className="display-1 glitch-overlay" data-content="CAMPEONATOS">
              <span>Campeonatos</span>
            </h1>

            <div className="features-accordion">
              <div className="item-1">
                <div className="features-accordion-title">
                  <button className="option option-1 activeted"></button>
                  <h2>COPA POOL</h2>
                </div>
                <div className="features-accordion-content">
                  <p>
                    Acompanhe{" "}
                    <Typography.Link
                      style={{
                        fontSize: "larger", // Torna o texto maior. Ajuste o valor conforme necessário.
                        fontWeight: "bold", // Aplica o estilo negrito ao texto.
                        color: "white", // Define a cor do texto como branco.
                      }}
                      href="https://exemplo.com"
                    >
                      ao vivo
                    </Typography.Link>
                  </p>
                </div>
              </div>

              <div className="item-2">
                <div className="features-accordion-title">
                  <span className="option option-2"></span>
                  <h2>COPA ROG(Playoffs)</h2>
                </div>
                <div className="features-accordion-content">
                  <p>
                    Acompanhe{" "}
                    <Typography.Link
                      style={{
                        fontSize: "larger", // Torna o texto maior. Ajuste o valor conforme necessário.
                        fontWeight: "bold", // Aplica o estilo negrito ao texto.
                        color: "white", // Define a cor do texto como branco.
                      }}
                      href="https://exemplo.com"
                    >
                      ao vivo
                    </Typography.Link>
                  </p>
                </div>
              </div>

              <div className="item-3">
                <div className="features-accordion-title">
                  <span className="option option-3"></span>
                  <h2>EM BREVE</h2>
                </div>
                <div className="features-accordion-content">
                  <p>Em breve.</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Features;
