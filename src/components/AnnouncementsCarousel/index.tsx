import "../../styles/components/AnnouncementsCarousel.css";

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton, usePrevNextButtons } from "../ArrowButtons";
import { Box, Typography } from "@mui/material";

export type AnnouncementsCarouselProps = {
  slides: {
    img: string;
    description?: string;
  }[];
  options?: EmblaOptionsType;
};

const AnnouncementsCarousel = (props: AnnouncementsCarouselProps) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 8000 }),
  ]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
      <Box className="announcements-carousel">
        <Box className="announcements-carousel-viewport" ref={emblaRef}>
          <Box className="announcements-carousel-container">
            {slides.map((slide, index) => (
              <Box className="announcements-carousel-slide" key={index}>
                <Box
                  style={{
                    borderBottomLeftRadius: slide.description ? 0 : "auto",
                    borderBottomRightRadius: slide.description ? 0 : "auto",
                  }}
                  className="announcements-carousel-slide-number"
                >
                  <img width={'100%'} height={'100%'} src={slide.img} />
                </Box>
                {slide.description && (
                  <Box className={"carousel-text-container"}>
                    <Typography
                      variant="body1"
                      fontFamily={"var(--primary-font)"}
                      color={"#fff"}
                    >
                      {slide.description}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="announcements-carousel-controls">
          <Box className="announcements-carousel-buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </Box>

          <Box className="announcements-carousel-progress">
            <Box
              className="announcements-carousel-progress-bar"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </Box>
        </Box>
      </Box>
  );
};

export default AnnouncementsCarousel;
