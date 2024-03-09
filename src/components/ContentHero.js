// ContentHero.js
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Space, Row, Col, Dropdown, Menu } from "antd";
import Button from "./Button";
import { FaDiscord, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import "../css/ContentHero.scss";
import "../css/GlitchEffect2.scss";

const ContentHero = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  const handleMenuClick = (e) => {
    setDropdownVisible(false); // Fecha o menu após o clique
    switch (e.key) {
      case "1":
        openUrl("https://discord.gg/sjGQAHptjX");
        break;
      case "2":
        openUrl("https://www.instagram.com/bloodhunts_gaming/");
        break;
      case "3":
        openUrl("https://www.tiktok.com/@bloodhunts_gaming");
        break;
      case "4":
        openUrl("https://chat.whatsapp.com/DFVdvEaNH9zDeXky5MuXQJ");
        break;
      case "5":
        openUrl(
          "https://wa.me/+555591991703941?text=Olá, tudo bem? Eu gostaria de fazer parte do clã secundário e ajudar na guerra de clã."
        );
        break;
      case "6":
        openUrl(
          "https://wa.me/+55554284438380?text=Olá, tudo bem? Eu gostaria de realizar o teste para line competitiva."
        );
        break;
      default:
        console.log("No url for this item");
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<FaDiscord />}>
        Server Discord
      </Menu.Item>
      <Menu.Item key="2" icon={<FaInstagram />}>
        Instagram
      </Menu.Item>
      <Menu.Item key="3" icon={<FaTiktok />}>
        TikTok
      </Menu.Item>
      <Menu.Item key="4" icon={<FaWhatsapp />}>
        Comunidade WhatsApp
      </Menu.Item>
      <Menu.Item key="5" icon={<FaWhatsapp />}>
        Recrutamento player casual
      </Menu.Item>
      <Menu.Item key="6" icon={<FaWhatsapp />}>
        Recrutamento player competitivo
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="hero-content">
        <h1
          className="hero-content__title-1 glitch-overlay"
          data-content="SOMOS A ALCATEIA"
        >
          <span>BLOODHUNTS GAMING</span>
        </h1>
        <h4 className="hero-content__title-2">Organização de eSports</h4>
        <Row gutter={[16, 24]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Space>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                visible={dropdownVisible}
                onVisibleChange={(flag) => setDropdownVisible(flag)}
              >
                <div>
                  <Button
                    text="Fale conosco"
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                    icon={
                      <DownOutlined
                        style={{ color: "white", marginLeft: "8px" }}
                      />
                    }
                  />
                </div>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentHero;
