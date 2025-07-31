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

import { useTranslation } from "react-i18next";
import BackButton from "../components/BackButton";
import { track } from "@vercel/analytics";

const ContactCasualRecruitment = () => {
  const [openSocialMedia, setOpenSocialMedia] = useState(false);

  const carouselRef = useRef(null);
  const { t: translate } = useTranslation();

  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
  }) => {
    window.open(card.id);
    track(`Carousel WhatsApp Recrutamento Casual - ${card.title}`);
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
          title={translate("contactCasualRecruitment.title")}
          subtitle={translate("contactCasualRecruitment.subtitle")}
        />
        <ClawsButton
          width={{ xs: "100%", md: "430px" }}
          fontSize={{ xs: "18px", md: "20px" }}
          px={2}
          py={2}
          pulseAnimation={true}
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B559191703941&text=Olá%2C+Tudo+bem%3F+Eu+gostaria+de+fazer+parte+da+alcateia+BloodHunts+Gaming.+&type=phone_number&app_absent=0"
            );
            track(
              "Tela Recrutamento Casual - Clique aqui para entrar em contato"
            );
          }}
        >
          {translate("contactCasualRecruitment.contactButton")}
        </ClawsButton>
        <ClawsButton
          width={{ xs: "100%", md: "430px" }}
          fontSize={{ xs: "18px", md: "20px" }}
          px={2}
          py={2}
          onClick={() => {
            setOpenSocialMedia(true);
            track("Tela Recrutamento Casual - Visualizar outras redes sociais");
          }}
        >
          {translate("contactCasualRecruitment.viewSocialNetworksButton")}
        </ClawsButton>
        <BackButton
          title={translate("contactCasualRecruitment.viewWebsiteButton")}
        />
      </Box>
      {openSocialMedia && (
        <Box
          className="big-3d-carousel"
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
            freeRoamUpperBounds={0}
            freeRoamLowerBounds={0}
            onTitleClickHandler={onTitleClickHandler}
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
    id: "https://chat.whatsapp.com/K9Yd9UuCdi9LraCpCIvAzu",
    title: "Comunidade Geral",
    image: whatsCODMobile,
    description: "",
  },
  {
    id: "https://api.whatsapp.com/send/?phone=%2B5511911660059&text=Olá%2C+Tudo+bem%3F+Eu+gostaria+de+realizar+o+teste+para+o+competitivo+e+quero+me+juntar+a+alcateia+BloodHunts+Gaming&type=phone_number&app_absent=0",
    title: "Contato Competitivo",
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

export default ContactCasualRecruitment;
