import "./styles/sections/ErrorPage.css";

import { Box } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import { logoBHT } from "./assets/img";

import BackButton from "./components/BackButton";

const ErrorPage = () => {
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
        title="404"
        subtitle="A PÁGINA QUE VOCÊ TENTOU ACESSAR NÃO FOI ENCONTRADA"
      />
      <BackButton />
    </Box>
  );
};

export default ErrorPage;
