import React, { useContext } from "react";
import { Typography, Space, Row, Col } from "antd";
import { MouseContext } from "../context/mouse-context";
import "../css/Button.scss";

const Button = (props) => {
  const { text, type, icon: Icon, url, textStyle } = props;
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Estilos inline condicionais para responsividade
  const responsiveStyle = {
    ...textStyle,
    fontSize: window.innerWidth < 768 ? '14px' : '16px', // Exemplo de ajuste condicional de tamanho de fonte
  };

  if (type === "price-button") {
    return (
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <button
            className={`btn ${type}`}
            onClick={handleClick}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            style={responsiveStyle}
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
    return (
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <button
            className={`btn ${type}`}
            onClick={handleClick}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            style={responsiveStyle}
          >
            <span>{text}</span>
          </button>
        </Col>
      </Row>
    );
  }
};

export default Button;
