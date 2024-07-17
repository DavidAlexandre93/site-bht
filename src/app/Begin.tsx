import "../styles/sections/Begin.css";

import { Box, IconButton, Typography } from "@mui/material";
import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import CustomLink from "../components/CustomLink";
import { Carousel } from "react-3dm-carousel";

import { useTranslation } from "react-i18next";
import { logoPatreon } from "../assets/img";
import ClawsButton from "../components/ClawsButton";
import InstagramDialog from "../components/InstagramDialog";
import { useContext, useRef, useState } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { IoCloseOutline } from "react-icons/io5";
import beginCommunities from "../data/beginCommunities";

const Begin = () => {
  const { t: translate } = useTranslation();
  const { isLoading } = useContext(LoadingContext);
  const [openSocialMedia, setOpenSocialMedia] = useState(false);

  const carouselRef = useRef(null);

  const onTitleClickHandler = (card: {
    id: string;
    title: string;
    description: string;
    image: string;
  }) => {
    window.open(card.id);
  };

  const carouselData = beginCommunities;

  return (
    <>
      <Box
        style={{
          filter: openSocialMedia ? "brightness(0.3)" : "brightness(1)",
        }}
        component={"section"}
        flexDirection={"column"}
        className={`begin-section ${openSocialMedia && "brightness-animation"}`}
        id="begin"
        paddingLeft={{ xs: 3, xl: "12rem" }}
        paddingRight={{ xs: 3 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={{ xs: "center", xl: "start" }}
        overflow={"hidden"}
      >
        <CustomLink
          target={"_blank"}
          href={"https://www.patreon.com/BloodHuntsGaming"}
          display={{ xs: "none", xl: "block" }}
          width={153}
          zIndex={1}
        >
          <img width={"100%"} src={logoPatreon} />
        </CustomLink>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", xl: "start" }}
          mb={{ xs: 5, xl: 0 }}
        >
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
              className="begin-highlighted-text"
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
              {translate("begin.teamDescription")}
            </Typography>
          </Box>
          <ClawsButton
            mt={4}
            href="https://drive.google.com/drive/folders/1wmi9aQg0p-ktqB-9UBMvosxQhKEK6moE?usp=sharing"
          >
            {translate("begin.btnText")}
          </ClawsButton>
        </Box>
        <SocialMedia openSocialMedia={() => setOpenSocialMedia(true)} />
      </Box>

      {openSocialMedia && (
        <Box
          className="small-3d-carousel"
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
            startingAnimation={true}
            rotateOnScroll={true}
            drag={true}
            ref={carouselRef}
          />
          <IconButton
            onClick={() => setOpenSocialMedia(false)}
            sx={{
              position: "absolute",
              bottom: "1%",
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
      {!isLoading && <InstagramDialog />}
    </>
  );
};

type SocialMediaProps = {
  openSocialMedia: () => void;
};
const SocialMedia = (props: SocialMediaProps) => {
  const { openSocialMedia } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"absolute"}
      alignItems={"center"}
      justifyContent={{ xs: "center", xl: "initial" }}
      bottom={"15%"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ xs: "center", xl: "initial" }}
        mt={2}
        gap={2}
      >
        <CustomLink
          onClick={() => openSocialMedia()}
          className="social-media-container"
        >
          <FaWhatsapp className="social-media" color={"white"} />
        </CustomLink>
        <CustomLink
          target={"_blank"}
          href={"https://www.instagram.com/bloodhunts_gaming"}
          className="social-media-container"
        >
          <FaInstagram className="social-media" color={"white"} />
        </CustomLink>
        <CustomLink
          target={"_blank"}
          href={"https://discord.gg/sjGQAHptjX"}
          className="social-media-container"
        >
          <FaDiscord className="social-media" color={"white"} />
        </CustomLink>
        <CustomLink
          target={"_blank"}
          href={"https://www.tiktok.com/@bloodhunts_gaming"}
          className="social-media-container"
        >
          <FaTiktok className="social-media" color={"white"} />
        </CustomLink>
        <CustomLink
          target={"_blank"}
          href={
            "https://x.com/i/flow/login?redirect_after_login=%2Fbloodhuntsgg"
          }
          className="social-media-container"
        >
          <FaTwitter className="social-media" color={"white"} />
        </CustomLink>
        <CustomLink
          target={"_blank"}
          href={
            "https://www.youtube.com/@BloodHuntsGaming"
          }
          className="social-media-container"
        >
          <FaYoutube className="social-media" color={"white"} />
        </CustomLink>
      </Box>
      <CustomLink
        target="_blank"
        display={{ xs: "initial", xl: "none" }}
        justifyContent={"center"}
        style={{ cursor: "pointer" }}
        mt={3.5}
        width={150}
        href={"https://www.patreon.com/BloodHuntsGaming"}
      >
        <img width={"100%"} src={logoPatreon} />
      </CustomLink>
    </Box>
  );
};

export default Begin;
