import React, { useContext } from "react";
import { Typography, Space } from "antd";
import { MouseContext } from "../context/mouse-context";
import "../css/Button.scss";

const Button = (props) => {
  const { text, type, icon: Icon, url, textStyle } = props;
  const { cursorChangeHandler } = useContext(MouseContext);
  if (type === "price-button") {
    return (
      <button
        className="btn price-button"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a
          href={url}
          className={`button ${type}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Space>
            <Typography.Text style={textStyle}>{text}</Typography.Text>
            <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>
              {Icon && <Icon />}{" "}
            </Typography>
          </Space>
        </a>
      </button>
    );
  } else {
    return (
      <button
        className="btn normal-button"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <span>{text}</span>
      </button>
    );
  }
};

export default Button;
