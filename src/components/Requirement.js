import React from "react";
import { Row, Col } from "antd";
import "../css/Requirements.scss";
import "../css/GlitchEffect2.scss";

const Requirement = () => {
  return (
    <section className="system-requirement-section" id="systemrequirements">
      <div className="titles">
        <h4 className="display-2">Quer saber os requisitos para participar?</h4>
        <h1 className="display-1 glitch-overlay" data-content="REQUISITOS">
          <span>PLAYERS REQUISITOS</span>
        </h1>
      </div>

      <div className="system-requirement-container">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8} lg={6} className="requirement-content">
            <h4 className="system-name">Requisitos mínimos</h4>
            <p className="system-info">- Ser ativo no jogo</p>
            <p className="system-info">- Ser comprometido</p>
            <p className="system-info">
              - Ter certa habilidade necessária de jogo
            </p>
            <p className="system-info">- Obrigatório uso do Discord</p>
            <p className="system-info">- Obrigatório uso da Tag</p>
            <p className="system-info">
              - Obrigatório realizar teste de nivelamento
            </p>
            <p className="system-info">- Idade mínima 16+</p>
            <p className="system-info">- Disponibilidade de horários</p>
            <p className="system-info">- Ser respeitoso e gentil com todos</p>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="requirement-content">
            <h4 className="system-name">Privilégios</h4>
            <p className="system-info">- Campeonatos com premiação</p>
            <p className="system-info">- Grupo no WhatsApp</p>
            <p className="system-info">- Grupo no servidor do Discord</p>
            <p className="system-info">- X-treinos</p>
            <p className="system-info">- Treinamentos táticos com o Coach</p>
            <p className="system-info">- Metas premiadas</p>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="requirement-content">
            <h4 className="system-name">Eventos</h4>
            <p className="system-info">Eventos para players casuais</p>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="requirement-content">
            <h4 className="system-name">Premiações</h4>
            <p className="system-info">
              Premiações exclusivas para o competitivo
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Requirement;
