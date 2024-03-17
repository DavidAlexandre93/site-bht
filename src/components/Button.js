import React, { useContext } from "react";
import { Typography, Space, Row, Col } from "antd"; // Importe Row e Col do Ant Design
import { MouseContext } from "../context/mouse-context";
import "../css/Button.scss";

const Button = (props) => {
  const { text, type, icon: Icon, url, textStyle } = props;
  const { cursorChangeHandler } = useContext(MouseContext);

  // Função para tratar o clique no botão
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Se o tipo é 'price-button', usa-se um botão que parece um link
  if (type === "price-button") {
    return (
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <button
            className={`btn ${type}`}
            onClick={handleClick}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            style={textStyle}
          >
            <Space>
              <Typography.Text>{text}</Typography.Text>
              {Icon && (
                <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>
                  <Icon />
                </Typography>
              )}
            </Space>
          </button>
        </Col>
      </Row>
    );
  } else {
    // Para outros tipos de botões, mantém-se a lógica anterior
    return (
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <button
            className={`btn ${type}`}
            onClick={handleClick}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span>{text}</span>
          </button>
        </Col>
      </Row>
    );
  }
};

export default Button;
