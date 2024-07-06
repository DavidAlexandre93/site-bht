import "./styles/sections/ErrorPage.css";

import { Box } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import { logoBHT } from "./assets/img";
import BackButton from "./components/BackButton";

import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t: translate } = useTranslation();

  return (
    <Box
      component={"section"}
      flexDirection={"column"}
      className="error-page"
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
        title={translate("errorPage.title")}
        subtitle={translate("errorPage.subtitle")}
      />
      <BackButton />
    </Box>
  );
};

export default ErrorPage;
