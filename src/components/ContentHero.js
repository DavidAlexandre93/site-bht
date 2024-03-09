import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Space, Row, Col } from "antd";
import { FaDiscord, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import "../css/ContentHero.scss";
import "../css/GlitchEffect2.scss";

const ContentHero = () => {
  const button_discord_server = {
    text: "Server Discord",
    icon: FaDiscord,
    type: "price-button",
    url: "https://discord.gg/sjGQAHptjX",
  };
  const button_instagram = {
    text: "Instagram",
    icon: FaInstagram,
    type: "price-button",
    url: "https://www.instagram.com/bloodhunts_gaming/",
  };
  const button_tiktok = {
    text: "TikTok",
    icon: FaTiktok,
    type: "price-button",
    url: "https://www.tiktok.com/@bloodhunts_gaming",
  };
  const button_group_whatsapp = {
    text: "Comunidade WhatsApp",
    icon: FaWhatsapp,
    type: "price-button",
    url: "https://chat.whatsapp.com/DFVdvEaNH9zDeXky5MuXQJ",
  };
  const button_recruitment_casual = {
    text: "Recrutamento player casual",
    icon: FaWhatsapp,
    type: "price-button",
    url: "https://wa.me/+555591991703941?text=Ol%C3%A1,%20tudo%20bem?%20Eu%20gostaria%20de%20fazer%20parte%20do%20cl%C3%A3%20secund%C3%A1rio%20e%20ajudar%20na%20guerra%20de%20cl%C3%A3.",
  };

  const button_recruitment_competitive = {
    text: "Recrutamento player competitivo",
    icon: FaWhatsapp,
    type: "price-button",
    url: "https://wa.me/+55554284438380?text=Ol%C3%A1,%20tudo%20bem?%20Eu%20gostaria%20de%20realizar%20o%20teste%20para%20line%20competitiva.%20",
  };

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
        {/* <h1 className="hero-content__title-1">
                    SURVIVE AT ALL COSTS
                </h1> */}
        <h4 className="hero-content__title-2">
          Organização de eSports
        </h4>
        <Row gutter={[16, 24]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Space>
              <Button {...button_discord_server} />
              <Button {...button_instagram} />
              <Button {...button_tiktok} />
            </Space>
          </Col>
          </Row>
          <Row gutter={[16, 24]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Space>
              <Button {...button_group_whatsapp} />
              <Button {...button_recruitment_casual} />
              <Button {...button_recruitment_competitive} />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentHero;
