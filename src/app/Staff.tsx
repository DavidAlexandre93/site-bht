import "../styles/sections/Staff.css";
import { track } from "@vercel/analytics";
import { Box } from "@mui/material";
import TeamCarousel from "../components/TeamCarousel";
import ClawsButton from "../components/ClawsButton";

import { useTranslation } from "react-i18next";
import cards from "../data/staffCarouselCards";
import useScreenWidthSize from "../hooks/useScreenWindowSize";
import SectionTitle from "../components/SectionTitle";

const Staff = () => {
  const { t: translate } = useTranslation();

  const windowWidth = useScreenWidthSize();

  const carouselResponsive =
    windowWidth <= 768
      ? 1
      : windowWidth < 1024
      ? 3
      : windowWidth < 1400
      ? 1
      : 3;

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
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={["center", "start"]}
      >
        <SectionTitle
          title={translate("staff.title")}
          subtitle={translate("staff.subtitle")}
          description={translate("staff.description")}
        />
        <ClawsButton
          mt={4}
          px={5}
          width={["100%", "auto"]}
          height={"50px"}
          href="https://www.instagram.com/bloodhunts_gaming"
          onClick={() => {
            track("Staff - Saiba mais");
          }}
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
