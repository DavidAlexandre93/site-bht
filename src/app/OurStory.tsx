import "../styles/sections/OurStory.css";
import "swiper/css";
import "swiper/css/effect-cards";

import { Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import { EffectCards } from "swiper/modules";
import stories from "../data/ourStoryCarouselCards";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { NextButton, PrevButton } from "../components/ArrowButtons";
import { useRef } from "react";

const OurStory = () => {
  const { t: translate } = useTranslation();

  const swiperRef = useRef<SwiperClass | null>(null);

  const onPrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "column", xl: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      rowGap={{ xs: 6, lg: 8 }}
      columnGap={20}
      py={{ xs: 10, xl: 12 }}
      px={{ xs: 3, md: 10, xl: 20 }}
      pr={{ xl: 25 }}
      className="our-story-section"
      id="our-story"
      overflow={"hidden"}
    >
      <SectionTitle
        title={translate("ourStory.title")}
        subtitle={translate("ourStory.subtitle")}
        description={translate("ourStory.description")}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {stories.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
            />
          ))}
        </Swiper>
        <Box mt={5} className="announcements-carousel-buttons">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
