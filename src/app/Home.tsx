import "../styles/sections/Home.css";

import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { Carousel } from "react-3dm-carousel";
import SliderImage5 from "../assets/img/SliderImage5.jpg";
import { useTranslation } from "react-i18next";
import { LogoPatreon } from "../assets/img";
import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import CustomLink from "../components/CustomLink";

const Home = () => {
  const carouselRef = useRef(null);
  const { t: translate } = useTranslation();

  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
    routeTo?: string;
  }) => {
    // Direcionar para a rede social
  };

  const carouselData = getCarouselData();

  return (
    <Box
      component={"section"}
      flexDirection={"column"}
      className="home-section"
      id="home"
      paddingLeft={{ xs: 3, xl: "12rem" }}
      paddingRight={{ xs: 3 }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={{ xs: "center", xl: "initial" }}
      overflow={"hidden"}
    >
      <CustomLink
        target={"_blank"}
        href={"https://www.patreon.com/BloodHuntsGaming"}
        display={{ xs: "none", xl: "block" }}
        width={150}
        zIndex={1}
      >
        <img width={"100%"} src={LogoPatreon} />
      </CustomLink>
      <Box mt={{xs: 7, xl: 0}} mb={{ xs: 5, xl: 0 }}>
        <Typography
          width={{ xl: 300 }}
          color="#fff"
          fontFamily={"Cutmark-Italic"}
          fontSize={{ xs: "5rem", sm: "6rem", xl: "7rem" }}
          textAlign={{ xs: "center", xl: "initial" }}
          fontWeight={600}
          lineHeight={{ xs: "1rem", md: "5rem" }}
          fontStyle={{
            textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
          }}
        >
          BLOOD
          <Typography
            color="red"
            display={{ xs: "block", sm: "initial" }}
            textAlign={{ xs: "center", xl: "initial" }}
            fontFamily={"Cutmark-Italic"}
            fontSize={{ xs: "5rem", sm: "6rem", xl: "7rem" }}
            fontWeight={600}
            lineHeight={{ xs: "auto", md: "5rem", xl: "6.5rem" }}
            fontStyle={{
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
            }}
            className="home-highlighted-text"
          >
            HUNTS
          </Typography>{" "}
          GAMING
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          mt={{ xs: 5, md: 2 }}
          gap={{ xs: 1, md: 1.5, xl: 2 }}
        >
          {/* <Typography
            color="#fff"
            fontFamily={"Cutmark-Italic"}
            textAlign={{ xs: "center", xl: "initial" }}
            fontSize={{ xs: "2rem", sm: "3rem", xl: "3.5rem" }}
            fontWeight={500}
            lineHeight={"2rem"}
            fontStyle={{
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
            }}
          >
            {translate("home.teamMotto")}
          </Typography> */}
          <Typography
            color="#fff"
            fontFamily={"Cutmark-Italic"}
            textAlign={{ xs: "center", xl: "initial" }}
            fontSize={{ xs: "1.1rem", sm: "1.3rem", xl: "1.5rem" }}
            fontWeight={300}
            lineHeight={"1.5rem"}
            fontStyle={{
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.6)",
            }}
          >
            {translate("home.teamDescription")}
          </Typography>
        </Box>
      </Box>
      <SocialMedia />
      {/* <Box
        display={{ xs: "none", xl: "flex" }}
        position={"absolute"}
        left={"25%"}
        width={"100%"}
      >
        <Carousel
          cardsData={carouselData}
          rotation={true}
          rotationDuration={60}
          tilt={true}
          freeRoam={true}
          freeRoamUpperBounds={180}
          freeRoamLowerBounds={-180}
          onTitleClickHandler={onTitleClickHandler}
          startingAnimation={true}
          rotateOnScroll={true}
          drag={true}
          ref={carouselRef}
        />
      </Box> */}
    </Box>
  );
};

const SocialMedia = () => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    position={"absolute"}
    alignItems={"center"}
    justifyContent={{ xs: "center", xl: "initial" }}
    bottom={{ xs: "10%", xl: "15%" }}
  >
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={{ xs: "center", xl: "initial" }}
      mt={2}
      gap={2}
    >
      <CustomLink
        target={"_blank"}
        href={"https://www.patreon.com/BloodHuntsGaming"}
        className="social-media-navbar"
      >
        <FaWhatsapp color={"white"} size={22} />
      </CustomLink>
      <CustomLink
        target={"_blank"}
        href={"https://www.instagram.com/bloodhunts_gaming"}
        className="social-media-navbar"
      >
        <FaInstagram color={"white"} size={22} />
      </CustomLink>
      <CustomLink
        target={"_blank"}
        href={"https://discord.gg/sjGQAHptjX"}
        className="social-media-navbar"
      >
        <FaDiscord color={"white"} size={22} />
      </CustomLink>
      <CustomLink
        target={"_blank"}
        href={"https://www.tiktok.com/@bloodhunts_gaming"}
        className="social-media-navbar"
      >
        <FaTiktok color={"white"} size={22} />
      </CustomLink>
      <CustomLink
        target={"_blank"}
        href={"https://x.com/i/flow/login?redirect_after_login=%2Fbloodhuntsgg"}
        className="social-media-navbar"
      >
        <FaTwitter color={"white"} size={22} />
      </CustomLink>
    </Box>
    <Box
      display={{ xs: "initial", xl: "none" }}
      justifyContent={"center"}
      style={{ cursor: "pointer" }}
      mt={3.5}
      width={150}
    >
      <img width={"100%"} src={LogoPatreon} />
    </Box>
  </Box>
);

const getCarouselData = () => [
  {
    id: "1",
    title: "Instagram",
    image: SliderImage5,
    description: "",
    tags: ["Beach", "Relaxation", "Getaway"],
    routeTo: "some url",
  },
  {
    id: "2",
    title: "WhatsApp",
    image: SliderImage5,
    description: "",
    tags: ["Mountains", "Adventure", "Hiking"],
  },
  {
    id: "3",
    title: "Discord",
    image: SliderImage5,
    description: "",
    tags: ["City", "Exploration", "Vibrant"],
  },
  {
    id: "4",
    title: "TikTok",
    image: SliderImage5,
    description: "",
    tags: ["Culture", "Traditions", "Immersion"],
  },
  {
    id: "5",
    title: "Twitter",
    image: SliderImage5,
    description: "",
    tags: ["Wildlife", "Safari", "Nature"],
  },
  {
    id: "6",
    title: "Patreon",
    image: SliderImage5,
    description: "",
    tags: ["Food", "Culinary", "Flavors"],
  },
];

export default Home;
