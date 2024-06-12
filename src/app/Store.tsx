import "../styles/sections/Store.css";

import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Camisetas } from "../assets/img";
import CustomLink from "../components/CustomLink";
import ClawsButton from "../components/ClawsButton";

const Store = () => {
  const { t: translate } = useTranslation();

  return (
    <Box component={"section"} className="store-section" id="store">
      <Box textAlign={"center"}>
        <Typography
          variant="h4"
          fontFamily={"var(--primary-color)"}
          fontWeight={300}
          fontSize={{ xs: "28px", md: "34px" }}
          gutterBottom
          color={"#fff"}
        >
          {translate("store.subtitle")}
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontFamily={"var(--primary-color)"}
          fontSize={{ xs: "42px", md: "60px" }}
          fontWeight={600}
          marginBottom={0}
          color={"#fff"}
        >
          {translate("store.title")}
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"}>
          <CustomLink
            target={"_blank"}
            href="https://bloodhuntsgaming.mercadoshops.com.br/"
            width={{ xs: "300px", xl: "400px" }}
          >
            <img src={Camisetas} alt="mantle" width={"100%"} />
          </CustomLink>
        </Box>
        <Typography
          fontWeight={800}
          fontFamily={"var(--primary-font)"}
          color={"#fff"}
        >
          {translate("store.textTShirt1")}
        </Typography>
        <Typography fontFamily={"var(--primary-font)"} color={"#fff"}>
          {translate("store.textTShirt2")}
        </Typography>
      </Box>
      <ClawsButton
        mt={5}
        height={"60px"}
        width={"185px"}
        className="claws-button"
        pulseAnimation={true}
        href="https://www.instagram.com/bloodhunts_gaming"
      >
        Acesse a nossa loja
      </ClawsButton>
    </Box>
  );
};

export default Store;
