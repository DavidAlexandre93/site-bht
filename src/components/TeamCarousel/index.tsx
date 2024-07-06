import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, CSSProperties } from "react";
import { config } from "react-spring";
import { Box } from "@mui/material";
import { NextButton, PrevButton } from "../ArrowButtons";

type TeamCarouselProps = CSSProperties & {
  cards: {
    key: number;
    content: JSX.Element;
    game?: string;
    url?: string;
  }[];
  offset: number;
  showArrows?: boolean;
};

const TeamCarousel = (props: TeamCarouselProps) => {
  const table = props.cards.map((element, index) => {
    return {
      ...element,
      onClick: () => {
        if (element.url) window.open(element.url);
        setGoToSlide(index);
      },
    };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [cards] = useState(table);

  const onPrevButtonClick = () => {
    setGoToSlide((prevState) =>
      prevState === 0 ? props.cards.length - 1 : prevState - 1
    );
  };

  const onNextButtonClick = () => {
    setGoToSlide((prevState) => prevState + 1);
  };

  useEffect(() => {
    setOffsetRadius(props.offset);
  }, [props.offset, props.showArrows]);

  return (
    <Box
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={config.gentle}
      />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box className="players-carousel-buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={cards.length === 1}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={cards.length === 1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TeamCarousel;
