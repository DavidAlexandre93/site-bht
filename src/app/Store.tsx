import "../styles/sections/Store.css";

import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { tShirts } from "../assets/img";
import CustomLink from "../components/CustomLink";
import ClawsButton from "../components/ClawsButton";
import SectionTitle from "../components/SectionTitle";

const Store = () => {
  const { t: translate } = useTranslation();

  return (
    <Box component={"section"} className="store-section" id="store">
      <Box textAlign={"center"}>
        <SectionTitle
          className="title-important-announcements"
          width={{ xs: "100%", lg: "48rem" }}
          title={translate("store.title")}
          subtitle={translate("store.subtitle")}
          withDivider={false}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"}>
          <CustomLink
            target={"_blank"}
            href="https://bloodhuntsgaming.mercadoshops.com.br/"
            width={{ xs: "300px", xl: "400px" }}
          >
            <img src={tShirts} alt="mantle" width={"100%"} />
          </CustomLink>
        </Box>
        <Typography
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
        mt={5}
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
