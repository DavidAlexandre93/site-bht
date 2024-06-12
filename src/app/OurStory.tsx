import "../styles/sections/OurStory.css";
import "swiper/css";
import "swiper/css/effect-cards";

import { Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import { EffectCards } from "swiper/modules";
import stories from "../data/ourStoryCarouselStories";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const OurStory = () => {
  const { t: translate } = useTranslation();

  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "column", xl: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      rowGap={{ xs: 6, lg: 8 }}
      columnGap={20}
      py={{ xs: 10, xl: 20 }}
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
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {stories.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          />
        ))}
      </Swiper>
    </Box>
  );
};

export default OurStory;
