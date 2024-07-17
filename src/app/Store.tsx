import "../styles/sections/Store.css";
import "react-image-gallery/styles/css/image-gallery.css";

import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  frenteCostasManequim,
  frenteManequim,
  costasManequim,
  frenteCabide,
  costasCabide,
} from "../assets/img";
import ClawsButton from "../components/ClawsButton";
import SectionTitle from "../components/SectionTitle";
import ImageGallery from "react-image-gallery";

const Store = () => {
  const { t: translate } = useTranslation();

  const images = [
    {
      original: frenteCostasManequim,
      thumbnail: frenteCostasManequim,
    },
    {
      original: frenteManequim,
      thumbnail: frenteManequim,
    },
    {
      original: costasManequim,
      thumbnail: costasManequim,
    },
    {
      original: frenteCabide,
      thumbnail: frenteCabide,
    },
    {
      original: costasCabide,
      thumbnail: costasCabide,
    },
  ];

  return (
    <Box
      component={"section"}
      className="store-section"
      id="store"
      width={"100%"}
      py={"4rem"}
      px={{ xs: 3, md: 10, xl: 20 }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box textAlign={"center"}>
        <SectionTitle
          className="title-important-announcements"
          width={{ xs: "100%", lg: "48rem" }}
          title={translate("store.title")}
          subtitle={translate("store.subtitle")}
          withDivider={false}
        />
      </Box>
      <Box
        width={{ xs: "100%", sm: "20%" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <ImageGallery autoPlay items={images} />
        <Typography
          mt={5}
          fontWeight={800}
          fontFamily={"var(--primary-font)"}
          color={"#fff"}
          textTransform={"uppercase"}
        >
          {translate("store.textTShirt1")}
        </Typography>
        <Typography mt={0.5} fontFamily={"var(--primary-font)"} color={"#fff"}>
          {translate("store.textTShirt2")}
        </Typography>
      </Box>
      <ClawsButton
        mt={3}
        px={5}
        height={"56px"}
        className="claws-button"
        pulseAnimation={true}
        href="https://bloodhuntsgaming.mercadoshops.com.br"
      >
        {translate("store.btnText")}
      </ClawsButton>
    </Box>
  );
};

export default Store;
