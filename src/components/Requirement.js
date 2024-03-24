import React from "react";
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
        <div className="requirement-content cel-1">
          <h4 className="system-name">Requisitos minimos</h4>
          <p className="system-info">- Ser ativo no jogo</p>
          <p className="system-info">- Ser compromissado</p>
          <p className="system-info">
            - Ter certa habilidade necessaria de jogo
          </p>
          <p className="system-info">- Obrigatório uso do Discord</p>
          <p className="system-info">- Obrigatório uso da Tag</p>
          <p className="system-info">
            - Obrigatório realizar teste de nivelamento
          </p>
          <p className="system-info">- Idade minima 16+</p>
          <p className="system-info">- Disponibilidade de horarios</p>
        </div>
        <div className="requirement-content cel-2">
          <h4 className="system-name">Previlegios</h4>
          <p className="system-info">- Campeonatos com premiação</p>
          <p className="system-info">- Grupo no WhatsApp</p>
          <p className="system-info">- Grupo no servidor do Discord</p>
          <p className="system-info">- X-treinos</p>
          <p className="system-info">- Treinamentos táticos com o Coach</p>
          <p className="system-info">- Metas premiadas</p>
        </div>
        <div className="requirement-content cel-3">
          <h4 className="system-name">Eventos</h4>
          <p className="system-info">Eventos para players casuais</p>
        </div>
        <div className="requirement-content cel-4">
          <h4 className="system-name">Premiações</h4>
          <p className="system-info">Premiações exclusivas para o competitivo</p>
        </div>
        <div className="requirement-content cel-5">
          <h4 className="system-name">Maior requisito</h4>
          <p className="system-info">
           - Ser respeitoso e gentil com todos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirement;