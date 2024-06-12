import "../../styles/components/TeamCarousel/Card.css";

import { useState } from "react";
import { useSpring, animated } from "react-spring";

type CardTeamCarouselProps = {
  img: string;
};

const CardTeamCarousel = (props: CardTeamCarouselProps) => {
  const { img } = props
  const [show, setShown] = useState(false);

  const cardStyle = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className={"card"}
      style={cardStyle}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img className="team-carousel-card-img" src={img} alt="" />
    </animated.div>
  );
};

export default CardTeamCarousel;
