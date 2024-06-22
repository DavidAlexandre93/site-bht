import "../styles/sections/CommunityPage.css";

import { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ClawsButton from "../components/ClawsButton";
import SectionTitle from "../components/SectionTitle";
import { Carousel } from "react-3dm-carousel";
import { IoCloseOutline } from "react-icons/io5";

import {
  logoBHT,
  discord,
  instagram,
  tiktok,
  patreon,
  twitter,
  whatsCODMobile,
  youtube,
} from "../assets/img";

// import { useTranslation } from "react-i18next";
import BackButton from "../components/BackButton";

const GeneralCommunity = () => {
  const [openSocialMedia, setOpenSocialMedia] = useState(false);

  const carouselRef = useRef(null);
  // const { t: translate } = useTranslation();

  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
  }) => {
    window.open(card.id);
  };

  const carouselData = socialMediaCarouselData();

  return (
    <>
      <Box
        component={"section"}
        flexDirection={"column"}
        style={{
          filter: openSocialMedia ? "brightness(0.3)" : "brightness(1)",
        }}
        className={`community-page ${
          openSocialMedia && "brightness-animation"
        }`}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        px={5}
      >
        <Box mb={1} width={150} height={150}>
          <img width={"100%"} height={"100%"} src={logoBHT} alt="logo" />
        </Box>
        <SectionTitle
          textAlign={"center"}
          title="COMUNIDADE GERAL"
          subtitle="Faça parte da alcateia"
        />
        <ClawsButton
          width={{ xs: "100%", md: "430px" }}
          fontSize={{ xs: "18px", md: "20px" }}
          px={2}
          py={2}
          pulseAnimation={true}
          onClick={() =>
            window.open("https://chat.whatsapp.com/K9Yd9UuCdi9LraCpCIvAzu")
          }
        >
          Clique aqui para entrar na comunidade
        </ClawsButton>
        <ClawsButton
          width={{ xs: "100%", md: "430px" }}
          fontSize={{ xs: "18px", md: "20px" }}
          px={2}
          py={2}
          onClick={() => setOpenSocialMedia(true)}
        >
          Visualizar outras redes sociais
        </ClawsButton>
        <BackButton title="Visualizar o site" />
      </Box>
      {openSocialMedia && (
        <Box
          position={"absolute"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          top={"-5%"}
          width={"100%"}
          zIndex={2}
        >
          <Carousel
            cardsData={carouselData}
            rotation={true}
            rotationDuration={80}
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
          <IconButton
            onClick={() => setOpenSocialMedia(false)}
            sx={{
              position: "absolute",
              bottom: "2%",
              border: "1px solid #fff",
              transition: "0.2s",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#ffffff33",
              },
              "&:active": {
                backgroundColor: "#ffffff4c",
              },
            }}
          >
            <IoCloseOutline color={"#fff"} size={35} />
          </IconButton>
        </Box>
      )}
    </>
  );
};

const socialMediaCarouselData = () => [
  {
    id: "https://discord.com/invite/sjGQAHptjX",
    title: "Discord",
    image: discord,
    description: "",
  },
  {
    id: "https://api.whatsapp.com/send/?phone=%2B559191703941&text=Olá%2C+Tudo+bem%3F+Eu+gostaria+de+fazer+parte+da+alcateia+BloodHunts+Gaming.+&type=phone_number&app_absent=0",
    title: "Recrutamento Casual",
    image: whatsCODMobile,
    description: "",
  },
  {
    id: "https://api.whatsapp.com/send/?phone=%2B5521972772718&text=Olá%2C+Tudo+bem%3F+Eu+gostaria+de+realizar+o+teste+para+o+competitivo+e+quero+me+juntar+a+alcateia+BloodHunts+Gaming&type=phone_number&app_absent=0",
    title: "Recrutamento Competitivo",
    image: whatsCODMobile,
    description: "",
  },
  {
    id: "https://www.patreon.com/BloodHuntsGaming",
    title: "Patreon",
    image: patreon,
    description: "",
  },
  {
    id: "https://www.tiktok.com/@bloodhunts_gaming",
    title: "TikTok",
    image: tiktok,
    description: "",
  },
  {
    id: "https://x.com/i/flow/login?redirect_after_login=%2Fbloodhuntsgg",
    title: "Twitter",
    image: twitter,
    description: "",
  },
  {
    id: "https://www.youtube.com/@BloodHuntsGaming",
    title: "YouTube",
    image: youtube,
    description: "",
  },
  {
    id: "https://www.instagram.com/bloodhunts_gaming",
    title: "Instagram",
    image: instagram,
    description: "",
  },
];

export default GeneralCommunity;
