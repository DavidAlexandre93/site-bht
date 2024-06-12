import "../styles/sections/Staff.css";

import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import TeamCarousel from "../components/TeamCarousel";
import ClawsButton from "../components/ClawsButton";

import { useTranslation } from "react-i18next";
import cards from "../data/staffCarouselCards";

const Staff = () => {
  const { t: translate } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const carouselResponsive =
    windowWidth <= 768
      ? 1
      : windowWidth < 1024
      ? 3
      : windowWidth < 1400
      ? 1
      : 3;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      component={"section"}
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ lg: "space-between" }}
      alignItems={"center"}
      pt={{ xs: "5rem", lg: "10rem" }}
      pb={{ xs: "8rem", lg: "12rem" }}
      pl={{ xs: 3, md: 10, xl: 20 }}
      pr={{ xs: 3, md: 10, xl: 35 }}
      columnGap={{ lg: 10, xl: 40 }}
      rowGap={2}
      className="staff-section"
      id="staff"
    >
      <Box className="staff-section-left">
        <Typography
          variant="h4"
          fontSize={{ xs: "28px", md: "34px" }}
          fontFamily={"var(--primary-font)"}
          fontWeight={300}
          gutterBottom
          color={"#fff"}
        >
          {translate("staff.subtitle")}
        </Typography>
        <Typography
          variant="h2"
          className="glitch-overlay"
          fontFamily={"var(--primary-font)"}
          fontSize={{ xs: "42px", md: "60px" }}
          fontWeight={600}
          marginBottom={0}
          color={"#fff"}
        >
          {translate("staff.title")}
        </Typography>
        <Divider
          style={{
            marginTop: "0.5rem",
            border: "2px solid var(--primary-color)",
            borderRadius: "5rem",
            transition: "var(--default-transition)",
          }}
        />
        <Box mt={5}>
          <Typography
            fontFamily={"var(--primary-font)"}
            variant="body1"
            color={"#fff"}
            textAlign="justify"
          >
            {translate("staff.description")}
          </Typography>
        </Box>
        <ClawsButton
          mt={4}
          width={"145px"}
          height={"50px"}
          fontSize={"18px"}
          href="https://www.instagram.com/bloodhunts_gaming"
        >
          {translate("staff.btnText")}
        </ClawsButton>
      </Box>
      <Box>
        <Box width={{ xs: "20rem", md: "30rem", lg: "24rem", xl: "25rem" }}>
          <TeamCarousel
            cards={cards}
            height={windowWidth <= 1024 ? "360px" : "540px"}
            margin="0 50"
            offset={carouselResponsive}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
