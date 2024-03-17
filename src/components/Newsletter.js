import React, { useState } from "react";
import { Newsletter } from "../utils/Images";
import Button from "./Button";
import "../css/Newsltetter.scss";
import "../css/GlitchEffect2.scss";

const NewsletterSection = () => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const mailchimpActionUrl =
    "https://bloodhuntsgaming.us18.list-manage.com/subscribe/post?u=d6a36bd136079ed9f553d652e&id=2bc7833269";

  return (
    <section className="newsletter-section">
      <div className="newsletter-section__left">
        <img src={Newsletter} alt="" />
      </div>
      <form
        action={mailchimpActionUrl}
        method="POST"
        noValidate
        className="newsletter-section__right"
      >
        <h4 className="display-2">RECEBA INFORMAÇÕES</h4>
        <h1 className="display-1 glitch-overlay" data-content="NEWSLETTER">
          <span>INSCREVA-SE NA NEWSLETTER</span>
        </h1>
        <p>
          Informe seu email para receber informações sobre nossa organização e
          noticias.
        </p>
        <div className="input-group">
          <div className="input-email">
            <input
              type="email"
              onChange={handleChange}
              value={inputValue}
              name="EMAIL"
              id="email"
              placeholder="Your email address"
              required
            />
            <label htmlFor="email">Seu email</label>
          </div>
          <Button text="Subscribe now" type="normal-button" />
        </div>
      </form>
    </section>
  );
};

export default NewsletterSection;
