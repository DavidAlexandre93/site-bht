import React from "react";
import "../css/CardTestimonial.scss";

const CardTestimonial = ({ testimonial }) => {
  const { img_src, img_name, name, code_name, content, date, url } = testimonial;

  // Função para lidar com o redirecionamento
  const handleRedirect = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card-testimonial" onClick={handleRedirect}>
      <div className="card-testimonial__head">
        <div className="testimonial-img">
          <img src={img_src} alt={img_name} />
        </div>
        <div className="testimonial-perfil">
          <span className="testimonial-perfil__name">{name}</span>
          <span className="testimonial-perfil__code_name">{code_name}</span>
        </div>
      </div>
      <div className="card-testimonial__body">
        <p>{content}</p>
      </div>
      <div className="card-testimonial__date">
        <span>{date}</span>
      </div>
    </div>
  );
};

export default CardTestimonial;
